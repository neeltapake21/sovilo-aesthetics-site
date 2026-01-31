export function About() {
  return (
    <div className="bg-white">
      <div className="container-xl py-16 space-y-16">
        {/* Clinic story */}
        <section>
          <h1 className="font-heading text-3xl font-bold text-charcoal">
            About Sovilo&apos;s Aesthetics / Laser Clinic
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-gray-700 md:text-base">
            Sovilo&apos;s Aesthetics / Laser Clinic is a premium medical aesthetic centre in Baner,
            Pune, offering cosmetic laser therapies, skin rejuvenation, hair restoration, slimming,
            pain management and intimate wellness treatments. Combining medical-grade technology with
            evidence-based protocols, we focus on safe, effective and long-lasting results for every
            patient.
          </p>
        </section>

        {/* Doctor profile from card */}
        <section className="grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)] md:items-start">
          <div className="rounded-3xl bg-soft-gray p-8">
            <h2 className="font-heading text-2xl font-bold text-charcoal">Dr. Mrs. Suryawanshi S. S.</h2>
            <p className="mt-2 text-sm font-semibold text-gold">
              MBBS., DNB., Gynaec., Laser Physician &mdash; Reg. 2003 / 01 / 0255
            </p>
            <p className="mt-4 text-sm leading-relaxed text-gray-700 md:text-base">
              Dr. Suryawanshi is an aesthetic laser physician and gynaecological specialist with over
              20 years of clinical experience. She performs cosmetic laser therapies, medifacials
              (Botox, rejuvenation), diamond dermabrasion, photo facials, chemical peels, hair
              density treatments and non-surgical slimming procedures with a focus on natural,
              harmonious outcomes.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-gray-700 md:text-base">
              With her strong medical background and gentle approach, patients feel safe and informed
              at every step of their treatment journey.
            </p>
          </div>

          {/* Address card from poster */}
          <div className="rounded-3xl bg-[#2B2B2B] p-8 text-white shadow-card">
            <h3 className="font-heading text-xl font-semibold text-primary-light">
              Clinic Address &amp; Timings
            </h3>
            <p className="mt-4 text-sm leading-relaxed">
              301, A, Velsignet Vista Apartment,
              <br />
              Pan Card Club Road,
              <br />
              Baner, Pune.
            </p>
            <p className="mt-4 text-sm leading-relaxed">
              <span className="font-semibold text-primary-light">Phone:</span>{" "}
              8177955821 / 9545507585
              <br />
              <span className="font-semibold text-primary-light">Email:</span>{" "}
              holisticclinicsbaner@gmail.com
            </p>
            <p className="mt-4 text-sm leading-relaxed">
              <span className="font-semibold text-primary-light">Working Hours:</span>
              <br />
              Monday to Saturday: 11:00 am to 7:00 pm
              <br />
              Sunday: Closed
            </p>
            <p className="mt-3 text-xs text-gray-300">
              All treatments are strictly by prior appointment. Please call or WhatsApp to schedule
              your visit.
            </p>
          </div>
        </section>

        {/* Live location / map */}
        <section className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center">
          <div>
            <h2 className="font-heading text-2xl font-bold text-charcoal">Find Us Easily</h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-gray-700 md:text-base">
              Sovilo&apos;s Aesthetics is located on Pan Card Club Road in Baner, at Velsignet Vista
              Apartment. Use the live map to get directions directly to the clinic. Parking is
              available in the surrounding area.
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Velsignet+Vista+Baner+Pune+411045"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-primary px-5 py-2 font-semibold text-white shadow hover:bg-primary-light"
              >
                Open in Google Maps
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-gray-200 shadow-card">
            <iframe
              title="Sovilo's Aesthetics Baner Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.834671840787!2d73.781!3d18.579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfa8b4c3c9b3%3A0x0!2sVelsignet%20Vista%2C%20Baner!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="320"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </div>
    </div>
  );
}


