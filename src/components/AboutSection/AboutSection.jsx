import './AboutSection.css'

export default function AboutSection() {
    const professionalFocus = [
        "Backend Software Engineering",
        "Data Engineering",
        "DevOps & Platform Engineering"
    ];

    const technicalInterests = [
        "Distributed Systems",
        "API and Microservice Architecture",
        "Data Pipeline Development (ETL/ELT)",
        "Database Design and Optimization",
        "Event-Driven Systems",
        "Infrastructure Automation and CI/CD",
        "Observability and System Reliability"
    ];

    const techStack = {
        languages: [
            { name: "Go", desc: "Backend systems and high-performance services" },
            { name: "Python", desc: "Data engineering, automation, and analytics" }
        ],
        databases: [
            { name: "PostgreSQL", desc: null },
            { name: "Redis", desc: null },
            { name: "OLAP/Warehousing", desc: "Analytical data storage concepts" }
        ],
        infrastructure: [
            { name: "Docker & Containerization", desc: null },
            { name: "CI/CD Pipelines", desc: null },
            { name: "Infrastructure as Code", desc: null },
            { name: "Monitoring & Observability Tools", desc: null }
        ]
    };

    const projectPhilosophy = [
        "Scalable backend architectures",
        "Data engineering workflows",
        "Automated deployment pipelines",
        "Real-world problem solving"
    ];

    const longTermGoals = [
        "Become a Backend / Platform Engineer specializing in distributed data systems",
        "Build open-source infrastructure and developer tools",
        "Contribute to scalable financial and analytical technology systems"
    ];

    const secondaryInterests = [
        "Geospatial Data Science",
        "Cartography and GIS"
    ];

    return (
        <section className="page-about" id="about">
            {/* Non-visible anchor to support links that target #letsAbout */}
            <a id="letsAbout" style={{ display: 'block', height: 0, width: 0, overflow: 'hidden' }} aria-hidden="true" />
            <div className="page-inner">
                {/* SECTION 1: HERO - About Me + Avatar */}
                <div className="about-hero">
                    <div className="about-bio">
                        <div className="bio-block">
                            <h2 className="page-title">About Me</h2>

                            <div className="focus-pills">
                                {professionalFocus.map((focus, idx) => (
                                    <span key={idx} className="focus-pill">{focus}</span>
                                ))}
                            </div>

                            <p className="bio-statement">
                                I specialize in designing and building scalable backend systems,
                                data pipelines, and infrastructure automation tools. My work emphasizes
                                reliability, performance, and clean system architecture.
                            </p>
                        </div>
                    </div>

                    <div className="avatar-card">
                        {/* <div className="avatar-card-inner">
                            <span className="avatar-initials">SE</span>
                            <span className="avatar-label">Software Engineer</span>
                        </div> */}
                    </div>
                </div>

                {/* SECTION 2: Technical Interests + Tech Stack */}
                <div className="about-stack">
                    <div className="stack-card interests-card">
                        <h3>Technical Interests</h3>
                        <ul className="interests-list">
                            {technicalInterests.map((interest, idx) => (
                                <li key={idx}>{interest}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="stack-card tech-stack-card">
                        <h3>Primary Technology Stack</h3>
                        <div className="stack-categories">
                            <div className="stack-category">
                                <h4>Languages</h4>
                                <div className="stack-items">
                                    {techStack.languages.map((item, idx) => (
                                        <div key={idx} className="stack-item">
                                            <span className="stack-item-name">{item.name}</span>
                                            {item.desc && <span className="stack-item-desc">{item.desc}</span>}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="stack-category">
                                <h4>Databases & Storage</h4>
                                <div className="stack-items">
                                    {techStack.databases.map((item, idx) => (
                                        <div key={idx} className="stack-item">
                                            <span className="stack-item-name">{item.name}</span>
                                            {item.desc && <span className="stack-item-desc">{item.desc}</span>}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="stack-category">
                                <h4>Infrastructure & DevOps</h4>
                                <div className="stack-items">
                                    {techStack.infrastructure.map((item, idx) => (
                                        <div key={idx} className="stack-item">
                                            <span className="stack-item-name">{item.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SECTION 3: Academic Background + Project Philosophy */}
                <div className="about-details">
                    <div className="detail-card academic-card">
                        <div className="detail-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3m6.82 6L12 12.72 5.18 9 12 5.28 18.82 9M17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
                            </svg>
                        </div>
                        <div className="detail-content">
                            <h3>Current Academic Background</h3>
                            <p className="detail-title">Undergraduate Computer Science Student</p>
                            <p className="detail-desc">
                                Focused on backend systems engineering and data infrastructure design.
                                Building research and portfolio projects aligned with real-world production architectures.
                            </p>
                        </div>
                    </div>

                    <div className="detail-card philosophy-card">
                        <div className="detail-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2m-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                            </svg>
                        </div>
                        <div className="detail-content">
                            <h3>Project Philosophy</h3>
                            <p className="detail-desc">
                                I build projects that simulate production-grade environments by combining:
                            </p>
                            <ul className="philosophy-list">
                                {projectPhilosophy.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* SECTION 4: Long-Term Goals */}
                <div className="about-goals">
                    <div className="goals-card">
                        <h3>Long-Term Goals</h3>
                        <div className="goals-list">
                            {longTermGoals.map((goal, idx) => (
                                <div key={idx} className="goal-item">
                                    <span className="goal-number">{String(idx + 1).padStart(2, '0')}</span>
                                    <span className="goal-text">{goal}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* SECTION 5: Secondary Interests */}
                <div className="about-secondary" aria-labelledby="secondaryHeading">
                    <div className="secondary-card">
                        <h3 id="secondaryHeading">Secondary Interests</h3>
                        <p className="secondary-note">Personal and exploratory projects</p>
                        <div className="secondary-items" role="list" aria-label="Secondary interests list">
                            {secondaryInterests.map((interest, idx) => (
                                <span key={idx} className="secondary-tag" role="listitem">{interest}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
