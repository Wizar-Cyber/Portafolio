import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { useLanguage } from "../i18n/LanguageContext";

const SectionHeader = ({ eyebrow, title }) => (
  <motion.div variants={textVariant()} className="text-center">
    <div className="mx-auto mb-4 h-px w-10 bg-flow-accent" />
    <p className="font-mono text-[12px] uppercase tracking-[0.1em] text-flow-muted">
      {eyebrow}
    </p>
    <h2 className="mt-2 font-mono text-[32px] font-semibold text-flow-text">
      {title.slice(0, -1)}
      <span className="text-flow-accent">.</span>
    </h2>
  </motion.div>
);

const Tech = () => {
  const { t } = useLanguage();

  return (
    <>
      <SectionHeader eyebrow="Stack" title={t("tech.title")} />
      <div className="mx-auto mt-10 flex max-w-[900px] flex-wrap justify-center gap-3">
        {technologies.map((technology, index) => (
          <motion.div
            key={technology.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: index * 0.03 }}
            className="group flex cursor-default items-center gap-2 rounded-md border border-flow-border bg-flow-surface px-[14px] py-2 transition-colors duration-150 hover:border-flow-accent/50"
          >
            <img
              src={technology.icon}
              alt={technology.name}
              className="h-[18px] w-[18px] object-contain"
              loading="lazy"
            />
            <span className="font-mono text-[13px] text-flow-muted transition-colors group-hover:text-flow-text">
              {technology.name}
            </span>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
