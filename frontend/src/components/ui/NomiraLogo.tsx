"use client";

import React, { useId } from "react";

// The 54 pixel matrix rectangles extracted from the official brand vector definition
const PIXEL_MATRIX = [
  // Row 0
  { x: 24.7, y: 3.3, w: 1.7, h: 1.7, rx: 0.5 },
  { x: 32.7, y: 2.5, w: 2.7, h: 2.7, rx: 0.8 },
  { x: 40.2, y: 1.6, w: 3.6, h: 3.6, rx: 1.0 },
  { x: 47.1, y: 1.1, w: 4.7, h: 4.7, rx: 1.3 },
  { x: 55.6, y: 0.7, w: 5.6, h: 5.6, rx: 1.4 },
  { x: 63.0, y: 1.4, w: 6.2, h: 6.2, rx: 1.4 },
  { x: 70.1, y: 0.8, w: 7.5, h: 7.5, rx: 1.4 },
  { x: 78.6, y: -0.1, w: 7.6, h: 7.6, rx: 1.4 },
  { x: 85.7, y: -0.1, w: 7.7, h: 7.7, rx: 1.4 },
  { x: 93.3, y: -0.2, w: 8.6, h: 8.6, rx: 1.4 },
  // Row 1
  { x: 20.9, y: 11.1, w: 1.8, h: 1.8, rx: 0.5 },
  { x: 28.1, y: 10.3, w: 2.7, h: 2.7, rx: 0.8 },
  { x: 35.9, y: 9.8, w: 4.0, h: 4.0, rx: 1.1 },
  { x: 43.5, y: 9.3, w: 4.9, h: 4.9, rx: 1.4 },
  { x: 51.3, y: 8.7, w: 5.9, h: 5.9, rx: 1.4 },
  { x: 58.7, y: 9.1, w: 6.6, h: 6.6, rx: 1.4 },
  { x: 65.9, y: 8.8, w: 7.6, h: 7.6, rx: 1.4 },
  { x: 74.1, y: 8.5, w: 7.7, h: 7.7, rx: 1.4 },
  { x: 82.1, y: 7.6, w: 7.7, h: 7.7, rx: 1.4 },
  { x: 90.1, y: 7.9, w: 8.4, h: 8.4, rx: 1.4 },
  // Row 2
  { x: 16.8, y: 19.3, w: 1.9, h: 1.9, rx: 0.5 },
  { x: 24.6, y: 18.5, w: 3.0, h: 3.0, rx: 0.8 },
  { x: 32.5, y: 17.9, w: 4.1, h: 4.1, rx: 1.1 },
  { x: 39.0, y: 17.8, w: 4.9, h: 4.9, rx: 1.4 },
  { x: 47.7, y: 17.5, w: 5.8, h: 5.8, rx: 1.4 },
  { x: 54.7, y: 17.1, w: 6.3, h: 6.3, rx: 1.4 },
  { x: 62.6, y: 16.2, w: 6.8, h: 6.8, rx: 1.4 },
  { x: 69.6, y: 16.5, w: 7.7, h: 7.7, rx: 1.4 },
  { x: 77.8, y: 16.0, w: 7.7, h: 7.7, rx: 1.4 },
  { x: 85.2, y: 15.6, w: 8.7, h: 8.7, rx: 1.4 },
  // Row 3
  { x: 13.6, y: 27.5, w: 1.8, h: 1.8, rx: 0.5 },
  { x: 20.2, y: 26.4, w: 3.1, h: 3.1, rx: 0.9 },
  { x: 28.6, y: 26.7, w: 3.8, h: 3.8, rx: 1.1 },
  { x: 35.4, y: 25.4, w: 4.5, h: 4.5, rx: 1.3 },
  { x: 43.3, y: 25.4, w: 5.4, h: 5.4, rx: 1.4 },
  { x: 50.3, y: 24.8, w: 6.3, h: 6.3, rx: 1.4 },
  { x: 58.5, y: 24.9, w: 7.2, h: 7.2, rx: 1.4 },
  { x: 65.8, y: 23.9, w: 8.4, h: 8.4, rx: 1.4 },
  { x: 73.2, y: 24.3, w: 8.4, h: 8.4, rx: 1.4 },
  { x: 82.2, y: 24.1, w: 8.6, h: 8.6, rx: 1.4 },
  // Row 4
  { x: 9.0, y: 34.6, w: 1.8, h: 1.8, rx: 0.5 },
  { x: 16.0, y: 34.0, w: 3.0, h: 3.0, rx: 0.8 },
  { x: 23.7, y: 34.0, w: 3.7, h: 3.7, rx: 1.0 },
  { x: 31.2, y: 33.4, w: 4.4, h: 4.4, rx: 1.2 },
  { x: 39.2, y: 32.8, w: 5.3, h: 5.3, rx: 1.4 },
  { x: 46.7, y: 32.1, w: 6.9, h: 6.9, rx: 1.4 },
  { x: 54.3, y: 32.3, w: 7.1, h: 7.1, rx: 1.4 },
  { x: 62.6, y: 32.7, w: 7.7, h: 7.7, rx: 1.4 },
  { x: 69.9, y: 31.4, w: 8.2, h: 8.2, rx: 1.4 },
  { x: 78.0, y: 31.9, w: 7.7, h: 7.7, rx: 1.4 },
  // Row 5
  { x: 4.6, y: 42.5, w: 1.9, h: 1.9, rx: 0.5 },
  { x: 12.5, y: 42.0, w: 3.1, h: 3.1, rx: 0.9 },
  { x: 19.5, y: 42.1, w: 3.9, h: 3.9, rx: 1.1 },
  { x: 27.9, y: 41.7, w: 5.2, h: 5.2, rx: 1.4 },
  { x: 35.1, y: 40.9, w: 5.5, h: 5.5, rx: 1.4 },
  { x: 42.6, y: 40.9, w: 6.8, h: 6.8, rx: 1.4 },
  { x: 50.1, y: 40.8, w: 7.2, h: 7.2, rx: 1.4 },
  { x: 58.0, y: 39.9, w: 8.8, h: 8.8, rx: 1.4 },
  { x: 66.0, y: 39.4, w: 8.6, h: 8.6, rx: 1.4 },
  { x: 73.7, y: 39.3, w: 8.2, h: 8.2, rx: 1.4 },
];

