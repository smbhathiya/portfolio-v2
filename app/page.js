import HeroSection from "@/app/components/HeroSection";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import AboutSection from "@/app/components/AboutSection";
import ProjectsSection from "@/app/components/ProjectsSection";
import ContactSection from "@/app/components/ContactSection";
import SkillSection from "@/app/components/SkillSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />
      <div className="container mt-24 mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <HeroSection />
        <AboutSection />
        <SkillSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
