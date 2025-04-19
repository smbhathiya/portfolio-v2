"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { AnimatedGroup } from "./ui/animated-group";
import { Button } from "./ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function AboutSection() {
  const [greeting, setGreeting] = useState("");
  const cvLink = process.env.NEXT_PUBLIC_CV_URL!;

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good morning");
    else if (hour < 18) setGreeting("Good afternoon");
    else setGreeting("Good evening");
  }, []);

  return (
    <section
      id="about"
      className="w-full px-4 md:px-10 pb-6 md:pb-10 pt-10 md:pt-20"
    >
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
        }}
      >
        <div className="mx-auto max-w-6xl">
          <Card className="flex flex-col md:flex-row items-center gap-8 p-6 md:p-10 rounded-2xl shadow-none border-0 bg-gray-100 dark:bg-neutral-900/50">
            {/* Right side - about content */}
            <CardContent className="text-center md:text-left space-y-4 items-center">
              <h2 className="text-3xl font-bold text-primary dark:text-primary">
                Hi, {greeting}!{" "}
                <span className="text-gray-700 dark:text-gray-400 font-bold">
                  I'm Bhathiya Lakshan
                </span>
              </h2>

              <p className="text-muted-foreground text-lg">
                I&apos;m a Full Stack Developer, passionate about building
                modern, high-performance platforms with clean architecture. I
                specialize in TypeScript, Next.js, Prisma, and .NET Entity
                Framework Core — and love creating systems that scale
                beautifully.
              </p>
              <p className="text-muted-foreground">
                Whether it&apos;s a full-stack platform, a CMS, a dashboard, or
                an API integration — I aim to deliver efficient, secure, and
                maintainable solutions for real-world problems
              </p>
              <Link href="#projects">
                <Button className="dark:text-black cursor-pointer">
                  View My Projects
                  <ChevronRight className="ml-2 inline-block size-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </AnimatedGroup>
    </section>
  );
}
