"use client";

import { Mail, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { AnimatedGroup } from "./ui/animated-group";

// Set specific contact information
const email = "info@bhathiya.dev";
const whatsApp = "94723095865";

// Social links
const twitter = process.env.NEXT_PUBLIC_TWITTER_URL || "#";
const linkedin = process.env.NEXT_PUBLIC_LINKEDIN_URL || "#";
const facebook = process.env.NEXT_PUBLIC_FACEBOOK_URL || "#";
const threads = process.env.NEXT_PUBLIC_THREADS_URL || "#";
const instagram = process.env.NEXT_PUBLIC_INSTAGRAM_URL || "#";
const github = process.env.NEXT_PUBLIC_GITHUB_URL || "#";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative bg-background px-4 py-24 sm:px-8 md:px-16 lg:px-32"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 h-[320px] w-[320px] rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute left-1/4 top-1/2 h-[260px] w-[260px] rounded-full bg-accent/15 blur-[140px]" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.3em] text-muted-foreground backdrop-blur">
            Contact
          </span>
          <h2 className="inline-block text-3xl font-semibold leading-tight text-foreground md:text-4xl lg:text-5xl">
            Let&apos;s build something memorable together
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">
            Whether you need a full-stack partner, a design system lead, or
            hands-on engineering firepower, I’m ready to collaborate.
          </p>
        </div>

        <AnimatedGroup
          variants={{
            container: {
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            },
            item: {
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                },
              },
            },
          }}
          className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]"
        >
          {/* Left side - Message + Social Links */}
          <div className="space-y-6">
            <Card className="rounded-3xl border-white/10 bg-white/[0.05] p-0 shadow-xl shadow-primary/15 backdrop-blur-xl">
              <CardContent className="space-y-4 p-8 md:p-10">
                <h3 className="text-2xl font-semibold text-foreground">
                  Let&apos;s connect
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground">
                  I&apos;m currently open to collaborations, remote-first roles,
                  and product consulting. Drop a message and we&apos;ll shape a
                  roadmap that works for your team.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-wide text-muted-foreground">
                    Remote friendly
                  </span>
                  <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-wide text-muted-foreground">
                    Rapid prototyping
                  </span>
                  <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-wide text-muted-foreground">
                    Outcome focused
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-white/10 bg-white/[0.03] p-0 shadow-lg shadow-primary/10 backdrop-blur-xl">
              <CardContent className="space-y-6 p-8">
                <h3 className="text-lg font-semibold text-foreground">
                  Find me online
                </h3>
                <p className="text-sm text-muted-foreground">
                  Follow along, reach out, or simply say hi — I share work in
                  progress, experiments, and insights regularly.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                    className="rounded-full border border-white/15 bg-white/5 p-3 text-foreground transition-all duration-300 hover:border-primary/40 hover:bg-primary/10"
                  >
                    <svg
                      className="size-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z"
                      />
                    </svg>
                  </a>

                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="rounded-full border border-white/15 bg-white/5 p-3 text-foreground transition-all duration-300 hover:border-primary/40 hover:bg-primary/10"
                  >
                    <svg
                      className="size-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                      />
                    </svg>
                  </a>

                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="rounded-full border border-white/15 bg-white/5 p-3 text-foreground transition-all duration-300 hover:border-primary/40 hover:bg-primary/10"
                  >
                    <svg
                      className="size-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.173c-3.338.726-4.033-1.415-4.033-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.776.42-1.305.763-1.605-2.665-.303-5.467-1.334-5.467-5.931 0-1.31.468-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.12 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.807 5.625-5.48 5.921.431.372.815 1.104.815 2.223v3.293c0 .322.218.694.825.576C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>

                  <a
                    href={facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="rounded-full border border-white/15 bg-white/5 p-3 text-foreground transition-all duration-300 hover:border-primary/40 hover:bg-primary/10"
                  >
                    <svg
                      className="size-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
                      />
                    </svg>
                  </a>

                  <a
                    href={instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="rounded-full border border-white/15 bg-white/5 p-3 text-foreground transition-all duration-300 hover:border-primary/40 hover:bg-primary/10"
                  >
                    <svg
                      className="size-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
                      />
                    </svg>
                  </a>

                  <a
                    href={threads}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Threads"
                    className="rounded-full border border-white/15 bg-white/5 p-3 text-foreground transition-all duration-300 hover:border-primary/40 hover:bg-primary/10"
                  >
                    <svg
                      className="size-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M19.25 8.505c-1.577-5.867-7-5.5-7-5.5s-7.5-.5-7.5 8.995s7.5 8.996 7.5 8.996s4.458.296 6.5-3.918c.667-1.858.5-5.573-6-5.573c0 0-3 0-3 2.5c0 .976 1 2 2.5 2s3.171-1.027 3.5-3c1-6-4.5-6.5-6-4"
                      />
                    </svg>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right side - Contact Actions */}
          <Card className="space-y-6 rounded-3xl border-white/10 bg-white/[0.05] p-0 shadow-xl shadow-primary/15 backdrop-blur-xl">
            <div className="mb-6">
              <h3 className="px-8 pt-8 text-2xl font-semibold text-foreground">
                Ready when you are
              </h3>
              <p className="px-8 text-sm text-muted-foreground">
                Prefer direct outreach? Pick a channel and let&apos;s start a
                conversation.
              </p>
            </div>

            <div className="flex flex-col gap-4 px-8 pb-8">
              <Button
                asChild
                variant="outline"
                className="group gap-2 rounded-2xl border-white/20 bg-white/5 p-6 text-left backdrop-blur hover:border-primary/40"
              >
                <a
                  href={`mailto:${email}`}
                  className="flex justify-between items-center w-full"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-primary/10 text-primary">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <div className="font-medium text-foreground">Email</div>
                      <div className="text-sm text-muted-foreground">
                        {email}
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                className="group gap-2 rounded-2xl border-white/20 bg-white/5 p-6 text-left backdrop-blur hover:border-primary/40"
              >
                <a
                  href={`https://wa.me/${whatsApp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-between items-center w-full"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-primary/10 text-primary">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <div className="font-medium text-foreground">
                        WhatsApp
                      </div>
                      <div className="text-sm text-muted-foreground">
                        +{whatsApp}
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                </a>
              </Button>
            </div>
          </Card>
        </AnimatedGroup>
      </div>
    </section>
  );
}
