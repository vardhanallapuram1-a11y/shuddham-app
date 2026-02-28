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
        <section id="specials" className="specials-section-v2 bg-berry section-padding" ref={sectionRef}>
            <div className="container">
                <div className="text-center animate-on-scroll fade-in-up">

                    <h2 className="section-title-v2">
                        Chef's <em>Pick</em>
                    </h2>
                    <p className="section-subtitle-v2">
                        Seasonal picks and crowd favorites that keep people coming back for more.
                    </p>
                </div>

                {/* Uniform Medium-Sized Grid */}
                <div className="specials-v2-uniform-grid animate-on-scroll fade-in-up" style={{ transitionDelay: '0.2s' }}>
                    {specials.map((item, index) => (
                        <div className="specials-v2-medium-card" key={index}>
                            <div className="specials-v2-card-img-wrapper">
                                <img src={item.image} alt={item.name} loading="lazy" />
                                <span
                                    className="specials-v2-medium-badge"
                                    style={{ background: item.badgeColor }}
                                >
                                    {item.badge}
                                </span>
                            </div>
                            <div className="specials-v2-card-content">
                                <h3>{item.name}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SpecialHighlights;
