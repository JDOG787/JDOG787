import LandingPage from './components/LandingPage';
import AboutPage from './components/AboutPage';
import ProjectsPage from './components/ProjectsPage';
import ContactPage from './components/ContactPage';
import './styles/App.css';
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="App">
      <LandingPage/>
      <AboutPage/>
      <ProjectsPage/>
      <ContactPage/>
    </div>
  );
}

export default App;
