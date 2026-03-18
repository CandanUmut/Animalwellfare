export interface OutcomeCard {
  id: string
  icon: string
  title: string
  points: string[]
  stat?: {
    value: string
    label: string
  }
}

export interface OutcomesData {
  title: string
  subtitle: string
  cards: OutcomeCard[]
}

export const outcomesData: Record<'en' | 'tr', OutcomesData> = {
  en: {
    title: 'Expected Outcomes',
    subtitle: 'What reform would deliver',
    cards: [
      {
        id: 'welfare',
        icon: '🐾',
        title: 'Animal Welfare',
        points: [
          'Dramatic reduction in chronic pain and psychological stress',
          'Restoration of natural behaviors: perching, grazing, rooting, dust-bathing',
          'End to gestation crate confinement — sows able to move and socialize',
          'Slaughter without conscious suffering for 9.8 billion birds per year',
        ],
        stat: {
          value: '9.8B',
          label: 'birds/year currently slaughtered conscious',
        },
      },
      {
        id: 'quality',
        icon: '🥩',
        title: 'Meat Quality',
        points: [
          'High cortisol from stress degrades meat — causing DFD/PSE defects',
          'Less stress = better color, texture, pH, water retention, and shelf life',
          'Cortisol in stressed animals is 20× higher than in low-stress slaughter',
          'Slower-grown birds produce firmer, more flavorful meat',
        ],
        stat: {
          value: '20×',
          label: 'higher cortisol in stressed vs low-stress slaughter',
        },
      },
      {
        id: 'health',
        icon: '🏥',
        title: 'Public Health',
        points: [
          '73–80% of all medically important US antibiotics go to livestock',
          '2.8 million antibiotic-resistant infections annually in the US (CDC)',
          '35,000+ deaths per year from antibiotic-resistant infections (CDC)',
          'Factory farming conditions are ideal environments for viral mutation (H5N1 detected in US dairy cattle 2024)',
          'Reducing stocking density and prophylactic antibiotic use lowers pandemic emergence probability',
        ],
        stat: {
          value: '35,000+',
          label: 'annual US deaths from antibiotic-resistant infections',
        },
      },
      {
        id: 'economics',
        icon: '💰',
        title: 'Economics',
        points: [
          'Pig welfare reform cost: ~$0.07–$0.11/kg increase — marginal per serving',
          'Chicken welfare reform cost: ~$0.26–$0.66/kg increase',
          'The EU has demonstrated these costs are absorbable by consumers',
          'Antimicrobial resistance costs the US $55–70 billion/year',
          'Potential savings from reform exceed the cost of compliance',
        ],
        stat: {
          value: '$55–70B',
          label: 'annual US cost of antimicrobial resistance',
        },
      },
    ],
  },
  tr: {
    title: 'Beklenen Sonuçlar',
    subtitle: 'Reformun sağlayacakları',
    cards: [
      {
        id: 'welfare',
        icon: '🐾',
        title: 'Hayvan Refahı',
        points: [
          'Kronik stres ve psikolojik ıstırabın dramatik azalması',
          'Doğal davranışların geri kazanılması: tüneğe çıkma, otlama, yüzme, toz banyosu',
          'Gebelik kafesi hapsolmasının sonu — dişi domuzlar hareket edip sosyalleşebilecek',
          'Yılda 9,8 milyar kuş için bilinçli acı çekmeden kesim',
        ],
        stat: {
          value: '9,8 Milyar',
          label: 'kuş/yıl şu anda bilinçli olarak kesiliyor',
        },
      },
      {
        id: 'quality',
        icon: '🥩',
        title: 'Et Kalitesi',
        points: [
          'Stres kaynaklı yüksek kortizol eti bozuyor — DFD/PSE kusurlarına yol açıyor',
          'Daha az stres = daha iyi renk, doku, pH, su tutma kapasitesi ve raf ömrü',
          'Stres altındaki hayvanlarda kortizol, düşük stresli kesime kıyasla 20 kat daha yüksek',
          'Daha yavaş büyüyen kuşlar daha sert ve lezzetli et üretiyor',
        ],
        stat: {
          value: '20 Kat',
          label: 'stres altındaki vs düşük stresli kesimde kortizol farkı',
        },
      },
      {
        id: 'health',
        icon: '🏥',
        title: 'Halk Sağlığı',
        points: [
          'ABD\'de tıbbi öneme sahip antibiyotiklerin %73–80\'i hayvancılıkta kullanılıyor',
          'ABD\'de yılda 2,8 milyon antibiyotiğe dirençli enfeksiyon (CDC)',
          'Yılda 35.000+ ölüm antibiyotiğe dirençli enfeksiyonlardan (CDC)',
          'Endüstriyel çiftlik koşulları viral mutasyon için ideal ortam (H5N1 2024\'te ABD sütçü sığırlarında saptandı)',
          'Stok yoğunluğunun ve koruyucu antibiyotik kullanımının azaltılması pandemi olasılığını düşürür',
        ],
        stat: {
          value: '35.000+',
          label: 'yıllık ABD antibiyotiğe dirençli enfeksiyon ölümleri',
        },
      },
      {
        id: 'economics',
        icon: '💰',
        title: 'Ekonomi',
        points: [
          'Domuz refahı reformu maliyeti: kg başına ~0,07–0,11 dolar artış — porsiyon başına marjinal',
          'Tavuk refahı reformu maliyeti: ~0,26–0,66 dolar/kg artış',
          'AB örneği gösteriyor ki bu fiyatlar tüketiciler tarafından emililebilir',
          'Antimikrobiyal direnç ABD\'ye yılda 55–70 milyar dolar maliyet yüklüyor',
          'Reformun potansiyel tasarrufu uyum maliyetini aşıyor',
        ],
        stat: {
          value: '55–70 Milyar $',
          label: 'ABD\'nin yıllık antimikrobiyal direnç maliyeti',
        },
      },
    ],
  },
}
