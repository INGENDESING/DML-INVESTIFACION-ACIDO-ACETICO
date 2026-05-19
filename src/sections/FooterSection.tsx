export default function FooterSection() {
  return (
    <footer className="py-16 px-6 border-t border-[hsla(255,255,255,0.04)]">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-2xl">⚗️</span>
            <span className="text-xl font-bold text-white">CH₃COOH</span>
          </div>
          <p className="text-sm text-[hsl(215,14%,50%)] max-w-lg mx-auto">
            Investigación multi-dimensional sobre producción industrial de ácido acético.
            22 documentos de investigación, 12 dimensiones, 15 insights estratégicos.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
          {['hero', 'overview', 'processes', 'comparison', 'market', 'insights', 'future'].map(id => (
            <a key={id} href={`#${id}`} className="text-[hsl(215,14%,45%)] hover:text-[hsl(160,84%,55%)] transition-colors capitalize">
              {id === 'hero' ? 'Inicio' : id === 'overview' ? 'Panorama' : id === 'processes' ? 'Procesos' : id === 'comparison' ? 'Comparativa' : id === 'market' ? 'Mercado' : id === 'insights' ? 'Insights' : 'Futuro'}
            </a>
          ))}
        </div>

        <div className="section-divider mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[hsl(215,14%,40%)]">
          <p>DML Engineering · Investigación Gerencial P10-11</p>
          <p>Datos: Q4 2025 · Fuentes: académicas, patentes, informes de mercado</p>
        </div>
      </div>
    </footer>
  );
}
