import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { useLanguage } from "../i18n/LanguageContext";

const Navbar = ({ isDark, onToggleTheme }) => {
  const { language, setLanguage, t } = useLanguage();
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-white dark:bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt={t("alt.logo")} className='w-9 h-9 object-contain' />
          <p className='text-primary dark:text-white text-[18px] font-bold cursor-pointer flex '>
            Reiber &nbsp;
            <span className='md:block hidden'> | {t("services.softwareEngineering")}</span>
          </p>
        </Link>

        <div className='hidden md:flex items-center gap-6'>
          <button
            type='button'
            onClick={() => setLanguage(language === "es" ? "en" : "es")}
            className='bg-tertiary px-3 py-2 rounded-lg text-white font-semibold'
          >
            {language === "es" ? t("lang.en") : t("lang.es")}
          </button>

          <button
            type='button'
            onClick={onToggleTheme}
            className='bg-tertiary px-4 py-2 rounded-lg text-white font-semibold'
          >
            {isDark ? t("theme.light") : t("theme.dark")}
          </button>

          <ul className='list-none flex flex-row gap-10'>
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.id
                    ? "text-primary dark:text-white"
                    : "text-secondary"
                } hover:text-primary dark:hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(nav.id)}
              >
                <a href={`#${nav.id}`}>{t(nav.titleKey)}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className='md:hidden flex flex-1 justify-end items-center'>
          <button
            type='button'
            onClick={() => setLanguage(language === "es" ? "en" : "es")}
            className='bg-tertiary px-3 py-2 rounded-lg text-white font-semibold mr-3'
          >
            {language === "es" ? t("lang.en") : t("lang.es")}
          </button>
          <button
            type='button'
            onClick={onToggleTheme}
            className='bg-tertiary px-3 py-2 rounded-lg text-white font-semibold mr-3'
          >
            {isDark ? t("theme.light") : t("theme.dark")}
          </button>
          <img
            src={toggle ? close : menu}
            alt={t("alt.menu")}
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.id ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.id);
                  }}
                >
                  <a href={`#${nav.id}`}>{t(nav.titleKey)}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
