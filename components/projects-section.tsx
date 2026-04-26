"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ArrowUpRight,
  Bot,
  Code2,
  CreditCard,
  Database,
  Filter,
  Gauge,
  Layers3,
  Maximize2,
  ServerCog,
  Sparkles,
  X
} from "lucide-react";

import { cn } from "@/lib/utils";

const projects = [
  {
    title: "VSMMC B2B System",
    category: "Full-stack App",
    description:
      "A production-style system for dashboards, user flows, API routes, and responsive business workflows.",
    icon: Layers3,
    tech: [
      "Next.js",
      "React",
      "Node.js",
      "MSSQL",
      "RESTful API",
      "Tailwind CSS"
    ],
    metrics: ["Responsive UI", "API routes", "Reusable components"],
    video: "/vsmmc-sotto.mp4"
  },
  {
    title: "Payment Workflow",
    category: "Payments",
    description:
      "A checkout-focused template for subscriptions, payment sessions, webhooks, and transaction states.",
    icon: CreditCard,
    tech: ["Stripe", "Next.js", "RESTful API", "Postman"],
    metrics: ["Checkout", "Webhooks", "Secure flow"]
  },
  {
    title: "API Platform",
    category: "Backend",
    description:
      "A backend project layout for structured endpoints, validation patterns, and service-based logic.",
    icon: ServerCog,
    tech: ["Node.js", "RESTful API", "Railway", "Postman"],
    metrics: ["Endpoints", "Services", "Deployment"]
  },
  {
    title: "Database Product",
    category: "Database",
    description:
      "A project template for relational data, admin workflows, reporting screens, and persistence.",
    icon: Database,
    tech: ["MSSQL", "MySQL", "Node.js", "TanStack Query"],
    metrics: ["Schema", "Queries", "Reports"]
  },
  {
    title: "AI Assisted Tool",
    category: "AI Workflow",
    description:
      "A practical AI product template for prompt workflows, automation panels, and assisted user actions.",
    icon: Bot,
    tech: ["OpenAI Codex", "React", "Next.js", "Tailwind CSS"],
    metrics: ["Prompts", "Automation", "UX states"]
  },
  {
    title: "Performance UI",
    category: "Frontend",
    description:
      "A frontend-heavy template for fast interfaces, reusable sections, loading states, and polished details.",
    icon: Gauge,
    tech: ["React", "Tailwind CSS", "TanStack Query", "GitHub"],
    metrics: ["Fast UI", "State", "Components"]
  }
];

const filters = [
  "All",
  ...Array.from(new Set(projects.map((project) => project.category)))
];

type Project = (typeof projects)[number];

