import HeroSection from '@/sections/HeroSection';
import OverviewSection from '@/sections/OverviewSection';
import ProcessesSection from '@/sections/ProcessesSection';
import ComparisonSection from '@/sections/ComparisonSection';
import MarketSection from '@/sections/MarketSection';
import InsightsSection from '@/sections/InsightsSection';
import FutureSection from '@/sections/FutureSection';
import FooterSection from '@/sections/FooterSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-[hsl(220,20%,4%)]">
      {/* Sticky nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-[hsla(255,255,255,0.04)]">
        <div className="max-w-6xl mx-auto px-6 h-12 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2">
            <span className="text-sm">⚗️</span>
            <span className="text-sm font-semibold text-white hidden sm:inline">CH₃COOH</span>
          </a>
          <div className="flex items-center gap-1">
            {[
              { id: 'overview', label: 'Panorama' },
              { id: 'processes', label: 'Procesos' },
              { id: 'comparison', label: 'Comparativa' },
              { id: 'market', label: 'Mercado' },
              { id: 'insights', label: 'Insights' },
              { id: 'future', label: 'Futuro' },
            ].map(link => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="text-xs text-[hsl(215,14%,50%)] hover:text-[hsl(160,84%,55%)] transition-colors px-2 py-1 rounded-md hover:bg-[hsla(160,84%,39%,0.06)] hidden md:block"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <HeroSection />
      <OverviewSection />
      <ProcessesSection />
      <ComparisonSection />
      <MarketSection />
      <InsightsSection />
      <FutureSection />
      <FooterSection />
    </div>
  );
}
