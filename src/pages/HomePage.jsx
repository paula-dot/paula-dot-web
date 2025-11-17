import { Link } from "react-router-dom";
import './HomePage.css'

export function HomePage() {
    return (
        <>
        <title>Paul Akelo</title>

        <main className="page home">
            <div className="page-inner">
            <section className="hero bg-gradient-to-r from-[#bf1cff] to-[#007185]">
                <div className="hero-text">
                    <h2>Hello, I'm Paul Akelo</h2>
                    <p>Aspiring data scientist and GIS developer building impacting visuals and insights.</p>
                    <Link to="/projects" className="btn">View my work</Link>
                </div>
            </section>

            <section className="skills">
                <h3>Key Skills</h3>
                <div className="skills-grid">
                    <div className="skill-card">HTML & CSS</div>
                    <div className="skill-card">JavaScript</div>
                    <div className="skill-card">Python</div>
                    <div className="skill-card">SQL</div>
                </div>
            </section>
            </div>
        </main>
        </>
    );
}