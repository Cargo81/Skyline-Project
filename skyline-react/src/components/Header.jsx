import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const close = () => setMenuOpen(false);

  return (
    <header className="w-full bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6 lg:px-8">

        
        <a
          aria-label="SKYLINE Stretch Ceiling"
          className="flex shrink-0 items-center gap-3"
          href="#"
          onClick={close}
        >
          <div className="w-16 sm:w-20">
            <img
              alt="Skyline Stretch Ceiling Logo"
              src="/public/Images/SKYline-logo.png"
              className="block h-auto w-full object-contain"
            />
          </div>

          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-wider text-slate-900 sm:text-2xl">
              SKYLINE
            </span>
            <span className="text-xs font-medium tracking-wide text-slate-500 sm:text-sm">
              Stretch Ceiling
            </span>
          </div>
        </a>

        
        <button
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          className="flex flex-col gap-1.5 rounded p-2 text-slate-800 hover:bg-slate-100 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="h-0.5 w-6 bg-current" />
          <span className="h-0.5 w-6 bg-current" />
          <span className="h-0.5 w-6 bg-current" />
        </button>

        
        <nav
          className={`${
            menuOpen ? "flex" : "hidden"
          } absolute left-0 top-[76px] z-50 w-full flex-col bg-white px-6 py-5 shadow-lg md:static md:flex md:w-auto md:flex-row md:bg-transparent md:p-0 md:shadow-none`}
        >
          <ul className="flex flex-col gap-5 md:flex-row md:items-center md:gap-6 lg:gap-8">
            <li>
              <a
                className="font-semibold text-sky-600 transition hover:text-sky-700"
                href="#"
                onClick={close}
              >
                HOME
              </a>
            </li>

            <li>
              <a
                className="font-semibold text-slate-700 transition hover:text-sky-600"
                href="#services"
                onClick={close}
              >
                SERVICES
              </a>
            </li>

            <li>
              <a
                className="font-semibold text-slate-700 transition hover:text-sky-600"
                href="#Portfolio"
                onClick={close}
              >
                GALLERY
              </a>
            </li>

            <li>
              <a
                className="font-semibold text-slate-700 transition hover:text-sky-600"
                href="#why-us"
                onClick={close}
              >
                WHY US
              </a>
            </li>

            <li>
              <a
                className="font-semibold text-slate-700 transition hover:text-sky-600"
                href="#contact"
                onClick={close}
              >
                CONTACT US
              </a>
            </li>
          </ul>
        </nav>

        
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="mailto:skylineceiling@gmail.com?subject=Get%20Quote%20-%20SKYLINE%20Stretch%20Ceiling"
            className="rounded-md bg-sky-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-sky-700"
          >
            GET QUOTE
          </a>

          <div className="flex flex-col gap-1 text-sm">
            <a
              href="tel:7248923560"
              className="text-slate-700 transition hover:text-sky-600"
            >
              ☎ +91 7248923560
            </a>

            <a
              href="mailto:skylineceiling@gmail.com"
              className="text-slate-700 transition hover:text-sky-600"
            >
              ✉ skylineceiling@gmail.com
            </a>
          </div>
        </div>

      </div>
    </header>
  );
}