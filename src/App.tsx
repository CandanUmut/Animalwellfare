import Navigation from './components/Navigation'
import Hero from './components/Hero'
import NumbersSection from './components/NumbersSection'
import AnimalSection from './components/AnimalSection'
import TimelineSection from './components/TimelineSection'
import ComparisonTable from './components/ComparisonTable'
import SystemicSection from './components/SystemicSection'
import OutcomesSection from './components/OutcomesSection'
import ShareSection from './components/ShareSection'
import Footer from './components/Footer'
import { useLanguage } from './context/LanguageContext'
import { poultryData } from './data/poultry'
import { livestockData } from './data/livestock'

export default function App() {
  const { lang } = useLanguage()

  return (
    <div className="min-h-screen bg-[#0f0f0f]">
      <Navigation />
      <Hero />
      <NumbersSection />
      <AnimalSection
        id="poultry"
        title={poultryData[lang].title}
        subtitle={poultryData[lang].subtitle}
        current={poultryData[lang].current}
        proposed={poultryData[lang].proposed}
        visualType="poultry"
      />
      <AnimalSection
        id="livestock"
        title={livestockData[lang].title}
        subtitle={livestockData[lang].subtitle}
        current={livestockData[lang].current}
        proposed={livestockData[lang].proposed}
        visualType="livestock"
      />
      <TimelineSection />
      <ComparisonTable />
      <SystemicSection />
      <OutcomesSection />
      <ShareSection />
      <Footer />
    </div>
  )
}
