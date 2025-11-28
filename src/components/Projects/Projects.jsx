import ProjectCard from "./ProjectCard";
import projects from "../../data/projects.json";
import "./Projects.css";

export default function Projects({ limit }) {
    const displayProjects = limit ? projects.slice(0, limit) : projects;

    return (
        <section className="projects-section">
            <h2 className="projects-heading">
                {limit ? "Featured Projects" : "My Projects"}
            </h2>

            <div className="projects-grid">
                {displayProjects.map((project) => (
                    <ProjectCard
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        tags={project.tags}
                    />
                ))}
            </div>
        </section>
    );
}
