import { motion } from "framer-motion";
import myPic from "../assets/mypic.jpeg"; // Import image

export default function AboutMe() {
  return (
    <section id="about" className="py-20 px-6 bg-primary text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Section - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative group"
        >
          {/* Glow Effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-xl opacity-40 group-hover:opacity-80 transition duration-500"></div>
          {/* Image with Border */}
          <div className="relative p-1 rounded-3xl bg-opacity-20 backdrop-blur-md border border-gray-700 shadow-lg transition transform duration-500 group-hover:scale-105 group-hover:rotate-1">
            <img
              src={myPic} // Ensure the image path is correct
              alt="Raeen Fatima"
              className="w-64 sm:w-80 rounded-3xl shadow-xl transition duration-500 hover:scale-105"
            />
          </div>
        </motion.div>

        {/* Right Section - Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left max-w-lg"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-black">
            About <span className="text-secondry">Me</span>
          </h2>
          <p className="mt-4 text-white text-lg leading-relaxed">
            Hi, I'm <span className="text-thirdry font-semibold">Raeen Fatima</span>, a passionate 
            <span className="text-black font-semibold"> Full-Stack Developer</span> who loves building intuitive and beautiful web applications. 
            My expertise lies in creating high-performance, visually appealing user experiences.
          </p>
          <p className="mt-4 text-gray-300 text-lg">
            Besides coding, I enjoy exploring new technologies, solving complex challenges, 
            and continuously enhancing my skills to stay ahead in the tech world.
          </p>
          <div className="mt-6">
            <a
              href="#projects"
              className="relative group inline-block px-6 py-3 bg-thirdry text-black rounded-lg font-semibold shadow-lg hover:scale-110 transform transition-all duration-500"
            >
              View My Work
              <span className="absolute inset-0 bg-white opacity-10 rounded-lg group-hover:opacity-20 transition duration-500"></span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
