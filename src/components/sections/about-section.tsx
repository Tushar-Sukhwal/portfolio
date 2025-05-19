"use client";

import { cn } from "@/lib/utils";
import { AnimatedText } from "@/components/ui/aceternity/animated-text";
import { SectionWrapper } from "@/components/ui/aceternity/section-wrapper";

interface AboutSectionProps {
  className?: string;
}

export function AboutSection({ className }: AboutSectionProps) {
  return (
    <SectionWrapper id="about" className={cn("py-20", className)}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About Me
        </h2>

        <div className="max-w-3xl mx-auto space-y-6 text-lg">
          <AnimatedText
            text="I am a Full Stack Engineer with a passion for building scalable and efficient systems. I have proficiency in both frontend and backend development, and I am always looking for new challenges and opportunities to grow."
            className="text-muted-foreground"
          />

          <AnimatedText
            text="I have worked with many languages, frameworks, trends and technologies over the years."
            className="text-muted-foreground"
          />

          <AnimatedText
            text="I have also worked on web3 projects and have a deep understanding of blockchain technology and smart contracts."
            className="text-muted-foreground"
          />

          <AnimatedText
            text="Adaptability is my core skill; I can learn technologies on demand and implement them with best practices to ensure quality of software and performance."
            className="text-muted-foreground"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
