const findings = [
  {
    id: 1,
    title: 'La restricción estructural del agua en Monsanto',
    tag: 'Diseño de Proceso',
    detail: 'El proceso Monsanto requiere 14–15% de agua para evitar la precipitación de Rh como RhI₃. Esta restricción estructural impone: (a) mayor reacción WGS (selectividad CO ~85% vs. >94% en Cativa), (b) +30% consumo de energía en secado, (c) +1 columna de destilación dedicada, y (d) productividad 5× menor (~10 vs. ~50 mol/L/h). Cativa eliminó esta restricción al usar Ir, estable a <5% de agua.',
    sources: 'Dim01, Dim02, Dim11, wide01, wide02',
  },
  {
    id: 2,
    title: 'La corrosión por haluros como limitante universal',
    tag: 'Ingeniería de Materiales',
    detail: 'Todos los procesos de carbonilación homogénea (Monsanto, Cativa, AO+) requieren aleaciones especiales (Hastelloy B-2, revestimientos de titanio) debido a la presencia de HI y CH₃I. La evolución tecnológica histórica muestra un patrón consistente: Wacker (HCl) → Monsanto (HI menor) → Cativa (HI persistene) → heterogéneos (sin haluros). Los catalizadores heterogéneos libres de haluros representan la mayor oportunidad disruptiva a mediano plazo.',
    sources: 'Dim01, Dim02, Dim06, wide06',
  },
  {
    id: 3,
    title: 'El promotor de Ru en Cativa: sinergismo heterometálico',
    tag: 'Catálisis',
    detail: 'La innovación clave de BP no fue simplemente reemplazar Rh por Ir, sino descubrir que el rutenio actúa como promotor eficaz formando agregados transitorios Ru-Ir que abstraen un ligando yoduro del intermediario [Ir(CO)₂I₃(CH₃)]⁻, reduciendo ΔG‡ en ~20 kJ/mol y acelerando la reacción hasta 700× vs. sistema sin promotor.',
    sources: 'Dim02, wide02, JACS 2004 (Haynes et al.)',
  },
  {
    id: 4,
    title: 'La trampa de purificación en rutas diluidas',
    tag: 'Separación',
    detail: 'Cativa produce ácido acético a >99% con 2 columnas de destilación (<5 MJ/kg de energía de separación). En contraste, las bio-rutas requieren 50–250 MJ/kg solo para purificación, y la electrosíntesis consume 117 MJ/kg. Cada orden de magnitud en concentración inicial se traduce en 2–3× más costo de separación. La concentración inicial del producto determina la viabilidad tecnológica más que el costo del feedstock.',
    sources: 'Dim05, Dim06, Dim11, wide05, wide06',
  },
  {
    id: 5,
    title: 'Carbonilación heterogénea: próxima generación',
    tag: 'Tecnologías Emergentes',
    detail: 'Catalizadores ReO₄/SiO₂ han demostrado selectividad >93% en carbonilación de metanol en fase gaseosa sin haluros, con conversión single-pass >60% durante 60 h. El sistema Ni-MoOₓ/SiO₂ alcanza >85% selectividad con metales de transición de bajo costo. La transición a fase gaseosa elimina cuatro limitaciones críticas: corrosión, dificultad de separación, pérdidas de catalizador y requisitos de alta presión.',
    sources: 'Dim06, wide06, JACS 2020, Appl. Catal. A 2021',
  },
];

export default function TechnicalConclusionsSection() {
  return (
    <section id="conclusions" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="tag-pink mb-4 inline-block">Hallazgos Técnicos</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Conclusiones de la Investigación</h2>
          <p className="text-[hsl(215,14%,55%)] max-w-2xl mx-auto text-lg">
            Resultados del análisis cruzado de 12 dimensiones técnicas. Cada hallazgo se rastrea a múltiples fuentes verificadas.
          </p>
        </div>

        <div className="space-y-6">
          {findings.map((f) => (
            <div key={f.id} className="glass rounded-xl p-6 md:p-8 hover:bg-[hsla(255,255,255,0.03)] transition-colors">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="text-2xl font-bold text-[hsla(160,84%,39%,0.4)] mono">
                  {String(f.id).padStart(2, '0')}
                </span>
                <h3 className="text-lg font-semibold text-white">{f.title}</h3>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-[hsla(330,80%,60%,0.12)] text-[hsl(330,80%,72%)] border border-[hsla(330,80%,60%,0.2)]">
                  {f.tag}
                </span>
              </div>
              <p className="text-sm text-[hsl(215,14%,60%)] leading-relaxed mb-4">{f.detail}</p>
              <div className="text-[10px] text-[hsl(215,14%,40%)] uppercase tracking-wider">
                Fuentes: {f.sources}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section-divider mt-24" />
    </section>
  );
}
