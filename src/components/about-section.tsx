"use client";
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedGroup } from "./ui/animated-group";
import { Button } from "./ui/button";
import Link from "next/link";
import { ChevronRight, Code, Globe, Database } from "lucide-react";
import projectsData from "@/data/projects";

const capabilities = [
  {
    title: "Interface engineering",
    description:
      "Component-driven UI with polished micro-interactions and accessibility baked in.",
    icon: Code,
  },
  {
    title: "Platform architecture",
    description:
      "Scalable APIs with Prisma, SQL, and .NET that keep data flowing reliably.",
    icon: Database,
  },
  {
    title: "Product partnership",
    description:
      "Collaborative delivery with designers and stakeholders across time zones.",
    icon: Globe,
  },
];

const buildSteps = [
  {
    title: "Discover & align",
    description:
      "Translate ideas into user flows, success metrics, and a roadmap everyone understands.",
  },
  {
    title: "Design & iterate",
    description:
      "Shape design systems, prototypes, and feedback loops that keep the experience cohesive.",
  },
  {
    title: "Ship & evolve",
    description:
      "Automate testing, CI/CD, and observability so releases feel calm and maintainable.",
  },
];

const stats = [
  { label: "Primary stack", value: "Next.js • TypeScript • .NET" },
  { label: "Based in", value: "Kadawatha, Sri Lanka" },
];

export default function AboutSection() {
  const [greeting, setGreeting] = useState("there");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good morning");
    else if (hour < 18) setGreeting("Good afternoon");
    else setGreeting("Good evening");
  }, []);

  return (
    <section
      id="about"
      className="relative w-full px-4 pb-20 pt-20 md:px-10 md:pb-28 md:pt-32"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-20 top-10 h-48 w-48 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute right-6 top-1/4 h-56 w-56 rounded-full bg-accent/15 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-primary/5 blur-[110px]" />
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.3em] text-muted-foreground backdrop-blur">
            About
          </span>
          <h2 className="mx-auto max-w-3xl text-3xl font-semibold leading-tight text-foreground md:text-4xl lg:text-5xl">
            A developer who cares about craft and outcomes
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">
            From product discovery to post-launch iteration, I partner with
            teams to build experiences that are beautiful, fast, and resilient.
          </p>
        </div>

        <AnimatedGroup
          variants={{
            container: {
              visible: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            },
            item: {
              hidden: { opacity: 0, y: 24 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.7,
                },
              },
            },
          }}
          className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]"
        >
          <Card className="rounded-3xl border-white/10 bg-white/[0.04] p-0 shadow-xl shadow-primary/10 backdrop-blur-xl">
            <CardContent className="space-y-10 p-8 md:p-10">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
                <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-primary/30 via-primary/10 to-accent/25 text-4xl font-semibold text-primary shadow-lg shadow-primary/30">
                  B
                </div>
                <div className="space-y-4 text-left">
                  <p className="text-xs uppercase tracking-[0.35em] text-primary">
                    {greeting}, I&apos;m
                  </p>
                  <h3 className="text-3xl font-semibold text-foreground md:text-4xl">
                    Bhathiya Lakshan
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                    Full-stack web developer blending thoughtful interface
                    design with scalable backend architecture. I love turning
                    concepts into shipped products that feel effortless for end
                    users and maintainable for teams.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 pt-2 sm:grid-cols-3">
                {capabilities.map(({ title, description, icon: Icon }) => (
                  <div
                    key={title}
                    className="flex h-full flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 text-left backdrop-blur transition hover:border-primary/40"
                  >
                    <div className="flex size-11 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{title}</p>
                      <p className="pt-1 text-sm text-muted-foreground">
                        {description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid gap-4 pt-4 sm:grid-cols-3">
                {stats.map(({ label, value }) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 text-left backdrop-blur"
                  >
                    <p className="text-lg font-semibold text-foreground">
                      {value}
                    </p>
                    <p className="text-sm text-muted-foreground">{label}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button
                  asChild
                  className="rounded-full px-6 shadow-lg shadow-primary/15"
                >
                  <Link href="#projects">
                    Explore projects
                    <ChevronRight className="ml-2 size-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            <Card className="rounded-3xl border-white/10 bg-white/[0.05] p-0 shadow-lg shadow-primary/15 backdrop-blur-xl">
              <CardContent className="space-y-6 p-8">
                <h3 className="text-xl font-semibold text-foreground">
                  How I build
                </h3>
                <p className="text-sm text-muted-foreground">
                  A calm, deliberate process that keeps stakeholders aligned and
                  codebases healthy.
                </p>
                <div className="space-y-4">
                  {buildSteps.map(({ title, description }, index) => (
                    <div
                      key={title}
                      className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
                    >
                      <span className="mt-1 flex size-9 items-center justify-center rounded-full bg-primary/15 text-sm font-semibold text-primary">
                        {index + 1}
                      </span>
                      <div>
                        <p className="font-medium text-foreground">{title}</p>
                        <p className="text-sm text-muted-foreground">
                          {description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-white/10 bg-gradient-to-br from-primary/15 via-transparent to-accent/10 p-0 shadow-lg shadow-primary/10 backdrop-blur-xl">
              <CardContent className="space-y-6 p-8">
                <h3 className="text-xl font-semibold text-foreground">
                  What we can craft together
                </h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 size-2 rounded-full bg-primary" />
                    SaaS platforms, dashboards, and internal tools that scale
                    gracefully.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 size-2 rounded-full bg-primary" />
                    Design systems that accelerate delivery without sacrificing
                    quality.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 size-2 rounded-full bg-primary" />
                    Integrations across APIs, data sources, and services with
                    clear documentation.
                  </li>
                </ul>

                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-white/30 bg-white/5 px-6 backdrop-blur hover:border-primary/50"
                >
                  <Link href="#contact">
                    Let&apos;s collaborate
                    <ChevronRight className="ml-2 size-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </AnimatedGroup>
      </div>
    </section>
  );
}
