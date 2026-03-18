import { useLanguage } from '../context/LanguageContext'
import { translations } from '../data/translations'

export default function Hero() {
  const { lang } = useLanguage()
  const t = translations[lang]

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0f0f0f]"
    >
      {/* Animated grain texture overlay */}
      <div className="absolute inset-0 grain-overlay opacity-30" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Red accent bar at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-700 via-amber-500 to-red-700" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <p className="text-amber-400 font-sans text-xs tracking-[0.25em] uppercase font-medium mb-6">
          {lang === 'en' ? 'An Evidence-Based Investigation' : 'Kanıta Dayalı Bir Araştırma'}
        </p>

        {/* Main title */}
        <h1 className="font-serif text-white font-black mb-8 leading-tight">
          <span className="block text-5xl sm:text-7xl lg:text-8xl">
            {t.hero.title}
          </span>
          {lang === 'en' && (
            <span className="block text-2xl sm:text-3xl font-normal text-white/40 mt-3 font-sans tracking-wider">
              Gerçek Maliyet
            </span>
          )}
          {lang === 'tr' && (
            <span className="block text-2xl sm:text-3xl font-normal text-white/40 mt-3 font-sans tracking-wider">
              The True Cost
            </span>
          )}
        </h1>

        {/* Hero stat */}
        <div className="bg-red-950/40 border border-red-800/40 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
          <p className="font-sans text-white text-lg sm:text-xl leading-relaxed font-medium">
            {t.hero.subtitle}
          </p>
        </div>

        {/* Sub-headline */}
        <p className="font-sans text-white/60 text-base sm:text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
          {t.hero.subtext}
        </p>

        {/* CTA */}
        <a
          href="#numbers"
          className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-400 text-black font-sans font-semibold px-8 py-4 rounded-none transition-all duration-200 text-sm tracking-wider uppercase"
        >
          {t.hero.cta}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-5 h-5 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  )
}
