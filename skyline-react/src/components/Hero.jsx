
const STATS = [
  { icon: "★", number: "250+", label: "PROJECTS COMPLETED" },
  { icon: "♟", number: "245+", label: "HAPPY CUSTOMERS" },
  { icon: "♛", number: "8+", label: "YEARS OF EXPERIENCE" },
  { icon: "▦", number: "50+", label: "CITIES SERVED" },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-[650px] flex-col justify-between overflow-hidden bg-slate-950 px-6 py-16 text-white md:min-h-[750px] md:px-12 lg:px-20">

      
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-black" />

      <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl md:h-[500px] md:w-[500px]" />

      
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center py-12 text-center">

        
        <div className="flex flex-col items-center">
          <span className="text-5xl font-extrabold tracking-[0.15em] text-white sm:text-6xl md:text-7xl lg:text-8xl">
            SKYLINE
          </span>

          <span className="mt-3 text-lg font-medium tracking-[0.25em] text-amber-400 sm:text-xl md:text-2xl">
            STRETCH CEILING
          </span>
        </div>

        
        <div className="my-7 h-1 w-24 rounded-full bg-amber-400 md:my-9 md:w-32" />

       
        <h1 className="text-sm font-semibold tracking-[0.15em] text-amber-100 sm:text-base md:text-lg">
          INSPIRED BY LIGHT. DEFINED BY DESIGN.
        </h1>

        
        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg md:text-xl">
          Elegant stretch ceilings and designer lighting solutions that
          transform every space with perfection and style.
        </p>

       
        <a
          href="#Portfolio"
          className="mt-9 inline-flex items-center gap-4 rounded-md bg-amber-400 px-7 py-4 text-sm font-bold tracking-wider text-slate-950 shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-amber-300 hover:shadow-amber-400/20 sm:text-base"
        >
          EXPLORE OUR WORK
          <span className="text-2xl leading-none">›</span>
        </a>
      </div>

     
      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-2 border-t border-white/15 pt-8 md:grid-cols-4 md:pt-10">
        {STATS.map((s) => (
          <div
            className="flex flex-col items-center justify-center px-3 py-5 text-center md:border-r md:border-white/10 md:last:border-r-0"
            key={s.label}
          >
            <div className="text-2xl text-amber-400 md:text-3xl">
              {s.icon}
            </div>

            <div className="mt-2 text-3xl font-bold text-white md:text-4xl">
              {s.number}
            </div>

            <div className="mt-2 text-[10px] font-semibold tracking-[0.12em] text-slate-400 sm:text-xs md:text-sm">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
