"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { AnimatedGroup } from "./ui/animated-group";
import { Button } from "./ui/button";
import Link from "next/link";
import { ChevronRight, Code, Globe, Database } from "lucide-react";

export default function AboutSection() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good morning");
    else if (hour < 18) setGreeting("Good afternoon");
    else setGreeting("Good evening");
  }, []);

  return (
    <section
      id="about"
      className="w-full px-4 md:px-10 pb-16 md:pb-24 pt-16 md:pt-28 relative"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-xl"></div>
        <div className="absolute top-1/4 left-1/4 w-[150px] h-[150px] bg-accent/5 rounded-full blur-lg"></div>
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 gradient-text inline-block">About Me</h2>
          <div className="section-divider max-w-[100px] mx-auto"></div>
        </div>

        <AnimatedGroup
          variants={{
            container: {
              visible: {
                transition: {
                  staggerChildren: 0.05,
                  delayChildren: 0.25,
                },
              },
            },
          }}
        >
          <Card className="flex flex-col md:flex-row items-center gap-8 p-8 md:p-10 rounded-2xl shadow-lg border border-primary/10 bg-gray-100/70 dark:bg-neutral-900/50 backdrop-blur-sm">
            {/* Left side - image or icon */}
            <div className="flex-shrink-0 w-[120px] h-[120px] rounded-full bg-gradient-to-tr from-primary/20 to-accent/20 flex items-center justify-center border border-primary/20 glow-effect">
              <span className="text-6xl gradient-text font-bold">B</span>
            </div>

            {/* Right side - about content */}
            <CardContent className="text-center md:text-left space-y-6 p-0">
              <h2 className="text-3xl font-bold">
                <span className="text-primary dark:text-primary">
                  Hi, {greeting}!{" "}
                </span>
                <span className="text-gray-700 dark:text-gray-400 font-bold">
                  I&apos;m Bhathiya Lakshan
                </span>
              </h2>

              <p className="text-muted-foreground text-lg leading-relaxed">
                I&apos;m a Full Stack Developer, passionate about building
                modern, high-performance platforms with clean architecture. I
                specialize in TypeScript, Next.js, Prisma, and .NET Entity
                Framework Core — and love creating systems that scale
                beautifully.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
                <div className="flex flex-col items-center md:items-start p-4 rounded-lg bg-white/10 dark:bg-black/10 border border-primary/10 hover-scale">
                  <div className="mb-2 p-2 rounded-full bg-primary/10">
                    <Code className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-medium">Frontend</h3>
                  <p className="text-sm text-muted-foreground">React, Next.js, TypeScript</p>
                </div>
                
                <div className="flex flex-col items-center md:items-start p-4 rounded-lg bg-white/10 dark:bg-black/10 border border-primary/10 hover-scale">
                  <div className="mb-2 p-2 rounded-full bg-primary/10">
                    <Database className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-medium">Backend</h3>
                  <p className="text-sm text-muted-foreground">.NET, Node.js, Prisma</p>
                </div>
                
                <div className="flex flex-col items-center md:items-start p-4 rounded-lg bg-white/10 dark:bg-black/10 border border-primary/10 hover-scale">
                  <div className="mb-2 p-2 rounded-full bg-primary/10">
                    <Globe className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-medium">Full Stack</h3>
                  <p className="text-sm text-muted-foreground">End-to-end Solutions</p>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                Whether it&apos;s a full-stack platform, a CMS, a dashboard, or
                an API integration — I aim to deliver efficient, secure, and
                maintainable solutions for real-world problems
              </p>
              
              <div className="flex justify-center md:justify-start pt-2">
                <Link href="#projects">
                  <Button className="bg-primary hover:bg-primary/90 text-white dark:text-white cursor-pointer hover-scale shadow-md shadow-primary/20">
                    View My Projects
                    <ChevronRight className="ml-2 inline-block size-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </AnimatedGroup>
      </div>
    </section>
  );
}
