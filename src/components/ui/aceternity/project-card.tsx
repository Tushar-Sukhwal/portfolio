"use client";

import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { SkillBadge } from "./skill-badge";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { LinkPreview } from "./link-preview";
import { GlowingEffect } from "./glowing-effect";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  projectUrl?: string;
  githubUrl?: string;
  className?: string;
  index?: number;
}

export const ProjectCard = ({
  title,
  description,
  technologies,
  imageUrl,
  projectUrl,
  githubUrl,
  className,
  index = 0,
}: ProjectCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn("group relative", className)}
    >
      {/* Glowing effect */}
      <div className="absolute inset-0 -z-10">
        <GlowingEffect disabled={!isInView} />
      </div>

      <Card
        className={cn(
          "overflow-hidden flex flex-col-reverse md:flex-row h-full",
          "bg-gradient-to-br from-[#1a2035]/80 to-[#0f1729]/90 backdrop-blur-sm shadow-xl",
          "rounded-xl border border-white/5 hover:border-primary/20 transition-all duration-300"
        )}
      >
        {/* Content section */}
        <div className="flex-grow p-4 md:p-6 flex flex-col">
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-2">{title}</h3>
            <p className="text-muted-foreground text-sm">{description}</p>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {technologies.map((tech, i) => (
              <SkillBadge key={i} name={tech} index={i} />
            ))}
          </div>

          <div className="mt-auto pt-4 flex gap-4">
            {githubUrl && (
              <Link
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors"
              >
                <Github className="h-3 w-3" /> GitHub
              </Link>
            )}
            {projectUrl && (
              <Link
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors"
              >
                Live Demo <ArrowUpRight className="h-3 w-3" />
              </Link>
            )}
          </div>
        </div>

        {/* Image section - size adjusted for different screen sizes */}
        {imageUrl && (
          <div className="relative w-full h-48 md:w-2/5 md:h-auto overflow-hidden">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover h-full group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}
      </Card>
    </motion.div>
  );
};
