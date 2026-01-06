export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
    metadata?: {
      lqip?: string
      dimensions?: {
        width: number
        height: number
        aspectRatio: number
      }
    }
  }
  alt?: string
}

export interface Program {
  _id: string
  title: string
  slug: { current: string }
  description: string
  suitableFor?: string
  image?: SanityImage
}

export interface Trainer {
  _id: string
  name: string
  photo: SanityImage
  specialization: string
  credentials?: string[]
}

export interface PricingTier {
  _id: string
  name: string
  price: string
  features: string[]
  highlight?: boolean
  ctaText?: string
}

export interface ScheduleEntry {
  _id: string
  day: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday'
  time: string
  className: string
  trainer: Trainer
}

export interface Transformation {
  _id: string
  caption: string
  beforeImage: SanityImage
  afterImage: SanityImage
}

export interface SiteSettings {
  gymName: string
  address: string
  phone: string
  email: string
  hours?: string[]
  socialLinks?: { platform: string; url: string }[]
  stats?: {
    members: string
    trainers: string
    programs: string
  }
  mapEmbedUrl?: string
}
