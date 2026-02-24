import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import ProductCard from './ProductCard';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import all product images
import vanilla from '../assets/images/vanilla.jpeg';
import butterscotch from '../assets/images/butterscotch.jpeg';
import mango from '../assets/images/mango.jpeg';
import chocolate from '../assets/images/chocolate.jpeg';
import kalaJamun from '../assets/images/kala-jamun.jpeg';
import americanNuts from '../assets/images/american-nuts.jpeg';
import kajuDraksh from '../assets/images/kaju-draksh.jpeg';
import sitafal from '../assets/images/sitafal.jpeg';

const products = [
    {
        image: vanilla,
        name: 'Vanilla',
        description: 'Classic creamy vanilla made with real vanilla beans and fresh milk.',
    },
    {
        image: butterscotch,
        name: 'Butterscotch',
        description: 'Rich caramelized butterscotch with crunchy praline bits throughout.',
    },
    {
        image: mango,
        name: 'Mango',
        description: 'Luscious Alphonso mango pulp blended into a tropical delight.',
    },
    {
        image: chocolate,
        name: 'Chocolate',
        description: 'Indulgent dark chocolate crafted from premium cocoa nibs.',
    },
    {
        image: kalaJamun,
        name: 'Kala Jamun',
        description: 'Traditional Indian flavor inspired by the beloved kala jamun sweet.',
    },
    {
        image: americanNuts,
        name: 'American Nuts',
        description: 'Loaded with roasted almonds, cashews, and walnuts in every bite.',
    },
    {
        image: kajuDraksh,
        name: 'Kaju Draksh',
        description: 'A royal blend of premium cashews and juicy raisins.',
    },
    {
        image: sitafal,
        name: 'Sitafal',
        description: 'Seasonal custard apple flavor — fresh, fruity, and absolutely divine.',
    },
];

function Menu() {
    const [titleRef, titleVisible] = useScrollAnimation(0.1);

    return (
        <section id="menu" className="menu-section section-padding">
            <div className="container">
                <div
                    ref={titleRef}
                    className={`text-center fade-in-up ${titleVisible ? 'visible' : ''}`}
                >
                    <h2 className="section-title">
                        Our <span>Menu</span>
                    </h2>
                    <div className="section-divider"></div>
                    <p className="section-subtitle">
                        Handcrafted with the finest natural ingredients, each flavor is a celebration
                        of taste and purity.
                    </p>
                </div>

                <div className={`slider-wrapper animate-on-scroll fade-in-up ${titleVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.3s' }}>
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3500, disableOnInteraction: false }}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            768: { slidesPerView: 3 },
                            1024: { slidesPerView: 4 },
                        }}
                        className="menu-swiper"
                    >
                        {products.map((product, index) => (
                            <SwiperSlide key={index} className="h-auto">
                                <div className="h-100 pb-5">
                                    <ProductCard
                                        image={product.image}
                                        name={product.name}
                                        description={product.description}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

export default Menu;
