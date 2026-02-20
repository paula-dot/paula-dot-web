import './AboutSection.css'
import services from './services'

export default function AboutSection() {
    /*
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
    */

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
                            <p className="bio-statement">
                                I specialize in designing and building scalable backend systems,
                                data pipelines, and infrastructure automation tools. My work emphasizes
                                reliability, performance, and clean system architecture. Outside of backend engineering, I have a passion for Geospatial Data Science and GIS.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Insert the services grid here (no title) */}
                <div className="mt-12">
                    <div className="services-grid">
                        {services.map((service, index) => (
                            <div key={index} className="service-card">
                                <div className="service-icon-wrap">
                                    {service.icon}
                                </div>
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-desc">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
