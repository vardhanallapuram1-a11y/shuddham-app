import React, { useRef, useEffect } from 'react';
import storeFridge from '../assets/images/store-fridge.jpeg';

function Locations() {
    const sectionRef = useRef(null);

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

    return (
        <section id="locations" className="locations-section section-padding" ref={sectionRef}>
            <div className="container">
                <div className="text-center animate-on-scroll fade-in-up">
                    <h2 className="section-title">
                        Visit <span>Us</span>
                    </h2>
                    <div className="section-divider"></div>
                    <p className="section-subtitle">
                        Step into our store and experience the freshness firsthand.
                    </p>
                </div>

                <div className="location-card animate-on-scroll fade-in-up" style={{ transitionDelay: '0.2s' }}>
                    <div className="row g-0">
                        <div className="col-lg-6">
                            <img
                                src={storeFridge}
                                alt="Shuddham Store"
                                className="location-image"
                                loading="lazy"
                            />
                        </div>
                        <div className="col-lg-6">
                            <div className="location-info">
                                <h3>Our Store</h3>

                                <div className="location-detail">
                                    <div className="location-detail-icon">📍</div>
                                    <div className="location-detail-text">
                                        <h4>Address</h4>
                                        <p>Shuddham Ice Cream Parlor<br />Main Road, Maharashtra, India</p>
                                    </div>
                                </div>

                                <div className="location-detail">
                                    <div className="location-detail-icon">🕐</div>
                                    <div className="location-detail-text">
                                        <h4>Working Hours</h4>
                                        <p>Monday – Sunday: 10:00 AM – 10:00 PM</p>
                                    </div>
                                </div>

                                <div className="location-detail">
                                    <div className="location-detail-icon">📞</div>
                                    <div className="location-detail-text">
                                        <h4>Phone</h4>
                                        <p>+91 XXXXX XXXXX</p>
                                    </div>
                                </div>

                                <div className="location-detail">
                                    <div className="location-detail-icon">✉️</div>
                                    <div className="location-detail-text">
                                        <h4>Email</h4>
                                        <p>info@shuddham.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Locations;
