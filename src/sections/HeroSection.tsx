import { useEffect, useState } from 'react';

function AnimatedCounter({ end, duration = 2000, suffix = '', prefix = '' }: { end: number; duration?: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration]);
  return <span>{prefix}{count.toLocaleString()}{suffix}</span>;
}

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setVisible(true); }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[hsla(160,84%,39%,0.08)] blur-[100px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-[hsla(25,95%,53%,0.06)] blur-[100px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[hsla(210,100%,56%,0.03)] blur-[120px]" />

      <div className={`relative z-10 text-center max-w-5xl mx-auto px-6 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Molecular formula badge */}
        <div className="inline-flex items-center gap-2 glass-green rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-[hsl(160,84%,39%)] animate-pulse" />
          <span className="mono text-sm text-[hsl(160,84%,55%)]">CH₃COOH — Investigación Multi-Dimensional</span>
        </div>

        {/* Main title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-[1.1]">
          <span className="text-white">Ácido </span>
          <span className="bg-gradient-to-r from-[hsl(160,84%,39%)] via-[hsl(160,84%,50%)] to-[hsl(185,80%,50%)] bg-clip-text text-transparent">
            Acético
          </span>
          <br />
          <span className="text-3xl md:text-4xl lg:text-5xl font-light text-[hsl(215,14%,55%)]">
            Producción Industrial a Escala Mundial
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-[hsl(215,14%,55%)] max-w-3xl mx-auto mb-12 leading-relaxed">
          Análisis exhaustivo de 6 procesos industriales, 12 dimensiones de investigación,
          15 insights estratégicos y datos de mercado global.
        </p>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {[
            { value: 20, suffix: ' Mt/año', label: 'Capacidad Global' },
            { value: 16.8, suffix: 'B USD', label: 'Mercado 2024', prefix: '$' },
            { value: 6, suffix: ' procesos', label: 'Tecnologías' },
            { value: 15, suffix: ' insights', label: 'Estratégicos' },
          ].map((stat, i) => (
            <div key={i} className={`glass rounded-xl p-4 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: `${600 + i * 150}ms` }}>
              <div className="text-2xl md:text-3xl font-bold text-white">
                {visible && <AnimatedCounter end={stat.value} suffix={stat.suffix} prefix={stat.prefix || ''} duration={1500 + i * 300} />}
              </div>
              <div className="text-xs text-[hsl(215,14%,50%)] mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 animate-float">
          <div className="w-6 h-10 rounded-full border-2 border-[hsla(160,84%,39%,0.3)] mx-auto flex justify-center">
            <div className="w-1.5 h-3 rounded-full bg-[hsl(160,84%,39%)] mt-2 animate-pulse" />
          </div>
          <p className="text-xs text-[hsl(215,14%,40%)] mt-2">Desliza para explorar</p>
        </div>
      </div>
    </section>
  );
}
