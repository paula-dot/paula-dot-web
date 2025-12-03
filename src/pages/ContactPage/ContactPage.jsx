import './ContactPage.css'

export function ContactPage() {
    return (
        <>
            <title>Contact</title>

            <main className="page contact">
                <div className="page-inner">
                <section className="contact-info">
                    <h2>Get in Touch</h2>
                    <p>
                        I’m open to collaborations, freelance opportunities, or discussions about
                        data, GIS, and technology. Reach out using the form below or email me directly.
                    </p>
                </section>

                <section className="contact-form">
                    <form>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required/>

                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required/>

                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows="4" required></textarea>

                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
                </section>
                </div>
            </main>
        </>
    );
}