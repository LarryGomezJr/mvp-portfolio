"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  Home,
  Layers3,
  Mail,
  Menu,
  MessagesSquare,
  X,
  UserRound
} from "lucide-react";

import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "About", href: "/about", icon: UserRound },
  { label: "Projects", href: "/projects", icon: BriefcaseBusiness },
  { label: "Testimonies", href: "/testimonies", icon: MessagesSquare },
  { label: "Contact", href: "/contact", icon: Mail },
  { label: "Tech Stack", href: "/techstack", icon: Layers3 }
];

export function FloatingNav() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <button
        type="button"
        aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((open) => !open)}
        className="fixed right-4 top-4 z-[70] inline-flex h-12 w-12 items-center justify-center rounded-full border border-teal-200/80 bg-[rgba(255,255,255,0.92)] text-[#053b3e] shadow-float backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-teal-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white md:hidden dark:border-teal-200/80 dark:bg-[rgba(255,255,255,0.92)] dark:text-[#053b3e] dark:focus-visible:ring-offset-white"
      >
        {isMenuOpen ? (
          <X className="h-5 w-5" aria-hidden />
        ) : (
          <Menu className="h-5 w-5" aria-hidden />
        )}
      </button>

      {isMenuOpen ? (
        <div
          className="fixed inset-0 z-[60] bg-tealInk/20 p-4 backdrop-blur-sm md:hidden dark:bg-black/30"
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className="ml-auto mt-16 w-[min(calc(100vw-2rem),22rem)] overflow-hidden rounded-2xl border border-teal-200/80 bg-[rgba(255,255,255,0.95)] shadow-[0_24px_70px_rgba(13,148,136,0.22)] backdrop-blur-xl dark:border-teal-200/80 dark:bg-[rgba(255,255,255,0.95)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center border-b border-teal-100 px-4 py-3">
              <Link
                href="/"
                aria-label="DevL home"
                onClick={() => setIsMenuOpen(false)}
                className="flex h-11 items-center gap-2 rounded-full px-2 text-base font-black text-[#053b3e]"
              >
                <span className="h-2.5 w-2.5 rounded-full bg-teal-600 shadow-[0_0_18px_rgba(13,148,136,0.7)]" />
                DevL
              </Link>
            </div>

            <ul className="space-y-1 p-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const itemPath = item.href.split("#")[0];
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname === itemPath && !item.href.includes("#");

                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      aria-label={item.label}
                      onClick={() => setIsMenuOpen(false)}
                      className={cn(
                        "flex h-12 items-center gap-3 rounded-xl px-4 text-sm font-black text-[#475569] transition",
                        "hover:bg-teal-50 hover:text-teal-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
                        isActive &&
                          "bg-teal-700 !text-white shadow-sm hover:bg-teal-800 hover:!text-white"
                      )}
                    >
                      <Icon className="h-4 w-4" strokeWidth={2.25} aria-hidden />
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="border-t border-teal-100 p-3">
              <Link
                href="/contact"
                aria-label="Start a conversation"
                onClick={() => setIsMenuOpen(false)}
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-tealInk px-4 text-sm font-black text-white shadow-sm transition hover:bg-teal-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                Contact Me
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      ) : null}

      <nav
        aria-label="Primary navigation"
        className="fixed inset-x-0 top-4 z-50 mx-auto hidden w-[min(calc(100%-1.5rem),64rem)] rounded-full border border-teal-200/80 bg-white/90 p-1.5 shadow-float backdrop-blur-xl md:block dark:border-teal-200/80 dark:bg-white/90 dark:shadow-float"
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

          <div className="flex shrink-0 items-center">
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
    </>
  );
}
