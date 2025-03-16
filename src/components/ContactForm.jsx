import React from "react";

const ContactForm = () => {
  return (
    <div className="flex-center common-card rounded-xl p-10">
      <form className="w-full flex flex-col gap-7">
        <div>
          <label className="block text-white-50 mb-2" htmlFor="name">
            Your name
          </label>
          <input
            type="text"
            id="name"
            placeholder="What’s your good name?"
            className="w-full px-4 py-4 md:text-base text-sm placeholder:text-blue-50 bg-blue-100 rounded-md"
          />
        </div>

        <div>
          <label className="block text-white-50 mb-2" htmlFor="email">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="What’s your email address?"
            className="w-full px-4 py-4 md:text-base text-sm placeholder:text-blue-50 bg-blue-100 rounded-md"
          />
        </div>

        <div>
          <label className="block text-white-50 mb-2" htmlFor="message">
            Your Message
          </label>
          <textarea
            id="message"
            placeholder="How can I help you?"
            rows="5"
            className="w-full px-4 py-4 md:text-base text-sm placeholder:text-blue-50 bg-blue-100 rounded-md"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-4 bg-white text-black font-semibold rounded-md flex justify-center items-center gap-2"
        >
          Send Message
          <img src="/images/arrow-right.svg" alt="arrow-right" />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
