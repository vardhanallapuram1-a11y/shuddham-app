import React, { useRef, useEffect } from 'react';
import aboutImg from '../assets/images/banner-about.jpeg';

function About() {
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

    const features = [
        { icon: '🌿', text: '100% Natural' },
        { icon: '🚫', text: 'No Preservatives' },
        { icon: '❤️', text: 'Made with Love' },
        { icon: '🥛', text: 'Pure Milk Based' },
    ];

    return (
        <section id="about" className="about-section section-padding" ref={sectionRef}>
            <div className="container">
                <div className="row align-items-center g-5">
                    {/* Image Column */}
                    <div className="col-lg-6">
                        <div className="about-image-wrapper animate-on-scroll fade-in-left">
                            <img src={aboutImg} alt="Shuddham Ice Cream Products" />
                            <div className="about-image-badge">
                                <div className="badge-year">2015</div>
                                <div className="badge-text">Established</div>
                            </div>
                        </div>
                    </div>

                    {/* Text Column */}
                    <div className="col-lg-6">
                        <div className="about-text animate-on-scroll fade-in-right" style={{ transitionDelay: '0.2s' }}>
                            <h2>
                                Our Story of <span style={{ color: 'var(--pink-accent)' }}>Purity</span>
                            </h2>
                            <p>
                                Since 2015, Shuddham has been more than just a dessert destination;
                                it's a legacy of pure, unadulterated joy. Born from a singular passion
                                to honor traditional flavors, we've grown from a humble kitchen into
                                a sanctuary for those who appreciate the true essence of real,
                                milk-based treats.
                            </p>
                            <p>
                                Every Shuddham creation is defined by our name—meaning "pure." We
                                meticulously select the finest seasonal fruits and premium dairy to
                                ensure that every scoop is free from anything artificial. From our
                                signature Sitafal delight to our handcrafted classics, we celebrate
                                the honest beauty of nature in every bite, creating a bond of purity
                                with every customer.
                            </p>

                            <div className="about-features">
                                {features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="about-feature-item animate-on-scroll fade-in-up"
                                        style={{ transitionDelay: `${0.4 + index * 0.1}s` }}
                                    >
                                        <div className="about-feature-icon">{feature.icon}</div>
                                        <div className="about-feature-text">{feature.text}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
