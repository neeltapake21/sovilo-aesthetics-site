export type ServiceCategoryId =
  | "skin"
  | "hair"
  | "beauty"
  | "weight"
  | "gynae"
  | "rejuvenation"
  | "pain";

export interface ServiceItem {
  id: string;
  category: ServiceCategoryId;
  name: string;
  shortDescription: string;
  duration?: string;
}

export const serviceCategories: { id: ServiceCategoryId | "all"; label: string }[] = [
  { id: "all", label: "All Services" },
  { id: "skin", label: "Skin Derma" },
  { id: "hair", label: "Hair Restoration" },
  { id: "beauty", label: "Beauty & Cosmetic" },
  { id: "weight", label: "Weight Management" },
  { id: "gynae", label: "Gynaecology Aesthetics" },
  { id: "rejuvenation", label: "Rejuvenation & Anti-Aging" },
  { id: "pain", label: "Pain Management" },
];

export const services: ServiceItem[] = [
  // Skin Derma treatments
  {
    id: "microderma-abrasion",
    category: "skin",
    name: "Microderma Abrasion",
    shortDescription:
      "Gentle exfoliation to remove dead skin cells for smoother texture and reduced fine lines.",
    duration: "30-45 minutes",
  },
  {
    id: "hydrafacial",
    category: "skin",
    name: "Hydrafacial",
    shortDescription:
      "Multi-step medical facial with cleansing, exfoliation, extraction and intense hydration.",
    duration: "45-60 minutes",
  },
  {
    id: "korean-glass-facial",
    category: "skin",
    name: "Korean Glass Facial",
    shortDescription:
      "Korean-inspired facial for bright, poreless, glass-like skin and improved radiance.",
    duration: "60 minutes",
  },
  {
    id: "chemical-peels",
    category: "skin",
    name: "Chemical Peels",
    shortDescription:
      "Medical-grade peels to treat acne, pigmentation and early signs of aging with controlled exfoliation.",
    duration: "20-30 minutes",
  },
  {
    id: "semi-permanent-makeup",
    category: "skin",
    name: "Semi-Permanent Lip & Eyebrow Makeup",
    shortDescription:
      "Microblading and PMU for naturally defined brows and lips that last 1–3 years.",
    duration: "2-3 hours",
  },
  {
    id: "laser-hair-removal",
    category: "skin",
    name: "Permanent Hair Reduction (Laser Hair Removal)",
    shortDescription:
      "Advanced laser technology for long-term hair reduction on face and body areas.",
    duration: "6-8 sessions",
  },
  {
    id: "skin-tag-removal",
    category: "skin",
    name: "Skin Tag Removal",
    shortDescription: "Safe, quick removal of benign skin tags with minimal discomfort.",
    duration: "10-15 minutes",
  },
  {
    id: "cut-earlobe-repair",
    category: "skin",
    name: "Cut Earlobe Repair",
    shortDescription: "Surgical repair of torn or stretched earlobes allowing re-piercing later.",
    duration: "30 minutes",
  },
  {
    id: "carbon-facial",
    category: "skin",
    name: "Carbon Facial (Hollywood Peel)",
    shortDescription:
      "Laser with carbon mask for deep cleansing, pore refinement and instant refreshed glow.",
    duration: "30 minutes",
  },
  {
    id: "diamond-dermabrasion",
    category: "skin",
    name: "Diamond Dermabrasion",
    shortDescription:
      "Advanced microdermabrasion with diamond-tipped wand to smooth scars and uneven texture.",
    duration: "40 minutes",
  },
];

