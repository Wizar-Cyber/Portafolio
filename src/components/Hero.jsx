import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { profile } from "../assets";
import { useLanguage } from "../i18n/LanguageContext";

const EMAIL = "Lozanoreiber1@gmail.com";

const TypeLine = ({ text, delay = 0 }) => (
  <motion.span
    className="block overflow-hidden whitespace-nowrap"
    initial={{ width: 0 }}
    animate={{ width: `${text.length}ch` }}
    transition={{ duration: 0.8, delay, ease: "easeInOut" }}
  >
    {text}
  </motion.span>
);

const Hero = () => {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => setAtTop(window.scrollY === 0);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="relative mx-auto min-h-[90vh] w-full max-w-7xl px-6 pt-[120px] sm:px-16">
      <div className="grid min-h-[calc(90vh-120px)] items-center gap-12 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <div className="mb-5 h-px w-[200px] overflow-hidden">
            <div className="h-full bg-flow-accent/60 animate-flow-line" />
          </div>

          <motion.p
            className="font-mono text-[13px] uppercase tracking-[0.1em] text-flow-muted"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            {t("hero.greeting")}
          </motion.p>

          <motion.h1
            className="mt-4 font-display text-[48px] italic leading-none text-flow-text sm:text-[72px]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            <span className="block">Reiber</span>
            <span className="block">
              Lozano<span className="text-flow-accent">.</span>
            </span>
          </motion.h1>

          <div className="mt-4 font-mono text-base text-flow-muted">
            <TypeLine text="Software Engineer" delay={0.9} />
            <div className="flex">
              <TypeLine text="AI Automation Developer" delay={1.7} />
              <motion.span
                className="ml-1 text-flow-accent animate-cursor-blink"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
              >
                |
              </motion.span>
            </div>
          </div>

          <motion.p
            className="mt-6 max-w-[440px] font-body text-[17px] leading-8 text-flow-muted"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.4 }}
          >
            {t("hero.bio")}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.35, duration: 0.4 }}
          >
            <a
              href="https://www.linkedin.com/in/reiberlozano/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-[38px] items-center rounded-md bg-flow-accent px-5 font-mono text-[13px] font-semibold text-flow-bg shadow-amber-sm transition-colors hover:bg-flow-dim"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Wizar-Cyber"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-[38px] items-center rounded-md border border-flow-border px-5 font-mono text-[13px] text-flow-text transition-colors hover:border-flow-accent hover:text-flow-accent"
            >
              GitHub
            </a>
            <a
              href="/CV_Reiber_Lozano.pdf"
              download
              className="inline-flex h-[38px] items-center rounded-md border border-flow-border px-5 font-mono text-[13px] text-flow-text transition-colors hover:border-flow-accent hover:text-flow-accent"
            >
              {t("hero.downloadCv")}
            </a>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex h-[38px] items-center rounded-md px-5 font-mono text-[13px] text-flow-muted transition-colors hover:text-flow-accent"
            >
              {copied ? t("contact.copied") : t("contact.copyEmail")}
            </button>
          </motion.div>
        </div>

        <motion.div
          className="justify-self-center lg:justify-self-end"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="relative h-[390px] w-[280px] rounded-lg border border-flow-border bg-flow-surface/20 p-3 transition-all duration-300 hover:border-flow-accent/50 hover:shadow-amber-md sm:h-[420px] sm:w-[320px]">
            <img
              src={profile}
              alt="Reiber Lozano"
              width="320"
              height="420"
              className="h-full w-full object-contain object-bottom"
            />
            <div className="absolute -bottom-4 right-4 flex items-center gap-2 rounded-md border border-flow-border bg-flow-bg/95 px-3 py-2 shadow-amber-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="font-mono text-[11px] text-flow-muted">{t("hero.available")}</span>
            </div>
          </div>
        </motion.div>
      </div>

      {atTop && (
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-flow-muted sm:flex"
        >
          <span className="font-mono text-[11px]">scroll</span>
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
          </svg>
        </motion.div>
      )}
    </section>
  );
};

export default Hero;
