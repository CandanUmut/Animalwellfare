import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../data/translations'
import { systemicData } from '../data/systemic'

export default function SystemicSection() {
  const { lang } = useLanguage()
  const t = translations[lang]
  const data = systemicData[lang]
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.05 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="systemic" className="py-20 bg-[#0f0f0f] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="mb-12">
            <p className="text-amber-400 font-sans text-xs tracking-[0.2em] uppercase font-medium mb-3">
              {lang === 'en' ? 'Section 05' : 'Bölüm 05'}
            </p>
            <h2 className="font-serif text-white font-bold text-3xl sm:text-4xl mb-3">
              {t.sections.systemic}
            </h2>
            <p className="font-sans text-white/50 text-base">{t.sections.systemicSubtitle}</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.issues.map((issue, i) => (
              <div
                key={issue.id}
                className="border border-white/10 bg-white/3 p-6 rounded-sm"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="text-3xl mb-3">{issue.icon}</div>
                <h3 className="font-serif text-white font-bold text-lg mb-4">{issue.title}</h3>

                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                    <span className="text-red-400 text-xs font-sans uppercase tracking-wider font-medium">
                      {t.sections.systemicCurrent}
                    </span>
                  </div>
                  <p className="font-sans text-white/60 text-sm leading-relaxed">{issue.current}</p>
                </div>

                <div className="border-t border-white/5 pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                    <span className="text-green-400 text-xs font-sans uppercase tracking-wider font-medium">
                      {t.sections.systemicReform}
                    </span>
                  </div>
                  <p className="font-sans text-green-200/60 text-sm leading-relaxed">{issue.reform}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
