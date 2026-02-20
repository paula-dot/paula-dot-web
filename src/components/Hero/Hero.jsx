import { useRef } from "react"
import useParallax from '../../hooks/useParallax'
import "./Hero.css"

export default function Hero() {
    const visualRef = useRef(null)

    // use the reusable parallax hook
    useParallax(visualRef)

    return (
        <section className="hero-section" id="hero">
            <div className="hero-card">
                <div className="hero-container">
                {/* LEFT COLUMN: Text Content */}
                <div className="hero-content">

                    {/* Greeting + Name (adjusted hierarchy) */}
                    <div className="hero-intro">
                        <p className="hero-greeting">Hi, my name is</p>
                        <p className="hero-name">Paul Akelo</p>
                    </div>

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

                {/* RIGHT COLUMN: Abstract node graph visual to balance layout */}
                <div className="hero-visual" ref={visualRef} aria-hidden="true">
                    <div className="node-graph" role="img" aria-label="Abstract nodes and data flow graphic">
                        <svg viewBox="0 0 480 320" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient id="g1" x1="0" x2="1">
                                    <stop offset="0%" stopColor="#FFB86C" stopOpacity="0.95" />
                                    <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.95" />
                                </linearGradient>
                                <filter id="s1" x="-50%" y="-50%" width="200%" height="200%">
                                    <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#000" floodOpacity="0.25" />
                                </filter>
                            </defs>

                            {/* connecting lines */}
                            <g stroke="#2b2b2b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.9">
                                <path d="M60 220 C140 180, 220 180, 300 220" fill="none"/>
                                <path d="M100 80 C180 40, 300 40, 380 80" fill="none"/>
                                <path d="M240 30 L240 150" fill="none"/>
                            </g>

                            {/* main nodes (wrapped so pointer transforms compose with animation) */}
                            <g>
                                <g className="node-wrap node-wrap-1" filter="url(#s1)">
                                    <circle className="node node-1" cx="100" cy="80" r="16" fill="url(#g1)" />
                                </g>
                                <g className="node-wrap node-wrap-2" filter="url(#s1)">
                                    <circle className="node node-2" cx="380" cy="80" r="12" fill="#0f172a" stroke="url(#g1)" strokeWidth="3" />
                                </g>
                                <g className="node-wrap node-wrap-3" filter="url(#s1)">
                                    <circle className="node node-3" cx="240" cy="150" r="14" fill="#0b1220" stroke="#374151" strokeWidth="2" />
                                </g>
                                <g className="node-wrap node-wrap-4" filter="url(#s1)">
                                    <circle className="node node-4" cx="60" cy="220" r="12" fill="#071025" stroke="#475569" strokeWidth="2" />
                                </g>
                                <g className="node-wrap node-wrap-5" filter="url(#s1)">
                                    <circle className="node node-5" cx="300" cy="220" r="14" fill="url(#g1)" />
                                </g>
                            </g>

                            {/* accent points (animated subtly) */}
                            <g>
                                <g className="accent-wrap accent-wrap-1"><circle className="accent accent-1" cx="160" cy="60" r="4" fill="#FFB86C" opacity="0.9" /></g>
                                <g className="accent-wrap accent-wrap-2"><circle className="accent accent-2" cx="200" cy="200" r="5" fill="#F59E0B" opacity="0.85" /></g>
                                <g className="accent-wrap accent-wrap-3"><circle className="accent accent-3" cx="320" cy="140" r="3" fill="#FBBF24" opacity="0.8" /></g>
                            </g>
                        </svg>
                    </div>
                </div>

                </div>
            </div>
        </section>
    );
}
