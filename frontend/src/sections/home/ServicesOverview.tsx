import { Activity, Heart, Sparkles, Shield, Stethoscope, Zap, Leaf, Star } from "lucide-react";

const categories = [
  {
    icon: Sparkles,
    title: "Skin Derma",
    desc: "Transform your skin with advanced laser and medical-grade treatments.",
    count: "10+ Treatments Available",
  },
  {
    icon: Leaf,
    title: "Hair Restoration",
    desc: "Regain confidence with clinically proven hair regrowth therapies.",
    count: "5+ Treatments Available",
  },
  {
    icon: Heart,
    title: "Beauty & Cosmetic",
    desc: "Non-surgical enhancements for timeless beauty and elegance.",
    count: "3+ Treatments Available",
  },
  {
    icon: Activity,
    title: "Weight Management",
    desc: "Achieve your body goals with non-invasive slimming technologies.",
    count: "10+ Treatments Available",
  },
  {
    icon: Shield,
    title: "Gynaecology Aesthetics",
    desc: "Intimate wellness treatments for women's health and confidence.",
    count: "5+ Treatments Available",
  },
  {
    icon: Zap,
    title: "Rejuvenation",
    desc: "Anti-aging and regenerative therapies for vitality and longevity.",
    count: "8+ Treatments Available",
  },
  {
    icon: Stethoscope,
    title: "Pain Management",
    desc: "Comprehensive pain relief using laser and physiotherapy.",
    count: "6+ Treatments Available",
  },
  {
    icon: Star,
    title: "Specialized Treatments",
    desc: "Advanced therapies including stem cell and NAD+ drips.",
    count: "6+ Treatments Available",
  },
];

export function ServicesOverview() {
  return (
    <section id="services-overview" className="mt-16 bg-soft-gray py-16">
      <div className="container-xl">
        <h2 className="font-heading text-3xl font-bold text-center text-charcoal">
          Our Premium Services
        </h2>
        <p className="mt-3 text-center text-sm text-gray-600">
          Comprehensive aesthetic and wellness solutions under one roof.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map(({ icon: Icon, title, desc, count }) => (
            <article
              key={title}
              data-service-card
              className="group rounded-2xl bg-white p-6 shadow-sm transition-transform duration-200 hover:-translate-y-2 hover:shadow-card hover:[transform:translateY(-8px)_rotate3d(1,1,0,4deg)]"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform group-hover:-rotate-3">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-charcoal">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
              <p className="mt-3 text-xs font-semibold text-primary">{count}</p>
              <a
                href="/services"
                className="mt-4 inline-flex items-center text-sm font-semibold text-primary hover:underline"
              >
                Learn More →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

