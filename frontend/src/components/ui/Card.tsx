"use client";

import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "light" | "dark" | "highlight" | "glass";
  hoverEffect?: boolean;
  className?: string;
}

export function Card({
  children,
  variant = "light",
  hoverEffect = true,
  className = "",
  ...props
}: CardProps) {
  const variantClasses = {
    // Light card: pure white, 1px ardoise 100 border
    light:
      "bg-white border border-[#E2E9F3] text-[#1A2838]",

    // Dark card: deep navy #1A2838, border ardoise 600
    dark:
      "bg-[#1A2838] border border-[#3A5C8A]/60 text-white",

    // Highlight card: navy with orange accent border on top
    highlight:
      "bg-white border border-[#E2E9F3] border-t-4 border-t-[#FF9500] text-[#1A2838] shadow-sm",

    // Glass card for subtle overlays
    glass:
      "bg-white/80 backdrop-blur-md border border-[#E2E9F3]/80 text-[#1A2838]",
  };

  const hoverClasses = hoverEffect
    ? "transition-all duration-300 hover:shadow-[0_8px_24px_rgba(19,27,36,0.10)] hover:-translate-y-1 hover:border-[#C3D0E2]"
    : "";

  return (
    <div
      className={`rounded-[12px] p-6 sm:p-7 relative overflow-hidden ${variantClasses[variant]} ${hoverClasses} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

