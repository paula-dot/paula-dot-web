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

                {/* RIGHT COLUMN: Data Flow Visual
                <div className="hero-visual">
                    <div className="dataflow-container" aria-hidden="false">
                        <svg className="dataflow-svg" viewBox="0 0 800 140" role="img" aria-labelledby="dataflowTitle dataflowDesc" focusable="false">
                            <title id="dataflowTitle">Data flow: Source to API</title>
                            <desc id="dataflowDesc">Simplified data pipeline visualization showing data moving left to right through Source, Ingest, Transform, Store, and API components.</desc>

                            <g className="df-node" tabIndex="0" aria-label="Source">
                                <rect x="20" y="30" width="120" height="80" rx="10" />
                                <text x="80" y="80" textAnchor="middle">Source</text>
                            </g>

                            <g className="df-node" tabIndex="0" aria-label="Ingest">
                                <rect x="190" y="30" width="120" height="80" rx="10" />
                                <text x="250" y="80" textAnchor="middle">Ingest</text>
                            </g>

                            <g className="df-node" tabIndex="0" aria-label="Transform">
                                <rect x="360" y="30" width="140" height="80" rx="10" />
                                <text x="430" y="80" textAnchor="middle">Transform</text>
                            </g>

                            <g className="df-node" tabIndex="0" aria-label="Store">
                                <rect x="540" y="30" width="120" height="80" rx="10" />
                                <text x="600" y="80" textAnchor="middle">Store</text>
                            </g>

                            <g className="df-node" tabIndex="0" aria-label="API">
                                <rect x="710" y="30" width="70" height="80" rx="10" />
                                <text x="745" y="80" textAnchor="middle">API</text>
                            </g>

                            <path id="p1" className="df-connector" d="M140 70 L190 70" />
                            <path id="p2" className="df-connector" d="M310 70 L360 70" />
                            <path id="p3" className="df-connector" d="M500 70 L540 70" />
                            <path id="p4" className="df-connector" d="M660 70 L710 70" />

                            <circle className="df-pulse" r="6" fill="currentColor">
                                <animateMotion dur="2s" repeatCount="indefinite" path="M140 70 L190 70" begin="0s" />
                            </circle>

                            <circle className="df-pulse" r="6" fill="currentColor">
                                <animateMotion dur="2s" repeatCount="indefinite" path="M310 70 L360 70" begin="0.15s" />
                            </circle>

                            <circle className="df-pulse" r="6" fill="currentColor">
                                <animateMotion dur="2s" repeatCount="indefinite" path="M500 70 L540 70" begin="0.3s" />
                            </circle>

                            <circle className="df-pulse" r="6" fill="currentColor">
                                <animateMotion dur="2s" repeatCount="indefinite" path="M660 70 L710 70" begin="0.45s" />
                            </circle>

                            <g aria-hidden="true">
                                <path className="df-connector-stroke" d="M140 70 L190 70" />
                                <path className="df-connector-stroke" d="M310 70 L360 70" />
                                <path className="df-connector-stroke" d="M500 70 L540 70" />
                                <path className="df-connector-stroke" d="M660 70 L710 70" />
                            </g>
                        </svg>
                    </div> */}
                </div>
            </div>
        </section>
    );
}
