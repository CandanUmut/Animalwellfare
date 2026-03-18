import { useState, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../data/translations'

export default function Navigation() {
  const { lang, setLang } = useLanguage()
  const t = translations[lang]
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#numbers', label: t.nav.numbers },
    { href: '#poultry', label: t.nav.poultry },
    { href: '#livestock', label: t.nav.livestock },
    { href: '#timeline', label: t.nav.timeline },
    { href: '#comparison', label: t.nav.comparison },
    { href: '#systemic', label: t.nav.systemic },
    { href: '#outcomes', label: t.nav.outcomes },
    { href: '#share', label: t.nav.share },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#0f0f0f]/95 backdrop-blur-sm border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <a href="#top" className="font-serif text-white font-bold text-sm tracking-wider uppercase">
            {lang === 'en' ? 'The True Cost' : 'Gerçek Maliyet'}
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/60 hover:text-white text-xs font-sans transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
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

            {/* Mobile menu button */}
            <button
              className="lg:hidden text-white/70 hover:text-white"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden pb-4 border-t border-white/10 mt-2 pt-4">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="block py-2 text-white/70 hover:text-white text-sm font-sans transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
