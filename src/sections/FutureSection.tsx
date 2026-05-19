const timeline = [
  { year: '2025', event: 'China añade 5.9 Mt de capacidad nueva', color: 'hsl(0, 72%, 55%)', icon: '🏗️' },
  { year: '2026', event: 'CBAM europeo en fase plena — impacta AA chino de alto carbono', color: 'hsl(25, 95%, 53%)', icon: '🇪🇺' },
  { year: '2028', event: 'INEOS-GNFC India: 600 kt nueva capacidad', color: 'hsl(210, 100%, 56%)', icon: '🇮🇳' },
  { year: '2028–32', event: 'Catalizadores heterogéneos: comercialización estimada', color: 'hsl(160, 84%, 39%)', icon: '🔬' },
  { year: '2029', event: 'Capacidad global: ~29 mtpa proyectada', color: 'hsl(45, 93%, 47%)', icon: '📈' },
  { year: '2030', event: 'Reliance India: 3.0 Mt (anunciado, sin confirmación)', color: 'hsl(330, 80%, 60%)', icon: '🏭' },
  { year: '2030', event: 'Bio-AA mercado: $366M (CAGR 7.37%)', color: 'hsl(185, 80%, 50%)', icon: '🌱' },
  { year: '2032+', event: 'Electrosíntesis CO₂ → AA: necesita >100 mM (vs 20 mM actual)', color: 'hsl(270, 70%, 60%)', icon: '⚡' },
];

export default function FutureSection() {
  return (
    <section id="future" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="tag-blue mb-4 inline-block">Perspectivas</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Tendencias 2025–2035</h2>
          <p className="text-[hsl(215,14%,55%)] max-w-2xl mx-auto text-lg">
            El horizonte tecnológico y geoestratégico de la producción de ácido acético.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[hsla(160,84%,39%,0.3)] via-[hsla(25,95%,53%,0.3)] to-[hsla(210,100%,56%,0.3)]" />

          <div className="space-y-8">
            {timeline.map((item, i) => (
              <div key={i} className={`relative flex items-start gap-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 z-10"
                  style={{ borderColor: item.color, background: `${item.color}33`, boxShadow: `0 0 12px ${item.color}44` }} />

                {/* Content */}
                <div className={`ml-14 md:ml-0 md:w-[45%] ${i % 2 === 0 ? 'md:text-right md:pr-10' : 'md:text-left md:pl-10'}`}>
                  <div className="glass rounded-xl p-5 hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center gap-2 mb-2" style={{ justifyContent: i % 2 === 0 ? 'flex-end' : 'flex-start' }}>
                      <span className="text-xl">{item.icon}</span>
                      <span className="mono text-sm font-semibold" style={{ color: item.color }}>{item.year}</span>
                    </div>
                    <p className="text-sm text-[hsl(215,14%,60%)]">{item.event}</p>
                  </div>
                </div>

                {/* Spacer for alternate side */}
                <div className="hidden md:block md:w-[45%]" />
              </div>
            ))}
          </div>
        </div>

        {/* Key projections box */}
        <div className="mt-16 glass-orange rounded-2xl p-8">
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <span>🎯</span> Recomendaciones Estratégicas Clave
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-sm font-semibold text-[hsl(160,84%,55%)] mb-2 uppercase tracking-wider">Corto Plazo (2025-28)</h4>
              <ul className="space-y-2 text-sm text-[hsl(215,14%,60%)]">
                <li>• Digital Twins + DWC: ROI inmediato</li>
                <li>• Retrofit Monsanto→Cativa: payback &lt;2 años</li>
                <li>• Capacidad flexible para cierres chinos</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[hsl(25,95%,60%)] mb-2 uppercase tracking-wider">Mediano Plazo (2028-32)</h4>
              <ul className="space-y-2 text-sm text-[hsl(215,14%,60%)]">
                <li>• India: greenfield estratégico viable</li>
                <li>• Cat. heterogéneos como I&D prioritario</li>
                <li>• CCU integrado como ventaja defensiva</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[hsl(210,100%,65%)] mb-2 uppercase tracking-wider">Largo Plazo (2032+)</h4>
              <ul className="space-y-2 text-sm text-[hsl(215,14%,60%)]">
                <li>• Bio: "carbon-as-a-service", no commodity</li>
                <li>• Separación &gt; rendimiento biológico</li>
                <li>• Electrosíntesis + membranas convergente</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="section-divider mt-24" />
    </section>
  );
}
