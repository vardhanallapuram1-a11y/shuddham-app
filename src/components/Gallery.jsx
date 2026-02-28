import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
    { src: chocolate, alt: 'Classic Chocolate', category: 'classic' },
    { src: coconut, alt: 'Creamy Coconut', category: 'fruity' },
    { src: blackberry, alt: 'Wild Blackberry', category: 'fruity' },
    { src: storeFridge, alt: 'Our Premium Store', category: 'store' },
    { src: vanilla, alt: 'Pure Vanilla', category: 'classic' },
    { src: naturalJamun, alt: 'Natural Jamun', category: 'fruity' },
    { src: butterscotch, alt: 'Royal Butterscotch', category: 'classic' },
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
        <section id="gallery" className="gallery-section-v2 section-padding-compact" ref={sectionRef}>
            <div className="container">
                <div className="text-center animate-on-scroll fade-in-up">
                    <h2 className="section-title-v2">
                        Sweet <em>Moments</em>
                    </h2>
                    <p className="section-subtitle-v2">
                        A visual journey through our handcrafted creations — shared with love.
                    </p>
                </div>

                {/* Filter tabs */}
                <div className="gallery-v2-filters animate-on-scroll fade-in-up" style={{ transitionDelay: '0.1s' }}>
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

                <div className="gallery-v2-slider animate-on-scroll fade-in-up" style={{ transitionDelay: '0.2s' }}>
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={24}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                        breakpoints={{
                            640: { slidesPerView: 1.5 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="gallery-swiper"
                    >
                        {filtered.map((img, index) => (
                            <SwiperSlide key={`${activeFilter}-${index}`}>
                                <div
                                    className="gallery-v2-item"
                                    onClick={() => openModal(img)}
                                >
                                    <img src={img.src} alt={img.alt} loading="lazy" />
                                    <div className="gallery-v2-item-overlay">
                                        <span className="gallery-v2-item-name">{img.alt}</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            {modalImage && (
                <div className="gallery-modal-v2" onClick={closeModal}>
                    <button className="gallery-modal-v2-close" onClick={closeModal}>✕</button>
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
