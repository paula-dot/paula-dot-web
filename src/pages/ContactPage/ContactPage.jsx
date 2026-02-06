import './ContactPage.css';

export function ContactPage() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Form submission logic would go here
        alert('Form submission functionality to be implemented');
    };

    return (
        <>
            <title>Contact - Paul Akelo</title>

            <div className="contact-page">
                <div className="page-inner">
                    <div className="contact-info-card">
                        <section className="contact-info">
                            <h2>Let's Connect</h2>
                            <p>
                                Looking for a backend developer for your team? Interested in collaborating on backend systems or open-source projects? I'd love to hear from you.
                                Fill out the form below or reach out directly at{' '}
                                <a href="mailto:degrante77@gmail.com">degrante77@gmail.com</a>
                            </p>
                        </section>
                    </div>

                    <div className="contact-form-card">
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
                                <label htmlFor="subject">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    placeholder="Project idea, collaboration, etc."
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

                            <button type="submit">
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1="22" y1="2" x2="11" y2="13"></line>
                                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                </svg>
                                Send Message
                            </button>
                        </form>
                    </section>
                    </div>
                </div>
            </div>
        </>
    );
}
