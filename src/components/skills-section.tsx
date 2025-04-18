"use client";

import { Card, CardContent } from "@/components/ui/card";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { skills } from "@/data/skills";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="w-full px-4 md:px-10 pb-6 md:pb-10 pt-10 md:pt-20"
    >
      <div className="mx-auto max-w-6xl">
        <Card className="p-6 md:p-10 rounded-2xl shadow-none border-0 bg-gray-100  dark:bg-neutral-900/40">
          <CardContent>
            <AnimatedGroup
              preset="zoom"
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4"
            >
              {skills.map(({ name, Icon }) => (
                <Card
                  key={name}
                  className="flex items-center gap-3 p-4 border-0 shadow-none dark:bg-neutral-950"
                >
                  <Icon className="w-6 h-6 text-primary dark:text-primary" />
                  <span className="text-black dark:text-white">{name}</span>
                </Card>
              ))}
            </AnimatedGroup>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
