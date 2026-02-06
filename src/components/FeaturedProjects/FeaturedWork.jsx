import { Link } from "react-router-dom";
import ProjectCard from "../Projects/ProjectCard";
import projects from "../../data/projects.json";
import "./FeaturedWork.css";

export default function FeaturedWork() {
    // Show first 3 projects as featured
    const featuredProjects = projects.slice(0, 3);

    return (
        <section className="featured-work-section">
            <div className="featured-work-container">
                <div className="featured-work-header">
                    <h2 className="featured-work-title">Featured Work</h2>
                    <p className="featured-work-subtitle">
                        Backend systems and APIs built for scalability and performance
                    </p>
                </div>

                <div className="featured-work-grid">
                    {featuredProjects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            subtitle={project.subtitle}
                            description={project.description}
                            tags={project.tags}
                            github={project.github}
                            demo={project.demo}
                            status={project.status}
                        />
                    ))}
                </div>

                <div className="featured-work-cta">
                    <Link to="/projects" className="view-all-link">
                        View All Projects
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
