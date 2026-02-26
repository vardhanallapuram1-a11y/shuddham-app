import React, { useRef, useEffect } from 'react';

import strawberry from '../assets/images/strawberry.jpeg';
import blackberry from '../assets/images/blackberry.jpeg';
import coconut from '../assets/images/coconut.jpeg';
import naturalJamun from '../assets/images/natural-jamun.jpeg';

const specials = [
    {
        image: strawberry,
        name: 'Strawberry Bliss',
        description: 'Juicy strawberries swirled into creamy perfection — our all-time bestseller.',
        badge: 'Bestseller',
        badgeColor: '#ff5c8d',
    },
    {
        image: coconut,
        name: 'Coconut Dream',
        description: 'Tropical coconut with a hint of beach vibes and creamy sweetness.',
        badge: 'New',
        badgeColor: '#2ecc71',
    },
    {
        image: blackberry,
        name: 'Wild Blackberry',
        description: 'Bold berries from the forests, naturally sweet and deeply satisfying.',
        badge: 'Seasonal',
        badgeColor: '#9b59b6',
    },
    {
        image: naturalJamun,
        name: 'Natural Jamun',
        description: 'Pure jamun essence in every heavenly scoop — a taste of summer.',
        badge: 'Popular',
        badgeColor: '#f39c12',
    },
];

function SpecialHighlights() {
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
        <section id="specials" className="specials-section-v2 section-padding" ref={sectionRef}>
            <div className="container">
                <div className="text-center animate-on-scroll fade-in-up">
                    <div className="section-tag-v2">
                        <span className="tag-dot"></span>
                        Chef's Pick
                    </div>
                    <h2 className="section-title-v2">
                        Signature <em>Flavors</em>
                    </h2>
                    <p className="section-subtitle-v2">
                        Seasonal picks and crowd favorites that keep people coming back for more.
                    </p>
                </div>

                {/* Bento-style grid: 1 large + 3 stacked */}
                <div className="specials-v2-grid animate-on-scroll fade-in-up" style={{ transitionDelay: '0.2s' }}>
                    {/* Featured large card */}
                    <div className="specials-v2-featured">
                        <img src={specials[0].image} alt={specials[0].name} loading="lazy" />
                        <div className="specials-v2-card-overlay">
                            <span
                                className="specials-v2-badge"
                                style={{ background: specials[0].badgeColor }}
                            >
                                {specials[0].badge}
                            </span>
                            <h3>{specials[0].name}</h3>
                            <p>{specials[0].description}</p>
                        </div>
                    </div>

                    {/* Stacked cards */}
                    <div className="specials-v2-stack">
                        {specials.slice(1).map((item, index) => (
                            <div className="specials-v2-card" key={index}>
                                <div className="specials-v2-card-img">
                                    <img src={item.image} alt={item.name} loading="lazy" />
                                </div>
                                <div className="specials-v2-card-info">
                                    <span
                                        className="specials-v2-dot"
                                        style={{ background: item.badgeColor }}
                                    ></span>
                                    <div>
                                        <h4>{item.name}</h4>
                                        <p>{item.description}</p>
                                        <span className="specials-v2-label">{item.badge}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SpecialHighlights;
