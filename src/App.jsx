import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";

import { About, Certifications, Contact, Education, /* Feedbacks, */ Hero, Languages, Navbar, Tech, Works, StarsCanvas } from "./components";

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
      <div className='relative z-0 bg-white dark:bg-primary'>
        <div className='dark:bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar
            isDark={theme === "dark"}
            onToggleTheme={() =>
              setTheme((prev) => (prev === "dark" ? "light" : "dark"))
            }
          />
          <Hero />
        </div>
        <About />
        <Education />
        <Tech />
        <Works />
        <Certifications />
        <Languages />
        {/* <Feedbacks /> */}
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