function ProjectMockup({
  project,
  variant
}: {
  project: Project;
  variant: number;
}) {
  const Icon = project.icon;
  const isAlt = variant % 2 === 0;

  return (
    <div
      className={cn(
        "relative h-full overflow-hidden bg-[linear-gradient(145deg,#ecfdf5,#ccfbf1)] dark:bg-[linear-gradient(145deg,#052f2f,#075f56)]",
        isAlt && "bg-[linear-gradient(145deg,#f0fdfa,#e0f2fe)]"
      )}
    >
      <div className="absolute inset-0 opacity-[0.22] [background-image:linear-gradient(to_right,#0f766e_1px,transparent_1px),linear-gradient(to_bottom,#0f766e_1px,transparent_1px)] [background-size:22px_22px] dark:opacity-[0.12] dark:[background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]" />
      <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-teal-300/40 blur-3xl" />
      <div className="relative flex h-full items-center justify-center p-5">
        <div className="w-full rounded-lg border border-teal-200/80 bg-white/80 p-4 shadow-lg shadow-teal-900/10 backdrop-blur dark:border-white/15 dark:bg-white/10">
          <div className="mb-4 flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-rose-300" />
            <span className="h-2 w-2 rounded-full bg-amber-300" />
            <span className="h-2 w-2 rounded-full bg-emerald-300" />
          </div>
          <div className="space-y-3">
            <div className="h-3 w-4/5 rounded-full bg-teal-800/70 dark:bg-teal-50/80" />
            <div className="h-3 w-3/5 rounded-full bg-teal-700/30 dark:bg-white/30" />
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="flex aspect-square items-center justify-center rounded-md bg-teal-50 text-teal-700 ring-1 ring-teal-100 dark:bg-white/10 dark:text-teal-100 dark:ring-white/15">
                <Icon className="h-7 w-7" aria-hidden />
              </div>
              <div className="space-y-2 rounded-md bg-white/70 p-3 ring-1 ring-teal-100 dark:bg-white/10 dark:ring-white/15">
                {project.metrics.map((metric) => (
                  <div
                    key={metric}
                    className="h-2 rounded-full bg-teal-600/35 dark:bg-teal-100/35"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectMedia({
  project,
  index,
  onOpen
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) {
  if (project.video) {
    return (
      <button
        type="button"
        aria-label={`Open ${project.title} video preview`}
        onClick={onOpen}
        className="group/media relative block h-48 w-full overflow-hidden bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:bg-teal-950 dark:focus-visible:ring-offset-teal-950"
      >
        <video
          src={project.video}
          className="h-full w-full object-contain transition duration-300 group-hover/media:scale-[1.02]"
          muted
          loop
          playsInline
          autoPlay
          preload="metadata"
        />
        <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-tealInk/90 text-white opacity-0 shadow-lg backdrop-blur transition group-hover/media:opacity-100 dark:bg-teal-400 dark:text-teal-950">
          <Maximize2 className="h-4 w-4" aria-hidden />
        </span>
      </button>
    );
  }

  return (
    <div className="h-48">
      <ProjectMockup project={project} variant={index} />
    </div>
  );
}

export function ProjectsSection() {
  const [activePreview, setActivePreview] = useState<{
    video: string;
    title: string;
  } | null>(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const visibleProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  useEffect(() => {
    if (!activePreview) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActivePreview(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activePreview]);

  return (
    <section
      id="projects"
      className="relative px-5 pb-24 pt-[calc(6rem+30px)] sm:px-8 sm:pt-[calc(6rem+30px)] lg:px-12"
    >
      <div className="mx-auto w-full max-w-[100rem]">
        <div className="mx-auto flex max-w-xl items-center justify-center gap-3 text-center">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal-600 text-white shadow-[0_14px_38px_rgba(13,148,136,0.26)] dark:bg-teal-400 dark:text-teal-950">
            <Filter className="h-5 w-5" aria-hidden />
          </div>
          <div className="text-left">
            <h1 className="text-2xl font-black leading-tight text-tealInk sm:text-3xl">
              Explore Our Work
            </h1>
            <p className="mt-1 text-sm font-medium text-slate-600">
              Filter by project type and category
            </p>
          </div>
        </div>

        <div className="mx-auto mt-7 flex max-w-6xl flex-wrap justify-center gap-3">
          {filters.map((filter) => {
            const count =
              filter === "All"
                ? projects.length
                : projects.filter((project) => project.category === filter)
                    .length;
            const isActive = activeFilter === filter;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "inline-flex h-9 items-center gap-3 rounded-md border px-4 text-xs font-bold transition",
                  "border-teal-100 bg-white/[0.86] text-tealInk shadow-sm hover:-translate-y-0.5 hover:border-teal-300 hover:bg-teal-50",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
                  "dark:border-white/15 dark:bg-white/[0.08] dark:text-teal-50 dark:hover:bg-white/[0.12] dark:focus-visible:ring-offset-teal-950",
                  isActive &&
                    "border-teal-600 bg-teal-600 text-white hover:bg-teal-700 dark:border-teal-400 dark:bg-teal-400 dark:text-teal-950 dark:hover:bg-teal-300"
                )}
              >
                <span>{filter}</span>
                {filter !== "All" ? (
                  <span
                    className={cn(
                      "text-[0.65rem] font-black",
                      isActive ? "text-white/90 dark:text-teal-950" : "text-slate-500"
                    )}
                  >
                    {count}
                  </span>
                ) : null}
              </button>
            );
          })}
        </div>

        <div className="mx-auto mt-6 flex w-fit items-center gap-2 rounded-lg border border-teal-100 bg-teal-50/80 px-5 py-3 text-sm font-bold text-teal-800 shadow-sm dark:border-teal-300/20 dark:bg-teal-400/10 dark:text-teal-100">
          <Sparkles className="h-4 w-4" aria-hidden />
          Showing {visibleProjects.length}{" "}
          {activeFilter === "All" ? "projects" : activeFilter.toLowerCase()}
        </div>

        <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {visibleProjects.map((project, index) => {
            const Icon = project.icon;

            return (
              <article
                key={project.title}
                className="group overflow-hidden rounded-lg border border-teal-100 bg-white/[0.88] shadow-[0_16px_45px_rgba(13,148,136,0.10)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-[0_24px_70px_rgba(13,148,136,0.18)] dark:border-emerald-300/20 dark:bg-teal-950/[0.62] dark:shadow-[0_20px_60px_rgba(0,0,0,0.24)] dark:hover:border-emerald-300/45"
              >
                <div className="relative">
                  <ProjectMedia
                    project={project}
                    index={index}
                    onOpen={() => {
                      if (project.video) {
                        setActivePreview({
                          video: project.video,
                          title: project.title
                        });
                      }
                    }}
                  />

                  <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-md bg-teal-600 px-2.5 py-1 text-[0.68rem] font-black text-white shadow-lg dark:bg-teal-400 dark:text-teal-950">
                    <Icon className="h-3.5 w-3.5" aria-hidden />
                    {project.category}
                  </div>
                </div>

                <div className="p-5">
                  <h2 className="text-xl font-black leading-tight text-tealInk">
                    {project.title}
                  </h2>

                  <p className="mt-3 min-h-[4.5rem] text-sm leading-6 text-slate-600">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-teal-100 bg-teal-50 px-3 py-1 text-xs font-bold text-teal-800 dark:border-teal-300/20 dark:bg-teal-400/10 dark:text-teal-100"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center justify-between gap-3">
                    <a
                      href="#"
                      aria-label={`View ${project.title}`}
                      className="inline-flex items-center gap-1.5 text-sm font-black text-teal-700 transition hover:text-teal-900 dark:text-teal-200 dark:hover:text-white"
                    >
                      <ArrowUpRight className="h-4 w-4" aria-hidden />
                      Success Story
                    </a>

                    <a
                      href="#"
                      aria-label={`Open ${project.title} source`}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-teal-100 bg-white/70 text-teal-800 transition hover:border-teal-300 hover:bg-teal-50 dark:border-white/15 dark:bg-white/[0.08] dark:text-teal-100 dark:hover:bg-white/[0.12]"
                    >
                      <Code2 className="h-4 w-4" aria-hidden />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {activePreview ? (
        <div
          aria-modal="true"
          role="dialog"
          aria-label={`${activePreview.title} video preview`}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-tealInk/70 p-4 backdrop-blur-md dark:bg-black/78"
          onClick={() => setActivePreview(null)}
        >
          <div
            className="relative w-full max-w-7xl overflow-hidden rounded-lg border border-white/20 bg-white p-3 shadow-2xl dark:bg-teal-950"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close preview"
              onClick={() => setActivePreview(null)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-tealInk text-white shadow-lg transition hover:bg-teal-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 dark:bg-teal-400 dark:text-teal-950 dark:hover:bg-teal-300"
            >
              <X className="h-5 w-5" aria-hidden />
            </button>

            <div className="max-h-[86vh] overflow-auto rounded-md bg-black">
              <video
                src={activePreview.video}
                className="max-h-[86vh] w-full object-contain"
                controls
                autoPlay
                playsInline
              />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
