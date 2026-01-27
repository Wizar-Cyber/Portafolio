import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { education } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { useLanguage } from "../i18n/LanguageContext";

const EducationCard = ({ index, item, t }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.25, 0.75)}
    className='w-full'
  >
    <div className='flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2'>
      <div>
        <h3 className='text-primary dark:text-white font-bold text-[20px]'>{t(item.titleKey)}</h3>
        <p className='text-secondary dark:text-secondary text-[14px]'>{t(item.institutionKey)}</p>
      </div>
      <p className='text-secondary dark:text-secondary text-[14px] sm:text-right'>{t(item.dateKey)}</p>
    </div>

    {item.details?.length ? (
      <ul className='mt-4 list-disc ml-5 space-y-2'>
        {item.details.map((detail, detailIndex) => (
          <li
            key={`education-${item.titleKey}-${detailIndex}`}
            className='text-primary dark:text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {detail}
          </li>
        ))}
      </ul>
    ) : null}
  </motion.div>
);

const Education = () => {
  const { t } = useLanguage();

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{t("education.sub")}</p>
        <h2 className={styles.sectionHeadText}>{t("education.title")}</h2>
      </motion.div>

      <div className='mt-10 flex flex-col gap-6'>
        {education.map((item, index) => (
          <EducationCard key={`education-${index}`} index={index} item={item} t={t} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
