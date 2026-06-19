import { motion } from "framer-motion";

import { education } from "../constants";
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

const Education = () => {
  const { t } = useLanguage();

  return (
    <>
      <SectionHeader eyebrow={t("education.sub")} title={t("education.title")} />

      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
        {education.map((item, index) => {
          const type = t(item.typeKey).toUpperCase();
          const primary = type === "PREGRADO" || type === "UNDERGRADUATE";
          return (
            <motion.div
              key={`education-${index}`}
              variants={fadeIn("up", "spring", index * 0.1, 0.6)}
              className="rounded-[10px] border border-flow-border bg-flow-surface p-6 transition-colors duration-150 hover:border-flow-accent/25"
            >
              <div className="flex items-center justify-between gap-4">
                <span
                  className={`rounded border px-2 py-1 font-mono text-[11px] uppercase ${
                    primary
                      ? "border-flow-accent/30 bg-flow-accent/15 text-flow-accent"
                      : "border-flow-border text-flow-muted"
                  }`}
                >
                  {type}
                </span>
                <span className="font-mono text-[13px] text-flow-muted">
                  {t(item.dateKey)}
                </span>
              </div>
              <p className="mt-4 font-body text-[13px] text-flow-muted">
                {t(item.institutionKey)}
              </p>
              <h3 className="mt-1 font-mono text-base font-semibold text-flow-text">
                {t(item.titleKey)}
              </h3>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
