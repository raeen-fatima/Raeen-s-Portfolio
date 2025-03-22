import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-primary font-playfair text-white py-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto text-center"
      >
        <div className="flex justify-center space-x-8 mb-6">
          {/* Social Media Icons */}
          <a
            href="https://github.com/raeen-fatima"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-black transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/raeen-saifi-a8b6172a8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-black transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/raeenfatima_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-black transition duration-300"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/raeen_saifi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-black transition duration-300"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Footer Text */}
        <p className="text-lg text-gray-400">
          Built by Raeen Fatima | All Rights Reserved © {new Date().getFullYear()}
        </p>
      </motion.div>
    </div>
  );
};

export default Footer;
