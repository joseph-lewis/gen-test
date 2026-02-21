"use client";

import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-genesis-black/80 backdrop-blur-xl border-b border-genesis-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
        <a href="#" className="group flex items-center gap-2">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            className="text-genesis-white"
          >
            <path
              d="M14 2L26 8V20L14 26L2 20V8L14 2Z"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
            <path
              d="M14 10L20 13V19L14 22L8 19V13L14 10Z"
              fill="currentColor"
              opacity="0.3"
            />
            <path d="M14 2V10M26 8L20 13M2 8L8 13M14 26V22M26 20L20 19M2 20L8 19" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
          </svg>
          <span className="text-lg font-light tracking-tight text-genesis-white">
            Genesis
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#app"
            className="text-sm font-light text-genesis-muted transition-colors hover:text-genesis-white"
          >
            The App
          </a>
          <a
            href="#services"
            className="text-sm font-light text-genesis-muted transition-colors hover:text-genesis-white"
          >
            Services
          </a>
          <a
            href="#testimonials"
            className="text-sm font-light text-genesis-muted transition-colors hover:text-genesis-white"
          >
            Reviews
          </a>
          <Button href="#contact" variant="primary" className="!py-2.5 !px-6 !text-xs">
            Get a Fast Quote
          </Button>
        </div>

        <div className="md:hidden">
          <Button href="#contact" variant="primary" className="!py-2 !px-5 !text-xs">
            Quote
          </Button>
        </div>
      </div>
    </nav>
  );
}
