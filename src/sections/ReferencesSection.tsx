
const references = [
  { id: 1, title: 'The Cativa™ process for the manufacture of acetic acid', authors: 'JH Jones', year: 2000, journal: 'Platinum Metals Review', citations: 533, link: 'https://www.ingentaconnect.com/content/matthey/pmr/2000/00000044/00000003/art00001' },
  { id: 2, title: 'High productivity methanol carbonylation catalysis using iridium', authors: 'GJ Sunley, DJ Watson', year: 2000, journal: 'Catalysis Today', citations: 564, link: 'https://www.sciencedirect.com/science/article/pii/S0920586100002637' },
  { id: 3, title: 'Promotion of iridium-catalyzed methanol carbonylation: mechanistic studies of the Cativa process', authors: 'A Haynes, PM Maitlis, et al.', year: 2004, journal: 'Journal of the ACS', citations: 364, link: 'https://pubs.acs.org/doi/abs/10.1021/ja039464y' },
  { id: 4, title: 'Novel energy efficient process for acetic acid production by methanol carbonylation', authors: 'AC Dimian, AA Kiss', year: 2020, journal: 'Chemical Engineering Research and Design', citations: 76, link: 'https://www.sciencedirect.com/science/article/pii/S0263876220301714' },
  { id: 5, title: 'Review of acetic acid synthesis from various feedstocks through different catalytic processes', authors: 'AW Budiman, et al.', year: 2016, journal: 'Catalysis Surveys from Asia', citations: 129, link: 'https://link.springer.com/article/10.1007/s10563-016-9215-9' },
  { id: 6, title: 'Recent advances in processes and catalysts for the production of acetic acid', authors: 'N Yoneda, et al.', year: 2001, journal: 'Applied Catalysis A: General', citations: 438, link: 'https://www.sciencedirect.com/science/article/pii/S0926860X01008006' },
];

export default function ReferencesSection() {
  return (
    <section id="references" className="py-24 px-6 bg-[hsl(220,20%,3%)]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="tag-yellow mb-4 inline-block">Trazabilidad</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Bibliografía Técnica</h2>
          <p className="text-[hsl(215,14%,55%)] max-w-2xl mx-auto text-lg">
            Las conclusiones técnicas, operativas y cinéticas se respaldan en publicaciones académicas arbitradas (Trazabilidad DML).
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {references.map(ref => (
            <div key={ref.id} className="glass rounded-xl p-5 border-l-4 border-l-[hsl(160,84%,39%)] hover:bg-[hsla(255,255,255,0.02)] transition-colors">
              <a href={ref.link} target="_blank" rel="noopener noreferrer" className="block group">
                <h3 className="text-sm md:text-base font-semibold text-white group-hover:text-[hsl(160,84%,55%)] transition-colors mb-2">
                  {ref.title}
                </h3>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[hsl(215,14%,50%)]">
                  <span className="text-[hsl(215,14%,65%)]">{ref.authors}</span>
                  <span className="px-2 py-0.5 bg-[hsla(255,255,255,0.05)] rounded">{ref.year}</span>
                  <span className="italic">{ref.journal}</span>
                  <span className="flex items-center gap-1"><span className="text-white">📄</span> {ref.citations} citas</span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
