
import { useState } from "react";
import { API_BASE } from "../config";

export default function QuoteForm() {
  const [quoteStatus, setQuoteStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleQuoteSubmit(event) {
    event.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setQuoteStatus("Submitting...");

    const form = event.currentTarget;
    const value = (id) => form.querySelector(`#${id}`)?.value || "";

    const data = {
      name: value("fullName"),
      email: value("email"),
      phone: value("phone"),
      city: "",
      service: null,
      message: `Project Type: ${value("projectType")}
Area Size: ${value("areaSize")}
Budget: ${value("budgetRange")}
Project Details: ${value("projectDetails")}`,
    };

    try {
      const response = await fetch(`${API_BASE}/api/quotes/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        const detail =
          result.detail || result.message || JSON.stringify(result);

        throw new Error(detail || "Failed to submit quote request.");
      }

      setQuoteStatus("Quote request submitted successfully!");
      form.reset();
    } catch (error) {
      console.error("Quote submission error:", error);
      setQuoteStatus(
        "Could not submit the quote. Check that Django is running and your API settings allow this request."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  const inputClass =
    "mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-200";

  const labelClass = "text-sm font-semibold text-slate-700";

  const requiredMark = (
    <span className="text-red-500" aria-hidden="true">
      *
    </span>
  );

  return (
    <section
      id="quote"
      className="bg-slate-950 px-5 py-16 sm:px-8 md:py-20 lg:px-12"
    >
      <div className="mx-auto max-w-5xl">


        <div className="mb-10 text-center">
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-amber-400">
            Get In Touch
          </span>

          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
            Tell Us About Your Project
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-amber-400" />

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Get a personalized quote for your stretch ceiling project.
            Share your requirements and our team will help you find the
            perfect solution.
          </p>
        </div>


        <form
          id="quote-form"
          onSubmit={handleQuoteSubmit}
          className="rounded-2xl border border-white/10 bg-white p-5 shadow-2xl sm:p-8 md:p-10"
        >
          <div className="grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-2">


            <div>
              <label htmlFor="fullName" className={labelClass}>
                Full Name {requiredMark}
              </label>
              <input
                id="fullName"
                name="fullName"
                autoComplete="name"
                className={inputClass}
                placeholder="Enter your full name"
                required
                type="text"
              />
            </div>


            <div>
              <label htmlFor="email" className={labelClass}>
                Email Address {requiredMark}
              </label>
              <input
                id="email"
                name="email"
                autoComplete="email"
                className={inputClass}
                placeholder="Enter your email"
                required
                type="email"
              />
            </div>


            <div>
              <label htmlFor="phone" className={labelClass}>
                Phone Number {requiredMark}
              </label>
              <input
                id="phone"
                name="phone"
                autoComplete="tel"
                className={inputClass}
                maxLength={10}
                pattern="[6-9][0-9]{9}"
                placeholder="Enter 10 digit mobile number"
                required
                type="tel"
              />
            </div>


            <div>
              <label htmlFor="projectType" className={labelClass}>
                Project Type
              </label>
              <select
                id="projectType"
                name="projectType"
                defaultValue=""
                className={inputClass}
              >
                <option disabled value="">
                  Select project type
                </option>
                <option value="residential">
                  Residential Stretch Ceiling
                </option>
                <option value="commercial">
                  Commercial Stretch Ceiling
                </option>
                <option value="3d-artistic">
                  3D Artistic Ceiling
                </option>
                <option value="simple-plain">
                  Simple and Plain Stretch Ceiling
                </option>
              </select>
            </div>


            <div>
              <label htmlFor="areaSize" className={labelClass}>
                Area Size (sq ft)
              </label>
              <input
                id="areaSize"
                name="areaSize"
                className={inputClass}
                placeholder="e.g. 200 sq ft"
                type="text"
              />
            </div>


            <div>
              <label htmlFor="budgetRange" className={labelClass}>
                Budget Range
              </label>
              <select
                id="budgetRange"
                name="budgetRange"
                defaultValue=""
                className={inputClass}
              >
                <option disabled value="">
                  Select budget range
                </option>
                <option value="budget-1">Under ₹50,000</option>
                <option value="budget-2">
                  ₹50,000 - ₹1,50,000
                </option>
                <option value="budget-3">₹1,50,000+</option>
              </select>
            </div>


            <div className="md:col-span-2">
              <label htmlFor="projectDetails" className={labelClass}>
                Project Details
              </label>
              <textarea
                id="projectDetails"
                name="projectDetails"
                rows={5}
                className={`${inputClass} resize-y`}
                placeholder="Tell us about your project requirements..."
              />
            </div>


            <div className="md:col-span-2">
              <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4">
                <input
                  id="robotCheck"
                  name="robotCheck"
                  required
                  type="checkbox"
                  className="h-5 w-5 accent-amber-500"
                />
                <span className="text-sm text-slate-700">
                  I confirm that the information provided is correct.
                </span>
              </label>
              <p className="mt-2 text-xs text-slate-500">
                This checkbox is a basic confirmation, not automated bot
                protection.
              </p>
            </div>


            <div className="md:col-span-2">
              <button
                disabled={isSubmitting}
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-lg bg-amber-400 px-6 py-4 font-bold text-slate-950 shadow-lg transition duration-300 hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:min-w-52"
              >
                {isSubmitting ? "Submitting..." : "Send Message"}
                {!isSubmitting && (
                  <span className="text-xl" aria-hidden="true">
                    →
                  </span>
                )}
              </button>
            </div>
          </div>
        </form>


        {quoteStatus && (
          <p
            role="status"
            aria-live="polite"
            className={`mt-6 rounded-lg border p-4 text-center text-sm font-medium ${quoteStatus.includes("successfully")
                ? "border-green-500/30 bg-green-500/10 text-green-300"
                : quoteStatus === "Submitting..."
                  ? "border-amber-400/30 bg-amber-400/10 text-amber-200"
                  : "border-red-500/30 bg-red-500/10 text-red-300"
              }`}
          >
            {quoteStatus}
          </p>
        )}
      </div>
    </section>
  );
}