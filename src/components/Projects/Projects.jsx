import ProjectCard from "./ProjectCard";
import projects from "../../data/projects.json";

export default function Projects({ limit }) {
    const displayProjects = limit ? projects.slice(0, limit) : projects;

    return (
        <section className="py-16 px-6 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 mb-10">
                {limit ? "Featured Projects" : "My Projects"}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
