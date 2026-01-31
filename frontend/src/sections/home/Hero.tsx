import { CalendarDays, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import SoviloImage from "../../Asset/Sovilo.png";
import { useState, MouseEvent } from "react";

const trustBadges = [
  "20+ Years Experience",
  "MBBS & DNB Certified",
  "Advanced Laser Technology",
  "5000+ Treatments Done",
];

export function Hero() {
  const [tiltStyle, setTiltStyle] = useState<React.CSSProperties>({});

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6; // tilt up/down
    const rotateY = ((x - centerX) / centerX) * 6; // tilt left/right

    setTiltStyle({
      transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(12px)`,
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: "rotateX(0deg) rotateY(0deg) translateZ(0px)",
    });
  };

  const handleViewAllServicesClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const section = document.getElementById("services-overview");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });

      // Trigger a visible bounce effect on all service cards shortly after scrolling
      setTimeout(() => {
        const cards = section.querySelectorAll<HTMLElement>("[data-service-card]");
        cards.forEach((card) => {
          card.classList.remove("animate-bounce");
          // force reflow so animation can restart
          void card.offsetWidth;
          card.classList.add("animate-bounce");
          setTimeout(() => {
            card.classList.remove("animate-bounce");
          }, 700);
        });
      }, 400);
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#FFE5F1] via-white to-white">
      <div className="container-xl grid min-h-[80vh] items-center gap-10 py-16 md:min-h-[100vh] md:grid-cols-2">
        <div>
          <p className="mb-3 inline-flex rounded-full bg-white/60 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
            Advanced Laser Technology in Safer Hands of Experts
          </p>
          <h1 className="font-heading text-4xl font-bold leading-tight text-charcoal md:text-5xl">
            Advanced Laser Technology in Safer Hands of Health Professionals
          </h1>
          <p className="mt-4 text-lg text-gray-700 md:text-xl">
            Laser Therapy By Doctor&apos;s - Trusted by 5000+ Happy Patients in Pune.
          </p>

          <div className="mt-6 grid gap-2 text-sm text-gray-700 sm:grid-cols-2">
            {trustBadges.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-base font-semibold text-white shadow-lg shadow-primary/30 transition-transform hover:scale-105 hover:bg-primary-light"
            >
              <CalendarDays className="h-5 w-5" />
              Book Your Appointment
            </Link>
            <a
              href="#services-overview"
              onClick={handleViewAllServicesClick}
              className="inline-flex items-center gap-2 rounded-full border border-primary px-8 py-3 text-base font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
            >
              View All Services
            </a>
          </div>
        </div>

        <div
          className="relative flex justify-center perspective-1000"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="relative h-72 w-72 rounded-full bg-gradient-to-tr from-primary to-primary-light opacity-20 blur-3xl md:h-96 md:w-96" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="h-64 w-64 rounded-3xl bg-white/5 p-1 shadow-card transition-transform duration-150 ease-out md:h-80 md:w-80"
              style={tiltStyle}
            >
              <img
                src={SoviloImage}
                alt="Sovilo's Aesthetics Baner clinic"
                className="h-full w-full rounded-3xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

