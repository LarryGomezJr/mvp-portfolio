import {
  ArrowRight,
  CalendarCheck,
  Clock3,
  Github,
  Mail,
  MapPin,
  MessageSquareText,
  Phone,
  Sparkles
} from "lucide-react";

import { Button } from "@/components/ui/button";

const contactCards = [
  {
    label: "Email",
    value: "larryggomezjr@gmail.com",
    icon: Mail
  },
  {
    label: "Contact No.",
    value: "0915-387-7937",
    icon: Phone
  },
  {
    label: "Location",
    value: "Admiral Village, Talon Tres, Las Pinas City, 1747",
    icon: MapPin
  },
  {
    label: "Availability",
    value: "Open for full-time roles",
    icon: CalendarCheck
  }
];

const process = [
  {
    title: "Share the role",
    description: "Send the position, company details, work setup, and timeline."
  },
  {
    title: "Review the fit",
    description: "I review the responsibilities, stack, and expectations."
  },
  {
    title: "Move forward",
    description: "We can schedule interviews, technical discussions, or next steps."
  }
];

const briefItems = [
  "Role title and employment type",
  "Company name and product/domain",
  "Tech stack and key responsibilities",
  "Work setup, schedule, and location",
  "Hiring timeline and next steps"
];

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative px-5 pb-24 pt-[calc(6rem+30px)] sm:px-8 sm:pt-[calc(6rem+30px)] lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white/80 px-4 py-2 text-sm font-bold text-teal-800 shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-teal-500" />
            <Sparkles className="h-4 w-4" aria-hidden />
            Contact
          </div>

          <h1 className="text-balance text-4xl font-black leading-tight text-tealInk sm:text-6xl lg:text-7xl">
            Let&apos;s talk about full-time opportunities.
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            I&apos;m open to full-time software engineering roles where I can
            build reliable web applications, contribute to product teams, and
            keep improving as a developer.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="space-y-4">
            {contactCards.map((card) => {
              const Icon = card.icon;

              return (
                <article
                  key={card.label}
                  className="group relative overflow-hidden rounded-lg border border-teal-100 bg-[linear-gradient(145deg,rgba(255,255,255,0.98),rgba(236,253,245,0.9))] p-6 shadow-[0_18px_50px_rgba(13,148,136,0.12)] transition duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-[0_24px_70px_rgba(13,148,136,0.18)] dark:border-emerald-300/20 dark:bg-[linear-gradient(145deg,rgba(5,59,62,0.96),rgba(6,78,59,0.88))] dark:shadow-[0_20px_60px_rgba(0,0,0,0.25)] dark:hover:border-emerald-300/45"
                >
                  <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-teal-700 via-cyan-400 to-emerald-300" />
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-teal-700 text-white shadow-sm shadow-teal-900/20">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <div>
                      <p className="text-sm font-black uppercase tracking-[0.14em] text-teal-700">
                        {card.label}
                      </p>
                      <p className="mt-1 text-lg font-black text-tealInk">
                        {card.value}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}

            <div className="rounded-lg border border-teal-100 bg-tealInk p-6 text-white shadow-[0_24px_70px_rgba(5,59,62,0.24)] dark:border-emerald-300/20 dark:bg-black/35 dark:shadow-[0_24px_70px_rgba(0,0,0,0.28)]">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-white/10 ring-1 ring-white/15">
                  <Clock3 className="h-5 w-5" aria-hidden />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-teal-100">
                    Response
                  </p>
                  <h2 className="text-2xl font-black">Usually within 24 hours</h2>
                </div>
              </div>
              <p className="mt-5 text-sm leading-7 text-teal-50">
                I keep contact direct to avoid spam and keep conversations
                intentional. Send the role details through email or GitHub and
                I&apos;ll reply with the next best step.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-teal-100 bg-white/84 p-5 shadow-float backdrop-blur sm:p-6 lg:p-8">
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan-200/35 blur-3xl" />
            <div className="relative">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-teal-50 px-3 py-1.5 text-sm font-black text-teal-700 ring-1 ring-teal-100">
                <MessageSquareText className="h-4 w-4" aria-hidden />
                Hiring Brief
              </div>

              <h2 className="text-3xl font-black text-tealInk sm:text-4xl">
                No public form. Direct hiring contact only.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                To keep spam away, I do not collect messages through a public
                form. If you&apos;re hiring for a full-time role, send a concise
                brief through email or GitHub with the details below.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {briefItems.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-md border border-teal-100 bg-white/80 p-3"
                  >
                    <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-teal-600" />
                    <span className="text-sm font-bold text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  className="h-12 rounded-full bg-teal-700 px-7 text-base font-bold text-white hover:bg-teal-800"
                >
                  <a href="mailto:larryggomezjr@gmail.com">
                    Email Me
                    <Mail className="ml-2 h-4 w-4" aria-hidden />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-12 rounded-full border-2 border-teal-700 bg-white/70 px-7 text-base font-bold text-teal-900 hover:bg-teal-50"
                >
                  <a
                    href="https://github.com/LarryGomezJr"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                    <Github className="ml-2 h-4 w-4" aria-hidden />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {process.map((step, index) => (
            <article
              key={step.title}
              className="rounded-lg border border-teal-100 bg-white/78 p-5 shadow-sm shadow-teal-950/5 backdrop-blur"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-teal-50 text-teal-700 ring-1 ring-teal-100">
                  <MessageSquareText className="h-5 w-5" aria-hidden />
                </div>
                <span className="text-sm font-black text-teal-700">
                  0{index + 1}
                </span>
              </div>
              <h3 className="text-lg font-black text-tealInk">{step.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                {step.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-lg border border-teal-100 bg-white/82 p-5 shadow-sm shadow-teal-950/5 backdrop-blur sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-teal-700">
                Open to full-time work
              </p>
              <h2 className="mt-2 text-2xl font-black text-tealInk">
                Send the role details and we&apos;ll map the next step.
              </h2>
            </div>
            <ArrowRight className="hidden h-8 w-8 text-teal-700 sm:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
