
const sustainabilityItems = [
  { id: 'bio-methanol', title: 'Bio-metanol y Carbonilación', desc: 'Ruta "drop-in" usando metanol verde (electrólisis + captura CO₂) en unidades Cativa/Acetica para reducir intensidad de carbono.', color: 'hsl(160, 84%, 39%)', icon: '♻️' },
  { id: 'gas-fermentation', title: 'Fermentación de Gas (Syngas)', desc: 'Acetogénicos (vía Wood-Ljungdahl) convierten CO₂ e hidrógeno en ácido acético. Proyección: USD 1,073/t costo de producción.', color: 'hsl(210, 100%, 56%)', icon: '🦠' },
  { id: 'biogas-direct', title: 'Conversión Directa de Biogás', desc: 'Plasma de no-equilibrio térmico o reformado seco para generar ácido acético directamente del biogás (CO₂ + CH₄).', color: 'hsl(45, 93%, 47%)', icon: '⚡' },
  { id: 'cma', title: 'Derivados Sostenibles (CMA)', desc: 'Acetato de calcio-magnesio (CMA) como deshielo no corrosivo, abriendo un mercado potencial de 10-12 Mt/año (USA).', color: 'hsl(270, 70%, 60%)', icon: '❄️' },
];

export default function SustainabilitySection() {
  return (
    <section id="sustainability" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="tag-green mb-4 inline-block">Sostenibilidad</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Tendencias de Bajo Carbono</h2>
          <p className="text-[hsl(215,14%,55%)] max-w-2xl mx-auto text-lg">
            La industria química se dirige hacia procesos con menor huella de carbono y economía circular.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {sustainabilityItems.map(item => (
            <div key={item.id} className="glass rounded-2xl p-8 hover:scale-[1.02] transition-transform duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10 blur-[40px] rounded-full pointer-events-none" style={{ background: item.color }} />
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">{item.icon}</span>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
              </div>
              <p className="text-[hsl(215,14%,60%)] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="section-divider mt-24" />
    </section>
  );
}
