
import { useState } from "react";

const FILTERS = [
  { value: "all", label: "All" },
  { value: "residential", label: "Residential" },
  { value: "commercial", label: "Commercial" },
  { value: "3d-designs", label: "3D Designs" },
  { value: "custom-prints", label: "Custom Prints" },
];

const ITEMS = [
  {
    category: "3d-designs",
    src: "/public/images/3D_Design1.jpg",
    alt: "Parametric floral lotus stretch ceiling",
    title: "Parametric Floral / Lotus Stretch Ceiling",
    text: "A dramatic focal ceiling featuring geometric petal-lattice framework paired with high-translucency backlit membranes.",
  },
  {
    category: "custom-prints",
    src: "/public/images/Printing_Design1.jpg",
    alt: "3D illuminated pillars",
    title: "3D Illuminated Pillars",
    text: "Modern LED stretch ceiling feature columns.",
  },
  {
    category: "commercial",
    src: "/public/images/Simple_Design1.jpg",
    alt: "Glossy white stretch ceiling",
    title: "Glossy White Stretch Ceiling for Business",
    text: "Starry night effect stretch ceiling with fiber optics, creating a luxurious ambiance.",
  },
  {
    category: "commercial",
    src: "/public/images/Sky_Design1.jpg",
    alt: "Healthcare and MRI suite virtual skylight",
    title: "Healthcare & MRI Suite Virtual Skylight",
    text: "High-definition backlit sky print designed to reduce anxiety and create a calming ambiance in clinical environments.",
  },
  {
    category: "residential",
    src: "/public/images/SKYdesign2.jpg",
    alt: "Sky printed ceiling",
    title: "Sky Printed Ceiling",
    text: "Vibrant backlit floral ceiling design for modern homes.",
  },
  {
    category: "residential",
    src: "/public/images/3D_Design3.jpg",
    alt: "Side wall 3D printed design",
    title: "Side Wall 3D Printed Design",
  },
  {
    category: "residential",
    src: "/public/images/Simple_Design3.jpg",
    alt: "Plain and simple stretch ceiling",
    title: "Plain and Simple Design",
  },
];

function PortfolioCard({ item }) {
  return (
    <article className="group relative h-72 overflow-hidden rounded-xl bg-slate-200 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:h-80 lg:h-96">
      
      <img
        src={item.src}
        alt={item.alt}
        loading="lazy"
        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
      />

      
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/30 to-transparent p-5 opacity-100 transition duration-300 md:opacity-0 md:group-hover:opacity-100">
        <span className="mb-2 w-fit rounded-full bg-amber-400 px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-950">
          {item.category.replace("-", " ")}
        </span>

        <h3 className="text-lg font-bold text-white sm:text-xl">
          {item.title}
        </h3>

        {item.text && (
          <p className="mt-2 text-sm leading-6 text-slate-200">
            {item.text}
          </p>
        )}
      </div>
    </article>
  );
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredItems =
    activeFilter === "all"
      ? ITEMS
      : ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section
      id="Portfolio"
      className="bg-slate-50 px-5 py-16 sm:px-8 md:py-20 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-amber-600">
            Our Work
          </span>

          <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl md:text-5xl">
            Our Portfolio
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-amber-400" />

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Browse through our stunning stretch ceiling installations
          </p>
        </div>

        
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {FILTERS.map((filter) => {
            const isActive = activeFilter === filter.value;

            return (
              <button
                key={filter.value}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveFilter(filter.value)}
                className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition duration-300 ${
                  isActive
                    ? "border-amber-500 bg-amber-400 text-slate-950 shadow-md"
                    : "border-slate-200 bg-white text-slate-700 hover:border-amber-400 hover:text-amber-700"
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <PortfolioCard key={item.src} item={item} />
          ))}
        </div>

       
        {filteredItems.length === 0 && (
          <p className="py-12 text-center text-slate-500">
            No projects found in this category.
          </p>
        )}
      </div>
    </section>
  );
}