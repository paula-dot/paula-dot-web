import './ContactSection.css';

export default function ContactSection() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Demo behavior: replace with real submit integration as needed
        alert('Message sent (demo) — thank you!');
    };

    return (
        <section className="section-wrapper contact-section" id="contact">
            <div className="section-container contact-card">
                <div className="contact-left" aria-hidden="false">
                    <div className="left-cta">
                        <h3>Let’s build something great together</h3>
                        <p>I'm currently open to new opportunities and freelance projects. Fill out the form or reach out directly — I'd love to hear about your project.</p>

                        <div className="social-links" aria-label="Social links">
                            <a href="https://github.com/paula-dot" target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">
                                {/* GitHub icon */}
                                <svg className="contact-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path d="M12 2C6.477 2 2 6.486 2 12.02c0 4.435 2.868 8.197 6.839 9.525.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.603-3.369-1.342-3.369-1.342-.455-1.157-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.031 1.53 1.031.892 1.53 2.341 1.087 2.91.832.091-.647.35-1.087.636-1.337-2.22-.253-4.555-1.113-4.555-4.952 0-1.094.39-1.988 1.03-2.688-.103-.254-.447-1.274.098-2.656 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.748-1.026 2.748-1.026.547 1.382.203 2.402.1 2.656.64.7 1.028 1.594 1.028 2.688 0 3.848-2.338 4.696-4.567 4.943.36.31.68.923.68 1.863 0 1.344-.012 2.428-.012 2.758 0 .268.18.579.688.481C19.135 20.213 22 16.454 22 12.02 22 6.486 17.523 2 12 2z" fill="currentColor" />
                                </svg>
                            </a>

                            <a  href="https://www.linkedin.com/in/paul-akelo-377577291" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
                                {/* LinkedIn icon */}
                                <svg className="contact-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path d="M16 8a6 6 0 0 1 6 6v6h-4v-6a2 2 0 0 0-4 0v6h-4v-12h4v2a4 4 0 0 1 4-2zM2 9h4v12H2zM4 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" fill="currentColor" />
                                </svg>
                            </a>
                        </div>

                        <div className="email-block">
                            {/* Email icon */}
                            <svg
                                className="contact-icon email-icon"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                            >
                                <path d="M3 7.5C3 6.11929 4.11929 5 5.5 5H18.5C19.8807 5 21 6.11929 21 7.5V16.5C21 17.8807 19.8807 19 18.5 19H5.5C4.11929 19 3 17.8807 3 16.5V7.5Z" stroke="#FFB000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M21 7.5L12 13L3 7.5" stroke="#FFB000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                            <a className="email-link" href="mailto:degrante77@gmail.com">degrante77@gmail.com</a>
                        </div>
                    </div>

                 </div>

                 <div className="contact-right">
                     <form className="contact-form" onSubmit={handleSubmit} noValidate>
                         <div className="field">
                             <label htmlFor="email">Email</label>
                             <input
                                 id="email"
                                 name="email"
                                 type="email"
                                 placeholder="your.email@example.com"
                                 required
                                 aria-required="true"
                             />
                         </div>

                         <div className="field">
                             <label htmlFor="subject">Subject</label>
                             <input
                                 id="subject"
                                 name="subject"
                                 type="text"
                                 placeholder="Brief subject"
                             />
                         </div>

                         <div className="field">
                             <label htmlFor="message">Your Message</label>
                             <textarea
                                 id="message"
                                 name="message"
                                 placeholder="Tell me about your project or what you'd like help with..."
                                 required
                                 aria-required="true"
                             ></textarea>
                         </div>

                         <button type="submit" className="send-button">
                             <span>Send Message</span>
                         </button>
                     </form>
                 </div>
             </div>
         </section>
     );
 }
