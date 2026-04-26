import { FloatingNav } from "@/components/floating-nav";
import { ProjectsSection } from "@/components/projects-section";

export default function ProjectsPage() {
  return (
    <main className="portfolio-grid-background min-h-screen overflow-x-hidden text-tealInk">
      <FloatingNav />
      <ProjectsSection />
    </main>
  );
}
