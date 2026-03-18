export interface SystemicIssue {
  id: string
  icon: string
  title: string
  current: string
  reform: string
}

export interface SystemicData {
  title: string
  subtitle: string
  issues: SystemicIssue[]
}

export const systemicData: Record<'en' | 'tr', SystemicData> = {
  en: {
    title: 'Systemic Issues',
    subtitle: 'Structural problems that enable the status quo',
    issues: [
      {
        id: 'usda',
        icon: '⚖️',
        title: 'USDA Conflict of Interest',
        current: 'USDA is tasked with both promoting and regulating agriculture. This structural conflict produces enforcement gaps — the same agency that markets US beef abroad is also responsible for protecting animals in US farms.',
        reform: 'Separate animal welfare enforcement from USDA; create an independent agency with no mandate to promote agricultural industry interests.',
      },
      {
        id: 'aggag',
        icon: '🔇',
        title: 'Ag-Gag Laws',
        current: 'Undercover farm investigations are criminalized in 8+ states including Iowa, Alabama, Arkansas, and Kentucky. Journalists and whistleblowers face prosecution for documenting conditions. Public accountability is blocked.',
        reform: 'Repeal ag-gag laws federally; pass a federal whistleblower protection law for farm workers and investigators documenting welfare violations.',
      },
      {
        id: 'voluntary',
        icon: '📋',
        title: 'Voluntary Industry Standards',
        current: 'NCC and NAMI guidelines are voluntary and audit results are not public. Most "humane," "free-range," and "cage-free" labels are unverified. Consumers cannot trust labeling claims.',
        reform: 'Legally define and mandate third-party audits for terms like "humane," "free-range," and "cage-free." Make audit results publicly available.',
      },
      {
        id: 'eats',
        icon: '🏛️',
        title: 'EATS Act Threat',
        current: 'Pending legislation (the EATS Act) could nullify state-level animal welfare protections like California Prop 12 — the strongest farm animal protection law in the US. Would prevent states from setting higher standards.',
        reform: 'Defeat the EATS Act. Establish federal minimum standards that states may exceed. Affirm states\' right to set higher welfare requirements.',
      },
      {
        id: 'doge',
        icon: '📉',
        title: 'DOGE Staffing Cuts (2025)',
        current: 'USDA animal welfare inspection capacity has been severely weakened as of 2025 through staffing cuts. Fewer inspectors mean fewer inspections and reduced enforcement of existing (already weak) laws.',
        reform: 'Restore and expand USDA inspection staffing. Mandate minimum inspection frequencies. Publicly report inspection results and violation rates.',
      },
    ],
  },
  tr: {
    title: 'Sistemik Sorunlar',
    subtitle: 'Mevcut durumu mümkün kılan yapısal sorunlar',
    issues: [
      {
        id: 'usda',
        icon: '⚖️',
        title: 'USDA Çıkar Çatışması',
        current: 'USDA hem tarım sektörünü desteklemek hem denetlemek ile görevli. Bu yapısal çatışma uygulama boşluklarına yol açıyor — ABD biftekini yurt dışında pazarlayan aynı kurum, ABD çiftliklerindeki hayvanları korumaktan da sorumlu.',
        reform: 'Hayvan refahı denetimi USDA\'dan ayrılsın, tarım sektörü çıkarlarını teşvik etme görevi olmayan bağımsız bir ajans kurulsun.',
      },
      {
        id: 'aggag',
        icon: '🔇',
        title: 'Ag-Gag Yasaları',
        current: 'Iowa, Alabama, Arkansas, Kentucky dahil 8+ eyalette çiftliklerdeki gizli soruşturmalar suç sayılıyor. Gazeteciler ve muhbirleri koşulları belgelemek için kovuşturmayla karşılaşıyor. Kamuoyunun bilgilenmesi engelleniyor.',
        reform: 'Ag-gag yasaları federal düzeyde kaldırılsın, refah ihlallerini belgeleyen çiftlik işçileri ve soruşturmacılar için federal ıslıkçı (whistleblower) koruma yasası çıkarılsın.',
      },
      {
        id: 'voluntary',
        icon: '📋',
        title: 'Gönüllü Endüstri Standartları',
        current: 'NCC ve NAMI rehberleri gönüllü ve denetimi kamuya açık değil. "İnsancıl", "serbest gezen" ve "kafessiz" etiketlerin büyük çoğunluğu doğrulanmamış. Tüketiciler etiket iddialarına güvenemiyor.',
        reform: '"İnsancıl", "serbest gezen" ve "kafessiz" gibi terimler için üçüncü taraf denetimleri yasal olarak tanımlanmalı ve zorunlu hale getirilmeli. Denetim sonuçları kamuya açık olmalı.',
      },
      {
        id: 'eats',
        icon: '🏛️',
        title: 'EATS Act Tehdidi',
        current: 'Kongre\'de bekleyen bu yasa (EATS Act), ABD\'deki en güçlü çiftlik hayvanı koruma yasası olan California Prop 12 gibi eyalet düzeyindeki hayvan refahı korumalarını geçersiz kılabilir. Eyaletlerin daha yüksek standartlar belirlemesini engelleyebilir.',
        reform: 'EATS Act yenilgiye uğratılsın. Eyaletlerin aşabileceği federal asgari standartlar belirlensin. Eyaletlerin daha yüksek refah gereklilikleri belirleme hakkı teyit edilsin.',
      },
      {
        id: 'doge',
        icon: '📉',
        title: 'DOGE Kadro Kesintileri (2025)',
        current: 'USDA\'nın hayvan refahı denetim kapasitesi, 2025 itibarıyla kadro kesintileri aracılığıyla ciddi biçimde zayıfladı. Daha az müfettiş, daha az denetim ve mevcut (zaten zayıf) yasaların daha az uygulanması anlamına geliyor.',
        reform: 'USDA denetim kadrosu iade edilsin ve genişletilsin. Asgari denetim sıklıkları zorunlu hale getirilsin. Denetim sonuçları ve ihlal oranları kamuoyuna açık olarak raporlansın.',
      },
    ],
  },
}
