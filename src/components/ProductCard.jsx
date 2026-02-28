import React from 'react';

const ProductCard = React.forwardRef(({ image, name, description, style }, ref) => {
    return (
        <div
            ref={ref}
            className="product-card-v2"
            style={{
                ...style,
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <div className="product-card-v2-overlay">
                <div className="product-card-v2-content">
                    <h3>{name}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
});

ProductCard.displayName = 'ProductCard';

export default ProductCard;
