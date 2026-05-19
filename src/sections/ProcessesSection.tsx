import { useState } from 'react';
import { processes } from '@/data/processes';

const tagColorMap: Record<string, string> = {
  green: 'tag-green', orange: 'tag-orange', yellow: 'tag-yellow',
  blue: 'tag-blue', pink: 'tag-pink',
};

/* Technical mechanism data inline for the two dominant processes */
const mechanismDetails: Record<string, { species: string; promoter: string; mechanism: string; kinetics: string; notes: string[] }> = {
  monsanto: {
    species: '[Rh(CO)₂I₂]⁻ (anión planar cuadrado)',
    promoter: 'CH₃I (1–5% p/p) + HI / LiI',
    mechanism: 'Ciclo de Forster: (1) adición oxidativa de CH₃I a Rh(I), (2) migración metilo → acilo, (3) coordinación CO + eliminación reductiva de CH₃COI, (4) hidrólisis a CH₃COOH + HI.',
    kinetics: 'Rate = k[Rh(CO)₂I₂⁻][CH₃I]; ΔH‡ = 63.6 kJ/mol; ΔS‡ = −116 J/(mol·K)',
    notes: [
      'Etapa determinante: adición oxidativa (Sₙ2)',
      'Agua 14–15% p/p obligatoria para evitar precipitación de RhI₃',
      'Selectividad MeOH >99%; selectividad CO ~85–90% (reacción WGS competidora)',
    ],
  },
  cativa: {
    species: '[Ir(CO)₂I₂]⁻ (anión planar cuadrado)',
    promoter: 'CH₃I (8–12% p/p) + Ru(CO)₄I₂ / [Ru(CO)₃I₂]₂ (500–2,000 ppm Ru)',
    mechanism: 'Ciclo análogo a Monsanto pero con Ir(I). El promotor Ru forma agregados heterometálicos transitorios Ru-Ir que abstraen I⁻ del intermediario [Ir(CO)₂I₃(CH₃)]⁻, facilitando inserción migratoria. Aceleración hasta 700× vs. sistema sin promotor.',
    kinetics: 'Adición oxidativa CH₃I→Ir ~150× más rápida que→Rh; Productividad ~50 mol/L/h',
    notes: [
      'Etapa determinante: adición oxidativa (más rápida que en Rh)',
      'Agua 0.5–5% p/p estable: Ir no precipita a baja concentración',
      'Selectividad MeOH >99%; selectividad CO >94% (WGS suprimido)',
      'ΔG‡ reducida ~20 kJ/mol por efecto del promotor Ru',
    ],
  },
  'ao-plus': {
    species: '[Rh(CO)₂I₂]⁻',
    promoter: 'CH₃I + LiI (concentración optimizada)',
    mechanism: 'Variante de Monsanto con adición de LiI que permite operar a baja agua (0.5–5%) manteniendo el catalizador de Rh. El LiI estabiliza la especie Rh(I) en medio con bajo contenido de agua.',
    kinetics: 'Productividad ~30 mol/L/h (intermedia entre Monsanto y Cativa)',
    notes: [
      'Costo de producción más bajo documentado: $326/ton (planta Clear Lake 1.3 Mt/a)',
      'Combina ventaja de costo del Rh con operación a baja agua',
      'Tecnología exclusiva Celanese',
    ],
  },
  wacker: {
    species: '[PdCl₄]²⁻ / Pd(0)',
    promoter: 'CuCl₂ / CuCl (sistema redox)',
    mechanism: '(1) Oxidación etileno → acetaldehído por Pd(II), (2) Reoxidación Pd(0) por CuCl₂, (3) Regeneración CuCl con O₂. Segunda etapa: oxidación radical de acetaldehído a ácido acético con Mn(OAc)₂.',
    kinetics: 'Rate = k[PdCl₄²⁻][C₂H₄] / ([Cl⁻]²[H⁺]); T = 120–130 °C, P = 3–10 bar',
    notes: [
      'Reacción neta: C₂H₄ + ½O₂ → CH₃CHO, ΔH = −244 kJ/mol',
      'Subproductos clorados tóxicos (mono-, di-, tricloroacetaldehído)',
      'Corrosión severa por HCl: requiere cerámica ácido-resistente y titanio',
    ],
  },
  lpo: {
    species: 'Co(II)/Co(III) acetatos',
    promoter: 'Acetaldehído (opcional, iniciador radical)',
    mechanism: 'Oxidación radical en fase líquida: iniciación (Co²⁺ → Co³⁺ + e⁻), propagación (R· + O₂ → ROO·), terminación. Mecanismo no selectivo produce mezcla de ácidos carboxílicos.',
    kinetics: 'Conversión butano 10–20% (deliberadamente limitada); T = 150–200 °C, P = 48–62 bar',
    notes: [
      'Selectividad 40–70% a ácido acético',
      '13+ columnas de destilación requeridas para separación',
      'Consumo energético >12× mayor que Cativa; emisiones VOC 12× mayores',
      'Última planta importante (Celanese Pampa) cerró en 2009',
    ],
  },
  fermentacion: {
    species: 'PQQ-ADH + ALDH (enzimas membranales)',
    promoter: 'O₂ disuelto (aerobio) / CO₂ + H₂ (anaerobio)',
    mechanism: 'Aerobio: etanol → acetaldehído → ácido acético vía deshidrogenasas. Anaerobio: vía Wood-Ljungdahl (3 mol AA/mol glucosa) con recaptura de CO₂.',
    kinetics: 'T = 27–37 °C (aerobio) / 30–60 °C (anaerobio); P = 1 bar; inhibición a >34 g/L',
    notes: [
      'Rendimiento teórico máximo: 1.304 g AA/g etanol (aerobio)',
      'Concentración máxima reportada: 15–20% (w/v) con K. europaeus',
      'Costo 2–4× mayor que carbonilación; purificación consume 50–250 MJ/kg',
      'Escala limitada <50 kt/a; viable en nichos premium con prima de sostenibilidad',
    ],
  },
};

