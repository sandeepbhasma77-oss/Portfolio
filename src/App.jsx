import { useEffect, useState } from "react";

import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import About from "./sections/About";
import TechStack from "./sections/TechStack";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import FeatureCards from "./sections/FeatureCards";
import Navbar from "./components/NavBar";
import CustomCursor from "./components/CustomCursor";

const getPageFromHash = () => {
  const page = window.location.hash.replace("#", "");
  return ["about", "skills", "projects", "contact"].includes(page)
    ? page
    : "home";
};

const App = () => {
  const [page, setPage] = useState(getPageFromHash);
  const [transitionKey, setTransitionKey] = useState(0);

  useEffect(() => {
    const handleHashChange = () => {
      setPage(getPageFromHash());
      setTransitionKey((key) => key + 1);
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <>
      <div key={transitionKey} className="page-transition" aria-hidden="true">S</div>
      <CustomCursor />
      <Navbar />
      {page === "home" && (
        <>
          <Hero />
          <section className="mt-20 md:mt-32">
            <FeatureCards />
          </section>
        </>
      )}
      {page === "about" && <About />}
      {page === "skills" && <TechStack />}
      {page === "projects" && (
        <>
          <ShowcaseSection />
        </>
      )}
      {page === "contact" && <Contact />}
      <Footer />
    </>
  );
};

export default App;
