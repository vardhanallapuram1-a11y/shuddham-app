import React from 'react';

const ProductCard = React.forwardRef(({ image, name, description, style }, ref) => {
    return (
        <div
            ref={ref}
            className="product-card-v2"
            style={style}
        >
            <div className="product-card-v2-img">
                <img src={image} alt={name} loading="lazy" />
                <div className="product-card-v2-glow"></div>
            </div>
            <div className="product-card-v2-body">
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
});

ProductCard.displayName = 'ProductCard';

export default ProductCard;
