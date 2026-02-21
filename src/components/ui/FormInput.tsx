"use client";

interface FormInputProps {
  label: string;
  name: string;
  type?: "text" | "email" | "tel";
  required?: boolean;
  textarea?: boolean;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export default function FormInput({
  label,
  name,
  type = "text",
  required = false,
  textarea = false,
  value,
  onChange,
}: FormInputProps) {
  const baseStyles =
    "w-full bg-transparent border-b border-white/20 py-3 text-genesis-text placeholder-transparent focus:border-genesis-white focus:outline-none focus:shadow-[0_1px_0_0_rgba(255,255,255,0.5)] transition-all duration-300 peer";

  return (
    <div className="relative pt-5">
      {textarea ? (
        <textarea
          name={name}
          id={name}
          rows={3}
          required={required}
          value={value}
          onChange={onChange}
          placeholder={label}
          className={`${baseStyles} resize-none`}
        />
      ) : (
        <input
          type={type}
          name={name}
          id={name}
          required={required}
          value={value}
          onChange={onChange}
          placeholder={label}
          className={baseStyles}
        />
      )}
      <label
        htmlFor={name}
        className="absolute left-0 top-0 text-xs text-genesis-muted transition-all duration-300 peer-placeholder-shown:top-8 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-xs peer-focus:text-genesis-white"
      >
        {label}
        {required && <span className="text-genesis-white/50 ml-0.5">*</span>}
      </label>
    </div>
  );
}
