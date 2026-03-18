import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../data/translations'

export default function ShareSection() {
  const { lang } = useLanguage()
  const t = translations[lang]
  const [copied, setCopied] = useState(false)
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const pageUrl = window.location.href
  const shareText = t.share.shareText

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(pageUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback
      const el = document.createElement('textarea')
      el.value = pageUrl
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const handleWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(shareText + '\n' + pageUrl)}`, '_blank')
  }

  const handleTwitter = () => {
    window.open(`https://x.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(pageUrl)}`, '_blank')
  }

  const handlePrint = () => {
    window.print()
  }

  return (
    <section id="share" className="py-20 bg-[#0f0f0f] border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="mb-12 text-center">
            <p className="text-amber-400 font-sans text-xs tracking-[0.2em] uppercase font-medium mb-3">
              {lang === 'en' ? 'Section 07' : 'Bölüm 07'}
            </p>
            <h2 className="font-serif text-white font-bold text-3xl sm:text-4xl mb-3">
              {t.sections.share}
            </h2>
            <p className="font-sans text-white/50 text-base">{t.sections.shareSubtitle}</p>
          </div>

          {/* Shareable card */}
          <div className="border border-amber-700/40 bg-gradient-to-br from-amber-950/30 to-red-950/20 p-8 rounded-sm mb-10 print:border-black print:bg-white print:text-black">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-1 bg-amber-500" />
              <p className="font-sans text-amber-400 text-xs uppercase tracking-widest font-medium">
                {t.share.cardTitle}
              </p>
            </div>

            <h3 className="font-serif text-white text-2xl sm:text-3xl font-bold mb-6 leading-tight">
              {lang === 'en'
                ? 'The industrial meat system operates outside the law.'
                : 'Endüstriyel et sistemi yasanın dışında faaliyet gösteriyor.'
              }
            </h3>

            <ul className="space-y-4">
              {t.share.cardStats.map((stat, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="font-serif text-amber-400 font-bold text-lg shrink-0">
                    {(i + 1).toString().padStart(2, '0')}
                  </span>
                  <p className="font-sans text-white/90 text-base leading-relaxed">{stat}</p>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-2">
              <span className="text-white/30 text-xs font-sans">
                {lang === 'en' ? 'Source:' : 'Kaynak:'} CDC, USDA, Animal Welfare Institute
              </span>
            </div>
          </div>

          {/* Share buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-none font-sans text-sm font-medium transition-all duration-200"
            >
              {copied ? (
                <>
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {t.share.copied}
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  {t.share.copyLink}
                </>
              )}
            </button>

            <button
              onClick={handleWhatsApp}
              className="flex items-center gap-2 bg-green-700/80 hover:bg-green-600/80 text-white px-6 py-3 rounded-none font-sans text-sm font-medium transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              {t.share.shareWhatsapp}
            </button>

            <button
              onClick={handleTwitter}
              className="flex items-center gap-2 bg-black border border-white/20 hover:bg-white/10 text-white px-6 py-3 rounded-none font-sans text-sm font-medium transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              {t.share.shareTwitter}
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-2 bg-white/5 border border-white/10 hover:bg-white/15 text-white/70 hover:text-white px-6 py-3 rounded-none font-sans text-sm font-medium transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              {t.share.downloadPdf}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
