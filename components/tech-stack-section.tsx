"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Code2, Database, Layers3, ServerCog, Sparkles } from "lucide-react";

import { cn } from "@/lib/utils";

const filters = [
  "All Tech Stack",
  "Frontend Development",
  "Backend Development",
  "Database"
] as const;

const techStack = [
  {
    name: "React.js",
    category: "Frontend Development",
    logo: "/5.png",
    description: "Component-driven UI development for interactive interfaces."
  },
  {
    name: "Next.js",
    category: "Frontend Development",
    logo: "/10.png",
    description: "App Router, rendering, routing, and production web apps."
  },
  {
    name: "Tailwind CSS",
    category: "Frontend Development",
    logo: "/1.png",
    description: "Responsive styling, layout systems, and design consistency."
  },
  {
    name: "TanStack Query",
    category: "Frontend Development",
    logo: "/tech/tanstack-query.svg",
    description: "Server state, caching, loading states, and async data flows."
  },
  {
    name: "Node.js",
    category: "Backend Development",
    logo: "/9.png",
    description: "Backend runtime for APIs, services, and application logic."
  },
  {
    name: "RESTful API",
    category: "Backend Development",
    logo: "/4.png",
    description: "Structured endpoints and client-server communication."
  },
  {
    name: "Stripe",
    category: "Backend Development",
    logo: "/2.png",
    description: "Checkout, payments, subscriptions, and transaction workflows."
  },
  {
    name: "OpenAI Codex",
    category: "Backend Development",
    logo: "/8.png",
    description: "AI-assisted development and workflow acceleration."
  },
  {
    name: "Postman",
    category: "Backend Development",
    logo: "/7.png",
    description: "API request testing, validation, and debugging workflows."
  },
  {
    name: "Railway",
    category: "Backend Development",
    logo: "/6.png",
    description: "Deployment, hosting, and service environment management."
  },
  {
    name: "GitHub",
    category: "Backend Development",
    logo: "/tech/github.svg",
    description: "Source control, repositories, and collaboration workflow."
  },
  {
    name: "Microsoft SQL Server",
    category: "Database",
    logo: "/3.png",
    description: "Relational database systems, queries, and data workflows."
  },
  {
    name: "MySQL",
    category: "Database",
    logo: "/11.png",
    description: "Relational storage, SQL querying, and structured persistence."
  }
];

type Filter = (typeof filters)[number];

const categoryIcons = {
  "Frontend Development": Code2,
  "Backend Development": ServerCog,
  Database
};

export function TechStackSection() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All Tech Stack");

  const visibleTech = useMemo(() => {
    if (activeFilter === "All Tech Stack") {
      return techStack;
    }

    return techStack.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <section className="relative px-5 pb-24 pt-[calc(6rem+30px)] sm:px-8 sm:pt-[calc(6rem+30px)] lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white/80 px-4 py-2 text-sm font-bold text-teal-800 shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-teal-500" />
            <Sparkles className="h-4 w-4" aria-hidden />
            Tech Stack
          </div>

         

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Browse my stack by development area. Each tool supports the way I
            design, build, test, and ship practical web applications.
          </p>
        </div>

        <div className="mx-auto mt-10 flex w-fit max-w-full overflow-x-auto rounded-md bg-slate-100 p-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "h-10 shrink-0 rounded-md px-4 text-sm font-bold text-slate-600 transition",
                "hover:bg-white/80 hover:text-teal-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 dark:hover:bg-white/10 dark:hover:text-teal-50",
                activeFilter === filter &&
                  "bg-white text-tealInk shadow-sm shadow-slate-200 dark:bg-teal-400 dark:text-teal-950 dark:shadow-none"
              )}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="relative left-1/2 mt-10 grid w-[min(calc(100vw-2rem),96rem)] -translate-x-1/2 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {visibleTech.map((item) => {
            const Icon =
              categoryIcons[item.category as keyof typeof categoryIcons] ??
              Layers3;

            return (
              <article
                key={item.name}
                className="group relative overflow-hidden rounded-lg border border-emerald-300/35 bg-[linear-gradient(145deg,#053b38_0%,#075f56_50%,#0f766e_100%)] p-6 shadow-[0_20px_60px_rgba(4,47,46,0.24)] ring-1 ring-white/10 transition duration-300 hover:-translate-y-1 hover:border-emerald-200/70 hover:shadow-[0_26px_80px_rgba(4,47,46,0.32)]"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(45,212,191,0.26),transparent_30%),radial-gradient(circle_at_88%_12%,rgba(16,185,129,0.18),transparent_28%)]" />
                <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(to_right,rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.7)_1px,transparent_1px)] [background-size:22px_22px]" />
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-teal-700 via-cyan-400 to-emerald-300" />

                <div className="relative">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-24 shrink-0 items-center justify-center rounded-md bg-white/95 p-2 shadow-sm shadow-teal-950/5 ring-1 ring-teal-100">
                      <Image
                        src={item.logo}
                        alt={item.name}
                        width={600}
                        height={100}
                        className="h-full w-full object-contain"
                      />
                    </div>

                    <div className="min-w-0">
                      <h2 className="text-lg font-black uppercase text-white">
                        {item.name}
                      </h2>
                      <div className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-white/12 px-2.5 py-1 text-xs font-bold text-teal-50 shadow-sm ring-1 ring-white/20">
                        <Icon className="h-3.5 w-3.5" aria-hidden />
                        {item.category}
                      </div>
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-teal-50/85">
                    {item.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
