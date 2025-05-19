"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Skills", href: "#skills" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

// Define section boundaries as percentage of viewport height
// This manually maps sections to viewport positions for reliable detection
const sectionBoundaries = {
  "/": { start: 0, end: 15 }, // Home: top 0-15% of page
  "#about": { start: 15, end: 25 }, // About: 15-25% of page
  "#projects": { start: 25, end: 40 }, // Projects: 25-40% of page
  "#achievements": { start: 40, end: 50 }, // Achievements: 40-50% of page
  "#skills": { start: 50, end: 65 }, // Skills: 50-65% of page
  "#testimonials": { start: 65, end: 80 }, // Testimonials: 65-80% of page
  "#experience": { start: 80, end: 90 }, // Experience: 80-90% of page
  "#contact": { start: 90, end: 100 }, // Contact: 90-100% of page
};

export function Header() {

  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll and set active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Calculate scroll percentage
      const scrollPosition = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollPosition / docHeight) * 100;

      // Find matching section based on scroll percentage
      let current = "/";
      Object.entries(sectionBoundaries).forEach(([section, { start, end }]) => {
        if (scrollPercentage >= start && scrollPercentage <= end) {
          current = section;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    // Run once on mount to set initial active section
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 px-2 md:px-4",
        scrolled
          ? "py-2 md:py-4 bg-background/80 backdrop-blur-md"
          : "py-3 md:py-6"
      )}
    >
      <div className="container mx-auto">
        <nav className="flex justify-center">
          <ul className="flex items-center gap-1 md:gap-5 p-1 md:p-4 bg-card/80 backdrop-blur-md rounded-full overflow-x-auto no-scrollbar">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    "px-2 md:px-3 py-1 md:py-2 text-xs md:text-sm font-medium rounded-full relative whitespace-nowrap",
                    "transition-colors duration-300 ease-in-out",
                    activeSection === item.href
                      ? "text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                  onClick={() => setActiveSection(item.href)}
                >
                  {activeSection === item.href && (
                    <motion.span
                      layoutId="navbar-indicator"
                      className="absolute inset-0 bg-primary rounded-full z-[-1]"
                      transition={{ type: "spring", duration: 0.6 }}
                    />
                  )}
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
