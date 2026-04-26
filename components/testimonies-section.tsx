import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  MessageSquareQuote,
  Sparkles,
  Star,
  UserRound
} from "lucide-react";

const testimonies = [
  {
    quote:
      "Replace this with a short note from a client, lead, or teammate about the quality of your work.",
    name: "Client or Team Lead",
    role: "Project Stakeholder",
    context: "Production Work",
    highlight: "Reliable delivery"
  },
  {
    quote:
      "Use this space for feedback about your communication, problem solving, and ability to build useful features.",
    name: "Collaborator Name",
    role: "Developer / Designer",
    context: "Team Collaboration",
    highlight: "Clear communication"
  },
  {
    quote:
      "Add a real quote here that explains the impact of the project, not just that the work looked good.",
    name: "Reference Name",
    role: "Manager / Mentor",
    context: "Technical Growth",
    highlight: "Practical solutions"
  }
];

const trustPoints = [
  {
    title: "Full-time ready",
    description: "Prepared for consistent product work, team routines, and ownership.",
    icon: BriefcaseBusiness
  },
  {
    title: "Clear handoff",
    description: "Keeps implementation details understandable for future maintenance.",
    icon: BadgeCheck
  },
  {
    title: "Collaborative",
    description: "Comfortable discussing requirements, tradeoffs, and next steps.",
    icon: UserRound
  }
];

export function TestimoniesSection() {
  return (
    <section
      id="testimonies"
      className="relative px-5 pb-24 pt-[calc(6rem+30px)] sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white/85 px-4 py-2 text-sm font-bold text-teal-800 shadow-sm backdrop-blur dark:border-teal-300/20 dark:bg-white/10 dark:text-teal-100">
            <span className="h-2 w-2 rounded-full bg-teal-500" />
            <Sparkles className="h-4 w-4" aria-hidden />
            Testimonies
          </div>

          <h1 className="text-balance text-4xl font-black leading-tight text-tealInk sm:text-6xl lg:text-7xl dark:text-teal-50">
            Credible feedback from the people I work with.
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-300">
            A clean space for real client, mentor, and teammate feedback. These
            slots are ready to replace with verified quotes as you collect them.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
          <aside className="rounded-xl border border-teal-100 bg-white/82 p-6 shadow-[0_18px_55px_rgba(13,148,136,0.1)] backdrop-blur dark:border-white/10 dark:bg-white/[0.05]">
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-tealInk text-white shadow-sm dark:bg-teal-400 dark:text-teal-950">
              <MessageSquareQuote className="h-6 w-6" aria-hidden />
            </div>

            <h2 className="mt-6 text-3xl font-black leading-tight text-tealInk dark:text-teal-50">
              Keep every quote specific, honest, and easy to verify.
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
              The best testimonials mention the project context, the problem
              solved, and what made the collaboration valuable.
            </p>

            <div className="mt-7 space-y-3">
              {trustPoints.map((point) => {
                const Icon = point.icon;

                return (
                  <div
                    key={point.title}
                    className="flex gap-3 rounded-lg border border-teal-100 bg-white/75 p-4 dark:border-white/10 dark:bg-white/[0.06]"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-teal-50 text-teal-700 ring-1 ring-teal-100 dark:bg-teal-400/10 dark:text-teal-100 dark:ring-teal-300/20">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <div>
                      <h3 className="text-sm font-black text-tealInk dark:text-teal-50">
                        {point.title}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
                        {point.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </aside>

          <div className="space-y-5">
            {testimonies.map((item, index) => (
              <article
                key={item.highlight}
                className="group relative overflow-hidden rounded-xl border border-teal-100 bg-white/86 p-5 shadow-[0_18px_55px_rgba(13,148,136,0.08)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-[0_24px_70px_rgba(13,148,136,0.14)] dark:border-white/10 dark:bg-white/[0.05] dark:hover:border-teal-300/40"
              >
                <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-teal-700 via-cyan-400 to-emerald-300" />

                <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-teal-100 bg-teal-50 text-teal-700 shadow-sm dark:border-teal-300/20 dark:bg-teal-400/10 dark:text-teal-100">
                    <MessageSquareQuote className="h-6 w-6" aria-hidden />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-tealInk px-3 py-1 text-xs font-black text-white dark:bg-teal-400 dark:text-teal-950">
                        {item.context}
                      </span>
                      <span className="rounded-full border border-teal-100 bg-white px-3 py-1 text-xs font-black text-teal-700 dark:border-teal-300/20 dark:bg-white/10 dark:text-teal-100">
                        {item.highlight}
                      </span>
                    </div>

                    <blockquote className="mt-4 text-lg font-semibold leading-8 text-tealInk dark:text-teal-50">
                      &ldquo;{item.quote}&rdquo;
                    </blockquote>

                    <div className="mt-5 flex flex-col gap-3 border-t border-teal-100 pt-4 sm:flex-row sm:items-center sm:justify-between dark:border-white/10">
                      <div>
                        <p className="text-base font-black text-tealInk dark:text-teal-50">
                          {item.name}
                        </p>
                        <p className="mt-1 text-sm font-semibold text-slate-600 dark:text-slate-300">
                          {item.role}
                        </p>
                      </div>

                      <div className="flex items-center gap-1 text-teal-600 dark:text-teal-200">
                        {Array.from({ length: 5 }).map((_, starIndex) => (
                          <Star
                            key={`${item.name}-${starIndex}`}
                            className="h-4 w-4 fill-current"
                            aria-hidden
                          />
                        ))}
                        <span className="ml-2 text-xs font-black text-slate-500 dark:text-slate-300">
                          0{index + 1}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-teal-100 bg-[linear-gradient(135deg,rgba(255,255,255,0.92),rgba(240,253,250,0.82))] p-6 shadow-sm shadow-teal-950/5 backdrop-blur dark:border-white/10 dark:bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(20,184,166,0.08))]">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-teal-700 dark:text-teal-200">
                Ready for real references
              </p>
              <h2 className="mt-2 text-2xl font-black text-tealInk dark:text-teal-50">
                Add verified quotes as your portfolio grows.
              </h2>
            </div>
            <ArrowRight className="hidden h-8 w-8 text-teal-700 dark:text-teal-200 sm:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
