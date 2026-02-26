import React, { useRef, useEffect, useState } from 'react';
import aboutImg from '../assets/images/banner-about.jpeg';

function AnimatedCounter({ end, suffix = '', duration = 2000 }) {
    const [count, setCount] = useState(0);
    const [started, setStarted] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStarted(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!started) return;
        let start = 0;
        const step = end / (duration / 16);
        const timer = setInterval(() => {
            start += step;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);
        return () => clearInterval(timer);
    }, [started, end, duration]);

    return <span ref={ref}>{count}{suffix}</span>;
}

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

    const stats = [
        { number: 10, suffix: '+', label: 'Years of Purity' },
        { number: 20, suffix: '+', label: 'Unique Flavors' },
        { number: 50, suffix: 'K+', label: 'Happy Customers' },
        { number: 5, suffix: '', label: 'Store Locations' },
    ];

    const features = [
        { icon: '🌿', label: '100% Natural', desc: 'No artificial colors or flavors' },
        { icon: '🚫', label: 'No Preservatives', desc: 'Fresh every single day' },
        { icon: '❤️', label: 'Made with Love', desc: 'Handcrafted in small batches' },
        { icon: '🥛', label: 'Pure Milk Based', desc: 'Premium A2 cow milk' },
    ];

    return (
        <section id="about" className="about-section-v2 section-padding" ref={sectionRef}>
            {/* Decorative shapes */}
            <div className="about-deco-circle about-deco-1"></div>
            <div className="about-deco-circle about-deco-2"></div>

            <div className="container">
                <div className="about-v2-layout">
                    {/* Image side */}
                    <div className="about-v2-img animate-on-scroll fade-in-left">
                        <div className="about-v2-img-wrapper">
                            <img src={aboutImg} alt="Shuddham Pure Desserts" />
                            <div className="about-v2-floating-badge">
                                <span className="about-v2-badge-year">EST</span>
                                <span className="about-v2-badge-number">2015</span>
                                <span className="about-v2-badge-text">Bond of Purity</span>
                            </div>
                        </div>
                        {/* Stats row overlapping the image */}
                        <div className="about-v2-stats">
                            {stats.map((stat, i) => (
                                <div className="about-v2-stat" key={i}>
                                    <div className="about-v2-stat-number">
                                        <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                                    </div>
                                    <div className="about-v2-stat-label">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Content side */}
                    <div className="about-v2-content animate-on-scroll fade-in-right" style={{ transitionDelay: '0.2s' }}>
                        <div className="section-tag-v2">
                            <span className="tag-dot"></span>
                            Our Story
                        </div>
                        <h2 className="about-v2-title">
                            Where Purity Meets <em>Passion</em>
                        </h2>
                        <p className="about-v2-lead">
                            Since 2015, Shuddham has been more than just a dessert destination —
                            it's a legacy of pure, unadulterated joy.
                        </p>
                        <p className="about-v2-body">
                            Born from a singular passion to honor traditional flavors, we've grown
                            into a sanctuary for those who appreciate the true essence of real,
                            milk-based treats. Every creation is defined by our name — meaning "pure."
                            We select the finest seasonal fruits and premium dairy to craft flavors
                            free from anything artificial.
                        </p>

                        <div className="about-v2-features">
                            {features.map((f, i) => (
                                <div
                                    key={i}
                                    className="about-v2-feature animate-on-scroll fade-in-up"
                                    style={{ transitionDelay: `${0.4 + i * 0.1}s` }}
                                >
                                    <div className="about-v2-feature-icon">{f.icon}</div>
                                    <div>
                                        <strong>{f.label}</strong>
                                        <span>{f.desc}</span>
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

export default About;
