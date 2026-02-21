"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

const services = [
  {
    name: "Residential Call-Out",
    price: "$120",
    note: "Includes first 30 mins",
    features: [
      "Licensed & Insured Technician",
      "Safety Inspection Included",
      "Real-time App Tracking",
      "Digital Invoice & Receipt",
    ],
  },
  {
    name: "Commercial Retainer",
    price: "Custom",
    note: "Tailored to your business",
    features: [
      "24/7 Priority Support",
      "Dedicated Account Manager",
      "Compliance Logging & Certs",
      "Monthly Reporting Dashboard",
    ],
    highlighted: true,
  },
  {
    name: "Smart Home Fit-out",
    price: "From $499",
    note: "Full consultation included",
    features: [
      "In-Home Consultation",
      "Wi-Fi Switch Installation",
      "Smart Integration Setup",
      "12-Month Support Plan",
    ],
  },
];

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="flex-shrink-0 text-genesis-white"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function Services() {
  return (
    <AnimatedSection
      id="services"
      className="relative px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-2xl md:mb-20">
          <p
            className="mb-3 text-sm font-medium uppercase tracking-widest text-genesis-muted"
          >
            Services &amp; Pricing
          </p>
          <h2
            className="mb-6 text-3xl font-light tracking-tight text-genesis-white md:text-5xl"
          >
            Transparent Pricing.{" "}
            <span className="text-genesis-muted">Zero Surprises.</span>
          </h2>
          <p
            className="text-base font-light leading-relaxed text-genesis-muted md:text-lg"
          >
            Whether it&rsquo;s a simple switch upgrade or a full commercial
            fit-out, know exactly what you&rsquo;re paying for.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          {services.map((service) => (
            <div
              key={service.name}
              className={`relative rounded-2xl border p-8 transition-colors md:p-10 ${
                service.highlighted
                  ? "border-genesis-white/20 bg-white/[0.04]"
                  : "border-genesis-border bg-white/[0.02] hover:border-white/10"
              }`}
            >
              {service.highlighted && (
                <span className="absolute -top-3 left-8 rounded-full bg-genesis-white px-4 py-1 text-xs font-medium text-genesis-black">
                  Most Popular
                </span>
              )}
              <h3 className="mb-2 text-lg font-medium text-genesis-white">
                {service.name}
              </h3>
              <div className="mb-1 flex items-baseline gap-1">
                <span className="text-3xl font-light tracking-tight text-genesis-white">
                  {service.price}
                </span>
              </div>
              <p className="mb-8 text-sm text-genesis-muted">{service.note}</p>

              <ul className="mb-8 space-y-3">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm font-light text-genesis-text"
                  >
                    <CheckIcon />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                href="#contact"
                variant={service.highlighted ? "primary" : "outline"}
                className="!w-full"
              >
                Book a Call-Out
              </Button>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
