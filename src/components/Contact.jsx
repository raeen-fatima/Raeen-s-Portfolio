import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/mnnnvakk", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormStatus("Thank you! Your message has been submitted.");
        e.target.reset(); // Reset the form fields
      } else {
        setFormStatus("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      setFormStatus("Error: Unable to submit the form. Please try again later.");
    }
  };

  return (
    <div id='contact' className="border-b border-neutral-900 pt-14 pb-20 font-playfair">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="text-center text-4xl font-bold text-white my-10"
      >
        Feel free to connect with me anytime!
      </motion.h2>

      {formStatus && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileInView="visible"

          transition={{ duration: 0.5 }}
          className="text-center text-lg text-primary mb-5"
        >
          {formStatus}
        </motion.div>
      )}

      <motion.form
        onSubmit={handleSubmit}
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto max-w-4xl px-4"
        action="https://formspree.io/f/mnnnvakk"
        method="POST"
      >
        {/* Left Column */}
        <div className="col-span-1">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name*"
            className="w-full bg-transparent border-b border-gray-600 text-primary focus:outline-none focus:border-primary py-2"
            required
          />
        </div>

        <div className="col-span-1">
          <input
            type="text"
            id="company"
            name="company"
            placeholder="Company Name"
            className="w-full bg-transparent border-b border-gray-600 text-primary focus:outline-none focus:border-primary py-2"
          />
        </div>

        <div className="col-span-1">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email Address*"
            className="w-full bg-transparent border-b border-gray-600 text-primary focus:outline-none focus:border-primary py-2"
            required
          />
        </div>

        <div className="col-span-1">
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone Number*"
            className="w-full bg-transparent border-b border-gray-600 text-primary focus:outline-none focus:border-primary py-2"
            required
          />
        </div>

        {/* Full Width for Textarea */}
        <div className="col-span-1 md:col-span-2">
          <textarea
            id="message"
            name="message"
            placeholder="Write your message here"
            rows="4"
            className="w-full bg-transparent border-b border-gray-600 text-primary focus:outline-none focus:border-primary py-2"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="col-span-1 md:col-span-2 flex justify-end" 
    
        >
          <button
            type="submit"  
            className="bg-primary text-black px-6 py-3 rounded-lg text-sm font-semibold hover:bg-white   focus:outline-none"
          >
            Send Message <span className="ml-2">✉</span>
          </button>
        </div>
      </motion.form>
    </div>
  );
};

export default Contact;
