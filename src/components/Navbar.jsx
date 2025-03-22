import { useState , useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { FiPackage } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const [isScrolled, setIsScrolled] = useState(false);

  // Track  scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <nav className= {`fixed top-0 left-0 w-full z-30 transition-all duration-300 ${
      isScrolled
        ? 'bg-primary/70 backdrop-blur-md shadow-lg'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div id="/" className="text-2xl text-white flex items-center gap-4 font-bold uppercase">
          <FiPackage className="text-[#b392ac] text-3xl" />
          <p>Raeen's</p>
          <p className="text-[#b392ac]">Portfolio</p>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex flex-1 justify-center space-x-8">
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <Link 
                to={item.toLowerCase()} 
                smooth={true} 
                duration={500}
                className="relative cursor-pointer font-semibold text-white hover:text-secondry transition-all group"
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-secondry transition-all group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-5">
          <a   href="https://github.com/raeen-fatima" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondry">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/raeen-saifi-a8b6172a8" target="_blank" rel="noopener noreferrer" 
            className="text-white hover:text-secondry">
            <FaLinkedin size={24} />
          </a>
          <a href="https://twitter.com/raeenfatima_" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondry">
            <FaTwitter size={24} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-primary shadow-lg py-4 space-y-4 text-center">
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <Link 
                to={item.toLowerCase()} 
                smooth={true} 
                duration={500}
                className="block text-white hover:text-secondry"
                onClick={toggleMenu}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
