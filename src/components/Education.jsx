import { motion } from "framer-motion";
import { FaGraduationCap, FaCertificate, FaBook, FaLanguage, FaBriefcase } from "react-icons/fa";

export default function Education() {
  const educationData = [
    {
      degree: "BCA – Cloud and Security",
      institute: "Amity University",
      year: "2024 – 2027",
      details: "Relevant Coursework: Data Structures & Algorithms, OOP, DBMS, Operating Systems, Applied Cloud Computing, Cybersecurity, Cryptography, Cloud Architecture, AI, etc."
    },
    {
        degree: "Higher Secondary",
        institute: "V.M Girls College, Rampur,UP",
        year: "2021 – 2022",
        details: "Completed high school with 79 percentage."
      }
  ];

 

  const internships = [
    {
      company: "Edunet Foundation | EY GDS & AICTE",
      role: "Full Stack Web Development (MERN)",
      duration: "Feb 2025 - Mar 2025",
      details: "Selected for a 6-week MERN stack internship. Worked on real-world projects, AI tools for web development, and participated in mentorship sessions."
    },
    {
      company: "Native Soft Tech",
      role: "Full Stack Web Developer Intern (Remote)",
      duration: "Dec 2024 - Feb 2025",
      details: "Developed portfolio website & book store app using React, Tailwind CSS, MERN stack, and API development strategies."
    }
  ];

  return (
    <section id="education" className="py-20 px-6  text-white">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold bg-clip-text text-transparent bg-white flex items-center justify-center gap-4"
        >
          <FaGraduationCap /> My <span className="text-primary">Education</span>
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-thirdry p-6 rounded-xl shadow-lg border-l-4 border-secondary hover:border-primary transition duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <h3 className="text-2xl font-semibold text-primary">{edu.degree}</h3>
              <p className="text-gray-500">{edu.institute}</p>
              <p className="text-gray-700">{edu.year}</p>
              <p className="text-gray-600 mt-2 text-sm">{edu.details}</p>
            </motion.div>
          ))}
        </div>

        {/* Internship Experience */}
        <motion.div className="mt-16">
          <h3 className="text-3xl font-semibold text-white flex items-center justify-center gap-3">
            <FaBriefcase /><span className="text-primary"> Internship</span> Experience
          </h3>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {internships.map((intern, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1 }}
                className="bg-thirdry p-6 rounded-xl shadow-lg border-l-4 border-secondry hover:border-primary transition duration-500 hover:scale-105 hover:shadow-2xl"
              >
                <h3 className="text-xl font-semibold text-primary">{intern.company}</h3>
                <p className="text-gray-500">{intern.role}</p>
                <p className="text-gray-700">{intern.duration}</p>
                <p className="text-gray-600 mt-2 text-sm">{intern.details}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>


          
        
      </div>
    </section>
  );
}
