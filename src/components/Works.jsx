import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { useLanguage } from "../i18n/LanguageContext";

const FILTERS = [
  { key: "all", labelKey: "projects.filters.all" },
  { key: "ai", labelKey: "projects.filters.ai" },
  { key: "ml", labelKey: "projects.filters.ml" },
  { key: "client", labelKey: "projects.filters.client" },
  { key: "fullstack", labelKey: "projects.filters.fullstack" },
];

const filterMap = {
  all: () => true,
  ai: (project) => project.type?.toLowerCase().includes("ai"),
  ml: (project) =>
    project.type?.toLowerCase().includes("ml") ||
    project.tags?.some((tag) =>
      ["pandas", "numpy", "scikit-learn", "pytorch", "tensorflow", "rag", "embeddings"].includes(tag.name)
    ),
  client: (project) => project.isClient === true,
  fullstack: (project) => project.type?.includes("Full-Stack"),
};

const visualContent = {
  gmail: {
    title: "AI Inbox",
    metric: "RAG",
    chips: ["mail", "ctx", "reply"],
  },
  pipeline: {
    title: "Video Flow",
    metric: "n8n",
    chips: ["video", "audio", "post"],
  },
  cantrack: {
    title: "Lead Score",
    metric: "92",
    chips: ["scrape", "score", "reply"],
  },
  crm: {
    title: "Field Route",
    metric: "200+",
    chips: ["lead", "map", "visit"],
  },
  pet: {
    title: "Clinic OS",
    metric: "RBAC",
    chips: ["citas", "historia", "pqrs"],
  },
  smartflow: {
    title: "Automation",
    metric: "AI",
    chips: ["lead", "flow", "data"],
  },
};

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

