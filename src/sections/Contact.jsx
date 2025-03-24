import React from "react";
import TitleHeader from "../components/TitleHeader";
import ContactForm from "../components/ContactForm";
import ContactExperience from "../components/models/ContactExperience";

const Contact = () => {
  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full container">
        <TitleHeader
          title="Get in Touch – Let’s Connect"
          sub="💬 Have questions or ideas? Let’s talk! 🚀"
        />
        <div className="grid grid-cols-1 md:grid-cols-12 mt-16">
          <div className="md:col-span-5 col-span-12">
            <ContactForm />
          </div>
          <div className="md:col-span-7 col-span-12">
            <div className="w-full h-full">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
