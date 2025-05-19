"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedTextProps {
  text: string | string[];
  className?: string;
  once?: boolean;
}

export const AnimatedText = ({
  text,
  className,
  once = true,
}: AnimatedTextProps) => {
  const textArray = Array.isArray(text) ? text : [text];
  const ref = useRef(null);
  const isInView = useInView(ref, { once });

  const defaultAnimations = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div ref={ref} className={cn("flex flex-col", className)}>
      {textArray.map((line, lineIndex) => (
        <div key={`line-${lineIndex}`} className="overflow-hidden">
          <motion.p
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={defaultAnimations}
            transition={{ duration: 0.5, delay: lineIndex * 0.1 }}
            className="text-left"
          >
            {line}
          </motion.p>
        </div>
      ))}
    </div>
  );
};