export default function ProcessesSection() {
  const [activeId, setActiveId] = useState('cativa');
  const active = processes.find(p => p.id === activeId)!;
  const mech = mechanismDetails[activeId];

  return (
    <section id="processes" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="tag-orange mb-4 inline-block">Tecnologías</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            6 Procesos Industriales
          </h2>
          <p className="text-[hsl(215,14%,55%)] max-w-2xl mx-auto text-lg">
            Desde la carbonilación catalítica dominante hasta las bio-rutas emergentes.
            Mecanismos, especies catalíticas y condiciones de operación.
          </p>
        </div>

        {/* Process tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {processes.map(p => (
            <button
              key={p.id}
              onClick={() => setActiveId(p.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeId === p.id
                  ? 'bg-[hsla(160,84%,39%,0.15)] text-[hsl(160,84%,55%)] border border-[hsla(160,84%,39%,0.3)]'
                  : 'text-[hsl(215,14%,50%)] hover:text-white hover:bg-[hsla(255,255,255,0.05)]'
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>

        {/* Active process detail */}
        <div className="glass rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="p-6 md:p-8 border-b border-[hsla(255,255,255,0.06)]">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">{active.fullName}</h3>
                  <span className={tagColorMap[active.tagColor] || 'tag-green'}>{active.statusLabel}</span>
                </div>
                <p className="text-[hsl(215,14%,55%)]">{active.developer} · {active.year}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-[hsl(215,14%,50%)]">TRL:</span>
                <span className="text-xl font-bold text-white">{active.trl}</span>
              </div>
            </div>
            <p className="mt-4 text-[hsl(215,14%,60%)] leading-relaxed">{active.description}</p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[hsla(255,255,255,0.04)]">
            {[
              { label: 'Temperatura', value: active.temperature },
              { label: 'Presión', value: active.pressure },
              { label: 'Selectividad', value: active.selectivity },
              { label: 'Selectividad CO', value: active.coSelectivity || 'N/A' },
              { label: 'Catalizador', value: active.catalyst },
              { label: 'Productividad', value: active.productivity },
              { label: 'Agua en reactor', value: active.waterContent },
              { label: 'Energía', value: active.energy },
            ].map((s, i) => (
              <div key={i} className="bg-[hsl(220,18%,7%)] p-4 md:p-5">
                <div className="text-xs text-[hsl(215,14%,45%)] uppercase tracking-wider mb-1">{s.label}</div>
                <div className="text-sm md:text-base font-semibold text-white mono">{s.value}</div>
              </div>
            ))}
          </div>

          {/* Mechanism section (technical enrichment) */}
          {mech && (
            <div className="p-6 md:p-8 border-t border-[hsla(255,255,255,0.06)] bg-[hsla(160,84%,39%,0.02)]">
              <h4 className="text-sm font-semibold text-[hsl(160,84%,55%)] uppercase tracking-wider mb-4">Mecanismo Catalítico y Especie Activa</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div>
                    <span className="text-[10px] text-[hsl(215,14%,45%)] uppercase tracking-wider">Especie activa</span>
                    <p className="mono text-sm text-[hsl(160,84%,55%)]">{mech.species}</p>
                  </div>
                  <div>
                    <span className="text-[10px] text-[hsl(215,14%,45%)] uppercase tracking-wider">Promotor / Co-catalizador</span>
                    <p className="text-sm text-[hsl(215,14%,60%)]">{mech.promoter}</p>
                  </div>
                  <div>
                    <span className="text-[10px] text-[hsl(215,14%,45%)] uppercase tracking-wider">Cinética</span>
                    <p className="mono text-xs text-[hsl(215,14%,60%)]">{mech.kinetics}</p>
                  </div>
                </div>
                <div>
                  <span className="text-[10px] text-[hsl(215,14%,45%)] uppercase tracking-wider">Mecanismo</span>
                  <p className="text-sm text-[hsl(215,14%,60%)] leading-relaxed">{mech.mechanism}</p>
                </div>
              </div>
              <div className="mt-4 space-y-1">
                {mech.notes.map((note, i) => (
                  <p key={i} className="text-xs text-[hsl(45,93%,60%)] flex items-start gap-2">
                    <span className="mt-0.5">•</span>{note}
                  </p>
                ))}
              </div>
            </div>
          )}

          {/* Advantages / Disadvantages */}
          <div className="grid md:grid-cols-2 gap-px bg-[hsla(255,255,255,0.04)]">
            <div className="bg-[hsl(220,18%,7%)] p-6">
              <h4 className="text-sm font-semibold text-[hsl(160,84%,55%)] uppercase tracking-wider mb-3">Ventajas Técnicas</h4>
              <ul className="space-y-2">
                {active.advantages.map((a, i) => (
                  <li key={i} className="text-sm text-[hsl(215,14%,60%)] flex items-start gap-2">
                    <span className="text-[hsl(160,84%,39%)] mt-0.5">+</span>{a}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[hsl(220,18%,7%)] p-6">
              <h4 className="text-sm font-semibold text-[hsl(25,95%,60%)] uppercase tracking-wider mb-3">Limitaciones Técnicas</h4>
              <ul className="space-y-2">
                {active.disadvantages.map((d, i) => (
                  <li key={i} className="text-sm text-[hsl(215,14%,60%)] flex items-start gap-2">
                    <span className="text-[hsl(25,95%,53%)] mt-0.5">−</span>{d}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Key fact */}
          <div className="p-6 border-t border-[hsla(255,255,255,0.06)] flex items-start gap-3">
            <span className="text-xl">🔬</span>
            <p className="text-sm text-[hsl(45,93%,60%)] italic">{active.keyFact}</p>
          </div>
        </div>
      </div>

      <div className="section-divider mt-24" />
    </section>
  );
}
