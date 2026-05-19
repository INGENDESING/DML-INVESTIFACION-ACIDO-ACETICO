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

function ReactorCSTR({ temp, pressure, detail }: { temp: string; pressure: string; detail?: string }) {
  return (
    <EquipmentBox label="Reactor CSTR">
      <div className="text-lg mb-1">⚗️</div>
      <div className="text-xs font-bold text-white">CSTR</div>
      <div className="text-[10px] text-[hsl(160,84%,55%)] mono mt-1">{temp}</div>
      <div className="text-[10px] text-[hsl(210,100%,65%)] mono">{pressure}</div>
      {detail && <div className="text-[9px] text-[hsl(215,14%,50%)] mt-1">{detail}</div>}
    </EquipmentBox>
  );
}

function ReactorPFR({ temp, pressure }: { temp: string; pressure: string }) {
  return (
    <EquipmentBox label="Reactor PFR">
      <div className="w-16 h-8 border-2 border-[hsla(25,95%,53%,0.5)] rounded-full flex items-center justify-center bg-[hsla(25,95%,53%,0.05)]">
        <span className="text-[10px] font-bold text-[hsl(25,95%,60%)]">PFR</span>
      </div>
      <div className="text-[10px] text-[hsl(25,95%,60%)] mono mt-1">{temp}</div>
      <div className="text-[10px] text-[hsl(210,100%,65%)] mono">{pressure}</div>
    </EquipmentBox>
  );
}

function FlashTank({ detail }: { detail?: string }) {
  return (
    <EquipmentBox label="Flash">
      <div className="w-12 h-12 rounded-full border-2 border-[hsla(210,100%,56%,0.5)] flex items-center justify-center bg-[hsla(210,100%,56%,0.05)]">
        <span className="text-lg">⬇</span>
      </div>
      <div className="text-[10px] text-[hsl(210,100%,65%)] mono mt-1">Adiabático</div>
      {detail && <div className="text-[9px] text-[hsl(215,14%,50%)] mt-1">{detail}</div>}
    </EquipmentBox>
  );
}

function DistillationColumn({ label, tempTop, tempBot, detail }: { label: string; tempTop?: string; tempBot?: string; detail?: string }) {
  return (
    <EquipmentBox label={label}>
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

function FlowArrow({ label, direction = 'right' }: { label?: string; direction?: 'right' | 'down' | 'up' | 'left' }) {
  const rotate = { right: 'rotate-0', down: 'rotate-90', up: '-rotate-90', left: 'rotate-180' }[direction];
  return (
    <div className="flex flex-col items-center justify-center min-w-[60px]">
      <div className={`text-[hsl(215,14%,40%)] ${rotate}`}>→</div>
      {label && <span className="text-[9px] text-[hsl(215,14%,45%)] mono whitespace-nowrap">{label}</span>}
    </div>
  );
}

/* ── Process Flow Diagrams ── */

function MonsantoFlow() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
        <ReactorCSTR temp="175–180 °C" pressure="30–40 bar" detail="Rh 200–400 ppm, CH₃I 1–5%" />
        <FlowArrow label="Efluente" />
        <FlashTank detail="Catalizador en fase líquida" />
        <FlowArrow label="Líquido" />
        <DistillationColumn label="Columna Livianos" tempTop="52 °C" tempBot="97 °C" detail="Separa CH₃COOCH₃, CH₃OH" />
        <FlowArrow label="Fondos" />
        <DistillationColumn label="Columna Secado" detail="Remueve H₂O (14–15%)" />
        <FlowArrow label="Fondos" />
        <DistillationColumn label="Purificación AA" tempTop="120 °C" tempBot="142 °C" detail=">99.5% glacial" />
      </div>

      {/* Recycle streams */}
      <div className="flex justify-center">
        <div className="glass-blue rounded-xl p-4 max-w-xl">
          <h4 className="text-sm font-semibold text-[hsl(210,100%,65%)] mb-2">Reciclos Clave</h4>
          <div className="space-y-1 text-xs text-[hsl(215,14%,60%)]">
            <p>• Catalizador homogéneo: reciclado desde fondos del flash al CSTR (sin pérdida de Rh)</p>
            <p>• CH₃I + acetato de metilo: reciclados desde cabeza del flash al reactor</p>
            <p>• Agua: recirculada desde columna de secado; concentración crítica 14–15% en reactor</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CativaFlow() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
        <ReactorCSTR temp="180–195 °C" pressure="30–40 bar" detail="Ir 1,000–5,000 ppm, Ru 500–2,000 ppm" />
        <FlowArrow label="Efluente" />
        <ReactorPFR temp="180–195 °C" pressure="30–40 bar" />
        <FlowArrow label="Efluente" />
        <FlashTank detail="Catalizador reciclado a CSTR" />
        <FlowArrow label="Líquido" />
        <DistillationColumn label="Livianos + Secado" tempTop="52 °C" tempBot="97 °C" detail="Columna combinada (vs. 2 en Monsanto)" />
        <FlowArrow label="Fondos" />
        <DistillationColumn label="Purificación AA" tempTop="120 °C" tempBot="142 °C" detail=">99.8% glacial" />
      </div>

      {/* Recycle streams */}
      <div className="flex justify-center">
        <div className="glass-green rounded-xl p-4 max-w-xl">
          <h4 className="text-sm font-semibold text-[hsl(160,84%,55%)] mb-2">Ventajas del Tren Cativa</h4>
          <div className="space-y-1 text-xs text-[hsl(215,14%,60%)]">
            <p>• Agua 0.5–5%: permite combinar columna de livianos con secado (1 columna menos)</p>
            <p>• PFR secundario: mejora utilización de CO antes del flash</p>
            <p>• Ir estable a baja agua: sin riesgo de precipitación como RhI₃</p>
            <p>• Consumo de vapor 30% menor que Monsanto por menor recirculación de agua</p>
          </div>
        </div>
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
