"use client";

import { Card, CardContent } from "@/components/ui/card";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { skills } from "@/data/skills";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="w-full px-4 md:px-10 pt-6 md:pt-10 pb-10 md:pb-20"
    >
      <div className="mx-auto max-w-6xl">
        <Card className="p-6 md:p-10 rounded-2xl shadow-lg">
          <CardContent>
            <AnimatedGroup
              preset="zoom"
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4"
            >
              {skills.map(({ name, Icon }) => (
                <Card key={name} className="flex items-center gap-3 p-4">
                  <Icon className="w-6 h-6 text-black dark:text-primary" />
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
