import './AboutPage.css'

export function AboutPage() {
    // Core skills organized by category for the "Stack" section
    const coreSkills = {
        languages: ["Python", "Go", "SQL", "JavaScript"],
        infrastructure: ["Docker", "Kubernetes", "AWS", "Linux"],
        databases: ["PostgreSQL", "Redis", "PostGIS", "SQLite"]
    };

    const technicalInterests = [
        "API Design & Architecture",
        "Event-Driven Systems",
        "Cloud-Native Development",
        "Database Optimization",
        "Geospatial Computing",
        "Open Source Tooling"
    ];

    return (
        <>
            <title>About</title>

            <div className="page-about">
                <div className="page-inner">
                    {/* SECTION 1: BIO + AVATAR CARD */}
                    <section className="about-hero">
                        {/* Left: Bio Content */}
                        <div className="about-bio">
                            <div className="bio-block">
                                <h2>About Me</h2>
                                <p>
                                    I'm Paula Dot – a software engineer specializing in backend systems and API architecture. I focus on building scalable, reliable software using languages like Go, Python, and PostgreSQL.
                                </p>
                            </div>

                            <div className="bio-block">
                                <h2>Background</h2>
                                <p>
                                    With a background in GIS and urban analysis, I bring a systems-thinking approach to backend development. I'm passionate about designing clean APIs, optimizing database queries, and building infrastructure that scales. Whether it's event-driven microservices, REST endpoints, or data pipelines, I thrive on solving complex technical problems with clarity and precision.
                                </p>
                                <p>
                                    Outside of code, you'll find me exploring open-source tooling, contributing to developer communities, and staying current with the latest in cloud-native architecture.
                                </p>
                            </div>
                        </div>

                        {/* Right: SE Avatar Card */}
                        <div className="avatar-card">
                            <div className="avatar-card-inner">
                                <span className="avatar-initials">SE</span>
                                <span className="avatar-label">Software Engineer</span>
                            </div>
                        </div>
                    </section>

                    {/* SECTION 2: THE STACK (Replacing Timeline) */}
                    <section className="about-stack">
                        {/* Core Skills Card */}
                        <div className="stack-card core-skills-card">
                            <h3>Core Skills</h3>
                            <div className="skills-categories">
                                <div className="skill-category">
                                    <h4>Languages</h4>
                                    <div className="skill-tags">
                                        {coreSkills.languages.map((skill, idx) => (
                                            <span key={idx} className="skill-tag">{skill}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="skill-category">
                                    <h4>Infrastructure</h4>
                                    <div className="skill-tags">
                                        {coreSkills.infrastructure.map((skill, idx) => (
                                            <span key={idx} className="skill-tag">{skill}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="skill-category">
                                    <h4>Databases</h4>
                                    <div className="skill-tags">
                                        {coreSkills.databases.map((skill, idx) => (
                                            <span key={idx} className="skill-tag">{skill}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Technical Interests Card */}
                        <div className="stack-card interests-card">
                            <h3>Technical Interests</h3>
                            <ul className="interests-list">
                                {technicalInterests.map((interest, idx) => (
                                    <li key={idx}>{interest}</li>
                                ))}
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}