import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../data/translations'

interface TimelineEvent {
  year: string | number
  event: { en: string; tr: string }
  detail: { en: string; tr: string }
  type: 'eu-positive' | 'us-partial' | 'us-negative'
}

const events: TimelineEvent[] = [
  {
    year: 1996,
    event: { en: 'EU bans growth hormones in cattle', tr: 'AB sığırlarda büyüme hormonlarını yasakladı' },
    detail: {
      en: 'EU Council Directive bans all growth-promoting hormones in livestock. The US still permits steroid implants in cattle today.',
      tr: 'AB Konseyi Direktifi hayvancılıkta büyüme teşvik edici tüm hormonları yasaklar. ABD bugün hâlâ sığırlarda steroid implantlara izin vermektedir.',
    },
    type: 'eu-positive',
  },
  {
    year: 2006,
    event: { en: 'EU bans all growth-promotion antibiotics', tr: 'AB tüm büyüme amaçlı antibiyotikleri yasakladı' },
    detail: {
      en: 'EU Regulation EC 1831/2003 fully bans antibiotic growth promoters. The US would wait 11 more years for a partial restriction.',
      tr: 'AB Tüzüğü EC 1831/2003 antibiyotik büyüme destekçilerini tamamen yasaklar. ABD kısmi bir kısıtlama için 11 yıl daha bekleyecekti.',
    },
    type: 'eu-positive',
  },
  {
    year: 2009,
    event: { en: 'EU mandates humane slaughter for poultry', tr: 'AB kanatlı hayvanlar için insancıl kesimi zorunlu kıldı' },
    detail: {
      en: 'EU Regulation 1099/2009 requires all animals — including poultry — to be stunned before slaughter. US poultry remain excluded from the HMSA.',
      tr: 'AB Tüzüğü 1099/2009, kanatlılar dahil tüm hayvanların kesimden önce bayıltılmasını şart koşar. ABD kanatlıları HMSA\'dan dışlanmaya devam etmektedir.',
    },
    type: 'eu-positive',
  },
  {
    year: 2012,
    event: { en: 'EU bans battery cages for laying hens', tr: 'AB yumurta tavukları için pil kafeslerini yasakladı' },
    detail: {
      en: 'EU Council Directive 1999/74/EC fully phased in. All 27 member states banned conventional battery cages. US hens remain at 67 in² — less than a sheet of paper.',
      tr: 'AB Konseyi Direktifi 1999/74/EC tamamen yürürlüğe girdi. Tüm 27 üye devlet geleneksel pil kafeslerini yasakladı. ABD tavukları 67 in²\'de kalmaya devam etmektedir.',
    },
    type: 'eu-positive',
  },
  {
    year: 2013,
    event: { en: 'EU restricts gestation crates', tr: 'AB gebelik kafeslerini kısıtladı' },
    detail: {
      en: 'EU Directive 2008/120/EC limits sow confinement to first 4 weeks of pregnancy. In the US, gestation crates remain legal in ~40 states with no federal restriction.',
      tr: 'AB Direktifi 2008/120/EC dişi domuz hapsolmasını gebeliğin ilk 4 haftasıyla sınırlar. ABD\'de gebelik kafesleri ~40 eyalette yasal olmaya devam etmekte, federal kısıtlama yoktur.',
    },
    type: 'eu-positive',
  },
  {
    year: 2017,
    event: { en: 'US partially restricts growth-promotion antibiotics', tr: 'ABD büyüme amaçlı antibiyotikleri kısmen kısıtladı' },
    detail: {
      en: '11 years after the EU\'s full ban, the US Veterinary Feed Directive partially restricts antibiotic growth promoters. Prophylactic use on healthy animals continues.',
      tr: 'AB\'nin tam yasağından 11 yıl sonra, ABD Veteriner Besleme Direktifi antibiyotik büyüme destekçilerini kısmen kısıtlar. Sağlıklı hayvanlara koruyucu kullanım devam etmektedir.',
    },
    type: 'us-partial',
  },
  {
    year: 2023,
    event: { en: 'California Prop 12 upheld by Supreme Court', tr: 'California Prop 12 Yüksek Mahkeme tarafından onaylandı' },
    detail: {
      en: 'The US Supreme Court upholds California\'s right to set higher farm animal welfare standards (Prop 12). The EATS Act in Congress threatens to nullify this and similar state laws.',
      tr: 'ABD Yüksek Mahkemesi, California\'nın daha yüksek çiftlik hayvanı refahı standartları belirleme hakkını onaylar (Prop 12). Kongre\'deki EATS Yasası, bunu ve benzer eyalet yasalarını geçersiz kılmakla tehdit etmektedir.',
    },
    type: 'us-partial',
  },
  {
    year: 'Today',
    event: {
      en: 'No federal poultry slaughter law, no space minimums, no cage ban',
      tr: 'Federal kanatlı kesim yasası yok, minimum alan yok, kafes yasağı yok',
    },
    detail: {
      en: 'The US has taken no comprehensive federal action on farm animal welfare. 9.8 billion birds/year remain unprotected. Gestation crates are legal in 40 states. The USDA\'s inspection capacity has been weakened (2025).',
      tr: 'ABD, çiftlik hayvanı refahı konusunda kapsamlı federal bir adım atmamıştır. Yılda 9,8 milyar kuş korumasız kalmaya devam etmektedir. Gebelik kafesleri 40 eyalette yasaldır. USDA\'nın denetim kapasitesi zayıflatılmıştır (2025).',
    },
    type: 'us-negative',
  },
]

