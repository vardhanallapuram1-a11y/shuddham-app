import React from 'react';

const ProductCard = React.forwardRef(({ image, name, description, style }, ref) => {
    return (
        <div
            ref={ref}
            className="product-card"
            style={style}
        >
            <div className="product-card-image">
                <img src={image} alt={name} loading="lazy" />
                <div className="product-card-overlay"></div>
            </div>
            <div className="product-card-body">
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
});

ProductCard.displayName = 'ProductCard';

export default ProductCard;
