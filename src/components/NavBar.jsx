import { useState, useEffect } from "react";
import { navLinks } from "../constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a href="/" className="logo">
          Adrian JSM
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map((item, index) => (
              <li key={index} className="group">
                <a href={item.link}>
                  <span>{item.name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="contact-btn group">
          <div className="inner">
            <span>Contact me</span>
          </div>
        </a>

        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          <img src={`/images/${isOpen ? "x" : "menu"}.svg`} alt="" />
        </button>
      </div>

      <div className={`mobile-menu ${isOpen ? "open" : "closed"}`}>
        <ul>
          {navLinks.map((item, index) => (
            <li key={index} className="group">
              <a href={item.link} onClick={() => setIsOpen(false)}>
                <span>{item.name}</span>
                <span className="underline" />
              </a>
            </li>
          ))}
          <li>
            <button className="cta" onClick={() => setIsOpen(false)}>
              Contact me
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
