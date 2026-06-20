import { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";

import { LanguageProvider } from "./i18n/LanguageContext";
import { About, AIStack, Certifications, Contact, Education, Hero, Languages, Navbar, Tech, Works } from "./components";

const StarsCanvas = lazy(() =>
  import("./components/canvas").then((module) => ({ default: module.StarsCanvas }))
);

const App = () => {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved === "light" || saved === "dark" ? saved : "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <BrowserRouter>
      <LanguageProvider>
        <div className="flow-noise relative min-h-screen bg-flow-bg text-flow-text">
          <div
            className="pointer-events-none fixed inset-0 z-0"
            style={{
              background:
                "radial-gradient(ellipse 80% 40% at 50% 0%, rgba(240,165,0,0.045) 0%, transparent 100%)",
            }}
          />
          <Navbar
            isDark={theme === "dark"}
            onToggleTheme={() =>
              setTheme((prev) => (prev === "dark" ? "light" : "dark"))
            }
          />
          <main className="relative z-10">
            <Hero />
            <About />
            <Tech />
            <AIStack />
            <Works />
            <Education />
            <Certifications />
            <Languages />
            <div className="relative z-0">
              <Contact />
              <Suspense fallback={null}>
                <StarsCanvas />
              </Suspense>
            </div>
          </main>
        </div>
      </LanguageProvider>
    </BrowserRouter>
  );
};

export default App;
