"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Code2, Database, Layers3, ServerCog, Sparkles } from "lucide-react";

import { cn } from "@/lib/utils";

const categoryOrder = [
  "Frontend Development",
  "Backend Development",
  "Database"
] as const;

const filters = ["All Tech Stack", ...categoryOrder] as const;

type Category = (typeof categoryOrder)[number];
type Filter = (typeof filters)[number];

type TechItem = {
  name: string;
  category: Category;
  logo?: string;
  fallback?: string;
  description: string;
  focus: string;
};

const categoryMeta: Record<
  Category,
  {
    icon: typeof Code2;
    summary: string;
  }
> = {
  "Frontend Development": {
    icon: Code2,
    summary: "Interfaces, state, styling, and smooth client-side workflows."
  },
  "Backend Development": {
    icon: ServerCog,
    summary: "APIs, payments, deployment, tooling, and production workflows."
  },
  Database: {
    icon: Database,
    summary: "Relational data, SQL querying, and structured persistence."
  }
};

const techStack: TechItem[] = [
  {
    name: "React.js",
    category: "Frontend Development",
    logo: "/5.png",
    description: "Component-driven UI development for interactive interfaces.",
    focus: "UI foundation"
  },
  {
    name: "Next.js",
    category: "Frontend Development",
    logo: "/10.png",
    description: "App Router, rendering, routing, and production web apps.",
    focus: "Full-stack framework"
  },
  {
    name: "Tailwind CSS",
    category: "Frontend Development",
    logo: "/1.png",
    description: "Responsive styling, layout systems, and design consistency.",
    focus: "Design system"
  },
  {
    name: "TanStack Query",
    category: "Frontend Development",
    fallback: "TQ",
    description: "Server state, caching, loading states, and async data flows.",
    focus: "Server state"
  },
  {
    name: "Node.js",
    category: "Backend Development",
    logo: "/9.png",
    description: "Backend runtime for APIs, services, and application logic.",
    focus: "Runtime"
  },
  {
    name: "RESTful API",
    category: "Backend Development",
    logo: "/4.png",
    description: "Structured endpoints and client-server communication.",
    focus: "API design"
  },
  {
    name: "Stripe",
    category: "Backend Development",
    logo: "/2.png",
    description: "Checkout, payments, subscriptions, and transaction workflows.",
    focus: "Payments"
  },
  {
    name: "OpenAI Codex",
    category: "Backend Development",
    logo: "/8.png",
    description: "AI-assisted development and workflow acceleration.",
    focus: "AI workflow"
  },
  {
    name: "Postman",
    category: "Backend Development",
    logo: "/7.png",
    description: "API request testing, validation, and debugging workflows.",
    focus: "API testing"
  },
  {
    name: "Railway",
    category: "Backend Development",
    logo: "/6.png",
    description: "Deployment, hosting, and service environment management.",
    focus: "Deployment"
  },
  {
    name: "GitHub",
    category: "Backend Development",
    fallback: "GH",
    description: "Source control, repositories, and collaboration workflow.",
    focus: "Version control"
  },
  {
    name: "Microsoft SQL Server",
    category: "Database",
    logo: "/3.png",
    description: "Relational database systems, queries, and data workflows.",
    focus: "Enterprise SQL"
  },
  {
    name: "MySQL",
    category: "Database",
    logo: "/11.png",
    description: "Relational storage, SQL querying, and structured persistence.",
    focus: "Relational data"
  }
];

function TechLogo({ item }: { item: TechItem }) {
  return (
    <div className="flex h-14 w-24 shrink-0 items-center justify-center rounded-md border border-slate-200 bg-white px-3 py-2 shadow-sm shadow-slate-900/5 dark:border-white/15 dark:bg-white/90">
      {item.logo ? (
        <Image
          src={item.logo}
          alt={item.name}
          width={320}
          height={120}
          className="max-h-9 w-full object-contain"
        />
      ) : (
        <span className="text-sm font-black tracking-[0.18em] text-teal-700">
          {item.fallback}
        </span>
      )}
    </div>
  );
}

