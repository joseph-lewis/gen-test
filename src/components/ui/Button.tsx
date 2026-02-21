"use client";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  type = "button",
  className = "",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wide rounded-full transition-colors duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-genesis-white text-genesis-black hover:bg-genesis-text",
    outline:
      "border border-white/20 text-genesis-white hover:bg-white/10",
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
    >
      {children}
    </button>
  );
}
