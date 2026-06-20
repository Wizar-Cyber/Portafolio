import { motion } from "framer-motion";
import { FaCloud, FaGraduationCap, FaShieldAlt } from "react-icons/fa";
import { SiDatacamp, SiGoogle } from "react-icons/si";

import { certifications } from "../constants";
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

const issuerIcon = (issuer) => {
  const name = issuer.toLowerCase();
  if (name.includes("google")) return <SiGoogle className="h-5 w-5 text-flow-accent" />;
  if (name.includes("oracle")) return <FaCloud className="h-5 w-5 text-flow-accent" />;
  if (name.includes("datacamp")) return <SiDatacamp className="h-5 w-5 text-flow-accent" />;
  if (name.includes("mintic")) return <FaShieldAlt className="h-5 w-5 text-flow-accent" />;
  if (name.includes("edutin")) return <FaGraduationCap className="h-5 w-5 text-flow-accent" />;
  return <FaShieldAlt className="h-5 w-5 text-flow-accent" />;
};

const CertificationCard = ({ index, item, viewLabel, t }) => {
  const issuer = t(item.issuerKey);

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.08, 0.55)}
      className="flex items-start gap-4 rounded-[10px] border border-flow-border bg-flow-surface p-5 transition-colors duration-150 hover:border-flow-accent/25"
    >
      <div className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-lg border border-flow-border bg-flow-bg">
        {issuerIcon(issuer)}
      </div>

      <div className="min-w-0 flex-1">
        <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-flow-muted">
          {issuer} · {t(item.dateKey)}
        </p>
        <h3 className="mt-1 line-clamp-2 font-body text-sm font-medium text-flow-text">
          {t(item.nameKey)}
        </h3>
        {item.credential_url && (
          <a
            href={item.credential_url}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-block font-mono text-xs text-flow-accent/70 transition-colors hover:text-flow-accent"
          >
            {viewLabel} →
          </a>
        )}
      </div>
    </motion.div>
  );
};

const Certifications = () => {
  const { t } = useLanguage();

  return (
    <>
      <SectionHeader eyebrow={t("certifications.sub")} title={t("certifications.title")} />

      <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-3">
        {certifications.map((item, index) => (
          <CertificationCard
            key={`certification-${index}`}
            index={index}
            item={item}
            viewLabel={t("certifications.view")}
            t={t}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certifications, "certifications");
