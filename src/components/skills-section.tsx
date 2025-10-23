"use client";

import { Card } from "@/components/ui/card";
import { skills } from "@/data/skills";
import React, { useState, useRef, useEffect } from "react";

const highlightStacks = [
  "Frontend engineering",
  "API design & data modeling",
  "Developer experience automation",
];

export default function SkillsSection() {
  const [animationPaused, setAnimationPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  // Create enough duplicates to ensure seamless looping
  const skillsRow = [...skills, ...skills, ...skills];

  // Calculate and set the skills-width CSS variable
  useEffect(() => {
    if (trackRef.current) {
      const singleSetWidth = trackRef.current.scrollWidth / 3;
      trackRef.current.style.setProperty(
        "--skills-width",
        `${singleSetWidth}px`
      );
    }
  }, []);

  return (
    <section
      id="skills"
      className="relative w-full overflow-hidden px-4 pb-20 pt-20 md:px-10 md:pb-28"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute -right-10 top-10 h-48 w-48 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute left-1/5 bottom-4 h-64 w-64 rounded-full bg-accent/15 blur-[130px]" />
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.3em] text-muted-foreground backdrop-blur">
            Skills
          </span>
          <h2 className="text-3xl font-semibold leading-tight text-foreground md:text-4xl lg:text-5xl">
            A toolkit for building polished, production-ready products
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">
            Tooling that keeps delivery fast, maintainable, and a joy to work
            in—spanning UI, APIs, and DevOps.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 pb-10">
          {highlightStacks.map((label) => (
            <span
              key={label}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-tight text-foreground/70 backdrop-blur"
            >
              {label}
            </span>
          ))}
        </div>

        <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/[0.03] p-10 shadow-xl shadow-primary/10 backdrop-blur-xl">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/20 via-transparent to-transparent opacity-40" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/20 via-transparent to-transparent opacity-40" />

          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-background via-background/80 to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-background via-background/80 to-transparent" />

          <div
            className="skills-wrapper overflow-hidden py-6"
            onMouseEnter={() => setAnimationPaused(true)}
            onMouseLeave={() => setAnimationPaused(false)}
          >
            <div
              ref={trackRef}
              className={`skills-track flex gap-10 ${
                animationPaused ? "pause-animation" : ""
              }`}
            >
              {skillsRow.map((skill, index) => (
                <Card
                  key={`skill-${index}`}
                  className="group flex h-36 min-w-40 flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 text-center shadow-lg shadow-primary/5 backdrop-blur transition duration-300 hover:translate-y-[-6px] hover:border-primary/40"
                >
                  <div className="flex size-16 items-center justify-center rounded-full bg-gradient-to-br from-primary/15 to-accent/15 text-primary transition duration-300 group-hover:from-primary/25 group-hover:to-accent/25">
                    <skill.Icon className="size-7" />
                  </div>
                  <span className="text-sm font-medium text-foreground md:text-base">
                    {skill.name}
                  </span>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
