"use client";

import { cn } from "@/lib/utils";
import { SectionWrapper } from "@/components/ui/aceternity/section-wrapper";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

interface ExperienceSectionProps {
  className?: string;
}

const experiences = [
  {
    title: "",
    company: "",
    location: "",
    duration: "",
    description: "",
  },
];

export function ExperienceSection({ className }: ExperienceSectionProps) {
  return (
    <SectionWrapper id="experience" className={cn("py-20", className)}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My Experience
        </h2>

        <div className="max-w-3xl mx-auto">
          {experiences.map((experience, index) => (
            <ExperienceItem key={index} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

interface ExperienceItemProps {
  experience: {
    title: string;
    company: string;
    location: string;
    duration: string;
    description: string;
  };
  index: number;
}

function ExperienceItem({ experience, index }: ExperienceItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-12 relative pl-8 border-l-2 border-primary/20 last:border-l-0 last:mb-0"
    >
      {/* Timeline dot */}
      <div className="absolute left-[-9px] top-1.5 h-4 w-4 rounded-full bg-primary"></div>

      <div className="mb-2">
        <h3 className="text-xl font-bold">{experience.title}</h3>
        <p className="text-muted-foreground text-sm">
          {experience.company} • {experience.location}
        </p>
        <p className="text-muted-foreground text-sm font-medium">
          {experience.duration}
        </p>
      </div>

      <p className="text-muted-foreground mt-4">{experience.description}</p>
    </motion.div>
  );
}
