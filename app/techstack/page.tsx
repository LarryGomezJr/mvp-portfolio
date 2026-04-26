import { FloatingNav } from "@/components/floating-nav";
import { TechStackSection } from "@/components/tech-stack-section";

export default function TechStackPage() {
  return (
    <main className="portfolio-grid-background min-h-screen overflow-x-hidden text-tealInk">
      <FloatingNav />
      <TechStackSection />
    </main>
  );
}
