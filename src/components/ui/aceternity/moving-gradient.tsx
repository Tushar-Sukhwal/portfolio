"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

interface MovingGradientProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

export const MovingGradient = ({
  children,
  className,
  containerClassName,
}: MovingGradientProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", containerClassName)}
    >
      <div
        className={cn(
          "hero-gradient absolute inset-0 transition-transform duration-500",
          className
        )}
        style={{
          transform: `translate(${(mousePosition.x - 0.5) * 10}px, ${
            (mousePosition.y - 0.5) * 10
          }px)`,
          backgroundPosition: `${mousePosition.x * 100}% ${
            mousePosition.y * 100
          }%`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
