"use client";

import { useState } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import FormInput from "@/components/ui/FormInput";
import Button from "@/components/ui/Button";

export default function LeadCapture() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    issue: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <AnimatedSection
        id="contact"
        className="relative px-6 py-24 md:py-32"
      >
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <h2
              className="mb-6 text-3xl font-light tracking-tight text-genesis-white md:text-5xl"
            >
              Ready to flip the switch?
            </h2>
            <p
              className="text-base font-light leading-relaxed text-genesis-muted md:text-lg"
            >
              Drop your details below or download the app to get started
              instantly.
            </p>
          </div>

          {submitted ? (
            <div
              className="rounded-2xl border border-genesis-white/20 bg-white/[0.04] p-12 text-center"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-genesis-white/10">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-genesis-white"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-medium text-genesis-white">
                Request Received
              </h3>
              <p className="text-sm text-genesis-muted">
                We&rsquo;ll be in touch within 2 hours during business hours.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-8"
            >
              <FormInput
                label="Full Name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
              />
              <FormInput
                label="Address"
                name="address"
                required
                value={formData.address}
                onChange={handleChange}
              />
              <FormInput
                label="Describe the issue (optional)"
                name="issue"
                textarea
                value={formData.issue}
                onChange={handleChange}
              />
              <div className="pt-4">
                <Button type="submit" variant="primary" className="!w-full">
                  Request Priority Service
                </Button>
              </div>
            </form>
          )}
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="border-t border-genesis-border px-6 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="flex items-center gap-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 28 28"
              fill="none"
              className="text-genesis-muted"
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
            </svg>
            <span className="text-sm text-genesis-muted">
              Genesis Electrical &middot; Townsville, QLD
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs text-genesis-muted transition-colors hover:text-genesis-white"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-xs text-genesis-muted transition-colors hover:text-genesis-white"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-xs text-genesis-muted transition-colors hover:text-genesis-white"
              aria-label="Download on the App Store"
            >
              App Store
            </a>
            <a
              href="#"
              className="text-xs text-genesis-muted transition-colors hover:text-genesis-white"
              aria-label="Get it on Google Play"
            >
              Google Play
            </a>
          </div>

          <p className="text-xs text-genesis-muted/60">
            &copy; {new Date().getFullYear()} Genesis Electrical. All rights
            reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
