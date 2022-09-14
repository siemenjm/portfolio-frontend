import '../styles/Projects.css';
import { useState, useEffect } from "react";

function Projects(props) {
    const [projects, setProjects] = useState(null);

    async function getProjectsData() {
        const response = await fetch(props.URL + 'projects');
        const data = await response.json();
        setProjects(data);
    }

    useEffect(() => {
        getProjectsData();
    }, []);

    function loaded() {
        const allProjects = projects.map((project) => {
            return (
                <div className="project">
                    <h2>{project.name}</h2>
                    <div className="project-links">
                        <a href={project.git} target="_blank" rel='noreferrer' className="nav-link accent-link">Github</a>
                        <a href={project.live} target="_blank" rel='noreferrer' className="nav-link accent-link">Live Site</a>
                    </div>
                    <img src={project.image} alt={project.name} />
                </div>
            );
        });

        return allProjects;
    }

    return projects ? <div className="project-list"><h1>Projects</h1>{loaded()}</div> : <h1>Projects</h1>;
  }
  
export default Projects;