import { ArrowUpRight, Github, Sparkles } from "lucide-react";

import { FloatingNav } from "@/components/floating-nav";
import { TechMarquee } from "@/components/tech-marquee";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="portfolio-grid-background h-svh overflow-hidden text-tealInk">
      <FloatingNav />

      <section
        id="home"
        className="relative flex h-svh flex-col items-center overflow-hidden px-5 pb-[clamp(5rem,12vh,8rem)] pt-24 text-center sm:px-8 sm:pt-28 lg:px-12"
      >
        <div className="relative z-10 mx-auto flex min-h-0 w-full max-w-6xl flex-1 flex-col items-center justify-center py-3 sm:py-4">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white/80 px-4 py-2 text-xs font-bold text-teal-800 shadow-sm backdrop-blur sm:mb-6 sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-teal-500" />
            <Sparkles className="h-4 w-4" aria-hidden />
            Full Stack Developer
          </div>

          <h1 className="text-balance text-4xl font-black leading-[1.02] tracking-normal text-tealInk sm:text-6xl lg:text-7xl xl:text-8xl">
            Building solutions
            <span className="block">that drive</span>
            <span className="mt-2 inline-flex rounded-xl bg-teal-700 px-4 py-1 text-white shadow-[0_20px_60px_rgba(13,148,136,0.24)] sm:mt-3 sm:px-6">
              Innovation.
            </span>
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8">
            Crafting beautiful, performant web applications with modern
            technologies. Specializing in full-stack development with Next.js,
            React, Node.js, APIs, databases, and practical AI workflows.
          </p>

          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:mt-8 sm:flex-row">
            <Button
              asChild
              className="h-11 rounded-full bg-teal-700 px-6 text-sm font-bold text-white hover:bg-teal-800 sm:h-12 sm:px-7 sm:text-base"
            >
              <a href="/projects">
                View Projects
                <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-11 rounded-full border-2 border-teal-700 bg-white/60 px-6 text-sm font-bold text-teal-900 hover:bg-teal-50 sm:h-12 sm:px-7 sm:text-base"
            >
              <a href="/contact">
                Contact Me
                <Github className="ml-2 h-4 w-4" aria-hidden />
              </a>
            </Button>
          </div>
        </div>

        <div className="relative z-10 w-screen">
          <TechMarquee />
        </div>
      </section>
    </main>
  );
}
