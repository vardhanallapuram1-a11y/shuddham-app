import React, { useState, useRef, useEffect } from 'react';

import vanilla from '../assets/images/vanilla.jpeg';
import butterscotch from '../assets/images/butterscotch.jpeg';
import mango from '../assets/images/mango.jpeg';
import chocolate from '../assets/images/chocolate.jpeg';
import strawberry from '../assets/images/strawberry.jpeg';
import blackberry from '../assets/images/blackberry.jpeg';
import coconut from '../assets/images/coconut.jpeg';
import naturalJamun from '../assets/images/natural-jamun.jpeg';
import storeFridge from '../assets/images/store-fridge.jpeg';

const galleryImages = [
    { src: mango, alt: 'Mango Ice Cream', category: 'fruity' },
    { src: strawberry, alt: 'Strawberry Ice Cream', category: 'fruity' },
    { src: chocolate, alt: 'Chocolate Ice Cream', category: 'classic' },
    { src: coconut, alt: 'Coconut Ice Cream', category: 'fruity' },
    { src: blackberry, alt: 'Blackberry Ice Cream', category: 'fruity' },
    { src: storeFridge, alt: 'Shuddham Store', category: 'store' },
    { src: vanilla, alt: 'Vanilla Ice Cream', category: 'classic' },
    { src: naturalJamun, alt: 'Natural Jamun Ice Cream', category: 'fruity' },
    { src: butterscotch, alt: 'Butterscotch Ice Cream', category: 'classic' },
];

const filters = ['All', 'Fruity', 'Classic', 'Store'];

function Gallery() {
    const sectionRef = useRef(null);
    const [modalImage, setModalImage] = useState(null);
    const [activeFilter, setActiveFilter] = useState('All');

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
            { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
        );

        if (sectionRef.current) {
            const animatedElements = sectionRef.current.querySelectorAll('.animate-on-scroll');
            animatedElements.forEach((el) => observer.observe(el));
        }

        return () => observer.disconnect();
    }, []);

    const filtered = activeFilter === 'All'
        ? galleryImages
        : galleryImages.filter(img => img.category === activeFilter.toLowerCase());

    const openModal = (img) => setModalImage(img);
    const closeModal = () => setModalImage(null);

    return (
        <section id="gallery" className="gallery-section-v2 section-padding" ref={sectionRef}>
            <div className="container">
                <div className="text-center animate-on-scroll fade-in-up">
                    <div className="section-tag-v2">
                        <span className="tag-dot"></span>
                        Gallery
                    </div>
                    <h2 className="section-title-v2">
                        Sweet <em>Moments</em>
                    </h2>
                    <p className="section-subtitle-v2">
                        A visual feast of our handcrafted creations — every scoop is a masterpiece.
                    </p>
                </div>

                {/* Filter tabs */}
                <div className="gallery-v2-filters animate-on-scroll fade-in-up" style={{ transitionDelay: '0.15s' }}>
                    {filters.map((f) => (
                        <button
                            key={f}
                            className={`gallery-v2-filter-btn ${activeFilter === f ? 'active' : ''}`}
                            onClick={() => setActiveFilter(f)}
                        >
                            {f}
                        </button>
                    ))}
                </div>

                <div
                    className="gallery-v2-grid animate-on-scroll scale-in"
                    style={{ transitionDelay: '0.3s' }}
                >
                    {filtered.map((img, index) => (
                        <div
                            key={index}
                            className="gallery-v2-item"
                            onClick={() => openModal(img)}
                        >
                            <img src={img.src} alt={img.alt} loading="lazy" />
                            <div className="gallery-v2-item-overlay">
                                <span className="gallery-v2-item-name">{img.alt}</span>
                                <span className="gallery-v2-zoom">⊕</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {modalImage && (
                <div className="gallery-modal-v2" onClick={closeModal}>
                    <button className="gallery-modal-v2-close" onClick={closeModal}>
                        ✕
                    </button>
                    <img
                        src={modalImage.src}
                        alt={modalImage.alt}
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </section>
    );
}

export default Gallery;
