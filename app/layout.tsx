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
      document.documentElement.classList.remove("dark");
      localStorage.setItem("portfolio-theme", "light");
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
