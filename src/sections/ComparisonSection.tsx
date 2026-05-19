import { comparisonData, radarData } from '@/data/market';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, Legend } from 'recharts';

const processColors: Record<string, string> = {
  Cativa: 'hsl(160, 84%, 39%)',
  AO_Plus: 'hsl(25, 95%, 53%)',
  Monsanto: 'hsl(45, 93%, 47%)',
  Wacker: 'hsl(210, 100%, 56%)',
  Fermentacion: 'hsl(330, 80%, 60%)',
};

export default function ComparisonSection() {
  return (
    <section id="comparison" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="tag-yellow mb-4 inline-block">Comparativa</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tabla Comparativa Maestra
          </h2>
          <p className="text-[hsl(215,14%,55%)] max-w-2xl mx-auto text-lg">
            Comparación directa de parámetros técnicos y económicos entre los 6 procesos industriales.
          </p>
        </div>

        {/* Comparison table */}
        <div className="glass rounded-2xl overflow-hidden mb-16">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[hsla(255,255,255,0.06)]">
                  <th className="p-4 text-left text-[hsl(215,14%,50%)] font-medium">Parámetro</th>
                  <th className="p-4 text-center text-[hsl(45,93%,55%)] font-medium">Monsanto</th>
                  <th className="p-4 text-center text-[hsl(160,84%,55%)] font-medium">Cativa</th>
                  <th className="p-4 text-center text-[hsl(25,95%,60%)] font-medium">AO Plus</th>
                  <th className="p-4 text-center text-[hsl(210,100%,65%)] font-medium">Wacker</th>
                  <th className="p-4 text-center text-[hsl(330,80%,65%)] font-medium hidden md:table-cell">LPO</th>
                  <th className="p-4 text-center text-[hsl(185,80%,55%)] font-medium hidden md:table-cell">Ferment.</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={i} className="border-b border-[hsla(255,255,255,0.03)] hover:bg-[hsla(255,255,255,0.02)] transition-colors">
                    <td className="p-4 text-[hsl(215,14%,55%)] font-medium mono text-xs">{row.param}</td>
                    <td className="p-4 text-center text-[hsl(215,14%,65%)] mono text-xs">{row.monsanto}</td>
                    <td className="p-4 text-center text-[hsl(215,14%,65%)] mono text-xs">{row.cativa}</td>
                    <td className="p-4 text-center text-[hsl(215,14%,65%)] mono text-xs">{row.aoPlus}</td>
                    <td className="p-4 text-center text-[hsl(215,14%,65%)] mono text-xs">{row.wacker}</td>
                    <td className="p-4 text-center text-[hsl(215,14%,65%)] mono text-xs hidden md:table-cell">{row.lpo}</td>
                    <td className="p-4 text-center text-[hsl(215,14%,65%)] mono text-xs hidden md:table-cell">{row.fermentacion}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Radar chart */}
        <div className="glass rounded-2xl p-6 md:p-8">
          <h3 className="text-xl font-semibold text-white mb-6 text-center">Perfil Multidimensional por Proceso</h3>
          <div className="h-[400px] md:h-[450px]">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData} cx="50%" cy="50%" outerRadius="70%">
                <PolarGrid stroke="hsla(215, 14%, 30%, 0.3)" />
                <PolarAngleAxis dataKey="metric" tick={{ fill: 'hsl(215, 14%, 55%)', fontSize: 11 }} />
                {Object.keys(processColors).map(key => (
                  <Radar
                    key={key}
                    name={key.replace('_', ' ')}
                    dataKey={key}
                    stroke={processColors[key]}
                    fill={processColors[key]}
                    fillOpacity={0.08}
                    strokeWidth={2}
                  />
                ))}
                <Legend
                  wrapperStyle={{ fontSize: '12px', color: 'hsl(215, 14%, 55%)' }}
                  formatter={(value: string) => <span style={{ color: 'hsl(215, 14%, 65%)' }}>{value}</span>}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="section-divider mt-24" />
    </section>
  );
}
