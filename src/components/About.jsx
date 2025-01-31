import React, { useState } from "react";
import { motion } from "framer-motion";
import AboutImg from "../assets/mypic.jpg";
import { FaHandshake, FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

// Define SlideLeft and SlideRight variants with transition properties
export const SlideLeft = (delay = 0) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { delay: delay, duration: 0.8 },
  },
});

export const SlideRight = (delay = 0) => ({
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { delay: delay, duration: 0.8 },
  },
});

const About = () => {
  const [lineVisible, setLineVisible] = useState(false);

  const handleDownloadClick = () => {
    setLineVisible(true);
    setTimeout(() => setLineVisible(false), 1000);
  };

  return (
    <section id="about">
      <div className="font-playfair container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative items-center">
        {/* Image Section */}
        <div className="flex justify-center items-center order-2 md:order-none">
          <motion.img
            variants={SlideLeft(1)}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1.0 }}
            src={AboutImg}
            alt="About Me"
            className="rounded-2xl w-[200px] md:w-[250px] xl:w-[250px] drop-shadow rounded-lg"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center text-center md:text-left py-14 md:py-0 font-playfair order-1 md:order-none">
          <div className="text-center md:text-left space-y-6 px-4">
            <motion.h1
              variants={SlideRight(0.6)}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.8 }}
              className="text-4xl lg:text-5xl font-bold leading-relaxed xl:leading-normal text-primary"
            >
              About <span className="text-white">Me</span>
            </motion.h1>

            <motion.p
              variants={SlideRight(0.8)}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.8 }}
              className="text-gray-600 xl:max-w-[500px]"
            >
              I'm a passionate developer skilled in crafting modern, responsive,
              and user-friendly web experiences. With expertise in Tailwind CSS,
              React, and full-stack development, I focus on delivering clean,
              efficient, and impactful solutions tailored to your needs.
            </motion.p>

            <motion.div
              variants={SlideRight(1)}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.8 }}
              className="flex justify-center gap-8 md:justify-start mt-4"
            >
              <button
                className="flex justify-center items-center gap-2 relative text-white hover:text-secondary"
                onClick={handleDownloadClick}
              >
                <FaHandshake />
                <a href="https://github.com/raeen-fatima">Let's Collaborate</a>
                {lineVisible && (
                  <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-primary animate-slide"></span>
                )}
              </button>
              <a
                href="#projects"
                className="hover:bg-primary text-primary font-semibold hover:text-black rounded-md border-2 border-primary px-6 py-2 duration-200 hidden md:block"
              >
                Explore My Work
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Education and Contact Section */}
      <div className="container py-16 font-playfair">
        <motion.h2
          variants={SlideRight(1)}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-center text-white mb-6"
        >
          Education & Contact
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Education Section */}
          <motion.div
            variants={SlideLeft(1)}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center text-center md:text-left"
          >
            <motion.h3
              variants={SlideRight(0.6)}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.8 }}
              className="text-2xl font-semibold text-primary"
            >
              Education
            </motion.h3>
            <motion.p
              variants={SlideLeft(1)}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.8 }}
              className="text-lg text-gray-600 mt-3"
            >
              Currently pursuing a <span className="font-semibold text-white">BCA in Cloud and Security</span> at{" "}
              <span className="font-bold text-white">Amity University, Noida</span>.
              <br />
              <span className="font-semibold text-white">Relevant Coursework:</span> Cybersecurity, Web Development, Data Structures, and Operating Systems.
              <br />
              <span className="font-semibold text-white">Achievements:</span> Dean's List (2023), Completed multiple full-stack projects.
              <br />
              <span className="font-semibold text-white">Internship:</span> 2-Month Internship at NativeSoft Tech - Full Stack Web Development.
              <br />
              <span className="font-semibold text-white">Certifications:</span> Full Stack Web Development course by Angela Yu (Udemy)
            </motion.p>
            <motion.p
              variants={SlideLeft(1.2)}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.8 }}
              className="text-lg text-gray-600 mt-4"
            >
              I have been actively learning the latest web development trends and tools. My coursework has provided me with a solid understanding of the concepts
              required for both front-end and back-end development, and I am always excited to apply this knowledge through hands-on projects.
            </motion.p>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            variants={SlideRight(1)}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center px-20 py-10 text-center md:text-left"
          >
            <motion.h3
              variants={SlideLeft(0.6)}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.8 }}
              className="text-xl font-semibold text-primary"
            >
              Contact Me
            </motion.h3>
            <motion.p
              variants={SlideRight(1)}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.8 }}
              className="text-lg text-gray-600 mt-2"
            >
              Feel free to reach out to me via the following platforms:
            </motion.p>
            <motion.div
              variants={SlideRight(1.2)}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.8 }}
              className="flex gap-4 mt-4 justify-center px-20 md:justify-start"
            >
              <a href="mailto:raeenfatima@gmail.com" className="text-primary hover:text-white">
                <FaEnvelope size={24} />
              </a>
              <a href="https://www.linkedin.com/in/raeen-saifi-a8b6172a8" className="text-primary hover:text-white">
                <FaLinkedin size={24} />
              </a>
              <a href="https://github.com/raeen-fatima" className="text-primary hover:text-white">
                <FaGithub size={24} />
              </a>
              <a href="https://twitter.com/raeenfatima_" className="text-primary hover:text-white">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com/raeen_saifi" className="text-primary hover:text-white">
                <FaInstagram size={24} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
