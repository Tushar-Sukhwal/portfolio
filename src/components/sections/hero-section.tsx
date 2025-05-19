"use client";

import { cn } from "@/lib/utils";

import { AnimatedText } from "@/components/ui/aceternity/animated-text";
import { TypewriterEffect } from "@/components/ui/aceternity/typewriter-effect";
import { BackgroundBeamsWithCollision } from "@/components/ui/aceternity/background-beams-with-collision";
import { motion } from "framer-motion";
import { ArrowDown, Download, Send } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface HeroSectionProps {
  className?: string;
}

export function HeroSection({ className }: HeroSectionProps) {
  return (
    <BackgroundBeamsWithCollision
      className={cn(
        "min-h-[90vh] flex items-center justify-center px-4",
        className
      )}
    >
      <div className="container mx-auto relative">
        <div className="flex flex-col items-center text-center max-w-full sm:max-w-4xl mx-auto px-4 sm:px-0">
          {/* Profile picture with animation */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-28 h-28 md:w-36 md:h-36 relative mb-6 md:mb-8 rounded-full border-4 border-white/20 overflow-hidden shadow-lg bg-primary/30"
          >
            <Image
              src="/profile/avatar.jpeg"
              alt="Tushar Sukhwal"
              fill
              className="object-cover"
              priority
              onError={(e) => {
                console.error("Image failed to load");
                e.currentTarget.style.display = "none";
              }}
            />
          </motion.div>

          {/* Typewriter effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-6 md:mb-8 w-full"
          >
            <TypewriterEffect
              words={[
                { text: "Hello, " },
                { text: "I'm ", className: "text-primary" },
                { text: "Tushar Sukhwal." },
              ]}
              className="text-3xl md:text-5xl font-bold mb-4"
            />
            <div className="mt-4">
              <AnimatedText
                text={[
                  "FullStack Developer with focus on Scalability and Performance.",
                  "I enjoy solving problems and building scalable solutions.",
                ]}
                className="text-base sm:text-xl md:text-2xl text-center mb-8 text-white/80"
              />
            </div>
          </motion.div>

          {/* CTA buttons - Made responsive for mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center w-full"
          >
            <Link href="#contact" className="w-full sm:w-auto">
              <button className="btn-rounded btn-primary w-full sm:w-auto">
                Contact me here <Send className="h-4 w-4" />
              </button>
            </Link>
            <button className="btn-rounded btn-outlined w-full sm:w-auto">
              Download Resume <Download className="ml-2 h-4 w-4" />
            </button>
          </motion.div>

          {/* Social links with better mobile spacing */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex gap-4 mt-6 md:mt-8"
          >
            {/* LinkedIn */}
            <Link
              href="https://www.linkedin.com/in/tushar-sukhwal-57463a251/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card/30 p-2 md:p-3 rounded-full hover:bg-card/50 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </Link>

            {/* GitHub */}
            <Link
              href="https://github.com/Tushar-Sukhwal"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card/30 p-2 md:p-3 rounded-full hover:bg-card/50 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </Link>

            {/* Twitter/X */}
            <Link
              href="https://x.com/Tushars_071"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card/30 p-2 md:p-3 rounded-full hover:bg-card/50 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </Link>
          </motion.div>

          {/* Scroll down indicator - Moved below social icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="mt-8 md:mt-12"
          >
            <Link href="#about">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ArrowDown className="h-5 w-5 md:h-6 md:w-6 text-white/70" />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
