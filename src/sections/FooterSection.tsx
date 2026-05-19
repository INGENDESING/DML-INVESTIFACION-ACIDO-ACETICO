export default function FooterSection() {
  return (
    <footer className="py-16 px-6 border-t border-[hsla(255,255,255,0.04)]">
      <div className="max-w-5xl mx-auto">
        {/* Logo y nombre */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 mb-4">
            <img src="/logo-dml.png" alt="DML Ingenieros Consultores" className="h-10 w-auto" />
            <span className="text-xl font-bold text-white">DML Ingenieros Consultores SAS</span>
          </div>
          <p className="text-sm text-[hsl(215,14%,50%)] max-w-xl mx-auto leading-relaxed">
            Investigación técnica multidimensional sobre producción industrial de ácido acético.
            22 documentos de investigación, 12 dimensiones técnicas, 6 procesos industriales analizados.
          </p>
        </div>

        {/* Responsables */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10">
          <div className="glass-green rounded-xl p-5 text-center">
            <div className="text-xs text-[hsl(160,84%,55%)] uppercase tracking-wider mb-1">Director del Proyecto</div>
            <div className="text-lg font-semibold text-white">Gerardo Merchancano</div>
            <div className="text-sm text-[hsl(215,14%,55%)]">Gerente General · DML Ingenieros Consultores</div>
          </div>
          <div className="glass-blue rounded-xl p-5 text-center">
            <div className="text-xs text-[hsl(210,100%,65%)] uppercase tracking-wider mb-1">Especialista de Proceso</div>
            <div className="text-lg font-semibold text-white">Jonathan Arboleda</div>
            <div className="text-sm text-[hsl(215,14%,55%)]">Ingeniería de Procesos · DML Ingenieros Consultores</div>
          </div>
        </div>

        {/* Navegación rápida */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
          {['hero', 'overview', 'processes', 'reactions', 'flows', 'materials', 'comparison', 'conclusions'].map(id => (
            <a key={id} href={`#${id}`} className="text-[hsl(215,14%,45%)] hover:text-[hsl(160,84%,55%)] transition-colors capitalize">
              {id === 'hero' ? 'Inicio' : id === 'overview' ? 'Alcance' : id === 'processes' ? 'Procesos' : id === 'reactions' ? 'Reacciones' : id === 'flows' ? 'Diagramas' : id === 'materials' ? 'Materias Primas' : id === 'comparison' ? 'Comparativa' : 'Conclusiones'}
            </a>
          ))}
        </div>

        <div className="section-divider mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[hsl(215,14%,40%)]">
          <p>DML Ingenieros Consultores SAS · Investigación Gerencial P10-11</p>
          <p>Fuentes: documentos técnicos, patentes, literatura académica revisada por pares</p>
        </div>
      </div>
    </footer>
  );
}
