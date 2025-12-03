import './AboutPage.css'

export function AboutPage() {
    return (
        <>
            <title>About</title>

            <main className="page-about">
                <div className="page-inner">
                <section className="intro">
                    <h2>Background & Passion</h2>
                    <p>
                        I am Paul Akelo, a Computer Science student and GIS Analyst passionate about translating complex spatial phenomena into actionable insights.
                        Growing up fascinated by the patterns of cities and landscapes, I realized early on that maps are more than visuals—they are a medium for understanding human behavior, urban growth, and geopolitical dynamics.
                        Today, I combine this cartographic intuition with coding expertise to develop interactive maps, spatial data pipelines, and analytical tools that inform real-world decisions.
                    </p>
                </section>

                <section className="skills">
                    <h2>Technical Skills & Approach</h2>
                    <p>
                        My work sits at the intersection of software engineering and geoinformatics.
                        Using Python, Django, Go, D3.js, and tools like QGIS and GRASS GIS, I design solutions that are both technically robust and visually intuitive.
                        From satellite-based urban growth models to interactive county-level GDP dashboards, I take pride in creating systems that transform raw spatial data into meaningful narratives.
                        Machine Learning allows me to uncover patterns that are often invisible to the naked eye, adding predictive power to traditional GIS analyses.
                    </p>
                </section>

                <section className="interests">
                    <h2>Interests & Vision</h2>
                    <p>
                        Beyond coding and maps, I am driven by a fascination with Urban Studies and Geopolitics.
                        I explore how demographic trends, economic development, and land-use changes intersect to shape societies.
                        This curiosity fuels my projects, guiding both the questions I ask and the solutions I build.
                        My goal is to bridge the gap between complex data and decision-making, helping organizations and communities navigate the spatial and digital landscapes of our world.
                    </p>

                </section>
                </div>
            </main>
        </>
    );
}