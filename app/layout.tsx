import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Personal Portfolio",
  description:
    "A responsive personal portfolio built with Next.js, React, Tailwind CSS, and shadcn-style components."
};

const themeInitializer = `
  (() => {
    try {
      const storedTheme = localStorage.getItem("portfolio-theme");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

      if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
        document.documentElement.classList.add("dark");
      }
    } catch (_) {}
  })();
`;

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitializer }} />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
