import { useEffect ,useState } from 'react'
import profilebg from './assets/profilebg.png';

import NavBar from './components/NavBar/NavBar';
import Hero from './pages/HeroSection/Hero';
import About from './pages/About/About';
import SkillSection from './pages/SkillSection/SkillSection';
import HeroOverlay from './components/HeroOverlay/HeroOverlay';
import Projects from './pages/PersonalProjects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


import './App.css';


function App() {

  
  return (
    <div className="App">
    
      

      {/* Navbar */}
      <NavBar />
      
      {/* Hero Section*/}
      <Hero />
      
      {/* About */}
      <About />

      {/* Skills Section */}
      <SkillSection />

      {/* Hero overlay */}
      <HeroOverlay />

      {/* Projects Section */}
      <Projects />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;