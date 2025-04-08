import AboutSection from "@/components/about-section";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import ProjectsSection from "@/components/projects-section";
import SkillsSection from "@/components/skills-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <FooterSection />
    </>
  );
}
