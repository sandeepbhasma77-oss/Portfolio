import React from "react";
import Testimonials from "./sections/Testimonials";
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import TechStack from "./sections/TechStack";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";

const App = () => {
  return (
    <div>
      <Hero />
      <Experience />
      <TechStack />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
