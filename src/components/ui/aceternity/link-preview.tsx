"use client";
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export function LinkPreview({
  url,
  imageUrl,
  title,
  description,
  className,
}: {
  url: string;
  imageUrl: string;
  title: string;
  description: string;
  className?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  // Handle mouse movements to show preview with a delay
  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();

    // Calculate initial position
    let x = e.clientX - rect.left + 20; // Offset from the cursor
    let y = e.clientY - rect.top - 120; // Place above cursor

    // Make sure the preview doesn't go off the screen
    const previewHeight = 200; // Approximate height of the preview
    const previewWidth = 288; // Width of the preview (72 * 4)

    // Check if preview would go off-screen to the right
    if (x + previewWidth > window.innerWidth) {
      x = window.innerWidth - previewWidth - 20;
    }

    // Check if preview would go off-screen to the left
    if (x < 0) {
      x = 20;
    }

    // Check if preview would go off-screen to the top
    if (y < 0) {
      y = 20;
    }

    // Check if preview would go off-screen to the bottom
    if (rect.top + y + previewHeight > window.innerHeight) {
      y = window.innerHeight - rect.top - previewHeight - 20;
    }

    setPosition({ x, y });
  };

  // Adjust position if preview is clipped in viewport
  useEffect(() => {
    if (!isOpen || !previewRef.current) return;

    const previewRect = previewRef.current.getBoundingClientRect();
    let updatedPosition = { ...position };
    let needsUpdate = false;

    // Check if the preview is outside the viewport
    if (previewRect.right > window.innerWidth) {
      updatedPosition.x -= previewRect.right - window.innerWidth + 20;
      needsUpdate = true;
    }

    if (previewRect.bottom > window.innerHeight) {
      updatedPosition.y -= previewRect.bottom - window.innerHeight + 20;
      needsUpdate = true;
    }

    if (previewRect.left < 0) {
      updatedPosition.x += Math.abs(previewRect.left) + 20;
      needsUpdate = true;
    }

    if (previewRect.top < 0) {
      updatedPosition.y += Math.abs(previewRect.top) + 20;
      needsUpdate = true;
    }

    if (needsUpdate) {
      setPosition(updatedPosition);
    }
  }, [isOpen, position]);

  return (
    <div ref={containerRef} className={cn("relative inline-block", className)}>
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors inline-flex items-center gap-1 group"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        {title}
        <ExternalLink className="h-3 w-3 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </Link>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={previewRef}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="fixed z-50 bg-card border border-border rounded-lg shadow-xl w-72 overflow-hidden"
            style={{
              left: `${position.x}px`,
              top: `${position.y}px`,
              transformOrigin: "center bottom",
            }}
          >
            <div className="relative w-full h-32">
              <Image src={imageUrl} alt={title} fill className="object-cover" />
            </div>
            <div className="p-3">
              <h3 className="font-medium text-sm">{title}</h3>
              <p className="text-muted-foreground text-xs mt-1 line-clamp-2">
                {description}
              </p>
              <div className="mt-2 text-xs text-muted-foreground truncate">
                {url}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
