"use client";

import { cn } from "@/lib/utils";
import { SkillBadge } from "@/components/ui/aceternity/skill-badge";
import { SectionWrapper } from "@/components/ui/aceternity/section-wrapper";
import { motion } from "framer-motion";
import { useRef, useMemo } from "react";
import { useInView } from "framer-motion";

interface SkillsSectionProps {
  className?: string;
}

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "REST API",
  "Git",
  "Tailwind CSS",
  "Prisma",
  "MongoDB",
  "Zustand",
  "Redux",
  "Express.js",
  "PostgreSQL",
  "Framer Motion",
  "Solidity",
  "Smart Contracts",
  "Ether.js",
  "IPFS",
  "PHP",
  "Laravel",
  "WordPress",
];

export function SkillsSection({ className }: SkillsSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Randomize the order of skills for animation
  const randomizedSkills = useMemo(() => {
    // Create a copy of the skills array and shuffle it
    return [...skills].sort(() => Math.random() - 0.5);
  }, []);

  // Generate random delays for each skill
  const getRandomDelay = () => {
    return Math.random() * 0.5; // Random delay between 0 and 0.5 seconds
  };

  // Generate slightly random position values
  const getRandomX = () => {
    return Math.random() * 20 - 10; // Between -10px and 10px
  };

  return (
    <SectionWrapper id="skills" className={cn("py-12 md:py-20", className)}>
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-12 text-center">
          My Skills
        </h2>

        <div
          ref={ref}
          className="relative flex flex-wrap justify-center gap-2 md:gap-3 max-w-full md:max-w-4xl mx-auto"
        >
          {randomizedSkills.map((skill) => (
            <motion.div
              key={skill}
              initial={{
                opacity: 0,
                y: 50,
                x: getRandomX(),
              }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      y: 0,
                      x: 0,
                    }
                  : {
                      opacity: 0,
                      y: 50,
                      x: getRandomX(),
                    }
              }
              transition={{
                duration: 0.5,
                delay: getRandomDelay(),
                type: "spring",
                stiffness: 100,
                damping: 12,
              }}
              className="m-0.5 sm:m-1"
            >
              <SkillBadge name={skill} />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
