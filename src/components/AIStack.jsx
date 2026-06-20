import { motion } from "framer-motion";
import {
  SiFastapi, SiLangchain, SiNumpy, SiOpenai, SiPandas,
  SiPostgresql, SiPython, SiPytorch, SiReact, SiScikitlearn, SiTensorflow,
} from "react-icons/si";
import { FaProjectDiagram, FaSearch } from "react-icons/fa";

import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { useLanguage } from "../i18n/LanguageContext";

const iconMap = {
  Python: SiPython,
  Pandas: SiPandas,
  NumPy: SiNumpy,
  "scikit-learn": SiScikitlearn,
  PyTorch: SiPytorch,
  TensorFlow: SiTensorflow,
  RAG: FaSearch,
  Embeddings: FaProjectDiagram,
  LangChain: SiLangchain,
  "OpenAI API": SiOpenai,
  FastAPI: SiFastapi,
  React: SiReact,
  PostgreSQL: SiPostgresql,
};

const stack = Object.keys(iconMap);

const workflows = [
  "aistack.workflow.modeling",
  "aistack.workflow.rag",
  "aistack.workflow.analytics",
  "aistack.workflow.deployment",
];

const AIStack = () => {
  const { t } = useLanguage();

  return (
    <section className="relative mx-auto max-w-6xl px-6 py-16">
      <motion.div variants={textVariant()} className="mb-8">
        <div className="mb-4 h-px w-10 bg-flow-accent" />
        <p className="font-mono text-[12px] uppercase tracking-[0.1em] text-flow-muted">
          {t("aistack.sub")}
        </p>
        <h2 className="mt-2 font-mono text-[28px] font-semibold text-flow-text">
          {t("aistack.title")}
          <span className="text-flow-accent">.</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid gap-5 rounded-xl border border-flow-border bg-flow-surface p-5 md:grid-cols-[1fr_0.8fr]"
      >
        <div>
          <p className="max-w-2xl font-body text-[15px] leading-7 text-flow-muted">
            {t("aistack.body")}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {stack.map((name) => {
              const Icon = iconMap[name];
              return (
                <span
                  key={name}
                  className="group flex items-center gap-2 rounded-md border border-flow-border bg-flow-bg px-3 py-2 transition-colors duration-150 hover:border-flow-accent/50"
                >
                  <span className="grid h-[18px] w-[18px] place-items-center text-flow-accent">
                    {Icon && <Icon />}
                  </span>
                  <span className="font-mono text-xs text-flow-muted transition-colors group-hover:text-flow-text">
                    {name}
                  </span>
                </span>
              );
            })}
          </div>
        </div>

        <div className="grid gap-2">
          {workflows.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="flex items-center gap-3 rounded-lg border border-flow-border bg-flow-bg px-3 py-2"
            >
              <span className="grid h-7 w-7 place-items-center rounded-md border border-flow-accent/30 text-flow-accent">
                {index + 1}
              </span>
              <span className="font-mono text-xs text-flow-muted">{t(item)}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SectionWrapper(AIStack, "ai-stack");