export interface NomiraLogoProps {
  variant?: "horizontal" | "horizontal-clean" | "mark" | "badge";
  theme?: "dark" | "light";
  className?: string;
  animateOnHover?: boolean;
  loop?: boolean;
  speed?: "normal" | "slow";
  size?: "sm" | "md" | "lg" | "xl";
  height?: number;
  showTagline?: boolean;
}

/**
 * Official Brand Logo with Fluid Dynamic Wave Animation
 * 3 Blue Strata (#2C4A7C / #1A2838) + 1 Detached Animated Orange Stratum (#FF9500 / #ED7410)
 */
export function NomiraLogo({
  variant = "horizontal",
  theme = "dark",
  className = "",
  loop = true,
  speed = "normal",
  size = "md",
  height,
  showTagline = true,
}: NomiraLogoProps) {
  const uniqueId = useId().replace(/:/g, "_");

  const sizeHeightMap = {
    sm: 30,
    md: 38,
    lg: 48,
    xl: 62,
  };
  const markHeight = height ?? sizeHeightMap[size];
  const durationSec = speed === "slow" ? 3.4 : 2.4;

  const isDark = theme === "dark";
  const blueBarGradientId = `nm_blue_bar_${uniqueId}`;
  const orangeGradientId = `nm_orange_bar_${uniqueId}`;

  // SVG Mark component with fluid wave animations
  const renderMarkSvg = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 268 234"
      style={{
        height: markHeight,
        aspectRatio: "268 / 234",
        width: "auto",
      }}
      className="shrink-0 overflow-visible transition-transform duration-300 group-hover/logo:scale-[1.04]"
      aria-hidden="true"
    >
      <defs>
        {isDark ? (
          <linearGradient
            id={blueBarGradientId}
            x1="0%"
            y1="100%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#8FB0DC" />
            <stop offset="100%" stopColor="#405C82" />
          </linearGradient>
        ) : (
          <linearGradient
            id={blueBarGradientId}
            x1="0%"
            y1="100%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#3A5C8A" />
            <stop offset="100%" stopColor="#1A2838" />
          </linearGradient>
        )}

        <linearGradient
          id={orangeGradientId}
          gradientUnits="userSpaceOnUse"
          x1="0"
          y1="48"
          x2="224"
          y2="0"
        >
          <stop offset="0%" stopColor="#FFA23C" />
          <stop offset="100%" stopColor="#ED7410" />
        </linearGradient>
      </defs>

      {/* 3 Blue parallel static bars (Bar 1 at Y:0..48, Bar 3 at Y:124..172, Bar 4 at Y:186..234) */}
      <g className="nomira-blue-bars">
        {/* Bar 1 (Top) */}
        <path
          d="M19.53 8.94Q24 0 34 0L214 0Q224 0 219.53 8.94L204.47 39.06Q200 48 190 48L10 48Q0 48 4.47 39.06Z"
          fill={`url(#${blueBarGradientId})`}
          className="transition-all duration-300 group-hover/logo:brightness-125"
        />

        {/* Bar 3 (Lower Middle) */}
        <path
          d="M19.53 132.94Q24 124 34 124L214 124Q224 124 219.53 132.94L204.47 163.06Q200 172 190 172L10 172Q0 172 4.47 163.06Z"
          fill={`url(#${blueBarGradientId})`}
          className="transition-all duration-300 group-hover/logo:brightness-125"
        />

        {/* Bar 4 (Bottom) */}
        <path
          d="M19.53 194.94Q24 186 34 186L214 186Q224 186 219.53 194.94L204.47 225.06Q200 234 190 234L10 234Q0 234 4.47 225.06Z"
          fill={`url(#${blueBarGradientId})`}
          className="transition-all duration-300 group-hover/logo:brightness-125"
        />
      </g>

      {/* Bar 2 (Orange Detached Stratum with Fluid Animated Pixel Flow) */}
      <g
        transform="translate(44,62)"
        className="nomira-orange-stratum transition-all duration-300 group-hover/logo:filter group-hover/logo:drop-shadow-[0_0_12px_rgba(255,149,0,0.55)]"
      >
        {/* Solid right body */}
        <path
          d="M84 0L214 0Q224 0 219.53 8.94L204.47 39.06Q200 48 190 48L60 48Z"
          fill={`url(#${orangeGradientId})`}
        />

        {/* 54 Dispersed animated pixels with progressive wave delay */}
        <g fill={`url(#${orangeGradientId})`}>
          {PIXEL_MATRIX.map((pixel, i) => {
            const normalizedX = (pixel.x - 4.6) / (93.3 - 4.6);
            const delay = normalizedX * durationSec;

            return (
              <rect
                key={i}
                x={pixel.x}
                y={pixel.y}
                width={pixel.w}
                height={pixel.h}
                rx={pixel.rx}
                className={loop ? "nomira-pixel" : ""}
                style={
                  loop
                    ? {
                        animationDelay: `${delay.toFixed(2)}s`,
                        animationDuration: `${durationSec}s`,
                      }
                    : undefined
                }
              />
            );
          })}
        </g>
      </g>
    </svg>
  );

  // Mark-only variant
  if (variant === "mark") {
    return (
      <div
        className={`group/logo inline-flex items-center justify-center select-none ${className}`}
        aria-label="Nomira"
      >
        {renderMarkSvg()}
      </div>
    );
  }

  // Badge variant
  if (variant === "badge") {
    return (
      <div
        className={`group/logo inline-flex items-center justify-center select-none rounded-[16px] p-2.5 shadow-md border transition-all duration-300 ${
          isDark
            ? "bg-[#142030] border-[#3A5C8A]/60 shadow-black/30"
            : "bg-white border-[#E2E9F3] shadow-slate-200/50"
        } ${className}`}
        aria-label="Nomira"
      >
        {renderMarkSvg()}
      </div>
    );
  }

  // Complete Horizontal Logo: Fluid Animated Mark + Typographic Wordmark
  const getTitleClass = () => {
    if (markHeight >= 48) return "text-2xl sm:text-3xl";
    if (markHeight >= 36) return "text-xl sm:text-2xl";
    if (markHeight >= 28) return "text-lg sm:text-xl";
    return "text-base sm:text-lg";
  };

  const getSloganClass = () => {
    if (markHeight >= 48) return "text-xs sm:text-sm";
    if (markHeight >= 36) return "text-[11px] sm:text-xs";
    return "text-[10px]";
  };

  const isWithSlogan = variant === "horizontal" && showTagline;

  return (
    <div
      className={`group/logo inline-flex items-center gap-3.5 select-none ${className}`}
      aria-label="Nomira — Regagnez vos ressources"
    >
      {/* 1. Animated Fluid Vector Mark */}
      <div className="shrink-0">{renderMarkSvg()}</div>

      {/* 2. Typographic Wordmark & Slogan */}
      <div className="flex flex-col justify-center text-left leading-none">
        <span
          className={`font-heading font-extrabold tracking-tight transition-colors duration-300 ${getTitleClass()} ${
            isDark ? "text-white group-hover/logo:text-white" : "text-[#1A2838]"
          }`}
        >
          Nomira
        </span>

        {isWithSlogan && (
          <span
            className={`font-medium tracking-wide mt-1 transition-colors duration-300 ${getSloganClass()} ${
              isDark ? "text-[#8FB0DC]" : "text-[#4A6890]"
            }`}
          >
            Regagnez vos ressources
          </span>
        )}
      </div>
    </div>
  );
}

