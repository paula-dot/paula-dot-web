import './ContactPage.css'

export function ContactPage() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Form submission logic would go here
        alert('Form submission functionality to be implemented');
    };

    return (
        <>
            <title>Contact - Paul Akelo</title>

            <main className="page contact">
                <div className="page-inner">
                <section className="contact-info">
                    <h2>Get in Touch</h2>
                    <p>
                        I'm open to collaborations, freelance opportunities, or discussions about
                        data, GIS, and technology. Fill out the form below or reach out directly at{' '}
                        <a href="mailto:degrante77@gmail.com" style={{color: '#047857', fontWeight: '600'}}>
                            degrante77@gmail.com
                        </a>
                    </p>
                </section>

                <section className="contact-form">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Your name"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="your.email@example.com"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Tell me about your project or idea..."
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary">
                            Send Message
                        </button>
                    </form>
                </section>
                </div>
            </main>
        </>
    );
}