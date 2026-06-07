import HeroSection from '@/components/HeroSection/HeroSection';
import MarqueeSection from '@/components/MarqueeSection/MarqueeSection';
import AboutSection from '@/components/AboutSection/AboutSection';
import ServicesSection from '@/components/ServicesSection/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection/ProjectsSection';

export default function HomePage() {
  return (
    <main style={{ background: '#0C0C0C', overflowX: 'clip' }}>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
    </main>
  );
}
