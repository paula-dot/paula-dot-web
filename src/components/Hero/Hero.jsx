import { Link } from "react-router-dom";
import "./Hero.css"
// import "../../pages/HomePage/HomePage.css";

export default function Hero() {
    return (
        <section className="hero-section" id="hero">
            <div className="hero-container">
                <div className="hero-overlay" aria-hidden="true">

                </div>

                <div className="hero-content-card">
                    <h1 className="hero-title">
                        Hello, I'm <span className="hero-accent">Paul Akelo</span>
                    </h1>

                    <p className="hero-lede">
                        GIS Analyst & Software Engineer crafting interactive maps, spatial data pipelines,
                        and 3D geospatial visuals for real-world decisions.
                    </p>

                    <p className="hero-subtext">
                        I blend cartographic intuition with full-stack engineering to turn location data into products people
                        actually enjoy using, whether that's a live dashboard, a spatial API, or a photorealistic render.
                    </p>

                    <div className="hero-cta">
                        <Link to="/projects" className="btn btn-primary">
                            View Projects
                        </Link>

                        <Link to="/contact" className="btn btn-secondary">
                            Contact Me
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
