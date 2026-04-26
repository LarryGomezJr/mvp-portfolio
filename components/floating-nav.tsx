"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowRight,
  BriefcaseBusiness,
  Home,
  Layers3,
  Mail,
  MessagesSquare,
  UserRound
} from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "About", href: "/about", icon: UserRound },
  { label: "Projects", href: "/projects", icon: BriefcaseBusiness },
  { label: "Testimonies", href: "/#testimonies", icon: MessagesSquare },
  { label: "Contact", href: "/contact", icon: Mail },
  { label: "Tech Stack", href: "/techstack", icon: Layers3 }
];

export function FloatingNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Primary navigation"
      className="fixed inset-x-0 top-4 z-50 mx-auto w-[min(calc(100%-1.5rem),64rem)] rounded-full border border-teal-200/80 bg-white/90 p-1.5 shadow-float backdrop-blur-xl dark:border-teal-200/80 dark:bg-white/90 dark:shadow-float"
    >
      <div className="grid h-14 grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2">
        <Link
          href="/"
          aria-label="DevL home"
          className="flex h-11 shrink-0 items-center gap-2 rounded-full px-3 text-base font-black text-[#053b3e] transition-colors hover:bg-teal-50 sm:px-4 dark:text-[#053b3e] dark:hover:bg-teal-50"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-teal-600 shadow-[0_0_18px_rgba(13,148,136,0.7)]" />
          <span className="hidden sm:inline">DevL</span>
          <span className="sm:hidden">DL</span>
        </Link>

        <ul className="mx-auto flex min-w-0 max-w-full items-center gap-1 overflow-x-auto px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {navItems.map((item) => {
            const Icon = item.icon;
            const itemPath = item.href.split("#")[0];
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname === itemPath && !item.href.includes("#");

            return (
              <li key={item.label} className="shrink-0">
                <Link
                  href={item.href}
                  aria-label={item.label}
                  title={item.label}
                  className={cn(
                    "inline-flex h-10 items-center justify-center rounded-full px-3 text-sm font-bold text-[#475569] transition-all duration-200 dark:text-[#475569]",
                    "hover:-translate-y-0.5 hover:bg-teal-50 hover:text-teal-950 dark:hover:bg-teal-50 dark:hover:text-teal-950",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-white",
                    isActive &&
                      "bg-teal-700 !text-white shadow-sm hover:bg-teal-800 hover:!text-white dark:bg-teal-700 dark:!text-white dark:hover:bg-teal-800 dark:hover:!text-white"
                  )}
                >
                  <Icon className="h-4 w-4 md:hidden" strokeWidth={2.25} aria-hidden />
                  <span className="hidden md:inline">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex shrink-0 items-center gap-2">
          <ThemeToggle />
          <Link
            href="/contact"
            aria-label="Start a conversation"
            title="Start a conversation"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-tealInk text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-teal-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:bg-tealInk dark:text-white dark:hover:bg-teal-800 dark:focus-visible:ring-offset-white"
          >
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </nav>
  );
}
