import React, { createContext, useContext, useMemo, useState } from "react";

import { translations } from "./translations";

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem("lang");
    return saved === "es" || saved === "en" ? saved : "es";
  });

  const value = useMemo(() => {
    const t = (key) => translations[language]?.[key] ?? translations.es?.[key] ?? key;

    const setLang = (next) => {
      setLanguage(next);
      localStorage.setItem("lang", next);
    };

    return {
      language,
      setLanguage: setLang,
      t,
    };
  }, [language]);

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
