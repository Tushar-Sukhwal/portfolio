"use client";

import { cn } from "@/lib/utils";
import { TestimonialCard } from "@/components/ui/aceternity/testimonial-card";
import { SectionWrapper } from "@/components/ui/aceternity/section-wrapper";

interface TestimonialsSectionProps {
  className?: string;
}

const testimonials = [
  {
    quote: "",
    name: "",
    title: "",
  },
];

export function TestimonialsSection({ className }: TestimonialsSectionProps) {
  return (
    <SectionWrapper id="testimonials" className={cn("py-20", className)}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Client Testimonials
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
              index={index}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
