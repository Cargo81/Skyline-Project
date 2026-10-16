
import { useEffect, useState } from "react";
import { API_BASE } from "../config";
import ServiceCard from "./ServiceCard";

const PRICE = "Rs. 550-650/Sq ft";

const DEFAULT_SERVICES = [
  {
    title: "Residential Stretch Ceiling Solution",
    description:
      "Modern and premium ceiling designs, customized designs for bedrooms, living rooms and dining areas, with seamless finishes and multiple colour and texture options.",
    firstFeature: "Customized Design",
    mailSubject: "Residential%20Stretch%20Ceiling",
  },
  {
    title: "Commercial Stretch Ceiling Solution",
    description:
      "Premium ceiling solutions for offices, hotels and showrooms, customized to match your commercial interiors with a seamless and elegant finish.",
    firstFeature: "Professional Finish",
    mailSubject: "Commercial%20Stretch%20Ceiling",
  },
  {
    title: "Luxury 3D Artistic Ceiling Design",
    description:
      "Unique 3D artistic ceiling designs with customized patterns, shapes and visual effects for luxury homes, hotels and commercial spaces.",
    firstFeature: "Artistic Design",
    mailSubject: "Luxury%203D%20Artistic%20Ceiling",
  },
  {
    title: "Simple and Plain Stretch Ceiling Design",
    description:
      "Clean and minimal ceiling appearances with smooth, seamless finishes. Available in multiple colours and finishes for homes and offices.",
    firstFeature: "Clean Finish",
    mailSubject: "Simple%20and%20Plain%20Stretch%20Ceiling",
  },
  {
    title: "Custom and Printed Stretch Ceiling Design",
    description:
      "Fully customized ceiling designs with high-quality photo printing, graphic printing, personalized patterns, images and artwork.",
    firstFeature: "Printed Design",
    mailSubject: "Custom%20and%20Printed%20Stretch%20Ceiling",
  },
];

function StaticServiceCard({
  title,
  description,
  firstFeature,
  mailSubject,
}) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-md transition duration-300 hover:-translate-y-2 hover:border-amber-300 hover:shadow-xl sm:p-7">

      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-amber-100 text-2xl text-amber-700 transition group-hover:bg-amber-400 group-hover:text-slate-950">
        ✦
      </div>


      <h3 className="text-xl font-bold leading-snug text-slate-900 transition group-hover:text-amber-700">
        {title}
      </h3>


      <p className="mt-4 text-sm leading-7 text-slate-600">
        {description}
      </p>


      <div className="mt-5 border-t border-slate-100 pt-5">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
          Starting Price
        </p>

        <p className="mt-2 text-2xl font-extrabold text-amber-600">
          {PRICE}
        </p>
      </div>


      <ul className="mt-5 flex-1 space-y-3">
        {[
          firstFeature,
          "Quick Installation",
          "1 year Warranty",
          "Free consultation",
        ].map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-3 text-sm text-slate-700"
          >
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-700">
              ✓
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href={`mailto:skylineceiling@gmail.com?subject=Quote%20Request%20-%20${mailSubject}`}
        className="mt-7 flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-5 py-3 font-semibold text-white transition duration-300 hover:bg-amber-400 hover:text-slate-950"
      >
        Get Quote
        <span aria-hidden="true">→</span>
      </a>
    </article>
  );
}

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchServices() {
      try {
        const response = await fetch(`${API_BASE}/api/services/`, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Services API request failed");
        }

        const data = await response.json();

        if (Array.isArray(data)) {
          setServices(data);
        }
      } catch (error) {
        if (error.name !== "AbortError") {
          console.warn(
            "Using the default services because the API request failed:",
            error
          );
        }
      }
    }

    fetchServices();

    return () => controller.abort();
  }, []);

  return (
    <section
      id="services"
      className="bg-slate-50 px-5 py-16 sm:px-8 md:py-20 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">


        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-amber-600">
            What We Offer
          </span>

          <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl md:text-5xl">
            Our Services
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-amber-400" />

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Stretch ceiling solutions for every space and design requirement.
          </p>
        </div>


        <div className="mt-12 grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.id ?? service.title}
              service={service}
            />
          ))}

          {DEFAULT_SERVICES.map((service) => (
            <StaticServiceCard key={service.title} {...service} />
          ))}
        </div>

      </div>
    </section>
  );
}