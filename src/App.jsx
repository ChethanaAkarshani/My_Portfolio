import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <>
     <div className="background-glow"></div>
      <Navbar />
      <Hero />
      <Education />
      <Skills />
      <Projects /> 
      <Certifications />
      <Contact />
      <Footer />
    </>
  );
}

export default App;