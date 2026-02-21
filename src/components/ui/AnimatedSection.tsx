"use client";

import { useRef } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  stagger?: boolean;
}

export default function AnimatedSection({
  children,
  className = "",
  id,
}: AnimatedSectionProps) {
  const ref = useRef(null);

  return (
    <section
      ref={ref}
      id={id}
      className={className}
    >
      {children}
    </section>
  );
}
