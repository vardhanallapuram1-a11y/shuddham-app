import React, { useState, useRef, useEffect } from 'react';

function Contact() {
    const sectionRef = useRef(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
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
            const animatedElements = sectionRef.current.querySelectorAll('.animate-on-scroll');
            animatedElements.forEach((el) => observer.observe(el));
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
        <section id="contact" className="contact-section section-padding" ref={sectionRef}>
            <div className="container">
                <div className="text-center animate-on-scroll fade-in-up">
                    <h2 className="section-title">
                        Get in <span>Touch</span>
                    </h2>
                    <div className="section-divider"></div>
                    <p className="section-subtitle">
                        Have a question or want to place an order? We'd love to hear from you!
                    </p>
                </div>

                <div className="row g-4 justify-content-center">
                    {/* Contact Info */}
                    <div className="col-lg-4">
                        <div className="contact-info-card animate-on-scroll fade-in-left" style={{ transitionDelay: '0.2s' }}>
                            <p>
                                Whether you want to bulk order for an event, become a distributor,
                                or just want to say hi — reach out to us!
                            </p>

                            <div className="contact-info-item">
                                <div className="icon">📍</div>
                                <div className="text">Main Road, Maharashtra, India</div>
                            </div>

                            <div className="contact-info-item">
                                <div className="icon">📞</div>
                                <div className="text">+91 XXXXX XXXXX</div>
                            </div>

                            <div className="contact-info-item">
                                <div className="icon">✉️</div>
                                <div className="text">info@shuddham.com</div>
                            </div>

                            <div className="contact-info-item">
                                <div className="icon">⏰</div>
                                <div className="text">Mon – Sun: 10 AM – 10 PM</div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="col-lg-6">
                        <div className="contact-form-wrapper animate-on-scroll fade-in-right" style={{ transitionDelay: '0.3s' }}>
                            {submitted && (
                                <div
                                    className="alert alert-success d-flex align-items-center mb-4"
                                    role="alert"
                                    style={{ borderRadius: 'var(--radius-sm)' }}
                                >
                                    <span style={{ marginRight: '8px' }}>✅</span>
                                    Thank you! We'll get back to you soon.
                                </div>
                            )}

                            <form onSubmit={handleSubmit}>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="contactName"
                                                name="name"
                                                placeholder="Your Name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                            />
                                            <label htmlFor="contactName">Your Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="contactEmail"
                                                name="email"
                                                placeholder="Your Email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                            <label htmlFor="contactEmail">Your Email</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input
                                                type="tel"
                                                className="form-control"
                                                id="contactPhone"
                                                name="phone"
                                                placeholder="Your Phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                            />
                                            <label htmlFor="contactPhone">Your Phone (Optional)</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea
                                                className="form-control"
                                                id="contactMessage"
                                                name="message"
                                                placeholder="Your Message"
                                                style={{ height: '140px' }}
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                            ></textarea>
                                            <label htmlFor="contactMessage">Your Message</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button type="submit" className="btn btn-gradient w-100" style={{ padding: '16px' }}>
                                            Send Message ✨
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