export default function TimelineSection() {
  const { lang } = useLanguage()
  const t = translations[lang]
  const [activeEvent, setActiveEvent] = useState<number | null>(null)
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

  const typeStyles = {
    'eu-positive': {
      dot: 'bg-green-500 border-green-400',
      badge: 'bg-green-950/50 text-green-400 border-green-800/40',
      label: 'EU',
    },
    'us-partial': {
      dot: 'bg-amber-500 border-amber-400',
      badge: 'bg-amber-950/50 text-amber-400 border-amber-800/40',
      label: 'US',
    },
    'us-negative': {
      dot: 'bg-red-500 border-red-400',
      badge: 'bg-red-950/50 text-red-400 border-red-800/40',
      label: 'US',
    },
  }

  return (
    <section id="timeline" className="py-20 bg-[#111] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="mb-12">
            <p className="text-amber-400 font-sans text-xs tracking-[0.2em] uppercase font-medium mb-3">
              {lang === 'en' ? 'Section 03' : 'Bölüm 03'}
            </p>
            <h2 className="font-serif text-white font-bold text-3xl sm:text-4xl mb-3">
              {t.sections.timeline}
            </h2>
            <p className="font-sans text-white/50 text-base">{t.sections.timelineSubtitle}</p>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-4 mb-10">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-white/60 text-xs font-sans">{lang === 'en' ? 'EU Action' : 'AB Adımı'}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-amber-500" />
              <span className="text-white/60 text-xs font-sans">{lang === 'en' ? 'US Partial Step' : 'ABD Kısmi Adım'}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <span className="text-white/60 text-xs font-sans">{lang === 'en' ? 'US Inaction' : 'ABD Eylemsizlik'}</span>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-white/10" />

            <div className="space-y-2">
              {events.map((event, i) => {
                const styles = typeStyles[event.type]
                const isActive = activeEvent === i
                return (
                  <div key={i} className="relative pl-12 sm:pl-16">
                    {/* Dot */}
                    <div
                      className={`absolute left-2 sm:left-4 w-4 sm:w-5 h-4 sm:h-5 rounded-full border-2 ${styles.dot} cursor-pointer transition-transform duration-200 ${isActive ? 'scale-125' : 'hover:scale-110'}`}
                      style={{ top: '16px', transform: `translate(-50%, -50%) ${isActive ? 'scale(1.25)' : ''}` }}
                      onClick={() => setActiveEvent(isActive ? null : i)}
                    />

                    <div
                      className={`border rounded-sm p-4 cursor-pointer transition-all duration-200 ${
                        isActive
                          ? 'border-white/20 bg-white/8'
                          : 'border-white/5 bg-white/3 hover:border-white/15 hover:bg-white/5'
                      }`}
                      onClick={() => setActiveEvent(isActive ? null : i)}
                    >
                      <div className="flex flex-wrap items-center gap-3 mb-1">
                        <span className="font-serif text-white font-bold text-lg">
                          {event.year}
                        </span>
                        <span className={`text-xs font-sans font-medium px-2 py-0.5 border rounded-sm ${styles.badge}`}>
                          {styles.label}
                        </span>
                      </div>
                      <p className="font-sans text-white/80 text-sm">
                        {event.event[lang]}
                      </p>

                      {isActive && (
                        <div className="mt-3 pt-3 border-t border-white/10">
                          <p className="font-sans text-white/60 text-sm leading-relaxed">
                            {event.detail[lang]}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
