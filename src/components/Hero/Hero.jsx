import "./Hero.css"

export default function Hero() {
    return (
        <section className="hero-section" id="hero">
            <div className="hero-card">
                <div className="hero-container">
                {/* LEFT COLUMN: Text Content */}
                <div className="hero-content">
                    {/* Open to Opportunities Badge
                    <div className="hero-badge">
                        <span className="badge-dot"></span>
                        Open to opportunities
                    </div> */}

                    {/* Name */}
                    <p className="hero-name">Paul Akelo</p>

                    {/* Headline */}
                    <h1 className="hero-title">
                        <span className="title-line">Software Engineer</span>
                        <span className="title-line title-accent">Backend & Data Engineering</span>
                    </h1>

                    {/* Subtext */}
                    <p className="hero-subtext">
                        Building scalable backend systems, data pipelines, and REST APIs with a focus on
                        performance, reliability, and clean architecture. Specializing in
                        Go, Python, and PostgreSQL for high-throughput applications.
                    </p>

                    {/* CTAs */}
                    <div className="hero-cta">
                        <a href="/#projects" className="btn btn-primary" aria-label="View Projects section">
                            View Projects
                        </a>
                        <a href="/#contact" className="btn btn-outline" aria-label="Jump to Contact section">
                            Contact
                        </a>
                    </div>
                </div>

                {/* RIGHT COLUMN: Node Graph Visual */}
                <div className="hero-visual">
                    <div className="node-graph">
                        {/* Connection Lines */}
                        <svg className="node-connections" viewBox="0 0 300 300" aria-hidden="true">
                            <line x1="150" y1="60" x2="60" y2="150" className="node-line" />
                            <line x1="150" y1="60" x2="240" y2="150" className="node-line" />
                            <line x1="60" y1="150" x2="150" y2="150" className="node-line" />
                            <line x1="150" y1="150" x2="240" y2="150" className="node-line" />
                            <line x1="60" y1="150" x2="100" y2="240" className="node-line" />
                            <line x1="240" y1="150" x2="200" y2="240" className="node-line" />
                            <line x1="100" y1="240" x2="200" y2="240" className="node-line" />
                            <line x1="150" y1="150" x2="100" y2="240" className="node-line" />
                            <line x1="150" y1="150" x2="200" y2="240" className="node-line" />
                        </svg>

                        {/* Node Icons */}
                        <div className="node node-server" title="Server">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M4 1h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1m0 8h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1m0 8h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1M9 5a1 1 0 1 0-2 0 1 1 0 0 0 2 0m0 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0m0 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0"/>
                            </svg>
                        </div>

                        <div className="node node-database" title="Database">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 3C7.58 3 4 4.79 4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7c0-2.21-3.58-4-8-4m0 2c3.87 0 6 1.5 6 2s-2.13 2-6 2-6-1.5-6-2 2.13-2 6-2M6 17v-2.42c1.23.79 3.36 1.34 6 1.42 2.64-.08 4.77-.63 6-1.42V17c0 .5-2.13 2-6 2s-6-1.5-6-2m0-5v-2.42c1.23.79 3.36 1.34 6 1.42 2.64-.08 4.77-.63 6-1.42V12c0 .5-2.13 2-6 2s-6-1.5-6-2"/>
                            </svg>
                        </div>

                        <div className="node node-pipeline" title="Data Pipeline">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M22 13V9l-4-4H8V3H6v2H2v4l4 4v4H2v4h4v-2h12v2h4v-4h-4v-4m-4-6.17L19.17 8H18V6.83M4 7h12v2H4V7m16 12h-2v-2H6v2H4v-2h2v-4h12v4h2v2m-4-4H6v-2h10v2"/>
                            </svg>
                        </div>

                        <div className="node node-security" title="Security">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4m0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8"/>
                            </svg>
                        </div>

                        <div className="node node-api" title="API">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M7 7H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2v-2H5V9h2V7m10 0h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2v-2h2V9h-2V7m-6 0h2l2 10h-2l-.4-2H9.4L9 17H7l2-10m.85 6h2.3L13 8h-2l-1.15 5"/>
                            </svg>
                        </div>

                        <div className="node node-cloud" title="Cloud">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6a5.5 5.5 0 0 1 5.5 5.5v.5H19a3 3 0 0 1 0 6"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
}
