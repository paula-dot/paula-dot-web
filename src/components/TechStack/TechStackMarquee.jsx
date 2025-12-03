import "./TechStackMarquee.css";

export default function TechStackMarquee() {
    const technologies = [
        { 
            name: "Python", 
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
            color: "#3776AB"
        },
        { 
            name: "Go", 
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
            color: "#00ADD8"
        },
        { 
            name: "Django", 
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
            color: "#092E20"
        },
        { 
            name: "React", 
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            color: "#61DAFB"
        },
        { 
            name: "PostgreSQL", 
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
            color: "#316192"
        },
        { 
            name: "PostGIS", 
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
            color: "#4288B0"
        },
        { 
            name: "QGIS", 
            icon: "https://upload.wikimedia.org/wikipedia/commons/c/c2/QGIS_logo%2C_2017.svg",
            color: "#589632"
        },
        { 
            name: "Docker", 
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
            color: "#2496ED"
        },
        { 
            name: "JavaScript", 
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            color: "#F7DF1E"
        },
        { 
            name: "FastAPI", 
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
            color: "#009688"
        },
        { 
            name: "Git", 
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
            color: "#F05032"
        },
        { 
            name: "Linux", 
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
            color: "#FCC624"
        }
    ];

    // Duplicate array for seamless infinite scroll
    const duplicatedTech = [...technologies, ...technologies];

    return (
        <section className="tech-stack-marquee-section">
            <div className="tech-stack-marquee-container">
                <h2 className="tech-stack-title">Technologies</h2>
                
                <div className="marquee-wrapper">
                    <div className="marquee-content">
                        {duplicatedTech.map((tech, index) => (
                            <div 
                                key={`${tech.name}-${index}`} 
                                className="tech-item"
                                style={{"--tech-color": tech.color}}
                            >
                                <img 
                                    src={tech.icon} 
                                    alt={tech.name}
                                    className="tech-icon"
                                />
                                <span className="tech-name">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

