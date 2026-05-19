import { comparisonData } from '@/data/market';

export default function ComparisonSection() {
  return (
    <section id="comparison" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="tag-yellow mb-4 inline-block">Comparativa Técnica</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tabla Comparativa Maestra
          </h2>
          <p className="text-[hsl(215,14%,55%)] max-w-2xl mx-auto text-lg">
            Comparación directa de parámetros técnicos y de operación entre los 6 procesos industriales.
            Datos extraídos de Ullmann's Encyclopedia, patentes y literatura revisada por pares.
          </p>
        </div>

        {/* Comparison table */}
        <div className="glass rounded-2xl overflow-hidden">
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

        {/* Technical note */}
        <div className="mt-8 glass-blue rounded-xl p-6 flex items-start gap-4">
          <span className="text-2xl">📋</span>
          <div>
            <h4 className="text-sm font-semibold text-[hsl(210,100%,65%)] mb-2">Nota Metodológica</h4>
            <p className="text-xs text-[hsl(215,14%,60%)] leading-relaxed">
              Los valores presentados corresponden a condiciones típicas de operación reportadas en la literatura técnica
              (Ullmann's Encyclopedia of Industrial Chemistry, patentes US 3,769,329 y EP 0643034, y artículos en
              Journal of the American Chemical Society). Las cifras de costo y energía pueden variar según escala,
              integración energética y mix energético regional. TRL = Technology Readiness Level (NASA scale).
            </p>
          </div>
        </div>
      </div>

      <div className="section-divider mt-24" />
    </section>
  );
}
