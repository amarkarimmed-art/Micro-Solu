"use client";

import { useRef, useEffect, useState } from "react";

interface Props {
  children: React.ReactNode[];
  onActiveSectionChange: (index: number) => void;
  activeSection: number;
}

export function HorizontalCarousel({ children, onActiveSectionChange, activeSection }: Props) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Sync scroll position when activeSection changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const sectionWidth = container.offsetWidth;
      container.scrollTo({
        left: activeSection * sectionWidth,
        behavior: 'smooth'
      });
    }
  }, [activeSection]);

  // Update activeSection on scroll
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const index = Math.round(container.scrollLeft / container.offsetWidth);
      if (index !== activeSection) {
        onActiveSectionChange(index);
      }
    }
  };

  return (
    <div 
      ref={scrollContainerRef}
      onScroll={handleScroll}
      className="flex h-[calc(100vh-64px)] w-full overflow-x-auto snap-x snap-mandatory hide-scrollbar"
    >
      {children.map((child, i) => (
        <div key={i} className="min-w-full h-full snap-start overflow-y-auto">
          {child}
        </div>
      ))}
    </div>
  );
}
