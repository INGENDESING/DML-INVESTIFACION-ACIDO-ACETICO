import HeroSection from '@/sections/HeroSection';
import OverviewSection from '@/sections/OverviewSection';
import ProcessesSection from '@/sections/ProcessesSection';
import ReactionsSection from '@/sections/ReactionsSection';
import ProcessFlowSection from '@/sections/ProcessFlowSection';
import RawMaterialsSection from '@/sections/RawMaterialsSection';
import ComparisonSection from '@/sections/ComparisonSection';
import TechnicalConclusionsSection from '@/sections/TechnicalConclusionsSection';
import FooterSection from '@/sections/FooterSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-[hsl(220,20%,4%)]">
      {/* Sticky nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-[hsla(255,255,255,0.04)]">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2">
            <img src="/logo-dml.png" alt="DML" className="h-7 w-auto" />
            <span className="text-sm font-semibold text-white hidden sm:inline">DML Ingenieros Consultores</span>
          </a>
          <div className="flex items-center gap-1">
            {[
              { id: 'overview', label: 'Alcance' },
              { id: 'processes', label: 'Procesos' },
              { id: 'reactions', label: 'Reacciones' },
              { id: 'flows', label: 'Diagramas' },
              { id: 'materials', label: 'Materias Primas' },
              { id: 'comparison', label: 'Comparativa' },
              { id: 'conclusions', label: 'Conclusiones' },
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
      <ReactionsSection />
      <ProcessFlowSection />
      <RawMaterialsSection />
      <ComparisonSection />
      <TechnicalConclusionsSection />
      <FooterSection />
    </div>
  );
}
