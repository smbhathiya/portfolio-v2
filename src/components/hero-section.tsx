import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  ChevronRight,
  FileText,
  Github,
  Layers,
  Linkedin,
  Rocket,
  Sparkles,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { TextEffect } from "@/components/ui/text-effect";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { HeroHeader } from "@/components/hero5-header";
import projectsData from "@/data/projects";

// Define fallback links for social profiles
const github = process.env.NEXT_PUBLIC_GITHUB_URL || "#";
const linkedin = process.env.NEXT_PUBLIC_LINKEDIN_URL || "#";
const resumeUrl = process.env.NEXT_PUBLIC_RESUME_URL || "/resume.pdf";

const heroChips = ["TypeScript", "Next.js", ".NET", "Prisma", "Azure"];
const totalProjects = projectsData.length;
const heroStats = [
  {
    label: "Full-stack expertise",
    value: "TypeScript · .NET",
    icon: Layers,
  },
  {
    label: "Collaboration",
    value: "Remote ready",
    icon: Users,
  },
];

export default function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-24 top-32 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />
      </div>

      <HeroHeader />

      <main className="relative pb-16 pt-32 md:pb-24 md:pt-40">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.08,
                      delayChildren: 0.25,
                    },
                  },
                },
                item: {
                  hidden: { opacity: 0, y: 24 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.8,
                    },
                  },
                },
              }}
              className="relative z-20 space-y-6 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-foreground/80 shadow-sm backdrop-blur-md dark:border-white/15">
                <Sparkles className="size-4 text-primary" />
                <span>Shipping user-first products end-to-end</span>
              </div>

              <h1 className="text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
                Turning complex ideas into
                <span className="gradient-text">
                  {" "}
                  modern digital experiences
                </span>
              </h1>

              <TextEffect
                per="line"
                preset="fade-in-blur"
                speedSegment={0.25}
                delay={0.75}
                as="p"
                className="text-base leading-relaxed text-muted-foreground md:text-lg"
              >
                I craft thoughtful interfaces, resilient APIs, and seamless
                product journeys with Next.js, TypeScript, and .NET. From
                concept to deployment, every build balances aesthetics,
                accessibility, and performance.
              </TextEffect>

              <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
                {heroChips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-wide text-foreground/70 backdrop-blur-md dark:border-white/20"
                  >
                    {chip}
                  </span>
                ))}
              </div>

              <div className="flex flex-col items-center gap-4 pt-4 sm:flex-row sm:justify-center lg:justify-start">
                <div className="flex flex-wrap justify-center gap-3">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-full px-6 shadow-lg shadow-primary/20"
                  >
                    <Link href="#projects">
                      <span>View Projects</span>
                      <ArrowUpRight className="ml-2 size-4" />
                    </Link>
                  </Button>

                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="rounded-full border-white/15 bg-transparent backdrop-blur-md hover:border-primary/60"
                  >
                    <Link href="#contact">
                      <span>Start a project</span>
                      <ChevronRight className="ml-2 size-4" />
                    </Link>
                  </Button>
                </div>

                <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md dark:border-white/15">
                  <span className="text-xs uppercase tracking-wide text-muted-foreground">
                    Connect
                  </span>
                  <div className="flex items-center gap-1.5">
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-transparent bg-secondary/50 p-2 text-foreground transition hover:border-primary/40 hover:bg-primary/10"
                    >
                      <Github className="size-4" />
                    </a>
                    <a
                      href={linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-transparent bg-secondary/50 p-2 text-foreground transition hover:border-primary/40 hover:bg-primary/10"
                    >
                      <Linkedin className="size-4" />
                    </a>
                    <a
                      href={resumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-transparent bg-secondary/50 p-2 text-foreground transition hover:border-primary/40 hover:bg-primary/10"
                    >
                      <FileText className="size-4" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 pt-6 sm:grid-cols-3">
                {heroStats.map(({ label, value, icon: Icon }) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 text-left backdrop-blur-md transition hover:border-primary/40 dark:border-white/15"
                  >
                    <Icon className="size-5 text-primary" />
                    <p className="pt-2 text-2xl font-semibold text-foreground">
                      {value}
                    </p>
                    <p className="text-sm text-muted-foreground">{label}</p>
                  </div>
                ))}
              </div>
            </AnimatedGroup>

            <div className="relative z-10 flex justify-center">
              <div className="group relative w-full max-w-sm">
                <div className="absolute -inset-16 rounded-full bg-gradient-to-br from-primary/20 via-transparent to-accent/20 blur-3xl transition duration-700 group-hover:opacity-90" />
                <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.03] shadow-2xl shadow-primary/10 backdrop-blur-xl">
                  <div className="relative mx-auto flex flex-col gap-6 p-6">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10">
                      <Image
                        src="/source/p3.png"
                        alt="Bhathiya Lakshan"
                        fill
                        sizes="(min-width: 1024px) 320px, 60vw"
                        className="object-cover object-top"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                    </div>

                    <div className="absolute -left-10 bottom-14 hidden w-48 flex-col gap-1 rounded-2xl border border-white/10 bg-white/5 p-4 text-left shadow-lg shadow-primary/20 backdrop-blur-lg dark:border-white/15 lg:flex float-animation">
                      <p className="text-xs uppercase tracking-wide text-primary">
                        Latest build
                      </p>
                      <p className="text-sm font-medium text-foreground">
                        AI Image Generator
                      </p>
                      <span className="text-xs text-muted-foreground">
                        Gemini · Next.js · Cloudinary
                      </span>
                    </div>

                    <div className="absolute -right-8 top-10 hidden w-40 rounded-2xl border border-white/10 bg-white/5 p-4 text-left shadow-lg shadow-accent/10 backdrop-blur-lg dark:border-white/15 lg:block float-animation">
                      <p className="text-xs text-muted-foreground">
                        Availability
                      </p>
                      <p className="pt-1 text-sm font-semibold text-foreground">
                        Open for freelance
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
