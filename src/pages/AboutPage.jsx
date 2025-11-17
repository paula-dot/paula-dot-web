import './AboutPage.css'

export function AboutPage() {
    return (
        <>
            <title>About</title>

            <main className="page about">
                <div className="page-inner">
                <section className="intro">
                    <h2>About me</h2>
                    <p>
                        I’m a Computer Science student with interests
                        in Data Science, Artificial Intelligence, and Geoinformatics. I love building
                        tools and visualizations that tell data-driven stories about real-world issues.
                    </p>
                </section>

                <section className="interests">
                    <h3>Personal interests</h3>
                    <p>
                        Outside coding, I explore geography, geopolitics, and urban studies.
                        I’m also fascinated by design, music, and innovative data storytelling.
                    </p>
                </section>
                </div>
            </main>
        </>
    );
}