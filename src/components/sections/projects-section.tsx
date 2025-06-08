"use client";

import { cn } from "@/lib/utils";
import { ProjectCard } from "@/components/ui/aceternity/project-card";
import { SectionWrapper } from "@/components/ui/aceternity/section-wrapper";
import { useRef } from "react";
import { useInView } from "framer-motion";

interface ProjectsSectionProps {
  className?: string;
}

const projects = [
  {
    title: "TeamBuilder",
    description:
      "Multi-tenant SaaS application for managing projects, tasks, and teams. Giving your team the ability to manage their projects and tasks in one place.",
    longDescription:
      "This is a multi-tenant SaaS application for managing projects, tasks, and teams. Giving your team the ability to manage their projects and tasks in one place with the ability to add multiple users to the project and assign tasks to them with the ability to add comments to the tasks and files to the projects and much more.",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Tailwind",
      "Shadcn/UI",
      "Express",
      "Prisma",
      "Zod",
      "React Hook Form",
      "React Email",
      "React Hot Toast",
    ],
    imageUrl: "https://play.google.com/store/apps/details?id=fr.ownstudio.ietb&hl=en_IE",
    projectUrl: "https://teambuilde.tusharsukhwal.com",
    githubUrl: "https://github.com/Tushar-Sukhwal/Team-Builder",
  },
];

export function ProjectsSection({ className }: ProjectsSectionProps) {
  return (
    <SectionWrapper id="projects" className={cn("py-20", className)}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
          My Projects
        </h2>
        <div className="grid grid-cols-1 gap-10 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <ProjectDisplay
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

interface ProjectDisplayProps {
  project: {
    title: string;
    description: string;
    technologies: string[];
    imageUrl?: string;
    projectUrl?: string;
    githubUrl?: string;
  };
  index: number;
}

function ProjectDisplay({ project, index }: ProjectDisplayProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "-100px 0px",
  });

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 transform",
        isInView ? "opacity-100 scale-100" : "opacity-50 scale-95"
      )}
    >
      <ProjectCard
        title={project.title}
        description={project.description}
        technologies={project.technologies}
        imageUrl={project.imageUrl}
        projectUrl={project.projectUrl}
        githubUrl={project.githubUrl}
        index={index}
      />
    </div>
  );
}
