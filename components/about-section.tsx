import Image from "next/image";
import {
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  GraduationCap
} from "lucide-react";

const experiences = [
  {
    role: "Frontend Developer (Intern)",
    company: "AHG Lab",
    period: "Feb 2023 - June 2023",
    marker: "01"
  },
  {
    role: "Programmer Teacher",
    company: "Saint Francis of Assisi College",
    period: "Sept 2023 - Dec 2025",
    marker: "02"
  },
  {
    role: "Software Engineer",
    company: "Medicotek, Inc.",
    period: "Feb 2025 - Present",
    marker: "03"
  }
];

const education = [
  {
    school: "AMA Computer College",
    program: "SHS (STEM)",
    period: "June 2017 - April 2019",
    marker: "01"
  },
  {
    school: "Saint Francis of Assisi College",
    program: "BS in Computer Science",
    period: "June 2019 - June 2023",
    marker: "02"
  }
];

function SectionHeading({
  eyebrow,
  title,
  summary
}: {
  eyebrow: string;
  title: string;
  summary: string;
}) {
  return (
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="text-sm font-black uppercase tracking-[0.18em] text-teal-700">
          {eyebrow}
        </p>
        <h3 className="mt-3 text-3xl font-black text-tealInk sm:text-4xl">
          {title}
        </h3>
      </div>
      <p className="max-w-xl text-sm leading-6 text-slate-600 sm:text-right">
        {summary}
      </p>
    </div>
  );
}

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative scroll-mt-28 px-5 pb-24 pt-[calc(6rem+30px)] sm:px-8 sm:pt-[calc(6rem+30px)] lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div className="mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative overflow-hidden rounded-lg border border-teal-100 bg-white/70 p-3 shadow-float backdrop-blur">
              <Image
                src="/profile.jpg"
                alt="Profile portrait"
                width={1024}
                height={1024}
                className="aspect-square w-full rounded-md object-cover"
                priority
              />
            </div>
          </div>

          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white/80 px-4 py-2 text-sm font-bold text-teal-800 shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-teal-500" />
              About Me
            </div>

            <p className="mb-3 text-lg font-black text-teal-700">
              Larry Gutierrez Gomez Jr.
            </p>

            <h2 className="text-balance text-4xl font-black leading-tight text-tealInk sm:text-5xl lg:text-6xl">
              I turn ideas into clean, responsive web experiences.
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              I am a full-stack developer focused on building modern,
              dependable applications with practical interfaces and solid
              backend foundations. I enjoy connecting frontend polish with API
              workflows, database logic, payments, deployment, and AI-assisted
              development to ship products that feel smooth and useful.
            </p>
          </div>
        </div>

        <div className="pt-16">
          <SectionHeading
            eyebrow="Experience"
            title="Work Experience"
            summary="A focused path across frontend development, teaching, and production software engineering."
          />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {experiences.map((experience) => (
              <article
                key={`${experience.role}-${experience.company}`}
                className="group relative overflow-hidden rounded-lg border border-teal-100 bg-[linear-gradient(145deg,rgba(255,255,255,0.98),rgba(236,253,245,0.9))] p-6 shadow-[0_18px_50px_rgba(13,148,136,0.12)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-[0_24px_70px_rgba(13,148,136,0.18)] dark:border-emerald-300/20 dark:bg-[linear-gradient(145deg,rgba(5,59,62,0.96),rgba(6,78,59,0.88))] dark:shadow-[0_20px_60px_rgba(0,0,0,0.25)] dark:hover:border-emerald-300/45"
              >
                <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-teal-700 via-cyan-400 to-emerald-300" />
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-200/35 blur-3xl" />
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-teal-700 text-white shadow-sm shadow-teal-900/20">
                    <BriefcaseBusiness className="h-5 w-5" aria-hidden />
                  </div>
                  <span className="rounded-full border border-teal-100 bg-white/90 px-3 py-1 text-xs font-black text-teal-700 shadow-sm">
                    {experience.marker}
                  </span>
                </div>

                <h4 className="mt-6 text-xl font-black leading-snug text-tealInk">
                  {experience.role}
                </h4>

                <div className="mt-5 space-y-3">
                  <p className="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <Building2 className="h-4 w-4 text-teal-700" aria-hidden />
                    {experience.company}
                  </p>
                  <p className="flex items-center gap-2 text-sm font-semibold text-teal-700">
                    <CalendarDays className="h-4 w-4" aria-hidden />
                    {experience.period}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="pt-16">
          <SectionHeading
            eyebrow="Education"
            title="Academic Background"
            summary="Formal training that shaped my foundation in STEM, computer science, and problem solving."
          />

          <div className="grid gap-4 md:grid-cols-2">
            {education.map((item) => (
              <article
                key={`${item.school}-${item.program}`}
                className="group relative overflow-hidden rounded-lg border border-teal-100 bg-[linear-gradient(145deg,rgba(255,255,255,0.98),rgba(240,253,250,0.92))] p-6 shadow-[0_18px_50px_rgba(13,148,136,0.12)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-[0_24px_70px_rgba(13,148,136,0.18)] dark:border-emerald-300/20 dark:bg-[linear-gradient(145deg,rgba(5,59,62,0.96),rgba(7,89,75,0.88))] dark:shadow-[0_20px_60px_rgba(0,0,0,0.25)] dark:hover:border-emerald-300/45"
              >
                <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-emerald-400 via-teal-600 to-cyan-400" />
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-emerald-200/35 blur-3xl" />
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-tealInk text-white shadow-sm shadow-teal-900/20">
                    <GraduationCap className="h-6 w-6" aria-hidden />
                  </div>
                  <span className="rounded-full border border-teal-100 bg-white/90 px-3 py-1 text-xs font-black text-teal-700 shadow-sm">
                    {item.marker}
                  </span>
                </div>

                <h4 className="mt-6 text-xl font-black leading-snug text-tealInk">
                  {item.school}
                </h4>
                <p className="mt-4 text-base font-bold text-slate-700">
                  {item.program}
                </p>
                <p className="mt-2 flex items-center gap-2 text-sm font-semibold text-teal-700">
                  <CalendarDays className="h-4 w-4" aria-hidden />
                  {item.period}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
