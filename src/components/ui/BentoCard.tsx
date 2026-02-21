"use client";

interface BentoCardProps {
  title: string;
  description: string;
  animationPath: string;
  icon: React.ReactNode;
  className?: string;
}

export default function BentoCard({
  title,
  description,
  icon,
  className = "",
}: BentoCardProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[.03] p-6 transition-transform duration-300 hover:scale-[1.02] hover:border-white/20 md:p-8 ${className}`}
    >
      <div className="relative z-10 flex h-full flex-col">
        <div className="mb-6 flex h-40 w-full items-center justify-center overflow-hidden rounded-xl bg-white/5 md:h-48">
          <div className="text-genesis-white/50">{/* Placeholder for animation */}</div>
        </div>
        <div className="mb-3 flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-genesis-white">
            {icon}
          </span>
          <h3 className="text-lg font-medium text-genesis-white">{title}</h3>
        </div>
        <p className="text-sm font-light leading-relaxed text-genesis-text/70">
          {description}
        </p>
      </div>
    </div>
  );
}
