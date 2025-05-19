"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function LampEffect({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative overflow-hidden py-32", className)}>
      <div className="relative z-40 md:pt-32">
        <div className="relative">
          {/* Lamp shine effect */}
          <div className="absolute inset-x-0 top-0 flex justify-center">
            <div className="absolute top-40 bottom-0 z-20 h-56 w-[42rem] bg-primary opacity-30 blur-[100px]"></div>
            <div className="absolute -top-20 h-56 w-[32rem] -translate-y-1/2 rounded-full bg-primary opacity-70 blur-2xl"></div>
            <motion.div
              initial={{ width: "10rem" }}
              whileInView={{ width: "18rem" }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-primary/80 blur-xl"
            ></motion.div>
            <motion.div
              initial={{ width: "15rem" }}
              whileInView={{ width: "30rem" }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="absolute inset-auto z-50 h-1 w-[30rem] -translate-y-[7rem] bg-white shadow-glow"
            ></motion.div>

            <div className="absolute inset-auto z-40 h-52 w-full -translate-y-[12.5rem] bg-[#0f1729]"></div>
          </div>

          <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
