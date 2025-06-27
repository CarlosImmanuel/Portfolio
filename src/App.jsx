import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="app-page">
      <Navbar />
      <div className="app-container">
      <Hero />
      </div>
      <div className="app-content">
      <About />
      <Skills />
      <Projects />
      <Contact />
      </div>
    </div>
  );
};

export default App;
