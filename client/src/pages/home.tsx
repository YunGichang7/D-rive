import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import MetricsSection from "@/components/metrics-section";
import AboutSection from "@/components/about-section";
import TechnologySection from "@/components/technology-section";
import RoadmapSection from "@/components/roadmap-section";
import AdvantagesSection from "@/components/advantages-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <MetricsSection />
      <AboutSection />
      <TechnologySection />
      <RoadmapSection />
      <AdvantagesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
