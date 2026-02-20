import './AboutSection.css'
import services from './services'

export default function AboutSection() {
    return (
        <section className="section-wrapper page-about" id="about">
            {/* Non-visible anchor to support links that target #letsAbout */}
            <a id="letsAbout" style={{ display: 'block', height: 0, width: 0, overflow: 'hidden' }} aria-hidden="true" />
            <div className="section-container page-inner">
                {/* SECTION 1: HERO - About Me + Avatar */}
                <div className="about-hero">
                    <div className="about-bio">
                        <div className="bio-block">
                            <h2 className="page-title">About Me</h2>
                            <p className="bio-statement">
                                I'm a backend engineer who transforms complex data into reliable, scalable systems.
                                I specialize in building robust data pipelines, infrastructure automation, and clean architectures that drive performance.
                                When I'm not optimizing databases, I'm diving into Geospatial Data Science and GIS, exploring the intersection of spatial data and software.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Insert the services grid here (no title) */}
                <div className="mt-12">
                    <div className="services-grid">
                        {services.map((service, index) => {
                            // create a slug from the title to use as a per-service modifier class
                            const slug = (service.title || '').toLowerCase().replace(/[^a-z0-9]+/g, '-')
                            return (
                                <div key={index} className={`service-card service-card--${slug}`}>
                                    <div className="service-icon-wrap">
                                        {service.icon}
                                    </div>
                                    <h3 className="service-title">{service.title}</h3>
                                    <p className="service-desc">{service.description}</p>
                                </div>
                            )
                        })}
                    </div>

                </div>

            </div>
        </section>
    );
}
