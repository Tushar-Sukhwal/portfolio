"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function FloatingNotesLink() {
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);

  // Handle scroll to change appearance
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={cn(
        "fixed left-5 z-40 transform transition-all duration-300",
        scrolled ? "top-20" : "top-1/2 -translate-y-1/2"
      )}
    >
      <Link href="https://notes.tusharsukhwal.com" target="_blank" rel="noopener noreferrer">
        <motion.div
          className={cn(
            "bg-primary/20 backdrop-blur-sm border border-primary/30 p-3 rounded-full flex items-center justify-center shadow-glow transition-all duration-300 hover:shadow-[0_0_30px_rgba(138,43,226,0.4)]",
            hovered ? "pl-3 pr-4" : "group"
          )}
          whileHover={{ scale: 1.05 }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <FileText 
            className={cn(
              "text-primary-foreground w-6 h-6 transition-all duration-300",
              hovered ? "mr-2" : "mr-0"
            )}
          />
          
          <motion.span
            initial={{ width: 0, opacity: 0 }}
            animate={{ 
              width: hovered ? "auto" : 0,
              opacity: hovered ? 1 : 0
            }}
            transition={{ duration: 0.3 }}
            className="text-primary-foreground whitespace-nowrap overflow-hidden font-medium"
          >
            My Notes
          </motion.span>
          
          {!hovered && (
            <motion.div 
              className="absolute -right-2 -top-2 w-3 h-3 rounded-full bg-primary"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 2,
                repeatType: "reverse" 
              }}
            />
          )}
        </motion.div>
      </Link>
    </motion.div>
  );
} 