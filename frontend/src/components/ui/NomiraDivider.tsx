"use client";

import React from "react";
import { NomiraLogo } from "@/components/ui/NomiraLogo";

interface NomiraDividerProps {
  align?: "center" | "start" | "end";
  theme?: "dark" | "light";
  className?: string;
  badge?: string;
  subtitle?: string;
  markHeight?: number;
}

export function NomiraDivider({
  align = "center",
  theme = "light",
  className = "",
  badge,
  subtitle,
  markHeight = 26,
}: NomiraDividerProps) {
  const isDark = theme === "dark";

  const alignmentClass =
    align === "center"
      ? "items-center text-center mx-auto"
      : align === "end"
      ? "items-end text-right ml-auto"
      : "items-start text-left mr-auto";

  return (
    <div className={`flex flex-col ${alignmentClass} ${className} select-none my-6`}>
      {/* Optional Top Badge */}
      {badge && (
        <span
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3.5 transition-all ${
            isDark
              ? "bg-[#2C4A7C]/30 text-[#FFC05A] border border-[#3A5C8A]/50"
              : "bg-[#F3F6FA] text-[#2C4A7C] border border-[#C3D0E2]"
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF9500] animate-pulse" />
          {badge}
        </span>
      )}

      {/* Parallel Strata Graphic with the Official Animated Nomira Brand Logo */}
      <div className="relative flex items-center gap-4">
        {/* Left flowing line */}
        <div
          className={`h-[1px] w-12 sm:w-24 transition-all duration-500 ${
            isDark
              ? "bg-gradient-to-r from-transparent to-[#8FB0DC]/60"
              : "bg-gradient-to-r from-transparent to-[#2C4A7C]/40"
          }`}
        />

        {/* Real Animated Nomira Mark with Fluid Pixel Flow */}
        <div className="flex items-center justify-center py-1 transition-transform duration-300 hover:scale-110">
          <NomiraLogo
            variant="mark"
            theme={isDark ? "dark" : "light"}
            height={markHeight}
            speed="normal"
          />
        </div>

        {/* Right flowing line */}
        <div
          className={`h-[1px] w-12 sm:w-24 transition-all duration-500 ${
            isDark
              ? "bg-gradient-to-l from-transparent to-[#8FB0DC]/60"
              : "bg-gradient-to-l from-transparent to-[#2C4A7C]/40"
          }`}
        />
      </div>

      {/* Optional Subtitle */}
      {subtitle && (
        <p
          className={`text-sm mt-2.5 max-w-lg ${
            isDark ? "text-[#93A9C7]" : "text-[#4A6890]"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

