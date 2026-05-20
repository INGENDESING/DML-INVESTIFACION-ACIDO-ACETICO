import { useState } from 'react';

/* ── Reusable PFD Equipment Components ── */

function EquipmentBox({ children, label, className = '' }: { children: React.ReactNode; label: string; className?: string }) {
  return (
    <div className={`relative flex flex-col items-center ${className}`}>
      <div className="relative bg-[hsl(220,18%,10%)] border-2 border-[hsla(160,84%,39%,0.4)] rounded-xl p-4 min-w-[140px] text-center hover:border-[hsl(160,84%,55%)] hover:shadow-[0_0_20px_hsla(160,84%,39%,0.15)] transition-all duration-300 group">
        {children}
      </div>
      <span className="mt-2 text-[11px] font-semibold text-[hsl(215,14%,60%)] uppercase tracking-wider">{label}</span>
    </div>
  );
}

function ReactorCSTR({ temp, pressure, detail, className = '' }: { temp: string; pressure: string; detail?: string; className?: string }) {
  return (
    <EquipmentBox label="Reactor CSTR" className={className}>
      <div className="text-lg mb-1">⚗️</div>
      <div className="text-xs font-bold text-white">CSTR</div>
      <div className="text-[10px] text-[hsl(160,84%,55%)] mono mt-1">{temp}</div>
      <div className="text-[10px] text-[hsl(210,100%,65%)] mono">{pressure}</div>
      {detail && <div className="text-[9px] text-[hsl(215,14%,50%)] mt-1">{detail}</div>}
    </EquipmentBox>
  );
}

function ReactorPFR({ temp, pressure, className = '' }: { temp: string; pressure: string; className?: string }) {
  return (
    <EquipmentBox label="Reactor PFR" className={className}>
      <div className="w-16 h-8 border-2 border-[hsla(25,95%,53%,0.5)] rounded-full flex items-center justify-center bg-[hsla(25,95%,53%,0.05)]">
        <span className="text-[10px] font-bold text-[hsl(25,95%,60%)]">PFR</span>
      </div>
      <div className="text-[10px] text-[hsl(25,95%,60%)] mono mt-1">{temp}</div>
      <div className="text-[10px] text-[hsl(210,100%,65%)] mono">{pressure}</div>
    </EquipmentBox>
  );
}

function FlashTank({ detail, className = '' }: { detail?: string; className?: string }) {
  return (
    <EquipmentBox label="Flash" className={className}>
      <div className="w-12 h-12 rounded-full border-2 border-[hsla(210,100%,56%,0.5)] flex items-center justify-center bg-[hsla(210,100%,56%,0.05)]">
        <span className="text-lg">⬇</span>
      </div>
      <div className="text-[10px] text-[hsl(210,100%,65%)] mono mt-1">Adiabático</div>
      {detail && <div className="text-[9px] text-[hsl(215,14%,50%)] mt-1">{detail}</div>}
    </EquipmentBox>
  );
}

function DistillationColumn({ label, tempTop, tempBot, detail, className = '' }: { label: string; tempTop?: string; tempBot?: string; detail?: string; className?: string }) {
  return (
    <EquipmentBox label={label} className={className}>
      <div className="flex flex-col items-center">
        <div className="w-10 h-20 border-2 border-[hsla(45,93%,47%,0.5)] rounded-lg flex flex-col justify-between py-2 bg-[hsla(45,93%,47%,0.05)]">
          <div className="w-full h-px bg-[hsla(45,93%,47%,0.3)]" />
          <div className="w-full h-px bg-[hsla(45,93%,47%,0.3)]" />
          <div className="w-full h-px bg-[hsla(45,93%,47%,0.3)]" />
          <div className="w-full h-px bg-[hsla(45,93%,47%,0.3)]" />
        </div>
      </div>
      {tempTop && <div className="text-[10px] text-[hsl(45,93%,55%)] mono mt-1">{tempTop}</div>}
      {tempBot && <div className="text-[10px] text-[hsl(25,95%,60%)] mono">{tempBot}</div>}
      {detail && <div className="text-[9px] text-[hsl(215,14%,50%)] mt-1">{detail}</div>}
    </EquipmentBox>
  );
}


