import { useState } from 'react';
import { mechanisms, overallReactions } from '@/data/reactions';

function EquationBlock({ equation }: { equation: string }) {
  return (
    <div className="my-3 px-4 py-3 rounded-lg bg-[hsl(220,18%,7%)] border border-[hsla(255,255,255,0.06)]">
      <code className="mono text-sm text-[hsl(160,84%,55%)] break-all">{equation}</code>
    </div>
  );
}

export default function ReactionsSection() {
  const [activeMech, setActiveMech] = useState('monsanto');
  const mechanism = mechanisms.find(m => m.id === activeMech);

  return (
    <section id="reactions" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="tag-orange mb-4 inline-block">Mecanismos y Cinética</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Reacciones Químicas y Mecanismos Catalíticos</h2>
          <p className="text-[hsl(215,14%,55%)] max-w-2xl mx-auto text-lg">
            Ecuaciones principales, ciclos catalíticos y parámetros cinéticos para cada ruta de producción.
          </p>
        </div>

        {/* Overall reactions summary */}
        <div className="glass rounded-2xl p-6 mb-12">
          <h3 className="text-lg font-semibold text-white mb-4">Reacciones Globales por Ruta</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {overallReactions.map((r) => (
              <div key={r.id} className="bg-[hsl(220,18%,7%)] rounded-xl p-4 border border-[hsla(255,255,255,0.04)]">
                <div className="text-xs text-[hsl(160,84%,55%)] uppercase tracking-wider mb-1">{r.name}</div>
                <EquationBlock equation={r.equation} />
                <div className="text-[11px] text-[hsl(215,14%,50%)]">{r.conditions}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Mechanism selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {mechanisms.map(m => (
            <button
              key={m.id}
              onClick={() => setActiveMech(m.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeMech === m.id
                  ? 'bg-[hsla(160,84%,39%,0.15)] text-[hsl(160,84%,55%)] border border-[hsla(160,84%,39%,0.3)]'
                  : 'text-[hsl(215,14%,50%)] hover:text-white hover:bg-[hsla(255,255,255,0.05)]'
              }`}
            >
              {m.processName}
            </button>
          ))}
        </div>

        {/* Active mechanism detail */}
        {mechanism && (
          <div className="glass rounded-2xl overflow-hidden">
            {/* Header */}
            <div className="p-6 md:p-8 border-b border-[hsla(255,255,255,0.06)]">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{mechanism.processName}</h3>
                  <div className="flex items-center gap-3">
                    <span className="mono text-sm text-[hsl(160,84%,55%)]">{mechanism.overallEquation}</span>
                    {mechanism.enthalpy && (
                      <span className="text-xs text-[hsl(25,95%,60%)]">{mechanism.enthalpy}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Steps */}
            <div className="p-6 md:p-8 space-y-6">
              {mechanism.steps.map((step) => (
                <div key={step.step} className="relative pl-8 border-l-2 border-[hsla(160,84%,39%,0.2)]">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[hsl(220,18%,7%)] border-2 border-[hsl(160,84%,39%)] flex items-center justify-center">
                    <span className="text-[9px] font-bold text-[hsl(160,84%,55%)]">{step.step}</span>
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-1">
                    {step.title}
                    {mechanism.kinetics?.rateDeterminingStep === step.step && (
                      <span className="ml-2 text-[10px] px-2 py-0.5 rounded-full bg-[hsla(25,95%,53%,0.15)] text-[hsl(25,95%,60%)] border border-[hsla(25,95%,53%,0.2)]">
                        Etapa determinante
                      </span>
                    )}
                  </h4>
                  <EquationBlock equation={step.equation} />
                  <p className="text-sm text-[hsl(215,14%,60%)] leading-relaxed">{step.description}</p>
                  {step.notes && (
                    <p className="text-xs text-[hsl(45,93%,60%)] mt-2 italic">{step.notes}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Kinetics box */}
            {mechanism.kinetics && (
              <div className="p-6 md:p-8 border-t border-[hsla(255,255,255,0.06)] bg-[hsla(160,84%,39%,0.03)]">
                <h4 className="text-sm font-semibold text-[hsl(160,84%,55%)] uppercase tracking-wider mb-3">Parámetros Cinéticos</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  {mechanism.kinetics.rateLaw && (
                    <div>
                      <div className="text-[10px] text-[hsl(215,14%,45%)] uppercase tracking-wider mb-1">Ley de velocidad</div>
                      <code className="mono text-xs text-white">{mechanism.kinetics.rateLaw}</code>
                    </div>
                  )}
                  {mechanism.kinetics.activationEnthalpy && (
                    <div>
                      <div className="text-[10px] text-[hsl(215,14%,45%)] uppercase tracking-wider mb-1">Entalpía de activación</div>
                      <code className="mono text-xs text-white">{mechanism.kinetics.activationEnthalpy}</code>
                    </div>
                  )}
                  {mechanism.kinetics.activationEntropy && (
                    <div>
                      <div className="text-[10px] text-[hsl(215,14%,45%)] uppercase tracking-wider mb-1">Entropía de activación</div>
                      <code className="mono text-xs text-white">{mechanism.kinetics.activationEntropy}</code>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="section-divider mt-24" />
    </section>
  );
}
