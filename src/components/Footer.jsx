import React from 'react';
import logo from '../assets/images/logo.png';

function Footer() {
    const scrollToSection = (e, targetId) => {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
            const offset = 70;
            const pos = element.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top: pos, behavior: 'smooth' });
        }
    };

    return (
        <footer className="footer-section-v2">
            {/* SVG wave top */}
            <div className="footer-v2-wave">
                <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
                    <path
                        d="M0,80 C240,120 480,40 720,80 C960,120 1200,40 1440,80 L1440,120 L0,120 Z"
                        fill="var(--gray-900)"
                    />
                </svg>
            </div>

            <div className="footer-v2-body">
                <div className="container">
                    <div className="footer-v2-top">
                        {/* Brand */}
                        <div className="footer-v2-brand">
                            <img src={logo} alt="Shuddham" />
                            <p>
                                Fresh. Natural. Heavenly. That's our promise.
                                Crafting pure ice cream since 2015 — the bond of purity.
                            </p>
                            <div className="footer-v2-social">
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                </a>
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                                </a>
                                <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
                                </a>
                                <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-10.6 8.5 8.5 0 0 1 4.6 1.3L22 4l-1.5 6.5z"></path></svg>
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="footer-v2-col">
                            <h4>Quick Links</h4>
                            <ul>
                                <li><a href="#home" onClick={(e) => scrollToSection(e, 'home')}>Home</a></li>
                                <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About Us</a></li>
                                <li><a href="#menu" onClick={(e) => scrollToSection(e, 'menu')}>Menu</a></li>
                                <li><a href="#specials" onClick={(e) => scrollToSection(e, 'specials')}>Specials</a></li>
                                <li><a href="#gallery" onClick={(e) => scrollToSection(e, 'gallery')}>Gallery</a></li>
                            </ul>
                        </div>

                        {/* Popular Flavors */}
                        <div className="footer-v2-col">
                            <h4>Popular Flavors</h4>
                            <ul>
                                <li><a href="#menu" onClick={(e) => scrollToSection(e, 'menu')}>Vanilla</a></li>
                                <li><a href="#menu" onClick={(e) => scrollToSection(e, 'menu')}>Butterscotch</a></li>
                                <li><a href="#menu" onClick={(e) => scrollToSection(e, 'menu')}>Mango</a></li>
                                <li><a href="#menu" onClick={(e) => scrollToSection(e, 'menu')}>Sitafal</a></li>
                                <li><a href="#menu" onClick={(e) => scrollToSection(e, 'menu')}>Kala Jamun</a></li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="footer-v2-col">
                            <h4>Contact</h4>
                            <ul className="footer-v2-contact-list">
                                <li>📍 Main Road, Maharashtra, India</li>
                                <li>📞 +91 XXXXX XXXXX</li>
                                <li>✉️ info@shuddham.com</li>
                                <li>⏰ 10:00 AM – 10:00 PM</li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer-v2-bottom">
                        <p>
                            © 2015 – 2026 <span>Shuddham Desserts</span>. Bond of Purity. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