/* ── Process Flow Diagrams ── */

function FlowDefs() {
  return (
    <defs>
      <linearGradient id="stream-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="hsl(160, 84%, 39%)" stopOpacity="0.5" />
        <stop offset="100%" stopColor="hsl(160, 84%, 55%)" />
      </linearGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
  );
}

function MonsantoFlow() {
  return (
    <div className="w-full relative overflow-x-auto min-h-[500px]">
      <div className="min-w-[1100px] h-[500px] relative mx-auto">
        <svg viewBox="0 0 1100 500" className="w-full h-full absolute inset-0 z-0">
          <FlowDefs />

          {/* Main forward flow */}
          <path d="M 220 250 L 320 250" fill="none" stroke="url(#stream-gradient)" strokeWidth="4" className="path-stream animate-flow" filter="url(#glow)"/>
          <text x="270" y="240" fill="hsl(215,14%,60%)" fontSize="10" textAnchor="middle">Efluente</text>
          
          <path d="M 460 250 L 560 250" fill="none" stroke="url(#stream-gradient)" strokeWidth="4" className="path-stream animate-flow" filter="url(#glow)"/>
          <text x="510" y="240" fill="hsl(215,14%,60%)" fontSize="10" textAnchor="middle">Líquido</text>

          <path d="M 700 250 L 760 250" fill="none" stroke="url(#stream-gradient)" strokeWidth="4" className="path-stream animate-flow" filter="url(#glow)"/>
          <text x="730" y="240" fill="hsl(215,14%,60%)" fontSize="10" textAnchor="middle">Fondos</text>

          <path d="M 900 250 L 960 250" fill="none" stroke="url(#stream-gradient)" strokeWidth="4" className="path-stream animate-flow" filter="url(#glow)"/>
          <text x="930" y="240" fill="hsl(215,14%,60%)" fontSize="10" textAnchor="middle">Fondos</text>

          <path d="M 1100 250 L 1120 250" fill="none" stroke="url(#stream-gradient)" strokeWidth="4" className="path-stream animate-flow" filter="url(#glow)"/>

          {/* Recycles */}
          {/* Catalizador Homogéneo */}
          <path d="M 390 320 L 390 420 L 150 420 L 150 320" fill="none" stroke="hsl(210,100%,56%)" strokeWidth="2" strokeDasharray="6 6" className="animate-flow-reverse"/>
          <text x="270" y="440" fill="hsl(210,100%,65%)" fontSize="10" textAnchor="middle">Reciclo Catalizador (Fase Líquida)</text>

          {/* Promotor CH3I */}
          <path d="M 630 180 L 630 80 L 150 80 L 150 180" fill="none" stroke="hsl(25,95%,53%)" strokeWidth="2" strokeDasharray="6 6" className="animate-flow-reverse"/>
          <text x="390" y="70" fill="hsl(25,95%,60%)" fontSize="10" textAnchor="middle">Reciclo CH₃I + Acetato de Metilo</text>

          {/* Agua */}
          <path d="M 830 180 L 830 40 L 90 40 L 90 180" fill="none" stroke="hsl(185,80%,50%)" strokeWidth="2" strokeDasharray="6 6" className="animate-flow-reverse"/>
          <text x="460" y="30" fill="hsl(185,80%,60%)" fontSize="10" textAnchor="middle">Recirculación de Agua (14-15%)</text>

          {/* Equipment via foreignObject */}
          <foreignObject x="80" y="180" width="140" height="140">
            <ReactorCSTR temp="175–180 °C" pressure="30–40 bar" detail="Rh 200–400 ppm" className="w-full" />
          </foreignObject>

          <foreignObject x="320" y="180" width="140" height="140">
            <FlashTank detail="Adiabático" className="w-full" />
          </foreignObject>

          <foreignObject x="560" y="180" width="140" height="140">
            <DistillationColumn label="Columna Livianos" tempTop="52 °C" tempBot="97 °C" className="w-full" />
          </foreignObject>

          <foreignObject x="760" y="180" width="140" height="140">
            <DistillationColumn label="Columna Secado" detail="Remueve H₂O" className="w-full" />
          </foreignObject>

          <foreignObject x="960" y="180" width="140" height="140">
            <DistillationColumn label="Purificación AA" tempTop="120 °C" tempBot="142 °C" className="w-full" />
          </foreignObject>
        </svg>
      </div>
    </div>
  );
}

