import { FloatingNav } from "@/components/floating-nav";
import { TestimoniesSection } from "@/components/testimonies-section";

export default function TestimoniesPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-tealInk">
      <FloatingNav />
      <TestimoniesSection />
    </main>
  );
}
