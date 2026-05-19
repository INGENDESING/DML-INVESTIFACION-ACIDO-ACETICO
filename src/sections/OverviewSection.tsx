const techParams = [
  { label: 'Temperatura', value: '27–230', unit: '°C', note: 'Aerobio a LPO' },
  { label: 'Presión', value: '1–80', unit: 'bar', note: 'Atmósfera a alta presión' },
  { label: 'Catalizador principal', value: 'Rh / Ir / Pd / Co', unit: '', note: 'Organometálicos' },
  { label: 'Selectividad máxima', value: '>99', unit: '%', note: 'Sobre metanol' },
  { label: 'Productividad reactor', value: '10–50', unit: 'mol/L/h', note: 'Carbonilación homogénea' },
];

export default function OverviewSection() {
  return (
    <section id="overview" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="tag-green mb-4 inline-block">Alcance del Estudio</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Revisión Técnica de{' '}
            <span className="text-[hsl(160,84%,55%)]">6 Procesos Industriales</span>
          </h2>
          <p className="text-[hsl(215,14%,55%)] max-w-2xl mx-auto text-lg">
            Investigación multidimensional sobre la producción de ácido acético (C₂H₄O₂)
            desde la carbonilación catalítica dominante hasta las bio-rutas emergentes.
          </p>
        </div>

        {/* Parámetros técnicos clave */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
          {techParams.map((p, i) => (
            <div
              key={i}
              className="glass-green rounded-2xl p-5 text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="text-2xl font-bold text-white mb-1">
                {p.value}<span className="text-sm font-normal text-[hsl(215,14%,55%)] ml-1">{p.unit}</span>
              </div>
              <div className="text-sm text-[hsl(215,14%,50%)]">{p.label}</div>
              <div className="text-[10px] text-[hsl(160,84%,55%)] mt-1">{p.note}</div>
            </div>
          ))}
        </div>

        {/* Objetivo y metodología */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass rounded-2xl p-8 glow-green">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="text-[hsl(160,84%,55%)]">01.</span> Objetivo
            </h3>
            <p className="text-[hsl(215,14%,60%)] leading-relaxed text-sm">
              Realizar una revisión técnica rigurosa de las tecnologías industriales para la
              producción de ácido acético glacial, cubriendo mecanismos catalíticos, condiciones
              de operación, diagramas de flujo de proceso, materias primas y comparativa
              técnica integral. El estudio sirve como base de diseño para evaluaciones de
              viabilidad tecnológica y selección de rutas de producción.
            </p>
          </div>

          <div className="glass rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="text-[hsl(210,100%,65%)]">02.</span> Metodología
            </h3>
            <p className="text-[hsl(215,14%,60%)] leading-relaxed text-sm mb-4">
              La investigación se estructuró en 12 dimensiones técnicas, cada una documentada
              con evidencia de fuentes primarias (patentes, artículos de JACS, Ullmann's
              Encyclopedia, informes técnicos industriales) y verificación cruzada.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Química de proceso', 'Catalizadores', 'Materias primas', 'Diagramas PFD', 'Comparativa técnica', 'Balance energético'].map((tag) => (
                <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-[hsla(160,84%,39%,0.1)] text-[hsl(160,84%,55%)] border border-[hsla(160,84%,39%,0.2)]">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Procesos cubiertos */}
        <div className="mt-12 glass rounded-2xl p-8">
          <h3 className="text-lg font-semibold text-white mb-6 text-center">Procesos Industriales Cubiertos</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { name: 'Monsanto', detail: 'Rh-catalyzed carbonylation', status: 'Legado' },
              { name: 'Cativa', detail: 'Ir-catalyzed carbonylation', status: 'Dominante' },
              { name: 'AO Plus', detail: 'Celanese optimized Rh', status: 'Líder en costo' },
              { name: 'Wacker', detail: 'Oxidación de acetaldehído', status: 'En declive' },
              { name: 'LPO', detail: 'Oxidación de hidrocarburos', status: 'Obsoleto' },
              { name: 'Fermentación', detail: 'Rutas bio-basadas', status: 'Emergente' },
            ].map((p, i) => (
              <div key={i} className="bg-[hsl(220,18%,7%)] rounded-xl p-4 border border-[hsla(255,255,255,0.04)]">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-white text-sm">{p.name}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[hsla(160,84%,39%,0.1)] text-[hsl(160,84%,55%)]">{p.status}</span>
                </div>
                <div className="text-xs text-[hsl(215,14%,50%)]">{p.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section-divider mt-24" />
    </section>
  );
}