function CativaFlow() {
  return (
    <div className="w-full relative overflow-x-auto min-h-[500px]">
      <div className="min-w-[1100px] h-[500px] relative mx-auto">
        <svg viewBox="0 0 1100 500" className="w-full h-full absolute inset-0 z-0">
          <FlowDefs />

          {/* Main forward flow */}
          <path d="M 190 250 L 250 250" fill="none" stroke="url(#stream-gradient)" strokeWidth="4" className="path-stream animate-flow" filter="url(#glow)"/>
          <text x="220" y="240" fill="hsl(215,14%,60%)" fontSize="10" textAnchor="middle">Efluente</text>

          <path d="M 390 250 L 450 250" fill="none" stroke="url(#stream-gradient)" strokeWidth="4" className="path-stream animate-flow" filter="url(#glow)"/>
          <text x="420" y="240" fill="hsl(215,14%,60%)" fontSize="10" textAnchor="middle">Efluente</text>

          <path d="M 590 250 L 680 250" fill="none" stroke="url(#stream-gradient)" strokeWidth="4" className="path-stream animate-flow" filter="url(#glow)"/>
          <text x="635" y="240" fill="hsl(215,14%,60%)" fontSize="10" textAnchor="middle">Líquido</text>

          <path d="M 820 250 L 890 250" fill="none" stroke="url(#stream-gradient)" strokeWidth="4" className="path-stream animate-flow" filter="url(#glow)"/>
          <text x="855" y="240" fill="hsl(215,14%,60%)" fontSize="10" textAnchor="middle">Fondos</text>

          <path d="M 1030 250 L 1050 250" fill="none" stroke="url(#stream-gradient)" strokeWidth="4" className="path-stream animate-flow" filter="url(#glow)"/>

          {/* Recycles */}
          {/* Catalizador Homogéneo */}
          <path d="M 520 320 L 520 420 L 120 420 L 120 320" fill="none" stroke="hsl(210,100%,56%)" strokeWidth="2" strokeDasharray="6 6" className="animate-flow-reverse"/>
          <text x="320" y="440" fill="hsl(210,100%,65%)" fontSize="10" textAnchor="middle">Reciclo Catalizador (Ir + Ru)</text>

          {/* Promotor / Livianos */}
          <path d="M 750 180 L 750 80 L 120 80 L 120 180" fill="none" stroke="hsl(25,95%,53%)" strokeWidth="2" strokeDasharray="6 6" className="animate-flow-reverse"/>
          <text x="435" y="70" fill="hsl(25,95%,60%)" fontSize="10" textAnchor="middle">Reciclo Livianos + CH₃I (Agua 0.5-5%)</text>


          {/* Equipment via foreignObject */}
          <foreignObject x="50" y="180" width="140" height="140">
            <ReactorCSTR temp="180–195 °C" pressure="30–40 bar" detail="Ir 1-5k ppm, Ru 1-2k ppm" className="w-full" />
          </foreignObject>

          <foreignObject x="250" y="180" width="140" height="140">
            <ReactorPFR temp="180–195 °C" pressure="30–40 bar" className="w-full" />
          </foreignObject>

          <foreignObject x="450" y="180" width="140" height="140">
            <FlashTank detail="Cat. reciclado" className="w-full" />
          </foreignObject>

          <foreignObject x="680" y="180" width="140" height="140">
            <DistillationColumn label="Livianos + Secado" detail="1 columna menos" className="w-full" />
          </foreignObject>

          <foreignObject x="890" y="180" width="140" height="140">
            <DistillationColumn label="Purificación AA" tempTop="120 °C" tempBot="142 °C" className="w-full" />
          </foreignObject>
        </svg>
      </div>
    </div>
  );
}

