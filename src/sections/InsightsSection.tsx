import { useState } from 'react';
import { insights, type Insight } from '@/data/insights';

const confidenceColors: Record<string, { bg: string; text: string; label: string }> = {
  high: { bg: 'bg-[hsla(160,84%,39%,0.12)]', text: 'text-[hsl(160,84%,55%)]', label: 'Alta' },
  medium: { bg: 'bg-[hsla(45,93%,47%,0.12)]', text: 'text-[hsl(45,93%,60%)]', label: 'Media' },
  exploratory: { bg: 'bg-[hsla(210,100%,56%,0.12)]', text: 'text-[hsl(210,100%,65%)]', label: 'Exploratoria' },
};

function InsightCard({ insight, isOpen, onToggle }: { insight: Insight; isOpen: boolean; onToggle: () => void }) {
  const conf = confidenceColors[insight.confidence];
  return (
    <div className={`glass rounded-xl overflow-hidden transition-all duration-300 ${isOpen ? 'glow-green' : 'hover:bg-[hsla(255,255,255,0.03)]'}`}>
      <button onClick={onToggle} className="w-full text-left p-5 md:p-6 flex items-start gap-4">
        <span className="text-2xl font-bold text-[hsla(160,84%,39%,0.4)] mono flex-shrink-0 w-8">
          {String(insight.id).padStart(2, '0')}
        </span>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <h3 className="text-base font-semibold text-white">{insight.title}</h3>
            <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium ${conf.bg} ${conf.text}`}>
              {conf.label}
            </span>
            <span className="text-[10px] text-[hsl(215,14%,40%)] uppercase tracking-wider">{insight.type}</span>
          </div>
          <p className="text-sm text-[hsl(25,95%,60%)] italic">{insight.tagline}</p>
        </div>
        <span className={`text-[hsl(215,14%,45%)] transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
          ▾
        </span>
      </button>
      {isOpen && (
        <div className="px-5 pb-5 md:px-6 md:pb-6 ml-12">
          <p className="text-sm text-[hsl(215,14%,60%)] leading-relaxed mb-3">{insight.summary}</p>
          <div className="flex flex-wrap gap-1">
            {insight.dimensions.map((d, i) => (
              <span key={i} className="text-[10px] px-2 py-0.5 rounded-full bg-[hsla(210,100%,56%,0.08)] text-[hsl(210,100%,65%)] border border-[hsla(210,100%,56%,0.15)]">
                {d}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function InsightsSection() {
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <section id="insights" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="tag-pink mb-4 inline-block">Análisis Cruzado</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            15 Insights Estratégicos
          </h2>
          <p className="text-[hsl(215,14%,55%)] max-w-2xl mx-auto text-lg">
            Patrones emergentes del cruce sistemático de 12 dimensiones de investigación.
            Ninguno es visible al leer una sola dimensión.
          </p>
        </div>

        {/* Confidence legend */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {Object.entries(confidenceColors).map(([key, c]) => (
            <div key={key} className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${c.bg}`} style={{ boxShadow: `0 0 6px ${c.text.replace('text-[', '').replace(']', '')}` }} />
              <span className={`text-xs ${c.text}`}>{c.label}</span>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          {insights.map(insight => (
            <InsightCard
              key={insight.id}
              insight={insight}
              isOpen={openId === insight.id}
              onToggle={() => setOpenId(openId === insight.id ? null : insight.id)}
            />
          ))}
        </div>
      </div>

      <div className="section-divider mt-24" />
    </section>
  );
}
