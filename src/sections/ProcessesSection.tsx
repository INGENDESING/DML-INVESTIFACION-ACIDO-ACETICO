import { useState } from 'react';
import { processes } from '@/data/processes';

const tagColorMap: Record<string, string> = {
  green: 'tag-green', orange: 'tag-orange', yellow: 'tag-yellow',
  blue: 'tag-blue', pink: 'tag-pink',
};

export default function ProcessesSection() {
  const [activeId, setActiveId] = useState('cativa');
  const active = processes.find(p => p.id === activeId)!;

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
                <span className="text-sm text-[hsl(215,14%,50%)]">Cuota de mercado:</span>
                <span className="text-xl font-bold text-white">{active.marketShare}</span>
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
              { label: 'Catalizador', value: active.catalyst },
              { label: 'Energía', value: active.energy },
              { label: 'Costo', value: active.cost },
              { label: 'Escala máx.', value: active.scale },
              { label: 'TRL', value: String(active.trl) },
            ].map((s, i) => (
              <div key={i} className="bg-[hsl(220,18%,7%)] p-4 md:p-5">
                <div className="text-xs text-[hsl(215,14%,45%)] uppercase tracking-wider mb-1">{s.label}</div>
                <div className="text-sm md:text-base font-semibold text-white mono">{s.value}</div>
              </div>
            ))}
          </div>

          {/* Advantages / Disadvantages */}
          <div className="grid md:grid-cols-2 gap-px bg-[hsla(255,255,255,0.04)]">
            <div className="bg-[hsl(220,18%,7%)] p-6">
              <h4 className="text-sm font-semibold text-[hsl(160,84%,55%)] uppercase tracking-wider mb-3">✓ Ventajas</h4>
              <ul className="space-y-2">
                {active.advantages.map((a, i) => (
                  <li key={i} className="text-sm text-[hsl(215,14%,60%)] flex items-start gap-2">
                    <span className="text-[hsl(160,84%,39%)] mt-0.5">•</span>{a}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[hsl(220,18%,7%)] p-6">
              <h4 className="text-sm font-semibold text-[hsl(25,95%,60%)] uppercase tracking-wider mb-3">✗ Desventajas</h4>
              <ul className="space-y-2">
                {active.disadvantages.map((d, i) => (
                  <li key={i} className="text-sm text-[hsl(215,14%,60%)] flex items-start gap-2">
                    <span className="text-[hsl(25,95%,53%)] mt-0.5">•</span>{d}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Key fact */}
          <div className="p-6 border-t border-[hsla(255,255,255,0.06)] flex items-start gap-3">
            <span className="text-xl">💡</span>
            <p className="text-sm text-[hsl(45,93%,60%)] italic">{active.keyFact}</p>
          </div>
        </div>
      </div>

      <div className="section-divider mt-24" />
    </section>
  );
}
