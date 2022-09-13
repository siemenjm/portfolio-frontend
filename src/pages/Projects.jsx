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
                <div>
                    <h1>{project.name}</h1>
                    <img src={project.image} alt={project.name} />
                    <a href={project.git}>
                        <button>Github</button>
                    </a>
                    <a href={project.live}>
                        <button>Live Site</button>
                    </a>
                </div>
            );
        });

        return allProjects;
    }

    return projects ? loaded() : <h1>Projects</h1>;
  }
  
export default Projects;