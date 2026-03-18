import type { CurrentItem, ProposedItem } from './poultry'

export interface LivestockData {
  title: string
  subtitle: string
  current: CurrentItem[]
  proposed: ProposedItem[]
}

export const livestockData: Record<'en' | 'tr', LivestockData> = {
  en: {
    title: 'Livestock (Pigs, Cattle, Sheep)',
    subtitle: 'Current regulations — and what must change',
    current: [
      {
        area: 'Legal protection (lifetime)',
        status: 'negative',
        description: 'AWA does not cover farm animals. No federal law governs space, care, or environmental standards.',
        source: '7 U.S.C. §2132(g)',
      },
      {
        area: 'Humane slaughter (HMSA)',
        status: 'warning',
        description: 'Covers cattle and pigs but enforcement is weak. Ritual slaughter (halal/kosher) exempt.',
        source: 'USDA FSIS — Humane Handling',
      },
      {
        area: 'Gestation crates',
        status: 'negative',
        description: 'Legal in ~40 US states. Breeding sows confined in ~60×120 cm crates during pregnancy and nursing — unable to turn around.',
        source: 'ASPCA — Farm Animal Confinement Bans',
      },
      {
        area: 'Veal crates',
        status: 'negative',
        description: 'Legal in many states. Individual crates ~0.6×1.4 m.',
        source: 'USDA ERS — State Farm Animal Welfare Policies',
      },
      {
        area: 'Feedlots',
        status: 'negative',
        description: 'No federal space standard. Cattle live in pens where movement is severely restricted.',
        source: 'USDA ERS — State Farm Animal Welfare Policies',
      },
      {
        area: 'Transport time',
        status: 'warning',
        description: '28-Hour Law: Animals must be unloaded after 28 hours. Penalty: $100–$500. Virtually never enforced.',
        source: 'Animal Legal & Historical Center — HMSA Discussion',
      },
      {
        area: 'Growth hormones',
        status: 'negative',
        description: 'Steroid implants legal in US cattle. Banned in EU, Canada, China. Ractopamine banned in 160+ countries but legal in US.',
        source: 'Animal Welfare Institute — Farm System Reform Act',
      },
    ],
    proposed: [
      {
        area: 'Gestation crates',
        description: 'Federal ban. EU restricted them in 2013. Even limiting use to first 4 weeks of pregnancy would be a major step.',
      },
      {
        area: 'Minimum space — pigs',
        description: 'At least 2.23 m²/pig in group housing (California Prop 12 standard).',
      },
      {
        area: 'Minimum space — cattle',
        description: 'Pasture access or adequate indoor space.',
      },
      {
        area: 'Minimum space — veal calves',
        description: 'At least 3.99 m²/calf (Prop 12 standard).',
      },
      {
        area: 'Transport',
        description: 'Reduce limit to 8–12 hours. Explicitly include poultry in law. Increase penalties to deterrent levels.',
      },
      {
        area: 'Growth hormones',
        description: 'Ban ractopamine and other growth hormones.',
      },
      {
        area: 'Veterinary care',
        description: 'Mandatory veterinary oversight standards for all commercial operations.',
      },
    ],
  },
  tr: {
    title: 'Tırnaklı Hayvanlar (Domuz, Sığır, Koyun)',
    subtitle: 'Mevcut düzenlemeler — ve neyin değişmesi gerektiği',
    current: [
      {
        area: 'Yasal koruma (yaşam boyunca)',
        status: 'negative',
        description: 'AWA çiftlik hayvanlarını kapsamamakta. Hiçbir federal yasa alan, bakım veya çevre standartlarını düzenlemiyor.',
        source: '7 U.S.C. §2132(g)',
      },
      {
        area: 'İnsancıl kesim (HMSA)',
        status: 'warning',
        description: 'Sığır ve domuzları kapsıyor ancak uygulama zayıf. Ritual kesim (helal/koşer) muaf.',
        source: 'USDA FSIS — Humane Handling',
      },
      {
        area: 'Gebelik kafesleri',
        status: 'negative',
        description: 'ABD\'nin ~40 eyaletinde yasal. Dişi domuzlar ~60×120 cm kafeste hamilelik ve emzirme süresince sabit tutuluyor — dönemiyorlar bile.',
        source: 'ASPCA — Farm Animal Confinement Bans',
      },
      {
        area: 'Buzağı kafesleri',
        status: 'negative',
        description: 'Birçok eyalette yasal. Bireysel kafesler ~0,6×1,4 m.',
        source: 'USDA ERS — State Farm Animal Welfare Policies',
      },
      {
        area: 'Besleme kafesleri (Feedlots)',
        status: 'negative',
        description: 'Federal alan standardı yok. Sığırlar hareket edemeyecekleri bölmelerde yaşıyor.',
        source: 'USDA ERS — State Farm Animal Welfare Policies',
      },
      {
        area: 'Nakliye süresi',
        status: 'warning',
        description: '28 Saat Yasası: 28 saati aşan nakliyatta hayvanlar indirilmeli. Ceza: 100–500 dolar. Neredeyse hiç uygulanmıyor.',
        source: 'Animal Legal & Historical Center — HMSA Discussion',
      },
      {
        area: 'Büyüme hormonu',
        status: 'negative',
        description: 'ABD\'de sığırlarda steroid implantlar yasal. AB, Kanada, Çin yasakladı. Ractopamine domuz ve sığırlarda 160+ ülkede yasaklı ama ABD\'de legal.',
        source: 'Animal Welfare Institute — Farm System Reform Act',
      },
    ],
    proposed: [
      {
        area: 'Gebelik kafesleri',
        description: 'Federal düzeyde tamamen yasaklansın. AB 2013\'te kısıtladı. Sadece gebeliğin ilk 4 haftasında kullanım sınırlaması bile büyük adım.',
      },
      {
        area: 'Minimum alan — domuz',
        description: 'En az 2,23 m²/domuz grup barınağında (California Prop 12 standardı).',
      },
      {
        area: 'Minimum alan — sığır',
        description: 'Mera erişimi veya yeterli kapalı alan.',
      },
      {
        area: 'Minimum alan — buzağı',
        description: 'En az 3,99 m²/buzağı (Prop 12 standardı).',
      },
      {
        area: 'Nakliye',
        description: 'Süre 8–12 saate indirilsin. Kanatlı hayvanlar yasaya açıkça dahil edilsin. Ceza caydırıcı düzeye çıkarılsın.',
      },
      {
        area: 'Büyüme hormonu',
        description: 'Ractopamine ve diğer büyüme hormonları yasaklansın.',
      },
      {
        area: 'Veteriner bakım',
        description: 'Zorunlu veteriner denetim standartları getirilsin.',
      },
    ],
  },
}
