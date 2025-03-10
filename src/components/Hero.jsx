import React, { useState } from "react";
import { FaDownLong } from "react-icons/fa6";
import HeroImg from "../assets/mypic.jpg";
import { Link } from 'react-scroll'; // For smooth scroll
import { motion } from "framer-motion";
import './Contact'
import Resume from '../../public/Raeen_Resume(1).pdf'
import { SlideRight } from "../utilities/Animation";

const Hero = () => {
  const [lineVisible, setLineVisible] = useState(false);

  const handleDownloadClick = () => {
    setLineVisible(true);
    setTimeout(() => setLineVisible(false), 1000);
    
    const link = document.createElement("a");
    link.href = "Raeen_Resume(1).pdf"; 
    link.download = "Raeen_Resume(1).pdf";
    link.click();
  };

  return (
    <>
      <section id="/">
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[550px] relative">
          {/* Text info */}
          <div className="flex flex-col justify-center py-14 md:py-0 font-playfair">
            <div className="text-center md:text-left space-y-6">
           
               <motion.h1
               variants={SlideRight(0.6)}
               initial="hidden"
               whileInView="visible"
              className="text-5xl lg:text-6xl font-bold text-white leading-relaxed xl:leading-normal">
                Hello, I'm{" "}
                <br />
                <span className="text-primary">Raeen Fatima</span>
              </motion.h1>

              <motion.p
               variants={SlideRight(0.6)}
               initial="hidden"
               whileInView="visible"
               className="text-gray-600 xl:max-w-[500px]">
                I am a passionate web developer. With a solid foundation in
                HTML, CSS, and JavaScript, I specialize in creating responsive
                and user-friendly websites.
              </motion.p>

              <motion.div 
               variants={SlideRight(1.5)}
               initial="hidden"
               whileInView="visible"
              className="flex justify-center gap-8 md:justify-start mt-4">
                <button className="primary-btn text-black  flex items-center gap-2" >
                  <Link
                
                   smooth={true}
                   duration={500}
                  
                  //  className="cursor-pointer hover:text-gray-200"
                >
                  {}
                 </Link>
                 <a href="mailto:raeenfatimahere@gmail.com">
           
                  Hire Me</a>
                </button>
                <a
                  className="flex justify-center text-white items-center gap-2 relative hover:text-secondry"
                  onClick={handleDownloadClick}
                  href= {Resume}
                  download="Raeen_Resume(1).pdf"

                >
                  <FaDownLong />
                  Download Resume
                  {lineVisible && (
                    <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-primary animate-slide"></span>
                  )}
                </a>
              </motion.div>
            </div>
          </div>

          {/* Image */}
          <div className=" pt-14 flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            whileInView="visible"
            transition={{ duration: 1.0 }}
            src={HeroImg}
            alt="Raeen"
           className="rounded-2xl  w-[300px]  md:w-[300px] xl:w-[300px] drop-shadow"
          />
 

          </div>
        </div>
      </section>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes slide {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
        .animate-slide {
          transform-origin: left;
          animation: slide 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default Hero;