/* ── Main Section ── */

export default function ProcessFlowSection() {
  const [activeProcess, setActiveProcess] = useState<'monsanto' | 'cativa'>('monsanto');

  return (
    <section id="flows" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="tag-yellow mb-4 inline-block">Diagramas de Proceso</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Trenes de Proceso (PFD Simplificado)</h2>
          <p className="text-[hsl(215,14%,55%)] max-w-2xl mx-auto text-lg">
            Diagramas de flujo de proceso para las dos tecnologías de carbonilación dominantes,
            con condiciones de operación y reciclos principales.
          </p>
        </div>

        {/* Process selector */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveProcess('monsanto')}
            className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
              activeProcess === 'monsanto'
                ? 'bg-[hsla(45,93%,47%,0.15)] text-[hsl(45,93%,60%)] border border-[hsla(45,93%,47%,0.3)]'
                : 'text-[hsl(215,14%,50%)] hover:text-white hover:bg-[hsla(255,255,255,0.05)] border border-transparent'
            }`}
          >
            Proceso Monsanto (Rh)
          </button>
          <button
            onClick={() => setActiveProcess('cativa')}
            className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
              activeProcess === 'cativa'
                ? 'bg-[hsla(160,84%,39%,0.15)] text-[hsl(160,84%,55%)] border border-[hsla(160,84%,39%,0.3)]'
                : 'text-[hsl(215,14%,50%)] hover:text-white hover:bg-[hsla(255,255,255,0.05)] border border-transparent'
            }`}
          >
            Proceso Cativa (Ir + Ru)
          </button>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-6 mb-10 text-xs text-[hsl(215,14%,50%)]">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded border-2 border-[hsla(160,84%,39%,0.5)] bg-[hsla(160,84%,39%,0.05)]" />
            <span>Reactor</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full border-2 border-[hsla(210,100%,56%,0.5)] bg-[hsla(210,100%,56%,0.05)]" />
            <span>Separador</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded border-2 border-[hsla(45,93%,47%,0.5)] bg-[hsla(45,93%,47%,0.05)]" />
            <span>Destilación</span>
          </div>
        </div>

        {/* Flow diagram */}
        <div className="glass rounded-2xl p-6 md:p-10 overflow-x-auto">
          {activeProcess === 'monsanto' ? <MonsantoFlow /> : <CativaFlow />}
        </div>

        {/* Key comparison */}
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="glass rounded-xl p-6">
            <h4 className="text-sm font-semibold text-[hsl(45,93%,60%)] mb-3 uppercase tracking-wider">Monsanto: Limitaciones del Tren</h4>
            <div className="space-y-2 text-xs text-[hsl(215,14%,60%)]">
              <p>• 3 columnas de destilación (livianos + secado + purificación)</p>
              <p>• Alta concentración de agua (14–15%) obligatoria para estabilidad de Rh</p>
              <p>• Reacción WGS competidora reduce selectividad CO a ~85–90%</p>
              <p>• Productividad reactor ~10 mol/L/h</p>
              <p>• Consumo energético ~5.8 MJ/kg AA</p>
            </div>
          </div>
          <div className="glass rounded-xl p-6">
            <h4 className="text-sm font-semibold text-[hsl(160,84%,55%)] mb-3 uppercase tracking-wider">Cativa: Mejoras del Tren</h4>
            <div className="space-y-2 text-xs text-[hsl(215,14%,60%)]">
              <p>• 2 columnas de destilación (combinadas livianos+secado + purificación)</p>
              <p>• Baja agua (0.5–5%) sin riesgo de precipitación de Ir</p>
              <p>• Selectividad CO &gt;94% (WGS suprimido)</p>
              <p>• Productividad reactor ~50 mol/L/h (5× Monsanto)</p>
              <p>• Consumo energético ~4.2–4.7 MJ/kg AA</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section-divider mt-24" />
    </section>
  );
}
