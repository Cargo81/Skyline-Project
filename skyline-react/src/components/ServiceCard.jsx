
import { API_BASE } from "../config";

export default function ServiceCard({ service }) {
  const image =
    service.image &&
    (service.image.startsWith("http")
      ? service.image
      : `${API_BASE}${service.image}`);

  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">

      
      {image && (
        <div className="h-56 overflow-hidden bg-slate-100 sm:h-64">
          <img
            src={image}
            alt={service.title || "SKYLINE service"}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      )}

      
      <div className="p-6">

        
        <h3 className="text-xl font-bold text-slate-900 transition duration-300 group-hover:text-amber-600 sm:text-2xl">
          {service.title}
        </h3>

        
        <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
          {service.description}
        </p>

       
        {service.price != null && service.price !== "" && (
          <div className="mt-5 border-t border-slate-100 pt-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">
              Starting Price
            </span>

            <p className="mt-1 text-2xl font-extrabold text-amber-600">
              {service.price}
            </p>
          </div>
        )}

        
        {Array.isArray(service.features) &&
          service.features.length > 0 && (
            <ul className="mt-5 space-y-3 border-t border-slate-100 pt-5">
              {service.features.map((feature, index) => (
                <li
                  key={`${feature}-${index}`}
                  className="flex items-start gap-3 text-sm leading-6 text-slate-700"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-100 text-xs font-bold text-amber-700">
                    ✓
                  </span>

                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}

       
        <a
          href="#quote"
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-slate-950 px-5 py-3 font-semibold text-white transition duration-300 hover:bg-amber-400 hover:text-slate-950"
        >
          Get a Quote
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  );
}