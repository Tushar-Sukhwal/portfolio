"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Twitter } from "lucide-react";
import { Code } from "lucide-react";
import { BookOpen } from "lucide-react";
import { Keyboard } from "lucide-react";

export function Footer() {
  const profiles = [
    {
      name: "GitHub",
      href: "https://github.com/Tushar-Sukhwal",
      icon: <Github className="w-5 h-5" />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/tushar-sukhwal-57463a251/",
      icon: <Linkedin className="w-5 h-5" />,
    },
    {
      name: "LeetCode",
      href: "https://leetcode.com/u/tushars_071/",
      icon: <Code className="w-5 h-5" />,
    },
    {
      name: "Codeforces",
      href: "https://codeforces.com/profile/Tushars_07",
      icon: <Code className="w-5 h-5" />,
    },
    {
      name: "Twitter",
      href: "https://x.com/Tushars_071",
      icon: <Twitter className="w-5 h-5" />,
    },
    {
      name: "MonkeyType",
      href: "https://monkeytype.com/profile/nottushar",
      icon: <Keyboard className="w-5 h-5" />,
    },
    {
      name: "Notes",
      href: "https://notes.tusharsukhwal.com",
      icon: <BookOpen className="w-5 h-5" />,
    },
  ];

  return (
    <footer className="py-12 text-center border-t border-border/10 bg-background/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {profiles.map((profile) => (
            <motion.div
              key={profile.name}
              whileHover={{ y: -3 }}
              className="transition-colors duration-300"
            >
              <Link
                href={profile.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground"
              >
                <div className="bg-card/30 p-3 rounded-full">
                  {profile.icon}
                </div>
                <span className="text-xs font-medium">{profile.name}</span>
              </Link>
            </motion.div>
          ))}
        </div>

        <p className="text-sm text-muted-foreground">
          &copy;{new Date().getFullYear()} Tushar Sukhwal. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground mt-2">
          Built with Next.js, TypeScript, Tailwind CSS, Framer Motion, ShadCN UI
          & Aceternity UI.
        </p>
      </div>
    </footer>
  );
}
