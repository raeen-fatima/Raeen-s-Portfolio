import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaAws ,FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiCplusplus, SiPython,SiMysql ,SiC, SiMongodb, SiBootstrap, SiExpress } from "react-icons/si";

const SlideRight = (delay = 0) => ({
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: delay, duration: 0.5 },
  },
});

const Skills = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 />, delay: 0.1 },
    { name: "CSS", icon: <FaCss3Alt />, delay: 0.2 },
    { name: "JavaScript", icon: <FaJs />, delay: 0.3 },
    { name: "React", icon: <FaReact />, delay: 0.4 },
    { name: "Node.js", icon: <FaNodeJs />, delay: 0.5 },
    { name: "Express.js", icon: <SiExpress />, delay: 0.6 },
    { name: "MongoDB", icon: <SiMongodb />, delay: 0.7 },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, delay: 0.8 },
    { name: "Bootstrap", icon: <SiBootstrap />, delay: 0.9 },
    { name: "Git", icon: <FaGitAlt />, delay: 1.0 },
    { name: "GitHub", icon: <FaGithub />, delay: 1.1 },
    { name: "C++", icon: <SiCplusplus />, delay: 1.2 },
    { name: "C", icon: <SiC />, delay: 1.3 },
    { name: "MySql", icon: <SiMysql  />, delay: 1.4 },
    { name: "AWS", icon: <FaAws  />, delay: 1.5 },
    { name: "Python", icon: <SiPython />, delay: 1.6 },
  ];

  return (
    <section id="skills" className="py-14 pb-10">
      <div className="container mx-auto px-4 font-playfair">
      
                <motion.h2
                  className="text-5xl font-bold py-14 text-center text-white mb-10"
                  variants={SlideRight(0.3)} // Animation for the heading
                  initial="hidden"
                  whileInView="visible"
                >
                  The <span className="text-primary">Skills</span> I have
                </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={SlideRight(skill.delay)}
              initial="hidden"
              whileInView="visible"
              className="bg-[#e5b3fe] text-white text-center py-6 rounded-md shadow-md transform transition duration-300 ease-in-out hover:scale-105 hover:bg-primary group"
            >
              <div className="flex justify-center mb-2 text-4xl text-primary group-hover:text-white transition duration-300">
                {skill.icon}
              </div>
              <h3 className="font-semibold text-lg text-gray-500 group-hover:text-white transition duration-300">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
