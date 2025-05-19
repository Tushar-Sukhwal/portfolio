"use client";

import { cn } from "@/lib/utils";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  avatarUrl?: string;
  className?: string;
  index?: number;
}

export const TestimonialCard = ({
  quote,
  name,
  title,
  avatarUrl,
  className,
  index = 0,
}: TestimonialCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Get initials for the avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase();
  };

  const initials = getInitials(name);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn("", className)}
    >
      <Card className="h-full border-primary/10 bg-card/30 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="relative mb-4">
            <div
              aria-hidden="true"
              className="text-3xl font-serif text-primary opacity-70"
            >
              &ldquo;
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {quote}
            </p>
          </div>
        </CardContent>
        <CardFooter className="px-6 pb-6 pt-0">
          <div className="flex items-center gap-3">
            <Avatar>
              {avatarUrl ? (
                <AvatarImage src={avatarUrl} alt={name} />
              ) : (
                <AvatarFallback className="bg-primary/20 text-primary">
                  {initials}
                </AvatarFallback>
              )}
            </Avatar>
            <div>
              <p className="text-sm font-medium">{name}</p>
              <p className="text-xs text-muted-foreground">{title}</p>
            </div>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};
