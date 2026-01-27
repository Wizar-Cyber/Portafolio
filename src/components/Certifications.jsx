import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { certifications } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { useLanguage } from "../i18n/LanguageContext";

const CertificationCard = ({ index, item, viewLabel, t }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.25, 0.75)}
    className='w-full'
  >
    <div className='flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2'>
      <div>
        <h3 className='text-primary dark:text-white font-bold text-[20px]'>{t(item.nameKey)}</h3>
        <p className='text-secondary dark:text-secondary text-[14px]'>{t(item.issuerKey)}</p>
      </div>
      <p className='text-secondary dark:text-secondary text-[14px] sm:text-right'>{t(item.dateKey)}</p>
    </div>

    {item.credential_url ? (
      <div className='mt-4'>
        <a
          href={item.credential_url}
          target='_blank'
          rel='noreferrer'
          className='text-[14px] blue-text-gradient font-semibold'
        >
          {viewLabel}
        </a>
      </div>
    ) : null}
  </motion.div>
);

const Certifications = () => {
  const { t } = useLanguage();

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{t("certifications.sub")}</p>
        <h2 className={styles.sectionHeadText}>{t("certifications.title")}</h2>
      </motion.div>

      <div className='mt-10 flex flex-col gap-6'>
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
