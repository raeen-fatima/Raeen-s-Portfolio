import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A sleek and responsive portfolio showcasing my skills and projects.",
      githubLink: "https://github.com/raeen-fatima/Raeen-s-Portfolio",
      image: "https://cdnb.artstation.com/p/assets/images/images/054/907/351/large/manikandan-portfolio-mockup.jpg?1665647279" 
    },
    {
      title: "A Book Store App",
      description: "A fully functional e-commerce web app with payment integration.",
      githubLink: "https://github.com/raeen-fatima/Book-Store",
      image: "https://thesweetsetup.com/wp-content/uploads/2016/12/eBooks-Ecosystems-SS-Hero-3.jpg"
    },
    {
      title: "BidNest-The Auction Plateform",
      description: "A chat application with WebSocket for real-time communication.",
      githubLink: "https://github.com/raeen-fatima/Auction-Plateform",
      image: "https://thumbs.dreamstime.com/b/online-car-auction-via-smartphone-app-bid-button-mobile-bidding-concept-253433771.jpg"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          className="text-5xl font-extrabold bg-clip-text text-transparent bg-primary"
        >
          The <span className="text-white">Projects</span> I Have
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: index * 0.2, type: "spring", stiffness: 120 }}
              className="relative bg-primary rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-500 hover:scale-105 group"
            >
              <motion.img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-52 object-cover transition duration-500 group-hover:scale-110" 
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-thirdry ">{project.title}</h3>
                <p className="mt-2 text-gray-300">{project.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                 
                </div>
                <div className="mt-4 flex justify-between items-center">
                 
                  <motion.a 
                    href={project.githubLink} 
                    target="_blank" 
                    className="text-black hover:text-gray-900 transition flex items-center gap-2"
                    whileHover={{ scale: 1.1 }}
                  >
                    <FaGithub /> Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
