import React from "react";
import { motion } from "framer-motion";

// SlideLeft animation for the project cards
const SlideLeft = (delay = 0) => ({
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: delay, duration: 0.5 },
  },
});

// SlideUp animation for the heading
const SlideUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: delay, duration: 0.5 },
  },
});

const Projects = () => {
  const projects = [
    {
      name: "TIN-DOG PROJECT",
      description: "A brief description of project one goes here.",
      link: "https://github.com/raeen-fatima/TinDog-Project",
      live: "https://raeen-fatima.github.io/TinDog-Project/",
      image: "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/001/792/081/datas/original.jpeg", // Replace with your project image URL
    },
    {
      name: "TIC-TAC-TOE",
      description: "A brief description of project two goes here.",
      link: "https://github.com/raeen-fatima/tic-Tac-Toe-Game",
      live: "https://raeen-fatima.github.io/Tic-Tac-Toe-Game",
      image: "https://m.media-amazon.com/images/I/71GAHXu+XWL.jpg", // Replace with your project image URL
    },
    {
      name: "DRUM-KIT",
      description: "A brief description of project three goes here.",
      link: "https://github.com/raeen-fatima/Drum-Kit",
      live: "https://raeen-fatima.github.io/Drum-Kit/",
      image: "https://lh3.googleusercontent.com/kipOSyT73EWwO_IcanoGJJUfvJ2juX7zz564-5EVBWsWoZeeJjX9oKQJVRSXRVYFf88", // Replace with your project image URL
    },
  ];

  return (
    <section id="projects" className="py-14 pb-10">
      <div className="container mx-auto px-4 font-playfair">
        {/* Animated Heading from Left */}
        <motion.h2
          className="text-5xl font-bold text-center text-white mb-10"
          variants={SlideUp(0.3)} // Animation for the heading
          initial="hidden"
          whileInView="visible"
        >
          The <span className="text-secondry">Projects</span> I Have
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
              variants={SlideLeft(0.5 + index * 0.2)}
              initial="hidden"
              whileInView="visible"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex justify-between">
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondry hover:text-black"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    GitHub
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondry hover:text-black"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          className="text-center mt-10"
          variants={SlideUp(1.2)}
          initial="hidden"
          whileInView="visible"
        >
        <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="mt-12 flex justify-center"
      >
      
          <a
            href="https://github.com/raeen-fatima"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondry text-black px-6 py-3 rounded-full shadow-lg font-semibold hover:bg-white  transition-all duration-300"

          >
            View All Projects
          </a>
        </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
