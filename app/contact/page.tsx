import { ContactSection } from "@/components/contact-section";
import { FloatingNav } from "@/components/floating-nav";

export default function ContactPage() {
  return (
    <main className="portfolio-grid-background min-h-screen overflow-x-hidden text-tealInk">
      <FloatingNav />
      <ContactSection />
    </main>
  );
}