const ProjectVisual = ({ type = "gmail" }) => {
  const visual = visualContent[type] || visualContent.gmail;
  const isMap = type === "crm";
  const isTable = type === "cantrack";
  const isPipeline = type === "pipeline" || type === "smartflow";

  return (
    <div className="relative h-[210px] overflow-hidden border-b border-flow-border bg-flow-bg">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(240,165,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(240,165,0,0.05)_1px,transparent_1px)] bg-[size:28px_28px]" />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_44%,rgba(240,165,0,0.16),transparent_58%)]"
        animate={{ opacity: [0.35, 0.72, 0.35], scale: [1, 1.04, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-flow-accent/80">
            {visual.title}
          </p>
          <div className="mt-1 h-px w-16 bg-flow-accent/40" />
        </div>
        <motion.div
          className="grid h-11 w-11 place-items-center rounded-xl border border-flow-accent/30 bg-flow-surface/80 font-mono text-[12px] text-flow-accent shadow-amber-sm backdrop-blur"
          animate={{ y: [0, -2, 0], scale: [1, 1.03, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          {visual.metric}
        </motion.div>
      </div>

      <div className="absolute left-5 right-5 top-[72px]">
        {isMap ? (
          <div className="relative h-[96px] rounded-2xl border border-flow-border bg-flow-surface/70 p-4 backdrop-blur">
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 320 96" fill="none">
              <motion.path
                d="M34 70 C78 24 108 64 146 38 C194 6 218 50 284 26"
                stroke="var(--flow-accent)"
                strokeWidth="2"
                strokeDasharray="5 7"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3.4, repeat: Infinity, repeatType: "reverse" }}
              />
              {[34, 146, 284].map((cx, index) => (
                <motion.circle
                  key={cx}
                  cx={cx}
                  cy={[70, 38, 26][index]}
                  r="5"
                  fill="var(--flow-accent)"
                  animate={{ scale: [1, 1.4, 1], opacity: [0.65, 1, 0.65] }}
                  transition={{ duration: 2.2, repeat: Infinity, delay: index * 0.25 }}
                />
              ))}
            </svg>
          </div>
        ) : isTable ? (
          <div className="rounded-2xl border border-flow-border bg-flow-surface/75 p-3 backdrop-blur">
            {[88, 72, 94].map((score, index) => (
              <div
                key={score}
                className="mb-2 flex items-center gap-2 last:mb-0"
              >
                <span className="h-2 w-2 rounded-full bg-flow-accent" />
                <span className="h-2 flex-1 rounded bg-flow-border" />
                <motion.span
                  className="h-2 rounded bg-flow-accent"
                  animate={{ width: [`${score - 18}px`, `${score}px`, `${score - 8}px`] }}
                  transition={{ duration: 2.6, repeat: Infinity, delay: index * 0.2 }}
                />
              </div>
            ))}
          </div>
        ) : isPipeline ? (
          <div className="grid grid-cols-4 gap-2">
            {visual.chips.map((chip, index) => (
              <motion.div
                key={chip}
                className="h-[82px] rounded-2xl border border-flow-border bg-flow-surface/75 p-2 backdrop-blur"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2.6, repeat: Infinity, delay: index * 0.16 }}
              >
                <div className="mb-3 h-7 rounded-lg border border-flow-accent/25 bg-flow-accent/10" />
                <div className="h-1.5 rounded bg-flow-border" />
                <div className="mt-1.5 h-1.5 w-2/3 rounded bg-flow-accent/60" />
              </motion.div>
            ))}
            <motion.div
              className="absolute left-[22%] right-[22%] top-[38px] h-px bg-flow-accent/60"
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 2.2, repeat: Infinity }}
            />
          </div>
        ) : (
          <div className="rounded-2xl border border-flow-border bg-flow-surface/75 p-3 backdrop-blur">
            <div className="mb-3 flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl border border-flow-accent/25 bg-flow-accent/10 text-flow-accent">
                {type === "pet" ? "+" : "@"}
              </span>
              <div className="flex-1">
                <div className="h-2 rounded bg-flow-accent/70" />
                <div className="mt-2 h-2 w-2/3 rounded bg-flow-border" />
              </div>
            </div>
            <div className="space-y-1.5">
              {[78, 58, 86].map((width, index) => (
                <motion.div
                  key={width}
                  className="h-1.5 rounded bg-flow-border"
                  animate={{ width: [`${width - 18}%`, `${width}%`, `${width - 8}%`] }}
                  transition={{ duration: 2.8, repeat: Infinity, delay: index * 0.18 }}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="absolute bottom-5 left-5 right-5 flex gap-1.5">
        {visual.chips.map((chip) => (
          <span
            key={chip}
            className="rounded border border-flow-border bg-flow-surface/75 px-2 py-0.5 font-mono text-[10px] text-flow-muted backdrop-blur"
          >
            {chip}
          </span>
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ project, t }) => {
  const {
    nameKey,
    descriptionKey,
    tags = [],
    source_code_link,
    type,
    isClient,
    clientBadge,
    isFeatured,
    isOwn,
    visual,
    metrics = [],
  } = project;

  const cardRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    cardRef.current.style.setProperty("--x", `${x}%`);
    cardRef.current.style.setProperty("--y", `${y}%`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`group relative flex h-full flex-col overflow-hidden rounded-xl border bg-flow-surface transition-all duration-200 ${
        isFeatured
          ? "border-flow-accent/40 shadow-amber-sm"
          : "border-flow-border hover:border-flow-accent/30 hover:shadow-[0_4px_24px_rgba(240,165,0,0.08)]"
      }`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(240,165,0,0.06), transparent 60%)",
        }}
      />

      <ProjectVisual type={visual} />

      {source_code_link && (
        <a
          href={source_code_link}
          target="_blank"
          rel="noreferrer"
          aria-label={t("alt.sourceCode")}
          className="absolute right-3 top-3 z-20 grid h-8 w-8 place-items-center rounded-full border border-flow-accent/30 bg-flow-bg/85 text-flow-text backdrop-blur transition-colors hover:border-flow-accent hover:text-flow-accent"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.230.957-.266 1.983-.399 3.003-.404 1.020.005 2.047.138 3.006.404 2.291-1.552 3.297-1.230 3.297-1.230.653 1.653.242 2.874.118 3.176.770.840 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.430.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
      )}

      <div className="relative flex flex-1 flex-col gap-3 p-5">
        <div className="flex flex-wrap gap-1.5">
          {type && (
            <span className="rounded border border-flow-accent/30 bg-flow-bg px-2 py-0.5 font-mono text-[10px] text-flow-accent">
              {type}
            </span>
          )}
          {isClient && clientBadge && (
            <span className="rounded border border-amber-300/25 bg-flow-bg px-2 py-0.5 font-mono text-[10px] text-amber-300">
              {clientBadge}
            </span>
          )}
          {isOwn && (
            <span className="rounded border border-flow-border bg-flow-bg px-2 py-0.5 font-mono text-[10px] text-flow-muted">
              {t("projects.badges.own")}
            </span>
          )}
        </div>

        <h3 className="font-mono text-[15px] font-semibold text-flow-text">
          {t(nameKey)}
        </h3>
        <p className="line-clamp-3 font-body text-[13px] leading-relaxed text-flow-muted">
          {t(descriptionKey)}
        </p>

        {metrics.length > 0 && (
          <div className="grid gap-1.5">
            {metrics.map((metric) => (
              <div
                key={metric}
                className="flex items-center gap-2 rounded-md border border-flow-border/70 bg-flow-bg px-2.5 py-1.5"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-flow-accent" />
                <span className="font-mono text-[11px] text-flow-muted">
                  {metric}
                </span>
              </div>
            ))}
          </div>
        )}

        <div className="mt-auto flex flex-wrap gap-1.5 border-t border-flow-border pt-3">
          {tags.map((tag) => (
            <span
              key={tag.name}
              className="rounded-sm border border-flow-border/50 bg-flow-bg px-2 py-0.5 font-mono text-[11px] text-flow-accent/70"
            >
              #{tag.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Works = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("all");
  const filteredProjects = projects.filter(filterMap[activeFilter]);

  return (
    <>
      <SectionHeader eyebrow={t("work.sub")} title={t("work.title")} />

      <div className="w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 max-w-3xl font-body text-[17px] leading-[30px] text-flow-muted"
        >
          {t("work.body")}
        </motion.p>
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {FILTERS.map((filter) => {
          const isActive = activeFilter === filter.key;

          return (
            <button
              key={filter.key}
              type="button"
              onClick={() => setActiveFilter(filter.key)}
              className={`rounded-full border px-4 py-1.5 font-mono text-xs transition-all duration-150 ${
                isActive
                  ? "border-flow-accent bg-flow-accent text-flow-bg"
                  : "border-flow-border bg-transparent text-flow-muted hover:border-flow-accent/50 hover:text-flow-text"
              }`}
              aria-pressed={isActive}
            >
              {t(filter.labelKey)}
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.nameKey}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
            >
              <ProjectCard project={project} t={t} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
