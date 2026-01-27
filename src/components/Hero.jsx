import { useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { profile } from "../assets";
import { SectionWrapper } from "../hoc";
import { ComputersCanvas } from "./canvas";
import { useLanguage } from "../i18n/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const email = "Lozanoreiber1@gmail.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className={`relative w-full h-[85vh] mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] z-10 max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className='flex flex-col lg:flex-row lg:items-start gap-8 w-full'>
          <div className='flex-1'>
            <h1 className={`${styles.heroHeadText}`}>
              {t("hero.greeting")} <span className='text-[#915EFF]'>Reiber Lozano</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2`}>
              {t("hero.subtitle1")}
              <br className='sm:block hidden' />
              {t("hero.subtitle2")}
            </p>

            <div className='mt-6 flex flex-col gap-4'>
              <div className='flex flex-wrap gap-4'>
                <a
                  href='https://www.linkedin.com/in/reiberlozano/'
                  target='_blank'
                  rel='noreferrer'
                  className='green-pink-gradient p-[2px] rounded-xl shadow-card'
                >
                  <span className='bg-tertiary px-5 py-3 rounded-xl text-white font-semibold block'>
                    LinkedIn
                  </span>
                </a>

                <a
                  href='https://github.com/Wizar-Cyber'
                  target='_blank'
                  rel='noreferrer'
                  className='green-pink-gradient p-[2px] rounded-xl shadow-card'
                >
                  <span className='bg-tertiary px-5 py-3 rounded-xl text-white font-semibold block'>
                    GitHub
                  </span>
                </a>

                <a
                  href='/CV_Reiber_Lozano.pdf'
                  download
                  className='green-pink-gradient p-[2px] rounded-xl shadow-card'
                >
                  <span className='bg-tertiary px-5 py-3 rounded-xl text-white font-semibold block'>
                    {t("hero.downloadCv")}
                  </span>
                </a>
              </div>

              <div className='flex flex-wrap gap-4'>
                <a
                  href={`mailto:${email}`}
                  className='green-pink-gradient p-[2px] rounded-xl shadow-card'
                >
                  <span className='bg-tertiary px-5 py-3 rounded-xl text-white font-semibold block'>
                    {email}
                  </span>
                </a>

                <button
                  type='button'
                  onClick={handleCopyEmail}
                  className='green-pink-gradient p-[2px] rounded-xl shadow-card'
                >
                  <span className='bg-tertiary px-5 py-3 rounded-xl text-white font-semibold block'>
                    {copied ? t("contact.copied") : t("contact.copy")}
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className='flex-shrink-0 lg:mt-3'>
            <div className='relative w-40 h-40 sm:w-48 sm:h-48 group'>
              {/* Campo de fuerza electromagnético */}
              <div className='absolute inset-0 rounded-full overflow-hidden'>
                <div className='absolute inset-0 bg-gradient-conic from-violet-600/30 via-purple-600/20 to-violet-600/30 animate-field-rotation' />
                <div className='absolute inset-2 rounded-full bg-black-100/90 backdrop-blur-md' />
              </div>
              
              {/* Anillos de energía concéntricos */}
              <div className='absolute inset-0 rounded-full border border-violet-500/20 animate-pulse-ring-1' />
              <div className='absolute inset-1 rounded-full border border-purple-500/15 animate-pulse-ring-2' />
              <div className='absolute inset-2 rounded-full border border-violet-500/10 animate-pulse-ring-3' />
              
              {/* Partículas de luz orbital */}
              <div className='absolute inset-0 rounded-full'>
                <div className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-3 h-3 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full animate-orbit-1 shadow-lg shadow-violet-400/50' />
                <div className='absolute top-1/2 right-0 -translate-y-1/2 translate-x-1 w-3 h-3 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full animate-orbit-2 shadow-lg shadow-purple-400/50' />
                <div className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1 w-3 h-3 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full animate-orbit-3 shadow-lg shadow-violet-400/50' />
                <div className='absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1 w-3 h-3 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full animate-orbit-4 shadow-lg shadow-purple-400/50' />
              </div>
              
              {/* Estelas de luz dinámicas */}
              <div className='absolute inset-0 rounded-full'>
                <div className='absolute top-1/4 left-1/4 w-16 h-1 bg-gradient-to-r from-transparent via-violet-400/60 to-transparent animate-energy-flow-1' />
                <div className='absolute top-3/4 right-1/4 w-16 h-1 bg-gradient-to-r from-transparent via-purple-400/60 to-transparent animate-energy-flow-2' />
                <div className='absolute bottom-1/4 left-1/4 w-16 h-1 bg-gradient-to-r from-transparent via-violet-400/60 to-transparent animate-energy-flow-3' />
              </div>
              
              {/* Núcleo holográfico con fusión de fondo */}
              <div className='absolute inset-2 rounded-full overflow-hidden bg-black-100/95 backdrop-blur-lg border border-violet-400/30 shadow-2xl shadow-violet-400/20'>
                {/* Foto con efecto de integración */}
                <img 
                  src={profile} 
                  alt={t("hero.photoPlaceholder")}
                  className='absolute inset-0 w-full h-full rounded-full object-cover z-20 scale-110 translate-y-[2%] translate-x-[-3%]'
                />
                
                {/* Capa de fusión animada (debajo de la foto) */}
                <div className='absolute inset-0 z-10'>
                  <div className='absolute inset-0 bg-gradient-to-br from-black-100 via-transparent to-violet-900/20 animate-fusion-layer' />
                  <div className='absolute inset-0 bg-gradient-to-tl from-purple-900/10 via-transparent to-black-100 animate-fusion-layer-reverse' />
                </div>
                
                {/* Efecto de ondas de fusión (debajo de la foto) */}
                <div className='absolute inset-0 rounded-full z-10'>
                  <div className='absolute inset-0 rounded-full border border-violet-400/20 animate-fusion-wave-1' />
                  <div className='absolute inset-1 rounded-full border border-purple-400/15 animate-fusion-wave-2' />
                  <div className='absolute inset-2 rounded-full border border-violet-400/10 animate-fusion-wave-3' />
                </div>
                
                {/* Partículas de fusión (debajo de la foto) */}
                <div className='absolute inset-0 rounded-full overflow-hidden z-10'>
                  <div className='absolute top-1/4 left-1/4 w-1 h-1 bg-violet-400/40 rounded-full animate-fusion-particle-1' />
                  <div className='absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400/40 rounded-full animate-fusion-particle-2' />
                  <div className='absolute bottom-1/4 right-1/4 w-1 h-1 bg-violet-400/40 rounded-full animate-fusion-particle-3' />
                  <div className='absolute bottom-1/4 left-1/4 w-1 h-1 bg-purple-400/40 rounded-full animate-fusion-particle-4' />
                </div>
                
                {/* Efecto holográfico base (debajo de la foto) */}
                <div className='absolute inset-0 z-10 bg-gradient-to-t from-violet-400/5 via-transparent to-purple-400/5 animate-hologram' />
                
                {/* Capa de brillo de fusión (debajo de la foto) */}
                <div className='absolute inset-0 rounded-full z-10 bg-gradient-to-r from-transparent via-violet-400/10 to-transparent animate-fusion-glow pointer-events-none' />
              </div>
              
              {/* Efecto de distorsión dimensional */}
              <div className='absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-violet-400/10 to-transparent animate-distortion pointer-events-none' />
              
              {/* Indicadores de estado */}
              <div className='absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-green-400 rounded-full animate-status-pulse shadow-lg shadow-green-400/50' />
            </div>
          </div>
        </div>
      </div>

      {/* <div className='absolute inset-0 z-0'>
        <ComputersCanvas />
      </div> */}

      
    </section>
  );
};

export default Hero;
