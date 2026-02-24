import React from 'react';
import heroBg from '../assets/images/banner-hero.jpeg';

function Hero() {
    const scrollToMenu = (e) => {
        e.preventDefault();
        const el = document.getElementById('menu');
        if (el) {
            const offset = 70;
            const pos = el.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top: pos, behavior: 'smooth' });
        }
    };

    return (
        <section
            id="home"
            className="hero-section"
            style={{ backgroundImage: `url(${heroBg})` }}
        >
            <div className="hero-overlay"></div>

            <div className="hero-content">
                <div className="hero-badge">Since 2015</div>
                <h1 className="hero-title">
                    Fresh. Natural.<br />Heavenly.
                </h1>
                <p className="hero-tagline">
                    That's Our Promise — Bond of Purity
                </p>
                <div className="hero-cta">
                    <a href="#menu" className="btn btn-gradient" onClick={scrollToMenu}>
                        Explore Our Flavors
                    </a>
                </div>
            </div>

            {/* Wavy SVG divider */}
            <div className="hero-wave">
                <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
                    <path
                        d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z"
                        fill="#ffffff"
                    />
                </svg>
            </div>
        </section>
    );
}

export default Hero;
