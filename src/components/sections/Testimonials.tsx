"use client";

import { useRef } from "react";
import TestimonialCard from "@/components/ui/TestimonialCard";

const testimonials = [
  {
    quote:
      "The app is a game-changer. I saw exactly when the electrician was 5 minutes away. Spotless work.",
    name: "Sarah M.",
    location: "North Ward",
  },
  {
    quote:
      "Genesis rewired our entire office. Clean, professional, and the digital invoicing saved our accounting team hours.",
    name: "David T.",
    location: "CBD",
  },
  {
    quote:
      "Fastest quote I've ever received. Booked on Tuesday, fixed on Wednesday.",
    name: "James L.",
    location: "Annandale",
  },
  {
    quote:
      "Had an emergency at 10pm — their team was here within 30 minutes. Can't recommend enough.",
    name: "Michelle R.",
    location: "Aitkenvale",
  },
  {
    quote:
      "The smart home fit-out exceeded every expectation. Everything controlled from one app. Brilliant.",
    name: "Tom & Karen W.",
    location: "Belgian Gardens",
  },
];

export default function Testimonials() {
  const ref = useRef(null);

  return (
    <section
      id="testimonials"
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div
        className="px-6"
      >
        <div className="mx-auto mb-16 max-w-7xl md:mb-20">
          <p
            className="mb-3 text-sm font-medium uppercase tracking-widest text-genesis-muted"
          >
            Testimonials
          </p>
          <h2
            className="text-3xl font-light tracking-tight text-genesis-white md:text-5xl"
          >
            Trusted by Townsville.
          </h2>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative">
        {/* Gradient masks */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-genesis-black to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-genesis-black to-transparent" />

        <div className="animate-scroll-left flex gap-6 w-max">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <TestimonialCard
              key={`${testimonial.name}-${index}`}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
