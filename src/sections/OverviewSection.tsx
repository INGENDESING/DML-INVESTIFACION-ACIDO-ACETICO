import { globalStats } from '@/data/market';

const stats = [
  { ...globalStats.capacity, icon: '🏭', color: 'green' },
  { ...globalStats.marketValue, icon: '💰', color: 'orange' },
  { ...globalStats.cagr, icon: '📈', color: 'blue' },
  { ...globalStats.carbonylation, icon: '⚗️', color: 'yellow' },
  { ...globalStats.chinaShare, icon: '🌏', color: 'pink' },
];

export default function OverviewSection() {
  return (
    <section id="overview" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="tag-green mb-4 inline-block">Panorama Global</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Un Mercado de{' '}
            <span className="text-[hsl(25,95%,53%)]">${globalStats.marketValue.value}B</span>
          </h2>
          <p className="text-[hsl(215,14%,55%)] max-w-2xl mx-auto text-lg">
            El ácido acético es uno de los químicos de base más importantes del mundo,
            con más del 84% producido por carbonilación de metanol.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`glass-${stat.color} rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300`}
            >
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-white mb-1">
                {typeof stat.value === 'number' && stat.value >= 1000
                  ? `${(stat.value / 1000).toFixed(0)}k+`
                  : stat.value}
                <span className="text-lg font-normal text-[hsl(215,14%,55%)] ml-1">{stat.unit}</span>
              </div>
              <div className="text-sm text-[hsl(215,14%,50%)]">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Key narrative */}
        <div className="mt-16 glass rounded-2xl p-8 md:p-10 glow-green">
          <div className="flex items-start gap-4">
            <div className="text-4xl">🧪</div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">¿Por qué importa?</h3>
              <p className="text-[hsl(215,14%,60%)] leading-relaxed">
                El ácido acético (CH₃COOH) es precursor del <strong className="text-[hsl(160,84%,55%)]">vinil acetato (VAM)</strong> para 
                pinturas y adhesivos, del <strong className="text-[hsl(210,100%,65%)]">PTA</strong> para fibras de poliéster, 
                y de <strong className="text-[hsl(25,95%,65%)]">acetatos</strong> para solventes industriales.
                Su producción mueve más de <strong className="text-white">20 millones de toneladas anuales</strong>,
                dominada por la carbonilación catalítica de metanol — una de las aplicaciones más exitosas
                de la catálisis organometálica en la historia de la industria química.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section-divider mt-24" />
    </section>
  );
}
