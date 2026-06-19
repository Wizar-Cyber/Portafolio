import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
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

const ProjectCard = ({
  index,
  nameKey,
  descriptionKey,
  tags,
  image,
  images,
  source_code_link,
  t,
}) => {
  const slides = useMemo(() => {
    if (Array.isArray(images) && images.length > 0) return images;
    if (image) return [image];
    return [];
  }, [image, images]);

  const [activeSlide, setActiveSlide] = useState(0);
  const cardRef = useRef(null);

  useEffect(() => {
    if (slides.length <= 1) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    cardRef.current.style.setProperty("--x", `${x}%`);
    cardRef.current.style.setProperty("--y", `${y}%`);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      variants={fadeIn("up", "spring", index * 0.1, 0.75)}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-flow-border bg-flow-surface transition-all duration-200 hover:border-flow-accent/30 hover:shadow-[0_4px_24px_rgba(240,165,0,0.08)]"
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(240,165,0,0.06), transparent 60%)",
        }}
      />

      <div className="relative h-[200px] overflow-hidden bg-flow-border">
        <AnimatePresence initial={false}>
          {slides.length > 0 && (
            <motion.img
              key={`${nameKey}-slide-${activeSlide}`}
              src={slides[activeSlide]}
              alt={t("alt.projectImage")}
              className="absolute inset-0 h-full w-full object-cover"
              initial={{ x: "100%", opacity: 0.8 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0.8 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          )}
        </AnimatePresence>

        {slides.length > 1 && (
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
            {slides.map((_, i) => (
              <span
                key={`dot-${i}`}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  i === activeSlide ? "bg-flow-accent" : "bg-flow-border"
                }`}
              />
            ))}
          </div>
        )}

        <a
          href={source_code_link}
          target="_blank"
          rel="noreferrer"
          aria-label={t("alt.sourceCode")}
          className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full border border-flow-accent/30 bg-flow-bg/85 text-flow-text backdrop-blur transition-colors hover:border-flow-accent hover:text-flow-accent"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
      </div>

      <div className="relative flex flex-1 flex-col gap-3 p-5">
        <h3 className="font-mono text-[15px] font-semibold text-flow-text">
          {t(nameKey)}
        </h3>
        <p className="line-clamp-3 font-body text-[13px] leading-relaxed text-flow-muted">
          {t(descriptionKey)}
        </p>

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
    </motion.div>
  );
};

const Works = () => {
  const { t } = useLanguage();

  return (
    <>
      <SectionHeader eyebrow={t("work.sub")} title={t("work.title")} />

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 max-w-3xl font-body text-[17px] leading-[30px] text-flow-muted"
        >
          {t("work.body")}
        </motion.p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} t={t} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
