"use client";

import { useRef, useEffect, useState } from "react";

interface HorizontalCarouselProps {
  children: React.ReactNode[];
  onIndexChange?: (index: number) => void;
  initialIndex?: number;
}

export function HorizontalCarousel({ children, onIndexChange, initialIndex = 0 }: HorizontalCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(initialIndex);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const index = Math.round(container.scrollLeft / container.offsetWidth);
      if (index !== activeIndex) {
        setActiveIndex(index);
        onIndexChange?.(index);
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [activeIndex, onIndexChange]);

  // Expose scroll function to parent if needed via ref
  useEffect(() => {
    if (initialIndex !== activeIndex && containerRef.current) {
      containerRef.current.scrollTo({
        left: initialIndex * containerRef.current.offsetWidth,
        behavior: "smooth"
      });
      setActiveIndex(initialIndex);
    }
  }, [initialIndex]);

  return (
    <div className="relative w-full h-[calc(100vh-64px)] md:h-auto md:overflow-visible">
      <div
        ref={containerRef}
        className="flex h-full w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        style={{ scrollBehavior: "smooth" }}
      >
        {children.map((child, i) => (
          <div key={i} className="min-w-full h-full snap-start overflow-y-auto">
            {child}
          </div>
        ))}
      </div>
      
      {/* Dots indicator with Nomira colors */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 md:hidden z-20">
        {children.map((_, i) => (
          <div
            key={i}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === activeIndex ? "bg-[#FF9500] w-6" : "bg-[#C3D0E2]/60 w-2"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
