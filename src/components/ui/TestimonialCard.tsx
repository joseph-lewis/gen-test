interface TestimonialCardProps {
  quote: string;
  name: string;
  location: string;
}

export default function TestimonialCard({
  quote,
  name,
  location,
}: TestimonialCardProps) {
  return (
    <div className="flex-shrink-0 w-[340px] md:w-[400px] rounded-2xl bg-genesis-white p-8 text-genesis-black">
      <div className="mb-4 text-2xl leading-none opacity-20">&ldquo;</div>
      <p className="mb-6 text-sm leading-relaxed font-light">
        {quote}
      </p>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium">{name}</p>
          <p className="text-xs text-genesis-black/60">{location}</p>
        </div>
        <span className="rounded-full bg-genesis-black/5 px-3 py-1 text-xs font-medium text-genesis-black/70">
          Verified
        </span>
      </div>
    </div>
  );
}
