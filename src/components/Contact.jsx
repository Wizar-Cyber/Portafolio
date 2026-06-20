import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { SectionWrapper } from "../hoc";
import { slideIn, textVariant } from "../utils/motion";
import { useLanguage } from "../i18n/LanguageContext";

const EMAIL = "Lozanoreiber1@gmail.com";

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

const Field = ({ as = "input", ...props }) => {
  const Component = as;
  return (
    <Component
      {...props}
      className="w-full rounded-lg border border-flow-border bg-flow-surface px-4 py-3 font-body text-[15px] text-flow-text outline-none transition-all duration-150 placeholder:text-flow-muted focus:border-flow-accent/50 focus:ring-1 focus:ring-flow-accent/20"
    />
  );
};

const ContactIcon = ({ children }) => (
  <svg className="h-4 w-4 flex-shrink-0 text-flow-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    {children}
  </svg>
);

const Contact = () => {
  const { t } = useLanguage();
  const formRef = useRef();
  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [copied, setCopied] = useState(false);

  const handleChange = ({ target }) => {
    setForm((current) => ({ ...current, [target.name]: target.value }));
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          ...form,
          name: form.from_name,
          email: form.from_email,
          time: new Date().toLocaleString("es-CO", {
            dateStyle: "long",
            timeStyle: "short",
          }),
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setStatus(t("contact.success"));
          setForm({ from_name: "", from_email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          setStatus(t("contact.error"));
          console.error(error);
        }
      );
  };

  return (
    <div>
      <SectionHeader eyebrow={t("contact.sub")} title={t("contact.title")} />

      <div className="mt-10 grid items-stretch gap-8 lg:grid-cols-[1.5fr_1fr]">
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          variants={slideIn("left", "tween", 0.1, 0.6)}
          className="flex h-full flex-col gap-4"
        >
          <Field
            type="text"
            name="from_name"
            value={form.from_name}
            onChange={handleChange}
            placeholder={t("contact.namePlaceholder")}
            required
          />
          <Field
            type="email"
            name="from_email"
            value={form.from_email}
            onChange={handleChange}
            placeholder={t("contact.emailPlaceholder")}
            required
          />
          <Field
            as="textarea"
            rows={9}
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder={t("contact.messagePlaceholder")}
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="inline-flex h-11 w-full items-center justify-center rounded-lg bg-flow-accent font-mono text-sm font-semibold text-flow-bg transition-colors hover:bg-flow-dim disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? (
              <span className="inline-flex items-center gap-2">
                <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0 1 8-8v4a4 4 0 0 0-4 4H4z" />
                </svg>
                {t("contact.sending")}
              </span>
            ) : (
              t("contact.send")
            )}
          </button>
          {status && (
            <p className="font-body text-sm text-flow-muted">{status}</p>
          )}
        </motion.form>

        <motion.aside
          variants={slideIn("right", "tween", 0.1, 0.6)}
          className="h-full rounded-xl border border-flow-border bg-flow-surface p-7"
        >
          <h3 className="font-mono text-[13px] uppercase tracking-[0.1em] text-flow-muted">
            {t("contact.direct")}
          </h3>

          <div className="mt-5 rounded-lg border border-flow-accent/25 bg-flow-bg p-4">
            <p className="font-mono text-sm font-semibold text-flow-text">
              {t("contact.ctaTitle")}
            </p>
            <p className="mt-2 font-body text-sm leading-6 text-flow-muted">
              {t("contact.ctaBody")}
            </p>
          </div>

          <div className="mt-5 flex flex-col gap-4">
            <button
              onClick={handleCopyEmail}
              className="flex items-center gap-3 font-body text-sm text-flow-text transition-colors hover:text-flow-accent"
              title={t("contact.copyEmail")}
            >
              <svg className="h-4 w-4 flex-shrink-0 text-flow-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2m-6 12h8a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2z" />
              </svg>
              {copied ? t("contact.copied") : EMAIL}
            </button>
            <a href="https://www.linkedin.com/in/reiberlozano/" target="_blank" rel="noreferrer" className="flex items-center gap-3 font-body text-sm text-flow-text transition-colors hover:text-flow-accent hover:underline">
              <svg className="h-4 w-4 flex-shrink-0 text-flow-accent" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
              </svg>
              reiberlozano
            </a>
            <a href="https://github.com/Wizar-Cyber" target="_blank" rel="noreferrer" className="flex items-center gap-3 font-body text-sm text-flow-text transition-colors hover:text-flow-accent hover:underline">
              <svg className="h-4 w-4 flex-shrink-0 text-flow-accent" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.23c-3.34.73-4.03-1.42-4.03-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23A11.5 11.5 0 0 1 12 5.8c1.02 0 2.05.14 3 .4 2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.69.8.58A12.01 12.01 0 0 0 12 0Z" />
              </svg>
              Wizar-Cyber
            </a>
            <div className="flex items-center gap-3 font-body text-sm text-flow-text">
              <ContactIcon>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-5.1 7-11a7 7 0 1 0-14 0c0 5.9 7 11 7 11z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10.5h.01" />
              </ContactIcon>
              {t("contact.location")}
            </div>
          </div>
        </motion.aside>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
