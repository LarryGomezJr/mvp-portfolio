import { FloatingNav } from "@/components/floating-nav";
import { TestimoniesSection } from "@/components/testimonies-section";

export default function TestimoniesPage() {
  return (
    <main className="portfolio-grid-background min-h-screen overflow-x-hidden text-tealInk">
      <FloatingNav />
      <TestimoniesSection />
    </main>
  );
}
