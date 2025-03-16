import React from "react";
import TitleHeader from "../components/TitleHeader";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="flex-center py-10 md:py-20 md:px-0 px-5">
      <div className="w-full h-full container">
        <TitleHeader
          title="Get in Touch – Let’s Connect"
          sub="💬 Have questions or ideas? Let’s talk! 🚀"
        />
        <div className="grid grid-cols-1 md:grid-cols-12 mt-16">
          <div className="md:col-span-5 col-span-12">
            <ContactForm />
          </div>
          <div className="md:col-span-7 col-span-12"></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
