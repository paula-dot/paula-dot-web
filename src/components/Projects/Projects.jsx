import ProjectCard from "./ProjectCard";
import projects from "../../data/projects.json";
import "./Projects.css";

export default function Projects({ limit }) {
    const displayProjects = limit ? projects.slice(0, limit) : projects;

    // Group projects by category
    const groupedProjects = displayProjects.reduce((acc, project) => {
        const category = project.category || "Other";
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(project);
        return acc;
    }, {});

    // Define category order
    const categoryOrder = ["Data & APIs", "Geospatial Services", "Personal Projects", "Other"];
    const sortedCategories = Object.keys(groupedProjects).sort((a, b) => {
        return categoryOrder.indexOf(a) - categoryOrder.indexOf(b);
    });

    return (
        <section className="section-wrapper projects-section" id="projects">
            {/* Put the entire two-column layout inside the shared section-container */}
            <div className="section-container projects-container">
                <div className="projects-layout">
                    <div className="projects-left">
                        <div className="projects-header">
                            <h1 className="projects-title">Projects</h1>
                            <p className="projects-intro">
                                Case studies showcasing backend systems, APIs, and data engineering work.
                                Each project emphasizes scalable architecture and production-ready code.
                            </p>
                        </div>
                    </div>

                    <div className="projects-right">
                        {sortedCategories.map((category) => (
                            <div key={category} className="project-category">
                                <h2 className="category-heading">{category}</h2>
                                <div className="projects-grid">
                                    {groupedProjects[category].map((project) => (
                                        <ProjectCard
                                            key={project.id}
                                            title={project.title}
                                            subtitle={project.subtitle}
                                            description={project.description}
                                            tags={project.tags}
                                            github={project.github}
                                            status={project.status}
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
