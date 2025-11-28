export default function ProjectCard({ title, description, tags }) {
    return (
        <div className="project-card">
            <h3 className="project-card-title">{title}</h3>

            <p className="project-card-description">{description}</p>

            <div className="project-card-tags">
                {tags.map((tag, index) => (
                    <span
                        key={index}
                        className="project-card-tag"
                    >
            {tag}
          </span>
                ))}
            </div>
        </div>
    );
}
