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
    { src: mango, alt: 'Mango Ice Cream', large: true },
    { src: strawberry, alt: 'Strawberry Ice Cream', large: false },
    { src: chocolate, alt: 'Chocolate Ice Cream', large: false },
    { src: coconut, alt: 'Coconut Ice Cream', large: false },
    { src: blackberry, alt: 'Blackberry Ice Cream', large: false },
    { src: storeFridge, alt: 'Shuddham Store', large: true },
    { src: vanilla, alt: 'Vanilla Ice Cream', large: false },
    { src: naturalJamun, alt: 'Natural Jamun Ice Cream', large: false },
    { src: butterscotch, alt: 'Butterscotch Ice Cream', large: false },
];

function Gallery() {
    const sectionRef = useRef(null);
    const [modalImage, setModalImage] = useState(null);

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

    const openModal = (img) => setModalImage(img);
    const closeModal = () => setModalImage(null);

    return (
        <section id="gallery" className="gallery-section section-padding" ref={sectionRef}>
            <div className="container">
                <div className="text-center animate-on-scroll fade-in-up">
                    <h2 className="section-title">
                        Sweet <span>Gallery</span>
                    </h2>
                    <div className="section-divider"></div>
                    <p className="section-subtitle">
                        A visual feast of our handcrafted creations — every scoop is a masterpiece.
                    </p>
                </div>

                <div
                    className="gallery-grid animate-on-scroll scale-in"
                    style={{ transitionDelay: '0.3s' }}
                >
                    {galleryImages.map((img, index) => (
                        <div
                            key={index}
                            className={`gallery-item ${img.large ? 'large' : ''}`}
                            onClick={() => openModal(img)}
                        >
                            <img src={img.src} alt={img.alt} loading="lazy" />
                            <div className="gallery-item-overlay">
                                <span>🔍</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {modalImage && (
                <div className="gallery-modal-backdrop" onClick={closeModal}>
                    <button className="gallery-modal-close" onClick={closeModal}>
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
