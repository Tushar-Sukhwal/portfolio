"use client";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function TypewriterEffect({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) {
  // Split text inside of words into individual characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 30 : 60; // Faster typing and deleting speeds
    const pauseDuration = 1000; // Reduced pause duration at the end of a word

    const timer = setTimeout(
      () => {
        // Handle pause at the end
        if (isPaused) {
          setIsPaused(false);
          setIsDeleting(true);
          return;
        }

        if (isDeleting) {
          // Deleting characters
          if (currentCharIndex > 0) {
            setCurrentCharIndex((prev) => prev - 1);
          } else {
            setIsDeleting(false);
            // Move to the next word
            setCurrentWordIndex((prev) => (prev + 1) % wordsArray.length);
          }
        } else {
          // Typing characters
          const currentWord = wordsArray[currentWordIndex].text;
          if (currentCharIndex < currentWord.length) {
            setCurrentCharIndex((prev) => prev + 1);
          } else {
            // Pause at the end of a word
            setIsPaused(true);
          }
        }
      },
      isPaused ? pauseDuration : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [currentCharIndex, currentWordIndex, isDeleting, isPaused, wordsArray]);

  const currentWord = wordsArray[currentWordIndex];
  const displayText = currentWord.text.slice(0, currentCharIndex);

  return (
    <div className={cn("flex items-center gap-0", className)}>
      <div className={cn("inline-flex min-h-[1.5em]", "items-center")}>
        <span
          className={cn(
            "inline-block text-2xl sm:text-3xl md:text-4xl lg:text-5xl",
            currentWord.className
          )}
        >
          {displayText.map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className={cn(
            "inline-block h-8 w-[4px] bg-white ml-1",
            cursorClassName
          )}
        />
      </div>
    </div>
  );
}
