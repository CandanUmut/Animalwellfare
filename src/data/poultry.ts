export interface CurrentItem {
  area: string
  status: 'negative' | 'warning' | 'positive'
  description: string
  source?: string
}

export interface ProposedItem {
  area: string
  description: string
}

export interface PoultryData {
  title: string
  subtitle: string
  current: CurrentItem[]
  proposed: ProposedItem[]
}

export const poultryData: Record<'en' | 'tr', PoultryData> = {
  en: {
    title: 'Poultry (Chickens, Turkeys)',
    subtitle: 'Current regulations — and what must change',
    current: [
      {
        area: 'Legal protection (lifetime)',
        status: 'negative',
        description: 'Zero federal protection. The US Animal Welfare Act (AWA) explicitly excludes farm animals.',
        source: '7 U.S.C. §2132(g)',
      },
      {
        area: 'Humane slaughter coverage',
        status: 'negative',
        description: 'Poultry excluded from HMSA since 1958. ~9.8 billion birds per year shackled alive.',
        source: 'USDA FSIS — Humane Handling',
      },
      {
        area: 'Living space',
        status: 'negative',
        description: 'No federal minimum. Industry standard for broilers: ~0.07 m²/bird — less than a sheet of A4 paper.',
        source: 'USDA ERS — State Farm Animal Welfare Policies',
      },
      {
        area: 'Slaughter method',
        status: 'negative',
        description: 'Live-shackle: Conscious birds hung upside down by feet, dragged through electrified water bath, cut by automated blade.',
        source: 'EU Directive 2007/43/EC — Broiler Welfare',
      },
      {
        area: 'Genetic manipulation',
        status: 'negative',
        description: 'Modern broilers reach slaughter weight in 35–49 days. Chronic heart failure and lameness endemic. 27.6% show poor locomotion at 40 days.',
        source: 'PubMed — Stress indicators and meat quality',
      },
      {
        area: 'Antibiotic use',
        status: 'warning',
        description: 'Growth-promotion antibiotics partially banned (2017), but prophylactic use on healthy animals continues.',
        source: 'CDC — Antibiotic Resistance Threats in the United States (2019)',
      },
      {
        area: 'Outdoor access',
        status: 'negative',
        description: 'No federal requirement. Most commercial birds never see sunlight in their lives.',
        source: 'ASPCA — Farm Animal Confinement Bans',
      },
    ],
    proposed: [
      {
        area: 'Minimum space',
        description: 'At least 0.093 m²/bird (1 sq ft) — Better Chicken Commitment standard.',
      },
      {
        area: 'Slaughter method',
        description: 'Ban live-shackle. Mandate Controlled Atmosphere Stunning (CAS) — birds rendered unconscious in transport containers before processing.',
      },
      {
        area: 'Genetics',
        description: 'Maximum growth rate 50 g/day (current: ~100 g/day). Minimum 56-day growing period.',
      },
      {
        area: 'HMSA coverage',
        description: 'Extend humane slaughter law to cover poultry. The Secretary of Agriculture has existing authority to act.',
      },
      {
        area: 'Outdoor access',
        description: 'Mandatory environmental enrichment for natural behaviors (perching, dust-bathing).',
      },
      {
        area: 'Antibiotics',
        description: 'Ban all growth-promotion antibiotic use (EU did this in 2006).',
      },
    ],
  },
  tr: {
    title: 'Kanatlı Hayvanlar (Tavuk, Hindi)',
    subtitle: 'Mevcut düzenlemeler — ve neyin değişmesi gerektiği',
    current: [
      {
        area: 'Yasal koruma (yaşam boyunca)',
        status: 'negative',
        description: 'Sıfır federal koruma. ABD Hayvan Refahı Kanunu (AWA) çiftlik hayvanlarını tamamen dışarıda bırakıyor.',
        source: '7 U.S.C. §2132(g)',
      },
      {
        area: 'İnsancıl kesim yasası kapsamı',
        status: 'negative',
        description: 'Kanatlı hayvanlar 1958\'den bu yana HMSA kapsamı dışında. Yılda ~9,8 milyar kuş bilinçli olarak askıya alınıyor.',
        source: 'USDA FSIS — Humane Handling',
      },
      {
        area: 'Yaşam alanı',
        status: 'negative',
        description: 'Federal minimum yok. Broiler tavuklar için endüstri standardı 0,07 m²/kuş — A4 kağıdından küçük.',
        source: 'USDA ERS — State Farm Animal Welfare Policies',
      },
      {
        area: 'Kesim yöntemi',
        status: 'negative',
        description: '"Canlı zincir" yöntemi: Bilinçli kuşlar ayaklarından asılıp elektrikli su banyosundan geçiriliyor, otomatik bıçakla kesiliyor.',
        source: 'EU Directive 2007/43/EC — Broiler Welfare',
      },
      {
        area: 'Genetik manipülasyon',
        status: 'negative',
        description: 'Modern broiler tavuklar 35-49 günde kesim ağırlığına ulaşıyor. Kalp-damar yetmezliği ve yürüme bozukluğu kronik. %27,6\'sında 40 günde ciddi topallık görülüyor.',
        source: 'PubMed — Stress indicators and meat quality',
      },
      {
        area: 'Antibiyotik kullanımı',
        status: 'warning',
        description: 'Büyüme amaçlı kullanım 2017\'de kısmen yasaklandı ancak sağlıklı hayvanlara koruyucu antibiyotik kullanımı devam ediyor.',
        source: 'CDC — Antibiotic Resistance Threats in the United States (2019)',
      },
      {
        area: 'Dışarı erişimi',
        status: 'negative',
        description: 'Federal zorunluluk yok. Endüstriyel tesislerin büyük çoğunluğunda hayvanlar ömürleri boyunca güneş görmüyor.',
        source: 'ASPCA — Farm Animal Confinement Bans',
      },
    ],
    proposed: [
      {
        area: 'Minimum alan',
        description: 'En az 0,093 m²/kuş (1 ft²) — Better Chicken Commitment standardı.',
      },
      {
        area: 'Kesim yöntemi',
        description: 'Canlı zincir yasaklansın. Kontrollü Atmosfer Bayıltma (KAB/CAS) zorunlu hale getirilsin — kuşlar konteynerda bilinçsizleştiriliyor.',
      },
      {
        area: 'Genetik standart',
        description: 'Günlük azami büyüme hızı 50 g/gün (şu anki: ~100 g/gün). Minimum 56 günlük büyüme süresi.',
      },
      {
        area: 'HMSA kapsamı',
        description: 'Kanatlı hayvanlar insancıl kesim yasasına dahil edilsin. Bakanın mevcut yetki çerçevesinde bu adımı atması mümkün.',
      },
      {
        area: 'Dışarı erişimi',
        description: 'Doğal davranış (tüneğe çıkma, toz banyosu) için zorunlu çevre zenginleştirme.',
      },
      {
        area: 'Antibiyotik',
        description: 'Büyüme amaçlı tüm antibiyotik kullanımı yasaklansın (AB 2006\'da yaptı).',
      },
    ],
  },
}
