import AboutMe from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Friends from "./components/Friends";
import HeroSection from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
  return (
    <>
    <Navbar />
    <HeroSection />
    <AboutMe />
    <Education />
    <Skills />
    <Projects />
    <Friends />
    <Contact />
    <Footer />
    </>
  )
}