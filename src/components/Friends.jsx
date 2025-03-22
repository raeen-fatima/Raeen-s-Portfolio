import { useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import riteshImg from "../assets/ritesh.jpg";
import saniaImg from "../assets/Sania.jpg";
import rubyImg from "../assets/ruby poddar.jpg";
import snehilImg from "../assets/snehil.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Friends = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  const feedbackData = [
    {
      name: "Sania Hussain",
      feedback:
        "Raeen is one of the most dedicated and hardworking people I know. She always motivates others!",
      imgSrc: saniaImg || "https://placehold.co/150",
      linkedIn: "https://www.linkedin.com/in/sania-hussain-0377462b3/",
    },
    {
      name: "Ritesh Ray",
      feedback:
        "Amazing friend and a great problem-solver! Always helpful and super positive.",
      imgSrc: riteshImg || "https://placehold.co/150",
      linkedIn: "https://www.linkedin.com/in/ritesh-ray-682056319/",
    },
    {
      name: "Snehil",
      feedback:
        "Raeen's creativity and passion for coding are truly inspiring. She is a joy to work with!",
      imgSrc: snehilImg || "https://placehold.co/150",
      linkedIn: "https://www.linkedin.com/in/thesnehilkumar/",
    },
    {
      name: "Ashyanm Siddiqui",
      feedback: "Her positive attitude and enthusiasm always brighten up the room!",
      imgSrc: "https://placehold.co/150",
      linkedIn: "https://www.linkedin.com/in/ashyam-siddiqui-a6b0b8342",
    },
    {
      name: "Ruby Poddar",
      feedback:
        "Raeen is an exceptional individual, known for her dedication and hard work. Her passion for achieving her goals inspires those around her.",
      imgSrc: rubyImg || "https://placehold.co/150",
      linkedIn: "https://www.linkedin.com/in/ruby-717848332/",
    },
    {
      name: "Rahila Khan",
      feedback: "Raeen is one of the most dedicated and hardworking people I know. She always motivates others!",
      imgSrc: "https://placehold.co/150", 
      linkedIn: "https://www.linkedin.com/in/rahila-9b217624b/",
    },
  ];


  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: !isPaused,
    autoplaySpeed: 1000,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
    beforeChange: (_, next) => setHoveredCard(next),
  };

  return (
    <div id='friends' className="py-16 px-8  text-white font-playfair">
      <h1 className="text-center text-5xl font-bold mb-12 text-primary">
        What my <span className="text-white">Friends Says</span> about me
      </h1>

      <div className="feedback-slider px-4">
        <Slider
          {...settings}
          className="feedback-slider"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {feedbackData.map((feedback, index) => (
            <motion.div
              key={index}
              className={`relative bg-primary p-6 rounded-lg shadow-lg transition-all duration-300 ${
                hoveredCard === index
                  ? "scale-105 z-10 opacity-100"
                  : "scale-100 opacity-80"
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex justify-center mb-4">
                <a
                  href={feedback.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src={feedback.imgSrc}
                    alt={feedback.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-full border-4 border-white hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = ""; 
                    }}
                  />
                </a>
              </div>
              <h3 className="text-xl font-semibold text-center">
                {feedback.name}
              </h3>
              <p className="mt-4 text-center text-gray-400 italic">
                {`"${feedback.feedback}"`}
              </p>
            </motion.div>
          ))}
        </Slider>
      </div>

      {/* Feedback Button */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.5 }}
        className="mt-12 flex justify-center"
      >
        <a
          href="mailto:raeenfatimahere@gmail.com"
          className="bg-primary text-black px-8 py-3 rounded-full shadow-lg font-bold hover:bg-white  transition-all duration-300"
        >
          Send Your Feedback
        </a>
      </motion.div>
    </div>
  );
};

export default Friends;
