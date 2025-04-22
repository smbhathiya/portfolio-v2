import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TextEffect } from "@/components/ui/text-effect";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { HeroHeader } from "@/components/hero5-header";

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
    <section>
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
                className="flex flex-col lg:flex-row items-center justify-between gap-8"
              >
                {/* Image Section */}
                <div className="flex-shrink-0 relative w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] group mb-10 shadow-none">
                  <div className="absolute inset-0 flex items-center justify-center opacity-60 group-hover:opacity-70 transition-opacity duration-300">
                    <div className="w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] bg-primary rounded-full blur-lg"></div>
                  </div>
                  <Image
                    src="/source/p3.png"
                    alt="Bhathiya Lakshan"
                    width={300}
                    height={300}
                    className="relative w-full h-full object-cover rounded-2xl transform transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Caption and Button Section */}
                <div className="text-center lg:text-left max-w-md">
                  <TextEffect
                    preset="fade-in-blur"
                    speedSegment={0.3}
                    as="h1"
                    className="text-4xl md:text-5xl lg:text-5xl font-bold whitespace-nowrap"
                  >
                    Bhathiya Lakshan
                  </TextEffect>
                  <TextEffect
                    per="line"
                    preset="fade-in-blur"
                    speedSegment={0.3}
                    delay={0.5}
                    as="p"
                    className="mt-4 text-lg md:text-xl dark:text-gray-300 "
                  >
                    Let&apos;s build the Future With Code & Creativity. Crafting
                    modern web applications with .NET, React, Next.js, and a
                    passion for innovation.
                  </TextEffect>
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
                    className="mt-8 flex justify-center lg:justify-start"
                  >
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="rounded-xl px-6  duration-300"
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
