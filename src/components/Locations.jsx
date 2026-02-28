import React, { useRef, useEffect } from 'react';

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

    const details = [
        { icon: '📍', label: 'Address', value: 'Shuddham Ice Cream Parlor, Main Road, Maharashtra, India' },
        { icon: '🕐', label: 'Hours', value: 'Mon – Sun: 10:00 AM – 10:00 PM' },
        { icon: '📞', label: 'Phone', value: '+91 XXXXX XXXXX' },
        { icon: '✉️', label: 'Email', value: 'info@shuddham.com' },
    ];

    return (
        <section id="locations" className="locations-section-v2 bg-white section-padding" ref={sectionRef}>
            <div className="container">
                <div className="text-center animate-on-scroll fade-in-up">
                    <div className="section-tag-v2">
                        <span className="tag-dot"></span>
                        Find Us
                    </div>
                    <h2 className="section-title-v2">
                        Visit <em>Us</em>
                    </h2>
                    <p className="section-subtitle-v2">
                        Step into our store and experience the freshness firsthand.
                    </p>
                </div>

                <div className="locations-v2-layout animate-on-scroll fade-in-up" style={{ transitionDelay: '0.2s' }}>
                    {/* Left decorative panel */}
                    <div className="locations-v2-visual">
                        <div className="locations-v2-map-placeholder">
                            <div className="locations-v2-pin">
                                <span>🍨</span>
                            </div>
                            <div className="locations-v2-ripple"></div>
                            <div className="locations-v2-ripple locations-v2-ripple-2"></div>
                            <div className="locations-v2-map-label">Shuddham Desserts</div>
                        </div>
                    </div>

                    {/* Right timeline details */}
                    <div className="locations-v2-details">
                        <h3 className="locations-v2-store-title">Our Store</h3>
                        <div className="locations-v2-timeline">
                            {details.map((item, index) => (
                                <div className="locations-v2-timeline-item" key={index}>
                                    <div className="locations-v2-timeline-dot">
                                        <span>{item.icon}</span>
                                    </div>
                                    <div className="locations-v2-timeline-content">
                                        <span className="locations-v2-label">{item.label}</span>
                                        <p className="locations-v2-value">{item.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Locations;
