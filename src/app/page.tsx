import { Header } from "@/components/layout/header";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
// import { TestimonialsSection } from "@/components/sections/testimonials-section";
// import { ExperienceSection } from "@/components/sections/experience-section";
import { ContactSection } from "@/components/sections/contact-section";
import { AchievementsSection } from "@/components/sections/achievements-section";
import { GridBackground, DotBackground } from "@/components/ui/grid-background";
import { FloatingNotesLink } from "@/components/ui/floating-notes-link";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground dark">
      <Header />
      <FloatingNotesLink />

      <main className="flex-grow">
        <HeroSection />

        <GridBackground className="py-20">
          <AboutSection />
        </GridBackground>

        <ProjectsSection />

        <DotBackground className="py-20">
          <AchievementsSection className="py-0" />
        </DotBackground>

        <SkillsSection />
        {/* <TestimonialsSection /> */}
        {/* <ExperienceSection /> */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
