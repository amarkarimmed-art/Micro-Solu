"use client";

import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "dark";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
}

export function Button({
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  children,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  // Size classes
  const sizeClasses = {
    sm: "px-3.5 py-1.5 text-xs font-semibold rounded-[6px] gap-1.5",
    md: "px-5 py-2.5 text-sm font-semibold rounded-[6px] gap-2",
    lg: "px-6 py-3.5 text-base font-semibold rounded-[8px] gap-2.5",
  };

  // Variant classes adhering strictly to the Nomira charter
  const variantClasses = {
    // Principal CTA: Orange with smooth hover lighting, drop-shadow, and transform
    primary:
      "bg-gradient-to-r from-[#FF9500] to-[#ED7410] text-white shadow-md shadow-[#FF9500]/25 hover:from-[#FFA23C] hover:to-[#FF9500] hover:shadow-lg hover:shadow-[#FF9500]/35 hover:-translate-y-0.5 active:translate-y-0 focus:ring-2 focus:ring-[#FF9500]/50",
    
    // Secondary: Ardoise navy background
    secondary:
      "bg-[#2C4A7C] text-white shadow-sm hover:bg-[#3A5C8A] hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 focus:ring-2 focus:ring-[#2C4A7C]/40",

    // Outline: 1px border ardoise, clean hover
    outline:
      "border border-[#C3D0E2] text-[#2C4A7C] bg-white/80 hover:bg-[#F3F6FA] hover:border-[#93A9C7] hover:-translate-y-0.5 active:translate-y-0 focus:ring-2 focus:ring-[#2C4A7C]/20",

    // Ghost: subtle transparent
    ghost:
      "text-[#4A6890] hover:text-[#2C4A7C] hover:bg-[#F3F6FA] active:bg-[#E2E9F3]",

    // Dark mode button: Deep navy with subtle border
    dark:
      "bg-[#1A2838] border border-[#3A5C8A]/60 text-white hover:bg-[#2C4A7C] hover:border-[#8FB0DC]/50 hover:-translate-y-0.5 shadow-sm",
  };

  return (
    <button
      className={`inline-flex items-center justify-center font-sans transition-all duration-300 cursor-pointer select-none disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {icon && iconPosition === "left" && (
        <span className="inline-flex shrink-0 transition-transform duration-300 group-hover:-translate-x-0.5">
          {icon}
        </span>
      )}
      <span>{children}</span>
      {icon && iconPosition === "right" && (
        <span className="inline-flex shrink-0 transition-transform duration-300 group-hover:translate-x-1">
          {icon}
        </span>
      )}
    </button>
  );
}

