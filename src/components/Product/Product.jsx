import React from "react";
import "./Product.scss";

const Product = ({ id, title, image, price, rating }) => {
    return (
        <div className="product">
            <img src={image} alt="" />
            <div className="product__info">
                <h5>{title}</h5>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map(() => (
                            <span role="img">⭐</span>
                        ))}
                </div>
            </div>
            <button>Add to Basket</button>
        </div>
    );
};

export default Product;
