"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SkillBadgeProps {
  name: string;
  className?: string;
  index?: number;
}

export const SkillBadge = ({ name, className, index = 0 }: SkillBadgeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 * index }}
      className={cn(
        "px-2 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium tracking-wide uppercase",
        "bg-secondary text-secondary-foreground dark:bg-zinc-800 dark:text-zinc-200",
        "hover:bg-primary/10 hover:text-primary dark:hover:bg-primary/20 dark:hover:text-primary-foreground",
        "transition-all duration-300 ease-in-out cursor-default",
        className
      )}
    >
      {name}
    </motion.div>
  );
};
