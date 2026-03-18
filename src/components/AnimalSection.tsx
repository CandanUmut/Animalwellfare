import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../data/translations'
import type { CurrentItem, ProposedItem } from '../data/poultry'

interface AnimalSectionProps {
  id: string
  title: string
  subtitle: string
  current: CurrentItem[]
  proposed: ProposedItem[]
  visualType: 'poultry' | 'livestock'
}

const statusIcon = (status: 'negative' | 'warning' | 'positive') => {
  if (status === 'negative') return <span className="text-red-400 text-lg">✕</span>
  if (status === 'warning') return <span className="text-amber-400 text-lg">⚠</span>
  return <span className="text-green-400 text-lg">✓</span>
}

const statusBorder = (status: 'negative' | 'warning' | 'positive') => {
  if (status === 'negative') return 'border-red-900/40'
  if (status === 'warning') return 'border-amber-900/40'
  return 'border-green-900/40'
}

function PoultryVisual({ lang }: { lang: string }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-sm p-6 mb-8">
      <p className="text-white/50 text-xs font-sans uppercase tracking-wider mb-4">
        {lang === 'en' ? 'Space per bird — to scale' : 'Kuş başına alan — ölçekli'}
      </p>
      <div className="flex flex-wrap items-end gap-8">
        <div>
          <div
            className="bg-red-900/40 border border-red-700/50"
            style={{ width: '84px', height: '84px' }}
            title="0.07 m²"
          />
          <p className="text-red-400 text-xs mt-2 font-sans font-medium">
            0.07 m² {lang === 'en' ? '(current)' : '(mevcut)'}
          </p>
          <p className="text-white/40 text-xs font-sans">
            {lang === 'en' ? '< A4 paper' : '< A4 kağıdı'}
          </p>
        </div>
        <div>
          <div
            className="bg-green-900/40 border border-green-700/50"
            style={{ width: '113px', height: '113px' }}
            title="0.093 m²"
          />
          <p className="text-green-400 text-xs mt-2 font-sans font-medium">
            0.093 m² {lang === 'en' ? '(proposed)' : '(önerilen)'}
          </p>
          <p className="text-white/40 text-xs font-sans">
            Better Chicken Commitment
          </p>
        </div>
        <div>
          <div
            className="bg-white/5 border border-white/20"
            style={{ width: '119px', height: '84px' }}
            title="A4 paper"
          />
          <p className="text-white/50 text-xs mt-2 font-sans">
            A4 {lang === 'en' ? 'paper' : 'kağıt'} (0.062 m²)
          </p>
        </div>
      </div>
    </div>
  )
}

function LivestockVisual({ lang }: { lang: string }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-sm p-6 mb-8">
      <p className="text-white/50 text-xs font-sans uppercase tracking-wider mb-4">
        {lang === 'en' ? 'Gestation crate — 60×120 cm' : 'Gebelik kafesi — 60×120 cm'}
      </p>
      <div className="flex flex-wrap items-center gap-10">
        <div>
          <div
            className="bg-red-900/40 border border-red-700/50 relative"
            style={{ width: '72px', height: '144px' }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col items-center gap-1">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-full h-px bg-red-700/60" style={{ width: '68px' }} />
                ))}
              </div>
            </div>
          </div>
          <p className="text-red-400 text-xs mt-2 font-sans font-medium">60 × 120 cm</p>
          <p className="text-white/40 text-xs font-sans">
            {lang === 'en' ? 'Cannot turn around' : 'Dönemez'}
          </p>
        </div>
        {/* Human silhouette for scale */}
        <div className="flex flex-col items-center">
          <svg width="40" height="100" viewBox="0 0 40 100" fill="none" className="opacity-30">
            <circle cx="20" cy="10" r="8" fill="white" />
            <rect x="14" y="20" width="12" height="40" rx="3" fill="white" />
            <rect x="4" y="22" width="9" height="28" rx="3" fill="white" />
            <rect x="27" y="22" width="9" height="28" rx="3" fill="white" />
            <rect x="12" y="60" width="7" height="35" rx="3" fill="white" />
            <rect x="21" y="60" width="7" height="35" rx="3" fill="white" />
          </svg>
          <p className="text-white/30 text-xs font-sans mt-1">
            {lang === 'en' ? '≈ human scale' : '≈ insan ölçeği'}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function AnimalSection({ id, title, subtitle, current, proposed, visualType }: AnimalSectionProps) {
  const { lang } = useLanguage()
  const t = translations[lang]
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
    <section id={id} className="py-20 bg-[#0f0f0f] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="mb-12">
            <p className="text-amber-400 font-sans text-xs tracking-[0.2em] uppercase font-medium mb-3">
              {id === 'poultry'
                ? (lang === 'en' ? 'Section 01' : 'Bölüm 01')
                : (lang === 'en' ? 'Section 02' : 'Bölüm 02')
              }
            </p>
            <h2 className="font-serif text-white font-bold text-3xl sm:text-4xl mb-3">{title}</h2>
            <p className="font-sans text-white/50 text-base">{subtitle}</p>
          </div>

          {/* Visual */}
          {visualType === 'poultry' ? <PoultryVisual lang={lang} /> : <LivestockVisual lang={lang} />}

          {/* Two column comparison */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Current state */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-red-500 rounded-full" />
                <h3 className="font-sans text-red-400 text-sm font-semibold uppercase tracking-wider">
                  {t.sections.currentState}
                </h3>
              </div>
              <div className="space-y-3">
                {current.map((item, i) => (
                  <div
                    key={i}
                    className={`border ${statusBorder(item.status)} bg-white/3 p-4 rounded-sm group relative`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 shrink-0">{statusIcon(item.status)}</div>
                      <div>
                        <p className="font-sans text-white text-sm font-medium mb-1">{item.area}</p>
                        <p className="font-sans text-white/60 text-sm leading-relaxed">{item.description}</p>
                        {item.source && (
                          <p className="font-sans text-white/30 text-xs mt-2 italic">
                            {lang === 'en' ? 'Source: ' : 'Kaynak: '}{item.source}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Proposed reforms */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <h3 className="font-sans text-green-400 text-sm font-semibold uppercase tracking-wider">
                  {t.sections.proposedReform}
                </h3>
              </div>
              <div className="space-y-3">
                {proposed.map((item, i) => (
                  <div
                    key={i}
                    className="border border-green-900/40 bg-green-950/20 p-4 rounded-sm"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-green-400 text-lg mt-0.5 shrink-0">→</span>
                      <div>
                        <p className="font-sans text-white text-sm font-medium mb-1">{item.area}</p>
                        <p className="font-sans text-green-200/70 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
