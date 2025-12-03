import { Link } from "react-router-dom";
import "./FeaturedWork.css";
import featuredProjects from "../../data/featuredProjects.json";
export default function FeaturedWork() {
    return (
        <section className="featured-work-section">
            <div className="featured-work-container">
                <div className="featured-work-header">
                    <h2 className="featured-work-title">Selected Works</h2>
                    <p className="featured-work-subtitle">
                        A showcase of spatial analysis and data visualization projects
                    </p>
                </div>
                <div className="featured-projects-grid">
                    {featuredProjects.map((project, index) => (
                        <article 
                            key={project.id} 
                            className={`featured-project-card ${index % 2 === 0 ? 'layout-left' : 'layout-right'}`}
                        >
                            <div className="project-image-wrapper">
                                <img 
                                    src={project.image} 
                                    alt={`${project.title} screenshot`}
                                    className="project-image"
                                    loading="lazy"
                                />
                                <div className="project-category-badge">
                                    {project.category}
                                </div>
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tech-stack">
                                    <span className="tech-stack-label">Tech Stack:</span>
                                    <ul className="tech-stack-list">
                                        {project.techStack.map((tech, i) => (
                                            <li key={i} className="tech-item">
                                                {tech}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="project-links">
                                    {project.github && (
                                        <a 
                                            href={project.github} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="project-link project-link-github"
                                        >
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                            </svg>
                                            View Code
                                        </a>
                                    )}
                                    {project.liveDemo && (
                                        <a 
                                            href={project.liveDemo} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="project-link project-link-demo"
                                        >
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                <polyline points="15 3 21 3 21 9"></polyline>
                                                <line x1="10" y1="14" x2="21" y2="3"></line>
                                            </svg>
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
                <div className="featured-work-footer">
                    <Link to="/projects" className="view-all-projects-link">
                        View All Projects
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
