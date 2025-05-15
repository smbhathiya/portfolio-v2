import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Github, Linkedin, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TextEffect } from "@/components/ui/text-effect";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { HeroHeader } from "@/components/hero5-header";

// Define fallback links for social profiles
const github = process.env.NEXT_PUBLIC_GITHUB_URL || "#";
const linkedin = process.env.NEXT_PUBLIC_LINKEDIN_URL || "#";
const resumeUrl = process.env.NEXT_PUBLIC_RESUME_URL || "/resume.pdf";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "tween",
        ease: "easeOut",
        duration: 1.5,
        filter: {
          type: "tween",
          ease: "easeOut",
          duration: 1.5,
        },
      },
    },
  },
};

export default function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Background animation elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(var(--primary),0.15),transparent_70%)]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-primary/5 rounded-full blur-xl"></div>
      </div>

      <HeroHeader />
      <main className="overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block"
        >
          <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
          <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] translate-x-[5%] translate-y-[-50%]" />
          <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>
        <section>
          <div className="relative pt-24 md:pt-36">
            <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"></div>
            <div className="mx-auto max-w-5xl px-4">
              <AnimatedGroup
                variants={{
                  container: {
                    visible: {
                      transition: {
                        staggerChildren: 0.05,
                        delayChildren: 0.5,
                      },
                    },
                  },
                  ...transitionVariants,
                }}
                className="flex flex-col lg:flex-row items-center justify-between gap-12"
              >
                {/* Image Section */}
                <div className="flex-shrink-0 relative w-[280px] h-[280px] lg:w-[320px] lg:h-[320px] group mb-10 float-animation">
                  <div className="absolute inset-0 flex items-center justify-center opacity-60 group-hover:opacity-80 transition-opacity duration-500">
                    <div className="w-[280px] h-[280px] lg:w-[320px] lg:h-[320px] bg-gradient-to-tr from-primary/70 to-accent/70 rounded-full blur-2xl"></div>
                  </div>
                  <div className="absolute inset-0 rounded-full overflow-hidden glow-effect">
                    <Image
                      src="/source/p3.png"
                      alt="Bhathiya Lakshan"
                      width={320}
                      height={320}
                      className="relative w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105 rounded-full"
                    />
                  </div>
                </div>

                {/* Caption and Button Section */}
                <div className="text-center lg:text-left max-w-md">
                  <div className="mb-2 inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary">
                    <span className="text-sm font-medium">Full Stack Developer</span>
                  </div>
                  
                  <TextEffect
                    per="line"
                    preset="fade-in-blur"
                    speedSegment={0.3}
                    delay={0.5}
                    as="p"
                    className="mt-4 text-lg md:text-xl dark:text-gray-300"
                  >
                    Let&apos;s build the Future With Code & Creativity. Crafting
                    modern web applications with .NET, React, Next.js, and a
                    passion for innovation.
                  </TextEffect>
                  
                  {/* Social Links */}
                  <div className="mt-6 flex justify-center lg:justify-start space-x-4">
                    <a 
                      href={github}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-secondary hover:bg-primary/20 transition-colors duration-300"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a 
                      href={linkedin}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-secondary hover:bg-primary/20 transition-colors duration-300"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a 
                      href={resumeUrl}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-secondary hover:bg-primary/20 transition-colors duration-300"
                    >
                      <FileText className="w-5 h-5" />
                    </a>
                  </div>
                  
                  <AnimatedGroup
                    variants={{
                      container: {
                        visible: {
                          transition: {
                            staggerChildren: 0.05,
                            delayChildren: 0.75,
                          },
                        },
                      },
                      ...transitionVariants,
                    }}
                    className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4"
                  >
                    <Button
                      asChild
                      variant="default"
                      size="lg"
                      className="rounded-xl px-6 bg-primary hover:bg-primary/90 hover-scale shadow-lg shadow-primary/20"
                    >
                      <Link href="#projects">
                        <span className="text-nowrap">View Projects</span>
                        <ChevronRight className="ml-2 inline-block size-4" />
                      </Link>
                    </Button>
                    
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="rounded-xl px-6 duration-300 border-primary/20 hover:border-primary/50 hover-scale backdrop-blur-sm"
                    >
                      <Link href="#contact">
                        <span className="text-nowrap">Contact Me</span>
                        <ChevronRight className="ml-2 inline-block size-4" />
                      </Link>
                    </Button>
                  </AnimatedGroup>
                </div>
              </AnimatedGroup>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
}
