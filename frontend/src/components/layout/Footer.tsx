export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 bg-[#2B2B2B] text-white">
      <div className="container-xl grid gap-10 py-12 md:grid-cols-4">
        <div>
          <h3 className="font-heading text-lg font-semibold">Sovilo&apos;s Aesthetics</h3>
          <p className="mt-3 text-sm text-gray-300">
            Premium aesthetic laser treatments by qualified medical professionals. Serving Pune for
            over 20 years with advanced, safe and effective treatments.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-300">
            Quick Links
          </h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-primary-light">
                Home
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-primary-light">
                Services
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-primary-light">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-primary-light">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-300">
            Our Services
          </h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li>Laser Hair Removal</li>
            <li>Hydrafacial</li>
            <li>PRP Hair Treatment</li>
            <li>Weight Loss Programs</li>
            <li>Botox Treatment</li>
            <li>PCOS Management</li>
            <li>Pain Management</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-300">
            Get In Touch
          </h4>
          <p className="mt-3 text-sm text-gray-300">
            3rd Floor, Velsignet Vista
            <br />
            Pan Card Club Road, Baner
            <br />
            Pune - 411045
          </p>
          <p className="mt-3 text-sm text-gray-300">
            Phone: 8177955821 / 9545507585
            <br />
            Email: holisticclinicsbaner@gmail.com
          </p>

          <div className="mt-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
              Social Media
            </p>
            <div className="mt-2 flex flex-wrap gap-3 text-sm">
              <a
                href="https://www.instagram.com/sovi_los_asthetic_clinc__baner/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white/5 px-3 py-1 font-medium text-pink-300 hover:bg-white/10"
              >
                Instagram
              </a>
              <a
                href="#"
                className="rounded-full bg-white/5 px-3 py-1 font-medium text-red-300 hover:bg-white/10"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#1A1A1A] py-4 text-center text-xs text-gray-400">
        © {year} Sovilo&apos;s Aesthetics. All Rights Reserved. | Designed &amp; Developed by Your
        Name
      </div>
    </footer>
  );
}

