"use client";

import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Radial gradient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.02] blur-[120px] animate-pulse" />
        <div className="absolute right-1/4 top-1/3 h-[400px] w-[400px] rounded-full bg-white/[0.015] blur-[100px]" />
      </div>

      <div
        className="relative z-10 mx-auto max-w-4xl text-center"
      >
        <h1
          className="mb-6 text-5xl font-light leading-[1.1] tracking-tight text-genesis-white md:text-7xl lg:text-8xl"
        >
          Powering Townsville.
          <br />
          <span className="text-genesis-muted">Precisely.</span>
        </h1>

        <p
          className="mx-auto mb-12 max-w-2xl text-base font-light leading-relaxed text-genesis-muted md:text-lg"
        >
          Premium electrical solutions for residential and commercial spaces.
          Book in seconds, track your sparky in real-time, and manage everything
          from the Genesis App.
        </p>

        <div
          className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Button href="#contact" variant="primary">
            Get a Fast Quote
          </Button>
          <Button href="#app" variant="outline">
            Explore the App
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div
          className="flex h-10 w-6 items-start justify-center rounded-full border border-white/20 p-1.5"
        >
          <div className="h-2 w-1 rounded-full bg-genesis-white/60" />
        </div>
      </div>
    </section>
  );
}
