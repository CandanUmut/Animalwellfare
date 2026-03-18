import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../data/translations'
import { outcomesData } from '../data/outcomes'

export default function OutcomesSection() {
  const { lang } = useLanguage()
  const t = translations[lang]
  const data = outcomesData[lang]
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

  const cardColors = [
    { border: 'border-amber-900/40', bg: 'bg-amber-950/10', stat: 'text-amber-400' },
    { border: 'border-purple-900/40', bg: 'bg-purple-950/10', stat: 'text-purple-400' },
    { border: 'border-red-900/40', bg: 'bg-red-950/10', stat: 'text-red-400' },
    { border: 'border-green-900/40', bg: 'bg-green-950/10', stat: 'text-green-400' },
  ]

  return (
    <section id="outcomes" className="py-20 bg-[#111] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="mb-12">
            <p className="text-amber-400 font-sans text-xs tracking-[0.2em] uppercase font-medium mb-3">
              {lang === 'en' ? 'Section 06' : 'Bölüm 06'}
            </p>
            <h2 className="font-serif text-white font-bold text-3xl sm:text-4xl mb-3">
              {t.sections.outcomes}
            </h2>
            <p className="font-sans text-white/50 text-base">{t.sections.outcomesSubtitle}</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {data.cards.map((card, i) => {
              const colors = cardColors[i % cardColors.length]
              return (
                <div
                  key={card.id}
                  className={`border ${colors.border} ${colors.bg} p-6 rounded-sm`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="flex items-start gap-3 mb-4">
                    <span className="text-3xl">{card.icon}</span>
                    <h3 className="font-serif text-white font-bold text-xl leading-tight">
                      {card.title}
                    </h3>
                  </div>

                  {card.stat && (
                    <div className={`font-serif font-black text-3xl ${colors.stat} mb-4`}>
                      {card.stat.value}
                      <p className="text-white/50 font-sans text-xs font-normal mt-1">
                        {card.stat.label}
                      </p>
                    </div>
                  )}

                  <ul className="space-y-2">
                    {card.points.map((point, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span className="text-white/30 mt-1 shrink-0">—</span>
                        <span className="font-sans text-white/70 text-sm leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
