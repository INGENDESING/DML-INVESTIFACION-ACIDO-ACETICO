import { useState } from 'react';
import { rawMaterials, catalysts } from '@/data/rawMaterials';

export default function RawMaterialsSection() {
  const [activeId, setActiveId] = useState('methanol');
  const material = rawMaterials.find(m => m.id === activeId)!;

  return (
    <section id="materials" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="tag-blue mb-4 inline-block">Materias Primas</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Feedstocks y Catalizadores</h2>
          <p className="text-[hsl(215,14%,55%)] max-w-2xl mx-auto text-lg">
            Requerimientos estequiométricos, propiedades críticas y especies catalíticas para cada ruta de producción.
          </p>
        </div>

        {/* Raw material tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {rawMaterials.map(m => (
            <button
              key={m.id}
              onClick={() => setActiveId(m.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeId === m.id
                  ? 'bg-[hsla(210,100%,56%,0.15)] text-[hsl(210,100%,65%)] border border-[hsla(210,100%,56%,0.3)]'
                  : 'text-[hsl(215,14%,50%)] hover:text-white hover:bg-[hsla(255,255,255,0.05)]'
              }`}
            >
              {m.name}
            </button>
          ))}
        </div>

        {/* Active material detail */}
        <div className="glass rounded-2xl overflow-hidden mb-16">
          <div className="p-6 md:p-8 border-b border-[hsla(255,255,255,0.06)]">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-bold text-white">{material.name}</h3>
                  <span className="mono text-sm text-[hsl(210,100%,65%)]">{material.formula}</span>
                </div>
                <p className="text-[hsl(215,14%,55%)]">{material.role}</p>
              </div>
              <div className="text-right">
                <div className="text-xs text-[hsl(215,14%,45%)] uppercase tracking-wider">Estequiometría</div>
                <div className="mono text-sm text-white">{material.stoichiometry}</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-[hsla(255,255,255,0.04)]">
            {/* Properties */}
            <div className="bg-[hsl(220,18%,7%)] p-6">
              <h4 className="text-sm font-semibold text-[hsl(210,100%,65%)] uppercase tracking-wider mb-4">Propiedades Críticas</h4>
              <div className="space-y-3">
                {material.criticalProperties.map((p, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <span className="text-xs text-[hsl(215,14%,50%)]">{p.label}</span>
                    <span className="mono text-sm text-white">{p.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sources & notes */}
            <div className="bg-[hsl(220,18%,7%)] p-6">
              <h4 className="text-sm font-semibold text-[hsl(210,100%,65%)] uppercase tracking-wider mb-4">Fuentes</h4>
              <div className="space-y-2 mb-6">
                {material.sources.map((s, i) => (
                  <div key={i} className="text-sm text-[hsl(215,14%,60%)] flex items-start gap-2">
                    <span className="text-[hsl(210,100%,56%)] mt-0.5">•</span>{s}
                  </div>
                ))}
              </div>
              {material.purity && (
                <>
                  <h4 className="text-sm font-semibold text-[hsl(210,100%,65%)] uppercase tracking-wider mb-2">Pureza Requerida</h4>
                  <p className="text-sm text-[hsl(215,14%,60%)]">{material.purity}</p>
                </>
              )}
            </div>
          </div>

          {material.notes && (
            <div className="p-6 border-t border-[hsla(255,255,255,0.06)] flex items-start gap-3">
              <span className="text-xl">💡</span>
              <p className="text-sm text-[hsl(45,93%,60%)] italic">{material.notes}</p>
            </div>
          )}
        </div>

        {/* Catalysts comparison table */}
        <div className="glass rounded-2xl overflow-hidden">
          <div className="p-6 border-b border-[hsla(255,255,255,0.06)]">
            <h3 className="text-lg font-semibold text-white">Catalizadores y Especies Activas por Proceso</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[hsla(255,255,255,0.06)]">
                  <th className="p-4 text-left text-[hsl(215,14%,50%)] font-medium">Proceso</th>
                  <th className="p-4 text-left text-[hsl(215,14%,50%)] font-medium">Especie Activa</th>
                  <th className="p-4 text-left text-[hsl(215,14%,50%)] font-medium">Promotor / Co-catalizador</th>
                  <th className="p-4 text-left text-[hsl(215,14%,50%)] font-medium">Concentración</th>
                  <th className="p-4 text-left text-[hsl(215,14%,50%)] font-medium hidden md:table-cell">Precursor</th>
                </tr>
              </thead>
              <tbody>
                {catalysts.map((c, i) => (
                  <tr key={i} className="border-b border-[hsla(255,255,255,0.03)] hover:bg-[hsla(255,255,255,0.02)] transition-colors">
                    <td className="p-4 text-white font-medium text-sm">{c.process}</td>
                    <td className="p-4 text-[hsl(160,84%,55%)] mono text-xs">{c.activeSpecies}</td>
                    <td className="p-4 text-[hsl(215,14%,60%)] text-xs">{c.promoter}</td>
                    <td className="p-4 text-[hsl(215,14%,60%)] mono text-xs">{c.concentration}</td>
                    <td className="p-4 text-[hsl(215,14%,60%)] text-xs hidden md:table-cell">{c.precursor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="section-divider mt-24" />
    </section>
  );
}
