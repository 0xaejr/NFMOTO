"use client";

import { useEffect, useRef, useState } from "react";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
}

export default function AnimateOnScroll({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Wait until mounted to avoid SSR mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -32px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, mounted]);

  const getTransform = () => {
    if (!mounted || visible) return "none";
    switch (direction) {
      case "left": return "translateX(-28px)";
      case "right": return "translateX(28px)";
      case "none": return "none";
      default: return "translateY(28px)";
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: !mounted || visible ? 1 : 0,
        transform: getTransform(),
        transition: mounted
          ? `opacity 0.75s cubic-bezier(0.25,0.46,0.45,0.94), transform 0.75s cubic-bezier(0.25,0.46,0.45,0.94)`
          : "none",
      }}
    >
      {children}
    </div>
  );
}
