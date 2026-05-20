import { useEffect, useState } from 'react';

export default function AnimatedPFD() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="w-full relative rounded-2xl overflow-hidden glass-blue p-4" style={{ aspectRatio: '16/9', minHeight: '400px' }}>
      <svg viewBox="0 0 1000 500" className="w-full h-full absolute inset-0 z-0">
        <defs>
          {/* Gradients and Filters */}
          <linearGradient id="stream-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(160, 84%, 39%)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="hsl(160, 84%, 55%)" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* --- Stream Paths --- */}
        {/* Metanol a Reactor */}
        <path 
          d="M 150 150 L 300 250" 
          fill="none" 
          stroke="url(#stream-gradient)" 
          strokeWidth="4" 
          className="path-stream animate-flow" 
          filter="url(#glow)"
        />
        {/* CO a Reactor */}
        <path 
          d="M 150 350 L 300 250" 
          fill="none" 
          stroke="url(#stream-gradient)" 
          strokeWidth="4" 
          className="path-stream animate-flow" 
          filter="url(#glow)"
        />
        {/* Reactor a Flasher */}
        <path 
          d="M 450 250 L 550 250" 
          fill="none" 
          stroke="url(#stream-gradient)" 
          strokeWidth="4" 
          className="path-stream animate-flow" 
          filter="url(#glow)"
        />
        {/* Catalizador reciclo (Flasher a Reactor) */}
        <path 
          d="M 600 320 L 600 420 L 375 420 L 375 320" 
          fill="none" 
          stroke="hsl(25, 95%, 53%)" 
          strokeWidth="3" 
          strokeDasharray="6 6"
          className="animate-flow-reverse"
        />
        {/* Flasher a Purificación */}
        <path 
          d="M 650 250 L 750 250" 
          fill="none" 
          stroke="url(#stream-gradient)" 
          strokeWidth="4" 
          className="path-stream animate-flow" 
          filter="url(#glow)"
        />
        {/* Purificación a Producto */}
        <path 
          d="M 850 250 L 950 250" 
          fill="none" 
          stroke="url(#stream-gradient)" 
          strokeWidth="4" 
          className="path-stream animate-flow" 
          filter="url(#glow)"
        />
        {/* Light Ends Reciclo (Purificación a Reactor) */}
        <path 
          d="M 800 180 L 800 80 L 375 80 L 375 180" 
          fill="none" 
          stroke="hsl(210, 100%, 56%)" 
          strokeWidth="3" 
          strokeDasharray="6 6"
          className="animate-flow-reverse"
        />

        {/* --- Nodes (ForeignObjects for HTML Styling) --- */}
        
        {/* Raw Material: Metanol */}
        <foreignObject x="20" y="110" width="160" height="80">
          <div className={`h-full w-full flex items-center justify-center rounded-xl border border-[hsla(255,255,255,0.1)] bg-[hsl(220,18%,7%)] shadow-lg transition-all duration-1000 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
            <div className="text-center">
              <div className="text-white font-bold">Metanol</div>
              <div className="text-xs text-[hsl(215,14%,50%)]">CH₃OH</div>
            </div>
          </div>
        </foreignObject>

        {/* Raw Material: CO */}
        <foreignObject x="20" y="310" width="160" height="80">
          <div className={`h-full w-full flex items-center justify-center rounded-xl border border-[hsla(255,255,255,0.1)] bg-[hsl(220,18%,7%)] shadow-lg transition-all duration-1000 delay-100 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
            <div className="text-center">
              <div className="text-white font-bold">Monóxido de C.</div>
              <div className="text-xs text-[hsl(215,14%,50%)]">CO</div>
            </div>
          </div>
        </foreignObject>

        {/* Reactor */}
        <foreignObject x="300" y="180" width="150" height="140">
          <div className={`h-full w-full flex flex-col items-center justify-center rounded-2xl glass-green shadow-[0_0_30px_hsla(160,84%,39%,0.15)] transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <div className="text-2xl mb-1">⚛️</div>
            <div className="text-white font-bold text-center leading-tight">Reactor de<br/>Carbonilación</div>
            <div className="text-[10px] text-[hsl(160,84%,55%)] mt-2">150-200 °C</div>
          </div>
        </foreignObject>

        {/* Flasher */}
        <foreignObject x="550" y="180" width="100" height="140">
          <div className={`h-full w-full flex flex-col items-center justify-center rounded-xl glass-orange transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <div className="text-white font-bold text-sm">Flasher</div>
            <div className="text-[10px] text-[hsl(25,95%,60%)] mt-1">1-2 bar</div>
          </div>
        </foreignObject>

        {/* Purification */}
        <foreignObject x="750" y="180" width="100" height="140">
          <div className={`h-full w-full flex flex-col items-center justify-center rounded-xl glass-blue transition-all duration-1000 delay-700 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <div className="text-white font-bold text-sm text-center">Tren de<br/>Purificación</div>
            <div className="text-[10px] text-[hsl(210,100%,70%)] mt-1">Destilación</div>
          </div>
        </foreignObject>

        {/* Product */}
        <foreignObject x="920" y="210" width="80" height="80">
          <div className={`h-full w-full flex items-center justify-center rounded-full bg-[hsl(160,84%,39%)] shadow-[0_0_20px_hsla(160,84%,39%,0.4)] transition-all duration-1000 delay-1000 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
            <div className="text-white font-bold text-xs text-center">Ácido<br/>Acético</div>
          </div>
        </foreignObject>

        {/* Recycle Labels */}
        <foreignObject x="450" y="425" width="120" height="30">
          <div className="text-[10px] text-[hsl(25,95%,60%)] text-center font-mono">Reciclo Catalizador</div>
        </foreignObject>
        <foreignObject x="450" y="55" width="120" height="30">
          <div className="text-[10px] text-[hsl(210,100%,70%)] text-center font-mono">Reciclo Promotor (MeI)</div>
        </foreignObject>
      </svg>
    </div>
  );
}
