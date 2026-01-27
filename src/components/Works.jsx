import React, { useEffect, useMemo, useState } from "react";
import Tilt from "react-tilt";
import { AnimatePresence, motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { useLanguage } from "../i18n/LanguageContext";

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
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    if (slides.length <= 1) return;

    const interval = setInterval(() => {
      setDirection(1);
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <div className='w-full h-full overflow-hidden rounded-2xl relative'>
            <AnimatePresence initial={false} custom={direction}>
              {slides.length > 0 ? (
                <motion.img
                  key={`${nameKey}-slide-${activeSlide}`}
                  src={slides[activeSlide]}
                  alt={t("alt.projectImage")}
                  className='absolute inset-0 w-full h-full object-cover'
                  initial={{ x: direction > 0 ? "100%" : "-100%", opacity: 0.8 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: direction > 0 ? "-100%" : "100%", opacity: 0.8 }}
                  transition={{ type: "tween", duration: 0.5 }}
                />
              ) : null}
            </AnimatePresence>
          </div>

          {slides.length > 1 ? (
            <div className='absolute bottom-3 left-0 right-0 flex justify-center gap-2'>
              {slides.map((_, i) => (
                <span
                  key={`${nameKey}-dot-${i}`}
                  className={`w-2 h-2 rounded-full ${
                    i === activeSlide ? "bg-white" : "bg-white/30"
                  }`}
                />
              ))}
            </div>
          ) : null}

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt={t("alt.sourceCode")}
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{t(nameKey)}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{t(descriptionKey)}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${nameKey}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const { t } = useLanguage();

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>{t("work.sub")}</p>
        <h2 className={`${styles.sectionHeadText}`}>{t("work.title")}</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          {t("work.body")}
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} t={t} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
