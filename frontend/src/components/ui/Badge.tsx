"use client";

import React from "react";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "orange" | "neutral" | "dark" | "outline";
  size?: "sm" | "md";
  className?: string;
  dot?: boolean;
}

export function Badge({
  children,
  variant = "primary",
  size = "md",
  className = "",
  dot = false,
}: BadgeProps) {
  const sizeClasses = {
    sm: "px-2 py-0.5 text-[11px] gap-1 rounded-full",
    md: "px-3 py-1 text-xs gap-1.5 rounded-full",
  };

  const variantClasses = {
    primary: "bg-[#E2E9F3] text-[#2C4A7C] font-semibold border border-[#C3D0E2]/70",
    orange: "bg-[#FF9500]/15 text-[#ED7410] font-semibold border border-[#FF9500]/30",
    neutral: "bg-white text-[#4A6890] font-medium border border-[#E2E9F3] shadow-sm",
    dark: "bg-[#1A2838] text-[#8FB0DC] font-medium border border-[#3A5C8A]/60",
    outline: "bg-transparent text-[#2C4A7C] border border-[#2C4A7C]/40 font-semibold",
  };

  const dotColorClasses = {
    primary: "bg-[#2C4A7C]",
    orange: "bg-[#FF9500] animate-pulse",
    neutral: "bg-[#93A9C7]",
    dark: "bg-[#FF9500] animate-pulse",
    outline: "bg-[#2C4A7C]",
  };

  return (
    <span
      className={`inline-flex items-center font-sans tracking-wide transition-all ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {dot && (
        <span
          className={`w-1.5 h-1.5 rounded-full shrink-0 ${dotColorClasses[variant]}`}
        />
      )}
      <span>{children}</span>
    </span>
  );
}

