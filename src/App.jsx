import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Friends from './components/Friends';
import Contact from './components/Contact';
import Footer from './components/Footer';



export default function App() {
  return (
    <Router> {/* Wrap your app in BrowserRouter */}
      <div >
        <section id="home">
          {/* Home Section Content */}
          <Navbar  />
          <Hero />
        </section>

        <section id="about">
          {/* About Section Content */}
          <About />
        </section>

        <section id="skills">
          {/* Skills Section Content */}
          <Skills />
        </section>

        <section id="projects">
          {/* Projects Section Content */}
          <Projects />
        </section>

        <section id="friends">
          {/* Friends Section Content */}
          <Friends />
        </section>

        <section id="contact">
          {/* Contact Section Content */}
          <Contact />
        </section>

      <div>
        <footer>
          <Footer />
        </footer>
      </div>
      </div>
    </Router> 
  );
}
