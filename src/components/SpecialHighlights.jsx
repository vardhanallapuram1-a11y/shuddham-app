import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import strawberry from '../assets/images/strawberry.jpeg';
import blackberry from '../assets/images/blackberry.jpeg';
import coconut from '../assets/images/coconut.jpeg';
import naturalJamun from '../assets/images/natural-jamun.jpeg';

const specials = [
    {
        image: strawberry,
        name: 'Strawberry Bliss',
        description: 'Juicy strawberries swirled into creamy perfection',
        badge: 'Bestseller',
    },
    {
        image: coconut,
        name: 'Coconut Dream',
        description: 'Tropical coconut with a hint of beach vibes',
        badge: 'New',
    },
    {
        image: blackberry,
        name: 'Wild Blackberry',
        description: 'Bold berries from the forests, naturally sweet',
        badge: 'Seasonal',
    },
    {
        image: naturalJamun,
        name: 'Natural Jamun',
        description: 'Pure jamun essence in every heavenly scoop',
        badge: 'Popular',
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
        <section id="specials" className="highlights-section section-padding" ref={sectionRef}>
            <div className="container">
                <div className="text-center animate-on-scroll fade-in-up">
                    <h2 className="section-title">
                        Our Signature <span>Flavors</span>
                    </h2>
                    <div className="section-divider"></div>
                    <p className="section-subtitle">
                        Seasonal picks and crowd favorites that keep people coming back for more.
                    </p>
                </div>

                <div className="slider-wrapper animate-on-scroll fade-in-up" style={{ transitionDelay: '0.2s' }}>
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={24}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                            1200: { slidesPerView: 4 },
                        }}
                        className="highlights-swiper"
                    >
                        {specials.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="h-100 pb-5">
                                    <div className="highlight-card h-100">
                                        <img src={item.image} alt={item.name} loading="lazy" />
                                        <span className="highlight-badge">{item.badge}</span>
                                        <div className="highlight-card-overlay">
                                            <h3>{item.name}</h3>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

export default SpecialHighlights;
