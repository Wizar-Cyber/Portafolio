import { motion } from "framer-motion";

import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { useLanguage } from "../i18n/LanguageContext";

const SectionHeader = ({ eyebrow, title }) => (
  <motion.div variants={textVariant()}>
    <div className="mb-4 h-px w-10 bg-flow-accent" />
    <p className="font-mono text-[12px] uppercase tracking-[0.1em] text-flow-muted">
      {eyebrow}
    </p>
    <h2 className="mt-2 font-mono text-[32px] font-semibold text-flow-text">
      {title.slice(0, -1)}
      <span className="text-flow-accent">.</span>
    </h2>
  </motion.div>
);

const icons = [
  <path key="globe" strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 1 0 0-18m0 18a9 9 0 1 1 0-18m0 18c2.5-2.4 4-5.5 4-9s-1.5-6.6-4-9m0 18c-2.5-2.4-4-5.5-4-9s1.5-6.6 4-9M3.6 9h16.8M3.6 15h16.8" />,
  <path key="monitor" strokeLinecap="round" strokeLinejoin="round" d="M4 5h16v11H4zM8 21h8M12 16v5" />,
  <path key="server" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16v5H4zM4 13h16v5H4zM7 8.5h.01M7 15.5h.01" />,
  <path key="brain" strokeLinecap="round" strokeLinejoin="round" d="M9 4a3 3 0 0 0-3 3v1a3 3 0 0 0-2 5.2A3 3 0 0 0 7 18h1a4 4 0 0 0 4-4V7a3 3 0 0 0-3-3Zm6 0a3 3 0 0 1 3 3v1a3 3 0 0 1 2 5.2A3 3 0 0 1 17 18h-1a4 4 0 0 1-4-4V7a3 3 0 0 1 3-3Z" />,
];

const ServiceCard = ({ index, title }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.12, 0.65)}
    className="group rounded-[10px] border border-flow-border bg-flow-surface p-6 transition-all duration-200 hover:border-flow-accent/40 hover:bg-flow-accent/5 hover:shadow-amber-sm"
  >
    <svg className="h-6 w-6 text-flow-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
      {icons[index]}
    </svg>
    <h3 className="mt-3 font-mono text-sm font-semibold text-flow-text">
      {title}
    </h3>
  </motion.div>
);

const About = () => {
  const { t } = useLanguage();

  return (
    <>
      <SectionHeader eyebrow={t("about.sub")} title={t("about.title")} />

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.p
          variants={fadeIn("up", "tween", 0.1, 0.5)}
          className="max-w-[560px] font-body text-[17px] leading-[1.75] text-flow-text"
        >
          {t("about.body")}
        </motion.p>

        <div className="grid gap-4 sm:grid-cols-2">
          {services.map((service, index) => (
            <ServiceCard
              key={service.titleKey}
              index={index}
              title={t(service.titleKey)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
