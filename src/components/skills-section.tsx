"use client";

import { Card } from "@/components/ui/card";
import { skills } from "@/data/skills";
import React, { useState, useRef, useEffect } from 'react';

export default function SkillsSection() {
  const [animationPaused, setAnimationPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  // Create enough duplicates to ensure seamless looping
  const skillsRow = [...skills, ...skills, ...skills];
  
  // Calculate and set the skills-width CSS variable
  useEffect(() => {
    if (trackRef.current) {
      const singleSetWidth = trackRef.current.scrollWidth / 3;
      trackRef.current.style.setProperty('--skills-width', `${singleSetWidth}px`);
    }
  }, []);

  return (
    <section
      id="skills"
      className="w-full px-4 md:px-10 py-16 md:py-20 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-[200px] h-[200px] bg-primary/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[150px] h-[150px] bg-accent/5 rounded-full blur-lg"></div>
      </div>
      
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 gradient-text inline-block">My Skills</h2>
          <div className="section-divider max-w-[100px] mx-auto"></div>
          <p className="max-w-2xl mx-auto text-muted-foreground mt-6">
            Technologies and tools I work with
          </p>
        </div>
        
        <div className="relative w-full">
          {/* Left fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none"></div>
          
          {/* Right fade effect */}
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none"></div>

          {/* Infinite scroll wrapper */}
          <div 
            className="skills-wrapper overflow-hidden py-6"
            onMouseEnter={() => setAnimationPaused(true)}
            onMouseLeave={() => setAnimationPaused(false)}
          >
            {/* Single continuous row of skills */}
            <div 
              ref={trackRef}
              className={`skills-track flex gap-10 ${animationPaused ? 'pause-animation' : ''}`}
            >
              {skillsRow.map((skill, index) => (
                <Card
                  key={`skill-${index}`}
                  className="flex flex-col items-center justify-center min-w-36 h-36 p-5 border border-primary/10 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 bg-white/5 dark:bg-black/5 backdrop-blur-sm group hover:scale-105"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-primary/10 to-accent/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300">
                    <skill.Icon className="w-8 h-8 text-primary dark:text-primary" />
                  </div>
                  <span className="text-foreground font-medium text-center mt-3 text-base">{skill.name}</span>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
