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
                <div className="hero-badge">🍨 Since 2015</div>
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

            <div className="hero-wave">
                <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
                    <path
                        d="M0,60 C320,100 640,20 960,60 C1120,80 1320,40 1440,60 L1440,100 L0,100 Z"
                        fill="#ffffff"
                    />
                </svg>
            </div>
        </section>
    );
}

export default Hero;
