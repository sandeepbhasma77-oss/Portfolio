import React from "react";
import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/models/ContactExperience";
import Button from "../components/Button";

const Contact = () => {
  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Get in Touch – Let’s Connect"
          sub="💬 Have questions or ideas? Let’s talk! 🚀"
        />
        <div className="grid-12-cols mt-16">
          <div className="xl:col-span-5">
            <div className="flex-center common-card rounded-xl p-10">
              <form className="w-full flex flex-col gap-7">
                <div>
                  <label htmlFor="name">Your name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="What’s your good name?"
                  />
                </div>

                <div>
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="What’s your email address?"
                  />
                </div>

                <div>
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    placeholder="How can I help you?"
                    rows="5"
                  />
                </div>

                <Button text="Send Message" />
              </form>
            </div>
          </div>
          <div className="xl:col-span-7">
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
