import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-scroll'; 
import { FaSquareGithub } from "react-icons/fa6";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion';
import { FiPackage } from "react-icons/fi";
import { MdMenu } from "react-icons/md";

const NavBarMenu = [
  { id: 1, title: 'Home', link: 'home' },
  { id: 2, title: 'About', link: 'about' },
  { id: 3, title: 'Projects', link: 'projects' },
  { id: 4, title: 'Skills', link: 'skills' },
  { id: 5, title: 'Contact', link: 'contact' },
];


const ResponsiveMenu = ({ open, setOpen }) => {
  return ( 
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.3 }}
          className="  absolute top-20 right-4 w-60 h-screen z-20 "
        >
          <div className=" text-xl font-semibold uppercase bg-primary text-white py-10 m-4 rounded-3xl shadow-lg">
            <ul className="flex flex-col justify-center items-center gap-5 ">
              {NavBarMenu.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.link}
                    smooth={true}
                    duration={500}
                    onClick={() => setOpen(false)} 
                    className="cursor-pointer hover:text-gray-200"
                  >
                    {item.title}
                  </Link>
                </li>
             ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};



const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef();

  // Track  scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <section id="navbar" className='container'>
        <nav
          className= {`fixed top-0 left-0 w-full z-30 transition-all duration-300 ${
            isScrolled
              ? 'bg-primary/70 backdrop-blur-md shadow-lg'
              : 'bg-transparent'
          }`}
        >
          <div className="flex justify-between items-center py-4 px-6">
            {/* Logo Section */}
            <div id="/" className="text-2xl text-white flex sm-xl items-center gap-4 font-bold uppercase">
              <FiPackage className="text-[#b392ac] text-3xl" />
              <p>Raeen's</p>
              <p className="text-[#b392ac]">Portfolio</p>
            </div>
            {/* Menu Section */}
            <div className="hidden md:block">
              <ul className="flex items-center gap-6 text-white">
                {NavBarMenu.map((item) => (
                  <li key={item.id}>
                    <Link
                      to={item.link}
                      smooth={true}
                      duration={500}
                      className="cursor-pointer inline-block py-1 px-3 hover:text-[#b392ac] font-semibold"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Icons Section */}
            <div className="hidden md:flex items-center text-white gap-2">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:bg-[#b392ac] hover:text-white rounded-full p-2 duration-200"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:bg-[#b392ac] hover:text-white rounded-full p-2 duration-200"
              >
                <FaSquareGithub />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:bg-[#b392ac] hover:text-white rounded-full p-2 duration-200"
              >
                <FaInstagram />
              </a>
            </div>
            {/* Mobile Hamburger Section */}
            <div
              ref={menuRef}
              className="container md:hidden flex items-center text-white gap-2 cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              <MdMenu className="text-3xl text-white " />
            </div>
            
          </div>
        </nav>
      {/* Mobile Sidebar Section */}
      <ResponsiveMenu open={open} setOpen={setOpen} />

     </section>

    </>
  );
};

export default Navbar;