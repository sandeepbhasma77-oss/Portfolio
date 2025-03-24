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
    <header
      className={`header fixed w-full left-[50%] -translate-x-[50%]  
        z-[100] transition-all duration-300 ease-in-out md:py-7 ${
          scrolled
            ? "bg-black top-0 padding-x xl:px-20 py-5"
            : "bg-black top-10 padding-x-lg xl:px-40 py-0"
        }`}
    >
      <div className="mx-auto flex items-center justify-between">
        <a
          href="/"
          className="text-white-50 text-xl md:text-2xl font-semibold transition-transform duration-300 hover:scale-105"
        >
          Adrian JSM
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="text-white relative group"
            >
              <span className="transition-colors duration-300 hover:text-white-50">
                {item.name}
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Contact Button */}
        <a href="#contact" className="hidden md:flex group">
          <div className="px-4 py-2 rounded-xl bg-white text-black group-hover:bg-black-50 transition-colors duration-300">
            <span className="group-hover:text-white transition-colors duration-300">
              Contact me
            </span>
          </div>
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white relative z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? (
            <img src="/images/x.svg" />
          ) : (
            <img src="/images/menu.svg" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed w-80 top-16 right-5 rounded-xl bg-black-50 z-40 flex flex-col pt-24 px-6 md:hidden transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-[150%]"
        }`}
      >
        <nav className="flex flex-col space-y-5 items-end">
          {navLinks.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="text-white text-xl relative group"
              onClick={() => setIsOpen(false)}
            >
              <span className="transition-colors duration-300 hover:text-white-50">
                {item.name}
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <button
            className="my-5 bg-white text-black px-4 py-2 w-full rounded hover:bg-gray-200"
            onClick={() => setIsOpen(false)}
          >
            Contact me
          </button>
        </nav>
      </div>
    </header>
  );
}
