
const BENEFITS = [
  {
    icon: "users",
    title: "Expert Team",
    text: "Certified professionals with 10+ years of experience in stretch ceiling installation and design.",
  },
  {
    icon: "gem",
    title: "Premium Materials",
    text: "We use only the highest grade PVC and fabric materials imported from leading manufacturers.",
  },
  {
    icon: "tags",
    title: "Competitive Pricing",
    text: "Competitive rates with transparent pricing and no hidden costs for all our services.",
  },
  {
    icon: "shield",
    title: "Full Warranty",
    text: "Comprehensive warranty coverage on all installations with free maintenance support.",
  },
];

const ICONS = {
  users: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="10" cy="7" r="4" />
      <path d="M20 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  gem: (
    <>
      <path d="M6 3h12l4 6-10 13L2 9z" />
      <path d="M2 9h20M12 22 8 9l4-6 4 6-4 13" />
    </>
  ),
  tags: (
    <>
      <path d="m20.59 13.41-7.17 7.17a2 2 0 0 1-2.83 0L3 13V3h10l7.59 7.59a2 2 0 0 1 0 2.82Z" />
      <circle cx="7.5" cy="7.5" r=".5" />
    </>
  ),
  shield: (
    <>
      <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
};

function BenefitIcon({ name }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ICONS[name]}
    </svg>
  );
}

export default function WhyChoose() {
  return (
    <section
      id="why-us"
      className="bg-slate-950 px-5 py-16 sm:px-8 md:py-20 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">

        
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-amber-400">
            The SKYLINE Difference
          </span>

          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
            Why Choose SKYLINE?
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-amber-400" />

          <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg">
            Your trusted partner for premium stretch ceiling solutions.
          </p>
        </div>

        
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((benefit) => (
            <article
              key={benefit.title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-2 hover:border-amber-400/50 hover:bg-white/10 hover:shadow-xl hover:shadow-amber-400/5 sm:p-7"
            >
              
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-amber-400/10 text-amber-400 transition duration-300 group-hover:bg-amber-400 group-hover:text-slate-950">
                <BenefitIcon name={benefit.icon} />
              </div>

             
              <h3 className="mt-6 text-xl font-bold text-white transition group-hover:text-amber-400">
                {benefit.title}
              </h3>

              
              <p className="mt-3 text-sm leading-7 text-slate-300">
                {benefit.text}
              </p>

            
              <div className="mt-6 h-0.5 w-10 rounded-full bg-amber-400/60 transition-all duration-300 group-hover:w-20 group-hover:bg-amber-400" />
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}