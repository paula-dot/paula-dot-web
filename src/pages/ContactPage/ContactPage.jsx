import { useState } from 'react';
import './ContactPage.css'

export function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState({
        loading: false,
        error: null,
        success: false
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear errors when user starts typing
        if (status.error) {
            setStatus(prev => ({ ...prev, error: null }));
        }
    };

    const validateForm = () => {
        if (!formData.name.trim()) {
            return 'Please enter your name';
        }
        if (!formData.email.trim()) {
            return 'Please enter your email';
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            return 'Please enter a valid email address';
        }
        if (!formData.message.trim()) {
            return 'Please enter a message';
        }
        if (formData.message.trim().length < 10) {
            return 'Message should be at least 10 characters';
        }
        return null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Reset status
        setStatus({ loading: false, error: null, success: false });

        // Validate
        const validationError = validateForm();
        if (validationError) {
            setStatus({ loading: false, error: validationError, success: false });
            return;
        }

        // Set loading state
        setStatus({ loading: true, error: null, success: false });

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            // Check if response is JSON
            const contentType = response.headers.get('content-type');
            let data;
            
            if (contentType && contentType.includes('application/json')) {
                data = await response.json();
            } else {
                // If not JSON, likely an error page or missing API
                const text = await response.text();
                console.error('Non-JSON response:', text);
                throw new Error('Server configuration error. Please ensure environment variables are set in Vercel.');
            }

            if (!response.ok) {
                throw new Error(data.message || 'Failed to send message');
            }

            // Success!
            setStatus({ loading: false, error: null, success: true });
            setFormData({ name: '', email: '', message: '' });

            // Clear success message after 5 seconds
            setTimeout(() => {
                setStatus(prev => ({ ...prev, success: false }));
            }, 5000);

        } catch (error) {
            console.error('Form submission error:', error);
            setStatus({
                loading: false,
                error: error.message || 'Network error. Please try again.',
                success: false
            });
        }
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
                        <a href="mailto:degrante77@gmail.com" className="contact-email-link">
                            degrante77@gmail.com
                        </a>
                    </p>
                </section>

                <section className="contact-form">
                    <form onSubmit={handleSubmit} aria-live="polite">
                        <div>
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your name"
                                required
                                disabled={status.loading}
                            />
                        </div>

                        <div>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="your.email@example.com"
                                required
                                disabled={status.loading}
                            />
                        </div>

                        <div>
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell me about your project or idea..."
                                required
                                disabled={status.loading}
                            ></textarea>
                        </div>

                        {status.error && (
                            <div role="alert" className="form-error">
                                {status.error}
                            </div>
                        )}

                        {status.success && (
                            <div role="status" className="form-success">
                                ✓ Message sent successfully! I'll get back to you soon.
                            </div>
                        )}

                        <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={status.loading}
                        >
                            {status.loading ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </section>
                </div>
            </main>
        </>
    );
}