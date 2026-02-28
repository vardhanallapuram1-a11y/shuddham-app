import React, { useState, useRef, useEffect } from 'react';

function Contact() {
    const sectionRef = useRef(null);
    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
        );
        if (sectionRef.current) {
            sectionRef.current.querySelectorAll('.animate-on-scroll')
                .forEach((el) => observer.observe(el));
        }
        return () => observer.disconnect();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

    return (
        <section id="contact" className="contact-section-v2 bg-cream section-padding" ref={sectionRef}>
            {/* Decorative wave background */}
            <div className="contact-v2-wave-bg">
                <svg viewBox="0 0 1440 150" preserveAspectRatio="none">
                    <path
                        d="M0,0 C360,120 720,20 1080,80 C1200,100 1360,50 1440,70 L1440,150 L0,150 Z"
                        fill="rgba(255,92,141,0.04)"
                    />
                </svg>
            </div>

            <div className="container">
                <div className="text-center animate-on-scroll fade-in-up">
                    <div className="section-tag-v2">
                        <span className="tag-dot"></span>
                        Say Hello
                    </div>
                    <h2 className="section-title-v2">
                        Get in <em>Touch</em>
                    </h2>
                    <p className="section-subtitle-v2">
                        Questions, orders, or just want to say hi? We'd love to hear from you!
                    </p>
                </div>

                {/* Form card */}
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="contact-v2-form-card animate-on-scroll fade-in-up" style={{ transitionDelay: '0.3s' }}>
                            {submitted && (
                                <div className="contact-v2-success">
                                    <span>✅</span>
                                    Thank you! We'll get back to you soon.
                                </div>
                            )}
                            <form onSubmit={handleSubmit}>
                                <div className="contact-v2-form-grid">
                                    <div className="contact-v2-field">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Your Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="contact-v2-field">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Your Email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="contact-v2-field contact-v2-field-full">
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="Phone (Optional)"
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="contact-v2-field contact-v2-field-full">
                                        <textarea
                                            name="message"
                                            placeholder="Your Message"
                                            rows="4"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        ></textarea>
                                    </div>
                                </div>
                                <button type="submit" className="contact-v2-submit">
                                    <span>Send Message</span>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="22" y1="2" x2="11" y2="13"></line>
                                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
