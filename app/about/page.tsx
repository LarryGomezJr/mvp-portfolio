import { AboutSection } from "@/components/about-section";
import { FloatingNav } from "@/components/floating-nav";

export default function AboutPage() {
  return (
    <main className="portfolio-grid-background min-h-screen overflow-x-hidden text-tealInk">
      <FloatingNav />
      <AboutSection />
    </main>
  );
}
