import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import heroImage from "../assets/mypic2.jpeg"; 
import resumePDF from "../../public/Raeen_Resume.pdf"; 
import { FaDownload } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section id="/" className="min-h-screen flex items-center justify-center text-white py-20 px-24 relative overflow-hidden">
      {/* Background Gradient Effect */}
      <div className="absolute inset-0"></div>

      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-12 relative z-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left"
        >
          <h1 className="text-5xl sm:text-7xl font-extrabold leading-tight">
            Hi, I'm{" "} <br />
            <span className="bg-clip-text text-transparent bg-primary">
              Raeen Fatima
            </span>
          </h1>
          <TypeAnimation
            sequence={[
              "A Full-Stack Developer",
              2000,
              "A Creative Coder",
              2000,
              "A Tech Enthusiast",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
            className="text-2xl text-thirdry mt-4 font-medium"
          />
          <p className="mt-6 text-gray-300 max-w-lg text-lg">
            Passionate about crafting seamless, visually appealing, and
            high-performing web experiences.
          </p>
          <div className="mt-6 flex justify-center md:justify-start gap-4">
            <button className="px-6 py-3 bg-secondry text-black rounded-lg font-semibold hover:bg-thirdry transition-all shadow-lg hover:scale-105">
              Hire Me
            </button>
            {/* Download Resume Button */}
            <a
              href={resumePDF}
              download="Raeen_Fatima_Resume.pdf"
              className="relative group flex items-center gap-2 px-6 py-3  text-secondry rounded-lg font-semibold hover:text-thirdry transition-all shadow-lg hover:scale-105"
            >
              <FaDownload className="text-lg" />
              Download Resume
              {/* Underline Animation on Hover */}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-thirdry transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative group"
        >
          {/* Neon Glow Effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-xl opacity-40 group-hover:opacity-80 transition duration-500"></div>

          {/* Image with Glassmorphism Border */}
          <div className="relative p-1 rounded-3xl bg-opacity-20 backdrop-blur-md border border-gray-700 shadow-lg transition transform duration-500 group-hover:scale-105 group-hover:rotate-1">
            <img
              src={heroImage}
              alt="Hero"
              className="w-52 sm:w-80 rounded-3xl shadow-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