function TechEntry({ item }: { item: TechItem }) {
  const Icon = categoryMeta[item.category].icon;

  return (
    <article className="group flex min-h-32 gap-4 bg-white/[0.88] p-5 transition hover:bg-teal-50/60 dark:bg-white/[0.06] dark:hover:bg-white/[0.1]">
      <TechLogo item={item} />

      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-base font-black uppercase tracking-wide text-tealInk dark:text-teal-50">
            {item.name}
          </h3>
          <span className="inline-flex items-center gap-1 rounded-full border border-teal-100 bg-white px-2.5 py-1 text-[0.68rem] font-bold text-teal-700 dark:border-teal-300/20 dark:bg-white/10 dark:text-teal-100">
            <Icon className="h-3 w-3" aria-hidden />
            {item.focus}
          </span>
        </div>

        <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
          {item.description}
        </p>
      </div>
    </article>
  );
}

function CategoryGroup({
  category,
  items
}: {
  category: Category;
  items: TechItem[];
}) {
  const meta = categoryMeta[category];
  const Icon = meta.icon;

  return (
    <section className="overflow-hidden rounded-xl border border-teal-100/80 bg-white/70 shadow-[0_18px_55px_rgba(13,148,136,0.08)] backdrop-blur dark:border-white/10 dark:bg-white/[0.04]">
      <div className="flex flex-col gap-4 border-b border-teal-100/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.95),rgba(240,253,250,0.72))] p-5 sm:flex-row sm:items-center sm:justify-between dark:border-white/10 dark:bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(20,184,166,0.08))]">
        <div className="flex items-center gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-tealInk text-white shadow-sm dark:bg-teal-400 dark:text-teal-950">
            <Icon className="h-5 w-5" aria-hidden />
          </div>

          <div>
            <h2 className="text-xl font-black text-tealInk dark:text-teal-50">
              {category}
            </h2>
            <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
              {meta.summary}
            </p>
          </div>
        </div>

        <span className="w-fit rounded-full border border-teal-100 bg-white px-3 py-1 text-xs font-black text-teal-700 shadow-sm dark:border-teal-300/20 dark:bg-white/10 dark:text-teal-100">
          {items.length} tools
        </span>
      </div>

      <div className="grid gap-px bg-slate-100/80 md:grid-cols-2 xl:grid-cols-3 dark:bg-white/10">
        {items.map((item) => (
          <TechEntry key={item.name} item={item} />
        ))}
      </div>
    </section>
  );
}

export function TechStackSection() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All Tech Stack");

  const visibleGroups = useMemo(() => {
    const visibleCategories =
      activeFilter === "All Tech Stack" ? categoryOrder : [activeFilter];

    return visibleCategories.map((category) => ({
      category,
      items: techStack.filter((item) => item.category === category)
    }));
  }, [activeFilter]);

  return (
    <section className="relative px-5 pb-24 pt-[calc(6rem+30px)] sm:px-8 lg:px-12">
      <div className="mx-auto w-full max-w-[92rem]">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white/85 px-4 py-2 text-sm font-bold text-teal-800 shadow-sm backdrop-blur dark:border-teal-300/20 dark:bg-white/10 dark:text-teal-100">
            <span className="h-2 w-2 rounded-full bg-teal-500" />
            <Sparkles className="h-4 w-4" aria-hidden />
            Tech Stack
          </div>

          <h1 className="text-4xl font-black leading-tight text-tealInk sm:text-5xl lg:text-6xl dark:text-teal-50">
            Tools I use to build reliable web applications.
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-300">
            A practical stack organized by where each tool fits in my workflow:
            frontend interfaces, backend systems, and relational data.
          </p>
        </div>

        <div className="mx-auto mt-10 flex w-fit max-w-full overflow-x-auto rounded-full border border-slate-200 bg-white/80 p-1 shadow-sm [scrollbar-width:none] [&::-webkit-scrollbar]:hidden dark:border-white/10 dark:bg-white/[0.06]">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "h-10 shrink-0 rounded-full px-4 text-sm font-bold text-slate-600 transition",
                "hover:bg-teal-50 hover:text-teal-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-teal-50 dark:focus-visible:ring-offset-teal-950",
                activeFilter === filter &&
                  "bg-tealInk text-white shadow-sm hover:bg-teal-800 hover:text-white dark:bg-teal-400 dark:text-teal-950 dark:hover:bg-teal-300 dark:hover:text-teal-950"
              )}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-10 space-y-6">
          {visibleGroups.map((group) => (
            <CategoryGroup
              key={group.category}
              category={group.category}
              items={group.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
