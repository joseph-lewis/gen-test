"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import BentoCard from "@/components/ui/BentoCard";
import Button from "@/components/ui/Button";

function MapPinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function TagIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
      <path d="M7 7h.01" />
    </svg>
  );
}

function ReceiptIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
      <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
      <path d="M12 17.5v-11" />
    </svg>
  );
}

const bentoItems = [
  {
    title: "Track Your Sparky",
    description:
      "See exactly when our technicians will arrive in real-time. No more waiting in the dark.",
    animationPath: "/animations/tracking.json",
    icon: <MapPinIcon />,
  },
  {
    title: "Upfront Pricing",
    description:
      "Snap a photo of your issue, get an estimated quote instantly through the app.",
    animationPath: "/animations/quotes.json",
    icon: <TagIcon />,
  },
  {
    title: "Digital Invoicing",
    description:
      "Access your entire service history, warranties, and compliance certificates in one tap.",
    animationPath: "/animations/invoicing.json",
    icon: <ReceiptIcon />,
  },
];

export default function AppShowcase() {
  return (
    <AnimatedSection
      id="app"
      className="relative px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-2xl md:mb-20">
          <p
            className="mb-3 text-sm font-medium uppercase tracking-widest text-genesis-muted"
          >
            The Genesis App
          </p>
          <h2
            className="mb-6 text-3xl font-light tracking-tight text-genesis-white md:text-5xl"
          >
            Electrical Service,{" "}
            <span className="text-genesis-muted">Re-engineered.</span>
          </h2>
          <p
            className="text-base font-light leading-relaxed text-genesis-muted md:text-lg"
          >
            Meet the Genesis Connect App. We&rsquo;ve stripped away the friction
            of hiring an electrician.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          {bentoItems.map((item) => (
            <BentoCard key={item.title} {...item} />
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
          <Button href="#contact" variant="primary">
            Download Genesis Connect
          </Button>
          <div className="flex gap-4">
            <a
              href="#"
              className="flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2.5 text-xs text-genesis-muted transition-colors hover:border-white/20 hover:text-genesis-white"
              aria-label="Download on the App Store"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11Z" />
              </svg>
              App Store
            </a>
            <a
              href="#"
              className="flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2.5 text-xs text-genesis-muted transition-colors hover:border-white/20 hover:text-genesis-white"
              aria-label="Get it on Google Play"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z" />
              </svg>
              Google Play
            </a>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
