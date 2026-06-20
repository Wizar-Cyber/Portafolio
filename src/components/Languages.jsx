import { motion } from "framer-motion";

import { languages } from "../constants";
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

const levelToNumber = (level) => {
  const map = {
    Nativo: 5,
    Native: 5,
    C2: 5,
    C1: 4,
    B2: 3,
    B1: 2,
    A2: 1,
    A1: 1,
  };
  return map[level] ?? 0;
};

const LanguageCard = ({ index, item, t }) => {
  const level = t(item.levelKey);
  const dots = levelToNumber(level);

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.1, 0.55)}
      className="flex h-full items-center justify-between gap-5 rounded-[10px] border border-flow-border bg-flow-surface p-6 transition-colors duration-150 hover:border-flow-accent/25"
    >
      <div className="flex items-center gap-3">
        <span className="text-2xl">
          {index === 0 ? "\uD83C\uDDE8\uD83C\uDDF4" : index === 1 ? "\uD83C\uDDFA\uD83C\uDDF8" : "\uD83C\uDDE7\uD83C\uDDF7"}
        </span>
        <div>
          <p className="font-body text-[15px] text-flow-text">{t(item.nameKey)}</p>
          <p className="font-mono text-xs text-flow-muted">{level}</p>
        </div>
      </div>

      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full border border-flow-border ${
              i <= dots ? "border-flow-accent bg-flow-accent" : "bg-transparent"
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
};

const Languages = () => {
  const { t } = useLanguage();

  return (
    <>
      <SectionHeader eyebrow={t("languages.sub")} title={t("languages.title")} />

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {languages.map((item, index) => (
          <LanguageCard key={`language-${index}`} index={index} item={item} t={t} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Languages, "languages");
