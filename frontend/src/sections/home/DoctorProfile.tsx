import { Award, ShieldCheck } from "lucide-react";

export function DoctorProfile() {
  return (
    <section className="container-xl -mt-12 rounded-3xl bg-white p-8 shadow-card md:p-12">
      <div className="grid gap-8 md:grid-cols-[minmax(0,280px)_minmax(0,1fr)] md:items-center">
        <div className="flex justify-center">
          <div className="relative h-52 w-52 overflow-hidden rounded-full border-4 border-primary/70 shadow-lg md:h-64 md:w-64">
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5 text-center text-sm text-gray-600">
              Doctor photo
              <br />
              placeholder
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-bold text-charcoal md:text-3xl">
            Dr. Mrs. Suryawanshi S. S.
          </h2>
          <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold">
            {["MBBS", "DNB", "Gynaecologist", "Aesthetic Laser Physician"].map((q) => (
              <span
                key={q}
                className="rounded-full bg-primary px-3 py-1 text-[11px] text-white shadow-sm"
              >
                {q}
              </span>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-700">
            <div className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-primary" />
              <span>Medical Council Registration: 2003/01/0255</span>
            </div>
            <div className="inline-flex items-center gap-2">
              <Award className="h-4 w-4 text-primary" />
              <span className="font-semibold text-primary">20+ Years of Medical Excellence</span>
            </div>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-gray-700 md:text-base">
            Dr. Suryawanshi is a pioneer in aesthetic laser treatments with specialized training in
            dermatology and gynaecological aesthetics. With over two decades of experience, she has
            transformed the lives of thousands of patients through safe, effective, and personalized
            care.
          </p>
        </div>
      </div>
    </section>
  );
}

