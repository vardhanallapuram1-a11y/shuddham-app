import React, { useState, useEffect } from 'react';
import logo from '../assets/images/logo.png';

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [collapsed, setCollapsed] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e, targetId) => {
        e.preventDefault();
        setCollapsed(true);
        const element = document.getElementById(targetId);
        if (element) {
            const offset = 70;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
    };

    const navLinks = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'menu', label: 'Menu' },
        { id: 'specials', label: 'Signature Flavors' },
        { id: 'gallery', label: 'Gallery' },
        { id: 'contact', label: 'Contact' },
    ];

    return (
        <nav className={`navbar navbar-expand-lg navbar-shuddham ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={() => setCollapsed(!collapsed)}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <a className="navbar-brand" href="#home" onClick={(e) => handleNavClick(e, 'home')}>
                    <img src={logo} alt="Shuddham - Bond of Purity" />
                </a>

                <div className={`collapse navbar-collapse ${collapsed ? '' : 'show'}`}>
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        {navLinks.map((link) => (
                            <li className="nav-item" key={link.id}>
                                <a
                                    className="nav-link"
                                    href={`#${link.id}`}
                                    onClick={(e) => handleNavClick(e, link.id)}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <a
                        href="#contact"
                        className="btn btn-gradient d-none d-lg-inline-block"
                        onClick={(e) => handleNavClick(e, 'contact')}
                    >
                        Order Now
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
