import { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import gsap from 'gsap';
import './ContactPage.css';

// Schema Validation
const contactSchema = z.object({
    name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
    email: z.string().email({ message: 'Invalid email address' }),
    message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
});

export function ContactPage() {
    const [serverError, setServerError] = useState(null);
    const [successMsg, setSuccessMsg] = useState(null);
    const containerRef = useRef(null);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(contactSchema),
    });

    // Animations
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.contact-info', {
                y: 20,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out',
            });
            gsap.from('.contact-form', {
                y: 30,
                opacity: 0,
                duration: 0.8,
                delay: 0.2,
                ease: 'power3.out',
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const onSubmit = async (data) => {
        setServerError(null);
        setSuccessMsg(null);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const contentType = response.headers.get('content-type');
            if (!contentType || !contentType.includes('application/json')) {
                // Handle non-JSON response (likely 404 or 500 HTML page)
                throw new Error(
                    'API not available. If you are running locally, use "vercel dev" instead of "vite".'
                );
            }

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || 'Failed to send message');
            }

            // Success
            setSuccessMsg('Message sent successfully! I will get back to you soon.');
            reset(); // Clear form

        } catch (err) {
            console.error('Submission Error:', err);
            setServerError(err.message || 'An unexpected error occurred.');
        }
    };

    return (
        <>
            <title>Contact - Paul Akelo</title>

            <main className="page contact" ref={containerRef}>
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
                        <form onSubmit={handleSubmit(onSubmit)} noValidate>

                            {/* Name Field */}
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Your Name"
                                    {...register('name')}
                                    disabled={isSubmitting}
                                    className={errors.name ? 'input-error' : ''}
                                />
                                {errors.name && <span className="error-msg">{errors.name.message}</span>}
                            </div>

                            {/* Email Field */}
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="your.email@example.com"
                                    {...register('email')}
                                    disabled={isSubmitting}
                                    className={errors.email ? 'input-error' : ''}
                                />
                                {errors.email && <span className="error-msg">{errors.email.message}</span>}
                            </div>

                            {/* Message Field */}
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    placeholder="Tell me about your project or idea..."
                                    rows={5}
                                    {...register('message')}
                                    disabled={isSubmitting}
                                    className={errors.message ? 'input-error' : ''}
                                ></textarea>
                                {errors.message && <span className="error-msg">{errors.message.message}</span>}
                            </div>

                            {/* Server Feedback */}
                            {serverError && (
                                <div className="form-feedback error" role="alert">
                                    ⚠️ {serverError}
                                </div>
                            )}

                            {successMsg && (
                                <div className="form-feedback success" role="status">
                                    ✅ {successMsg}
                                </div>
                            )}

                            <button
                                type="submit"
                                className="btn btn-primary"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </section>
                </div>
            </main>
        </>
    );
}