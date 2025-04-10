"use client";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatedGroup } from "./ui/animated-group";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";

export default function AboutSection() {
  const [greeting, setGreeting] = useState("");
  const cvLink = process.env.NEXT_PUBLIC_CV_URL!;
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const imageSrc = theme === "dark" ? "/source/p2.png" : "/source/p1.png";

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good morning");
    else if (hour < 18) setGreeting("Good afternoon");
    else setGreeting("Good evening");
  }, []);

  if (!mounted) {
    return null;
  }

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
          <Card className="flex flex-col md:flex-row items-center gap-8 p-6 md:p-10 rounded-2xl shadow-lg">
            {/* Left side - profile image */}
            <div className="flex-shrink-0">
              <Image
                src={imageSrc}
                alt="Bhathiya Lakshan"
                width={250}
                height={250}
              />
            </div>

            {/* Right side - about content */}
            <CardContent className="text-center md:text-left space-y-4">
              <h2 className="text-3xl font-bold text-primary dark:text-primary">
                Hi, {greeting}!
                <br />
                I&apos;m Bhathiya Lakshan
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
              <Button
                className="dark:text-black cursor-pointer"
                onClick={() => window.open(cvLink)}
              >
                Download CV
              </Button>
            </CardContent>
          </Card>
        </div>
      </AnimatedGroup>
    </section>
  );
}
