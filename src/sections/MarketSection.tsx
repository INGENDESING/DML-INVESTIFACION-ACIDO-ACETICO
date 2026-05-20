import { regionalCapacity, applications, marketEvolution, rawMaterialPrices, producers } from '@/data/market';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell,
  AreaChart, Area,
} from 'recharts';

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="glass rounded-lg p-3 text-xs">
      <p className="text-white font-medium mb-1">{label}</p>
      {payload.map((p: any, i: number) => (
        <p key={i} style={{ color: p.color }}>{p.name}: {p.value}{typeof p.value === 'number' && p.value < 100 ? '%' : ''}</p>
      ))}
    </div>
  );
};

export default function MarketSection() {
  return (
    <section id="market" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="tag-blue mb-4 inline-block">Mercado Global</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Distribución y Tendencias</h2>
          <p className="text-[hsl(215,14%,55%)] max-w-2xl mx-auto text-lg mb-8">
            China domina con el 55% de la capacidad global. Asia-Pacífico concentra más del 75%.
          </p>
          <img src="/images/fig3_market_overview.png" alt="Market Overview" className="mx-auto rounded-lg shadow-xl max-w-3xl w-full h-auto border border-[hsla(255,255,255,0.1)] mb-12" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* Regional capacity bar chart */}
          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Capacidad por Región (kt/año)</h3>
            <div className="h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={regionalCapacity} layout="vertical" margin={{ left: 20 }}>
                  <XAxis type="number" tick={{ fill: 'hsl(215,14%,50%)', fontSize: 10 }} />
                  <YAxis type="category" dataKey="region" tick={{ fill: 'hsl(215,14%,55%)', fontSize: 11 }} width={100} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="capacity" name="Capacidad" radius={[0, 6, 6, 0]}>
                    {regionalCapacity.map((entry, i) => (
                      <Cell key={i} fill={entry.color} fillOpacity={0.8} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Applications pie chart */}
          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Aplicaciones (% de demanda)</h3>
            <div className="h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={applications} dataKey="share" nameKey="name" cx="50%" cy="50%" innerRadius={55} outerRadius={90} strokeWidth={0} label={({ name, share }) => `${name} ${share}%`}>
                    {applications.map((entry, i) => (
                      <Cell key={i} fill={entry.color} fillOpacity={0.85} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Market evolution area chart */}
        <div className="glass rounded-2xl p-6 mb-10">
          <h3 className="text-lg font-semibold text-white mb-4">Evolución de Cuota de Mercado por Tecnología (%)</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={marketEvolution}>
                <XAxis dataKey="year" tick={{ fill: 'hsl(215,14%,50%)', fontSize: 11 }} />
                <YAxis tick={{ fill: 'hsl(215,14%,50%)', fontSize: 10 }} />
                <Tooltip content={<CustomTooltip />} />
                <Area type="monotone" dataKey="carbonylation" name="Carbonilación" stackId="1" stroke="hsl(160,84%,39%)" fill="hsl(160,84%,39%)" fillOpacity={0.3} />
                <Area type="monotone" dataKey="oxidation" name="Oxidación" stackId="1" stroke="hsl(25,95%,53%)" fill="hsl(25,95%,53%)" fillOpacity={0.3} />
                <Area type="monotone" dataKey="lpo" name="LPO" stackId="1" stroke="hsl(330,80%,60%)" fill="hsl(330,80%,60%)" fillOpacity={0.3} />
                <Area type="monotone" dataKey="bio" name="Bio/Otros" stackId="1" stroke="hsl(210,100%,56%)" fill="hsl(210,100%,56%)" fillOpacity={0.3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Raw material prices */}
        <div className="glass rounded-2xl p-6 mb-10">
          <h3 className="text-lg font-semibold text-white mb-4">Precios de Materias Primas por Región (USD/t, Q4 2025)</h3>
          <div className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={rawMaterialPrices}>
                <XAxis dataKey="region" tick={{ fill: 'hsl(215,14%,55%)', fontSize: 11 }} />
                <YAxis tick={{ fill: 'hsl(215,14%,50%)', fontSize: 10 }} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="metanol" name="Metanol" fill="hsl(160,84%,39%)" fillOpacity={0.7} radius={[4, 4, 0, 0]} />
                <Bar dataKey="etileno" name="Etileno" fill="hsl(25,95%,53%)" fillOpacity={0.7} radius={[4, 4, 0, 0]} />
                <Bar dataKey="butano" name="Butano" fill="hsl(210,100%,56%)" fillOpacity={0.7} radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Top producers */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-6 text-center">Top Productores Mundiales</h3>
          <div className="grid md:grid-cols-5 gap-4">
            {producers.map(p => (
              <div key={p.rank} className="glass rounded-xl p-5 hover:scale-105 transition-transform duration-300 text-center">
                <div className="text-3xl font-bold mb-1" style={{ color: p.color }}>#{p.rank}</div>
                <div className="text-lg font-semibold text-white mb-1">{p.name}</div>
                <div className="mono text-sm text-[hsl(215,14%,55%)] mb-2">{p.capacity}</div>
                <div className="text-xs text-[hsl(215,14%,45%)]">{p.highlight}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section-divider mt-24" />
    </section>
  );
}
