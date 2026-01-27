import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { languages } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { useLanguage } from "../i18n/LanguageContext";

const LanguageCard = ({ index, item, t }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.25, 0.75)}
    className='w-full'
  >
    <div className='flex items-center justify-between gap-4'>
      <div>
        <h3 className='text-primary dark:text-white font-bold text-[20px]'>{t(item.nameKey)}</h3>
        <p className='text-secondary dark:text-secondary text-[14px]'>{t(item.levelKey)}</p>
      </div>
    </div>
  </motion.div>
);

const Languages = () => {
  const { t } = useLanguage();

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{t("languages.sub")}</p>
        <h2 className={styles.sectionHeadText}>{t("languages.title")}</h2>
      </motion.div>

      <div className='mt-10 flex flex-col gap-6'>
        {languages.map((item, index) => (
          <LanguageCard key={`language-${index}`} index={index} item={item} t={t} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Languages, "languages");
