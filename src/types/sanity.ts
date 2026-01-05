export interface Program {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  suitableFor?: string;
  image?: any;
}

export interface Trainer {
  _id: string;
  name: string;
  photo: any;
  specialization: string;
  credentials?: string[];
}

export interface PricingTier {
  _id: string;
  name: string;
  price: string;
  features: string[];
  highlight?: boolean;
  ctaText?: string;
}

export interface ScheduleEntry {
  _id: string;
  day:
    | "monday"
    | "tuesday"
    | "wednesday"
    | "thursday"
    | "friday"
    | "saturday"
    | "sunday";
  time: string;
  className: string;
  trainer: Trainer;
}

export interface Transformation {
  _id: string;
  caption: string;
  beforeImage: any;
  afterImage: any;
}

export interface SiteSettings {
  gymName: string;
  address: string;
  phone: string;
  email: string;
  hours?: string[];
  socialLinks?: { platform: string; url: string }[];
  mapEmbedUrl?: string;
}
