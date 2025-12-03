import ProjectCard from "./ProjectCard";
import projects from "../../data/projects.json";
import "./Projects.css";

export default function Projects({ limit }) {
    const displayProjects = limit ? projects.slice(0, limit) : projects;

    // Group projects by domain
    const projectsByDomain = {
        "Data & APIs": [
            "knbs-open-data-api",
            "kenya-counties-api"
        ],
        "Geospatial Services": [
            "geocoding-standardization-microservice"
        ],
        "Personal": [
            "go-financial-aggregator",
            "echoGraph"
        ]
    };

    // Create grouped structure
    const groupedProjects = {};
    displayProjects.forEach(project => {
        for (const [domain, projectTitles] of Object.entries(projectsByDomain)) {
            if (projectTitles.includes(project.title)) {
                if (!groupedProjects[domain]) {
                    groupedProjects[domain] = [];
                }
                groupedProjects[domain].push(project);
                break;
            }
        }
    });

    return (
        <section className="projects-section">
            <h2 className="projects-heading">
                {limit ? "Featured Projects" : "Featured Projects"}
            </h2>

            {Object.entries(groupedProjects).map(([domain, domainProjects]) => (
                <div key={domain} className="project-domain">
                    <h3 className="domain-heading">{domain}</h3>
                    <div className="projects-grid">
                        {domainProjects.map((project) => (
                            <ProjectCard
                                key={project.title}
                                title={project.title}
                                description={project.description}
                                tags={project.tags}
                                github={project.github}
                                status={project.status}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
}
