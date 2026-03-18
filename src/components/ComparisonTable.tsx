import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../data/translations'

export default function ComparisonTable() {
  const { lang } = useLanguage()
  const t = translations[lang]
  const [expandedRow, setExpandedRow] = useState<number | null>(null)
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

  const statusCell = (status: string, text: string) => {
    const isNegative = status === 'negative'
    const isWarning = status === 'warning'
    const isPositive = status === 'positive'
    return (
      <span className={`font-sans text-sm ${
        isNegative ? 'text-red-400' :
        isWarning ? 'text-amber-400' :
        isPositive ? 'text-green-400' :
        'text-white/70'
      }`}>
        {isNegative && '✕ '}
        {isWarning && '⚠ '}
        {isPositive && '✓ '}
        {text}
      </span>
    )
  }

  return (
    <section id="comparison" className="py-20 bg-[#0f0f0f] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="mb-12">
            <p className="text-amber-400 font-sans text-xs tracking-[0.2em] uppercase font-medium mb-3">
              {lang === 'en' ? 'Section 04' : 'Bölüm 04'}
            </p>
            <h2 className="font-serif text-white font-bold text-3xl sm:text-4xl mb-3">
              {t.sections.comparison}
            </h2>
            <p className="font-sans text-white/50 text-base">{t.sections.comparisonSubtitle}</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left py-4 px-4 font-sans text-white/60 text-xs uppercase tracking-wider font-medium w-1/3">
                    {t.comparison.issue}
                  </th>
                  <th className="text-left py-4 px-4 font-sans text-red-400 text-xs uppercase tracking-wider font-medium w-1/3">
                    {t.comparison.unitedStates}
                  </th>
                  <th className="text-left py-4 px-4 font-sans text-green-400 text-xs uppercase tracking-wider font-medium w-1/3">
                    {t.comparison.europeanUnion}
                  </th>
                </tr>
              </thead>
              <tbody>
                {t.comparison.rows.map((row, i) => {
                  const isExpanded = expandedRow === i
                  return (
                    <>
                      <tr
                        key={i}
                        className={`border-b border-white/5 cursor-pointer transition-all duration-150 ${
                          isExpanded ? 'bg-white/8' : 'hover:bg-white/5'
                        }`}
                        onClick={() => setExpandedRow(isExpanded ? null : i)}
                      >
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-2">
                            <span className="text-white/30 text-xs font-mono">{(i + 1).toString().padStart(2, '0')}</span>
                            <span className="font-sans text-white text-sm font-medium">{row.issue}</span>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          {statusCell(row.usStatus, row.us)}
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center justify-between">
                            {statusCell(row.euStatus, row.eu)}
                            <span className="text-white/30 text-xs ml-4">
                              {isExpanded ? '▲' : '▼'}
                            </span>
                          </div>
                        </td>
                      </tr>
                      {isExpanded && (
                        <tr key={`detail-${i}`} className="bg-white/5 border-b border-white/10">
                          <td colSpan={3} className="px-4 py-4">
                            <p className="font-sans text-white/60 text-sm leading-relaxed pl-8">
                              {row.detail}
                            </p>
                          </td>
                        </tr>
                      )}
                    </>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
