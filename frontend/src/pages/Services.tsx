const sections = [
  {
    title: "Gynaecology",
    items: [
      "Pelvic Floor Tightening",
      "Urine Dribbling, Collagen Fillers",
      "Vaginal Tightening G Spot Augment",
    ],
  },
  {
    title: "Skin Derma",
    items: [
      "Microderma Abrasion",
      "Hydrafacial",
      "Korean Glass",
      "Chemical Peels",
      "Semipermanent Lip, Eyebrow Makeup",
      "Permanent Hair Reduction (Unwanted Hair)",
      "Skin Tag, Cut Earlobe, Carbon Facial",
    ],
  },
  {
    title: "Weight",
    items: [
      "Inch Loss",
      "Fat Loss",
      "Weight Loss",
      "Sono lipolysis",
      "Photo lipolysis",
      "Cryo lipolysis",
      "Belly Gym",
      "All NAD’ Drips Stem Cell Therapies",
    ],
  },
  {
    title: "Hair",
    items: [
      "Hair Growth - PRP, Dandruff Comb",
      "Hair Mask - Laser",
      "Micro Pigmention Bald area",
    ],
  },
  {
    title: "Rejuvntion",
    items: [
      "Anti - Aging, Regenerative Joint Rx.",
      "Stem Cell, Endometriosis, PCOS",
      "Detox, Recovery, Vitality",
    ],
  },
  {
    title: "Arthrities / Pain",
    items: ["Knee, Back Pain, Neck", "Physiotheraphy + Inj + Laser"],
  },
];

export function Services() {
  return (
    <div className="bg-white">
      <div className="container-xl py-16">
        <h1 className="font-heading text-3xl font-bold text-charcoal">
          Sovilo&apos;s Aesthetics Services
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-gray-600">
          Complete care across skin, hair, beauty, slimming, gynaecology, rejuvenation and pain
          management – carefully curated from our clinic&apos;s core service poster.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => (
            <article
              key={section.title}
              className="rounded-2xl border border-primary/40 bg-[#2B2B2B] p-[1px] shadow-card"
            >
              <div className="h-full rounded-2xl bg-[#2B2B2B] p-5 text-white">
                <h2 className="inline-block rounded-full bg-primary px-4 py-1 text-sm font-semibold uppercase tracking-wide">
                  {section.title}
                </h2>
                <ul className="mt-4 space-y-1.5 text-sm">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-light" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}



