import { TopNav } from "@/components/layout/TopNav";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { DashboardSection } from "@/components/sections/DashboardSection";
import { RoutingMapSection } from "@/components/sections/RoutingMapSection";
import { MeshGradient } from "@/components/ui/MeshGradient";

export default function Home() {
  return (
    <main className="min-h-screen bg-canvas text-text-primary selection:bg-primary/30">
      <MeshGradient />
      <TopNav />
      <div className="relative z-10">
        <HeroSection />
        <DashboardSection />
        <RoutingMapSection />
      </div>
      <Footer />
    </main>
  );
}
