import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { navLinks } from "../constants";
import { useLanguage } from "../i18n/LanguageContext";

const IconButton = ({ children, label, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={label}
    className="grid h-8 w-8 place-items-center rounded-md border border-flow-border bg-transparent font-mono text-xs text-flow-muted transition-colors duration-150 hover:border-flow-accent hover:text-flow-accent"
  >
    {children}
  </button>
);

const Navbar = ({ isDark, onToggleTheme }) => {
  const { language, setLanguage, t } = useLanguage();
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] }
    );

    navLinks.forEach((nav) => {
      const section = document.getElementById(nav.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const toggleLanguage = () => setLanguage(language === "es" ? "en" : "es");

  return (
    <nav
      className={`fixed left-0 top-0 z-50 flex h-14 w-full items-center transition-all duration-300 ${
        scrolled
          ? "border-b border-flow-border bg-flow-bg/85 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 sm:px-16">
        <Link
          to="/"
          className="font-mono text-[15px] font-semibold text-flow-accent"
          onClick={() => {
            setActive("");
            setOpen(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          &lt;SF/&gt;
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex list-none items-center gap-7">
            {navLinks.map((nav) => (
              <li key={nav.id}>
                <a
                  href={`#${nav.id}`}
                  onClick={() => setActive(nav.id)}
                  className={`border-b-2 pb-1 font-mono text-[13px] uppercase tracking-[0.08em] transition-colors duration-150 ${
                    active === nav.id
                      ? "border-flow-accent text-flow-accent"
                      : "border-transparent text-flow-muted hover:border-flow-accent hover:text-flow-text"
                  }`}
                >
                  {t(nav.titleKey)}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <IconButton label="Toggle language" onClick={toggleLanguage}>
              {language === "es" ? "EN" : "ES"}
            </IconButton>
            <IconButton
              label={isDark ? t("theme.light") : t("theme.dark")}
              onClick={onToggleTheme}
            >
              {isDark ? (
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.36 6.36-.7-.7M6.34 6.34l-.7-.7m12.72 0-.7.7M6.34 17.66l-.7.7M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" />
                </svg>
              ) : (
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.35 15.35A9 9 0 0 1 8.65 3.65 9 9 0 1 0 20.35 15.35z" />
                </svg>
              )}
            </IconButton>
          </div>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <IconButton label="Toggle language" onClick={toggleLanguage}>
            {language === "es" ? "EN" : "ES"}
          </IconButton>
          <IconButton
            label={isDark ? t("theme.light") : t("theme.dark")}
            onClick={onToggleTheme}
          >
            {isDark ? (
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.36 6.36-.7-.7M6.34 6.34l-.7-.7m12.72 0-.7.7M6.34 17.66l-.7.7M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" />
              </svg>
            ) : (
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.35 15.35A9 9 0 0 1 8.65 3.65 9 9 0 1 0 20.35 15.35z" />
              </svg>
            )}
          </IconButton>
          <IconButton label="Menu" onClick={() => setOpen((value) => !value)}>
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d={open ? "M6 18 18 6M6 6l12 12" : "M4 7h16M4 12h16M4 17h16"} />
            </svg>
          </IconButton>
        </div>
      </div>

      <div
        className={`fixed inset-0 top-14 z-40 bg-flow-bg/95 backdrop-blur-md transition-opacity duration-200 md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-8">
          {navLinks.map((nav) => (
            <a
              key={nav.id}
              href={`#${nav.id}`}
              onClick={() => {
                setActive(nav.id);
                setOpen(false);
              }}
              className={`font-mono text-xl uppercase tracking-[0.08em] ${
                active === nav.id ? "text-flow-accent" : "text-flow-text"
              }`}
            >
              {t(nav.titleKey)}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
