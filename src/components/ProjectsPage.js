import '../styles/ProjectsPage.css';
import projects from '../projects.json';
import Link from './Link.js';
import { IoArrowForward } from "react-icons/io5";
import logo from '../images/logo.svg';

const ProjectsPage = () => {
        
    return (
        <div className="projectsPage page" id="projects">
                <h1>Projects</h1>
                <h3>Here's some of my work</h3>
                <div className="projects">
                    {
                        projects.map(p => {
                            return (
                                <div className="project">
                                    <a href={p.url}>
                                        <h2>{p.title}</h2>
                                        <p className='project-desc'>{p.desc} </p>
                                    </a>
                                    {/* <Navlink text={p.title}/> */}
                                </div>
                            )
                        })
                    }
                    {/* <h2 className="logos-header">Logos</h2>
                    <div className='logos'>
                        <div className='logoProject'>
                            <img src='/logoProject1.png' alt='logo'/>
                        </div>
                        <div className='logoProject'>
                            <img src={logo} alt='logo'/>
                        </div>  
                    </div> */}
                </div>
        </div>
    )
}

export default ProjectsPage;