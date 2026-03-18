import { useLanguage } from '../context/LanguageContext'
import { translations } from '../data/translations'

const sources = [
  {
    name: 'USDA FSIS — Humane Handling',
    url: 'https://www.fsis.usda.gov/inspection/compliance-guidance/humane-handling',
  },
  {
    name: 'Animal Legal & Historical Center — HMSA Discussion',
    url: 'https://www.animallaw.info/article/overview-humane-slaughter-act',
  },
  {
    name: 'USDA ERS — State Farm Animal Welfare Policies',
    url: 'https://www.ers.usda.gov/webdocs/publications/95382/eib-207.pdf',
  },
  {
    name: 'ASPCA — Farm Animal Confinement Bans',
    url: 'https://www.aspca.org/protecting-cruelty/farm-animal-welfare/laws-affecting-farm-animals',
  },
  {
    name: 'Animal Welfare Institute — Farm System Reform Act',
    url: 'https://awionline.org/content/farm-system-reform-act',
  },
  {
    name: 'CDC — Antibiotic Resistance Threats in the United States (2019)',
    url: 'https://www.cdc.gov/antimicrobial-resistance/data-research/threats/index.html',
  },
  {
    name: 'PubMed — Stress indicators and meat quality',
    url: 'https://pubmed.ncbi.nlm.nih.gov/20943030/',
  },
  {
    name: 'EU Regulation 1099/2009 — Animal Protection at Time of Killing',
    url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32009R1099',
  },
  {
    name: 'EU Directive 2007/43/EC — Broiler Welfare',
    url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex:32007L0043',
  },
]

export default function Footer() {
  const { lang, setLang } = useLanguage()
  const t = translations[lang]

  return (
    <footer className="bg-[#080808] border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Final note */}
        <div className="border-l-4 border-amber-600 pl-6 mb-12 max-w-3xl">
          <p className="font-sans text-white/60 text-base leading-relaxed italic">
            {t.footer.finalNote}
          </p>
        </div>

        {/* Sources */}
        <div className="mb-12">
          <h3 className="font-sans text-white text-sm font-semibold uppercase tracking-wider mb-6">
            {t.sections.sources}
          </h3>
          <div className="grid sm:grid-cols-2 gap-2">
            {sources.map((source, i) => (
              <a
                key={i}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-white/40 hover:text-white/70 font-sans text-sm transition-colors duration-200 group"
              >
                <span className="text-white/20 font-mono text-xs mt-0.5 shrink-0">
                  [{(i + 1).toString().padStart(2, '0')}]
                </span>
                <span className="group-hover:underline">{source.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/5 pt-8">
          <div>
            <p className="font-serif text-white font-bold text-lg">
              {lang === 'en' ? 'The True Cost / Gerçek Maliyet' : 'Gerçek Maliyet / The True Cost'}
            </p>
            <p className="font-sans text-white/40 text-sm">{t.footer.description}</p>
            <p className="font-sans text-white/30 text-xs mt-1">{t.footer.rights}</p>
          </div>

          <div className="flex items-center gap-4">
            {/* Language toggle */}
            <div className="flex items-center bg-white/10 rounded-full p-0.5">
              <button
                onClick={() => setLang('en')}
                className={`px-3 py-1 rounded-full text-xs font-sans font-medium transition-all duration-200 ${
                  lang === 'en' ? 'bg-white text-black' : 'text-white/60 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang('tr')}
                className={`px-3 py-1 rounded-full text-xs font-sans font-medium transition-all duration-200 ${
                  lang === 'tr' ? 'bg-white text-black' : 'text-white/60 hover:text-white'
                }`}
              >
                TR
              </button>
            </div>

            <a
              href="https://github.com/CandanUmut/Animalwellfare"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/40 hover:text-white/70 font-sans text-sm transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              {t.footer.github}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
