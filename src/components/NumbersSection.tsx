import { useLanguage } from '../context/LanguageContext'
import { translations } from '../data/translations'
import StatCard from './StatCard'

export default function NumbersSection() {
  const { lang } = useLanguage()
  const t = translations[lang]

  return (
    <section id="numbers" className="py-20 bg-[#111] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-amber-400 font-sans text-xs tracking-[0.2em] uppercase font-medium mb-3">
            {lang === 'en' ? 'Section 00' : 'Bölüm 00'}
          </p>
          <h2 className="font-serif text-white font-bold text-3xl sm:text-4xl mb-3">
            {t.sections.numbers}
          </h2>
          <p className="font-sans text-white/50 text-base">{t.sections.numbersSubtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <StatCard
            value={9.8}
            suffix={t.stats.birdsSlaughteredSuffix}
            label={t.stats.birdsSlaughtered}
            isNumeric={true}
            color="red"
          />
          <StatCard
            value={98}
            suffix={t.stats.unprotectedAnimalsSuffix}
            label={t.stats.unprotectedAnimals}
            isNumeric={true}
            color="red"
          />
          <StatCard
            value={t.stats.federalSpaceMinSuffix}
            suffix=""
            label={t.stats.federalSpaceMin}
            isNumeric={false}
            color="amber"
          />
          <StatCard
            value={73}
            suffix={`–80${t.stats.antibioticsLivestockSuffix}`}
            label={t.stats.antibioticsLivestock}
            isNumeric={true}
            color="amber"
          />
          <StatCard
            value={t.stats.annualDeathsSuffix}
            suffix=""
            label={t.stats.annualDeaths}
            isNumeric={false}
            color="red"
          />
          <StatCard
            value={28}
            suffix={t.stats.transportTimeSuffix}
            label={t.stats.transportTime}
            isNumeric={true}
            color="amber"
          />
        </div>
      </div>
    </section>
  )
}
