
const iconStyle = {
  width: "20px",
  height: "20px",
  stroke: "#dfb234",
  flexShrink: 0,
};

const svgProps = {
  fill: "none",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2,
  viewBox: "0 0 24 24",
  className: "mt-0.5 h-5 w-5 shrink-0 text-amber-400",
};

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 px-5 pt-14 text-slate-300 sm:px-8 md:pt-16 lg:px-12">
      <div className="mx-auto max-w-7xl">

        
        <div className="grid grid-cols-1 gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">

          
          <div>
            <h3 className="text-2xl font-extrabold tracking-wide text-white">
              SKYLINE{" "}
              <span className="text-amber-400">Stretch Ceiling</span>
            </h3>

            <div className="mt-4 h-1 w-16 rounded-full bg-amber-400" />

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              Transform your space with premium quality stretch ceilings
              from India's leading installation experts.
            </p>
          </div>

          
          <div>
            <h4 className="text-lg font-bold text-white">Quick Links</h4>

            <div className="mt-3 h-0.5 w-10 bg-amber-400" />

            <ul className="mt-5 space-y-3">
              {[
                { label: "Home", href: "#" },
                { label: "Services", href: "#services" },
                { label: "Gallery", href: "#Portfolio" },
                { label: "Why Choose Us", href: "#why-us" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition duration-200 hover:pl-1 hover:text-amber-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white">Our Services</h4>

            <div className="mt-3 h-0.5 w-10 bg-amber-400" />

            <ul className="mt-5 space-y-3">
              {[
                "Residential Stretch Ceiling Solutions",
                "Commercial Stretch Ceiling Solutions",
                "Luxury 3D Artistic Ceilings",
                "Simple and Plain Stretch Ceilings",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm leading-6 text-slate-400 transition duration-200 hover:text-amber-400"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          
          <div>
            <h4 className="text-lg font-bold text-white">Contact Info</h4>

            <div className="mt-3 h-0.5 w-10 bg-amber-400" />

            <ul className="mt-5 space-y-5">

              
              <li className="flex items-start gap-3">
                <svg {...svgProps} style={iconStyle}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>

                <a
                  href="tel:+917248923560"
                  className="break-words text-sm leading-6 text-slate-400 transition hover:text-amber-400"
                >
                  +91 7248923560
                  <span className="block text-xs text-slate-500">
                    Manish Yadav
                  </span>
                </a>
              </li>

              
              <li className="flex items-start gap-3">
                <svg {...svgProps} style={iconStyle}>
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>

                <a
                  href="mailto:skylineceiling@gmail.com"
                  className="break-all text-sm leading-6 text-slate-400 transition hover:text-amber-400"
                >
                  skylineceiling@gmail.com
                </a>
              </li>

              
              <li className="flex items-start gap-3">
                <svg {...svgProps} style={iconStyle}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>

                <span className="text-sm leading-6 text-slate-400">
                  G-06 OM Sai Building, Madhuvan City, near Evershine,
                  Vasai East, Mumbai, India 401208
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 text-center">
          <p className="text-xs leading-6 text-slate-500 sm:text-sm">
            © 2026 SKYLINE Stretch Ceiling. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}