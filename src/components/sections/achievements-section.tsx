"use client";

import { cn } from "@/lib/utils";
import { SectionWrapper } from "@/components/ui/aceternity/section-wrapper";
import { motion } from "framer-motion";
import { Trophy, Award, Star } from "lucide-react";

interface AchievementItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function AchievementItem({ icon, title, description }: AchievementItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-card/40 backdrop-blur-sm border border-border/40 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-card/60"
    >
      <div className="flex items-start gap-4">
        <div className="bg-primary/20 p-3 rounded-lg">{icon}</div>
        <div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

interface AchievementsSectionProps {
  className?: string;
}

export function AchievementsSection({ className }: AchievementsSectionProps) {
  const achievements = [
    {
      icon: <Trophy className="w-6 h-6 text-primary" />,
      title: "ICPC Regionalist",
      description:
        "Secured All India Rank 50 in the ICPC Chennai Regional Contest.",
    },
    {
      icon: <Award className="w-6 h-6 text-primary" />,
      title: "CodeForces Expert",
      description:
        "Achieved Expert rating of 1665 on CodeForces, demonstrating strong competitive programming skills.",
    },
    {
      icon: <Star className="w-6 h-6 text-primary" />,
      title: "LeetCode Guardian",
      description:
        "Attained 2169 Guardian rating on LeetCode, placing among top competitive programmers.",
    },
    // {
    //   icon: <Target className="w-6 h-6 text-primary" />,
    //   title: "MonkeyType Speed Record",
    //   description:
    //     "Achieved 150+ WPM on MonkeyType, ranking in the top percentile of typists worldwide.",
    // },
    // {
    //   icon: <Medal className="w-6 h-6 text-primary" />,
    //   title: "Hackathon Champion",
    //   description:
    //     "Won first place in multiple hackathons, showcasing innovative solutions and technical expertise.",
    // },
  ];

  return (
    <SectionWrapper id="achievements" className={cn("py-20", className)}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Achievements
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => (
            <AchievementItem
              key={index}
              icon={achievement.icon}
              title={achievement.title}
              description={achievement.description}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
