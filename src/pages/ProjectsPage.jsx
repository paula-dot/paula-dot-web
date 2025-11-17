import './ProjectsPage.css'

export function ProjectsPage() {
    return (
        <>
         <title>Projects</title>

        <main className="page projects">
            <div className="page-inner">
            <section className="project-intro">
                <h2>Featured Projects</h2>
                <p>Here are some of my recent works in data visualization, GIS, and AI.</p>
            </section>

            <section className="project-grid">
                <div className="project-card">
                    <h3>Kasipul Geo Insights</h3>
                    <p>
                        A QGIS-based spatial analysis of Kasipul Constituency focusing on
                        urban growth and infrastructure mapping.
                    </p>
                    <a href="#" className="btn">View Details</a>
                </div>

                <div className="project-card">
                    <h3>Statistical Canopy</h3>
                    <p>
                        A data visualization project inspired by Visual Capitalist,
                        showcasing socio-economic and geopolitical insights from Kenya.
                    </p>
                    <a href="#" className="btn">View Project</a>
                </div>
            </section>
            </div>
        </main>
        </>
    );
}