import LandingPage from './components/LandingPage';
import AboutPage from './components/AboutPage';
import ProjectsPage from './components/ProjectsPage';
import ContactPage from './components/ContactPage';
import './styles/App.css';

function App() {
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
