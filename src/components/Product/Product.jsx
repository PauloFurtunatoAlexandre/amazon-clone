import React from "react";
import "./Product.scss";

import { useStateValue } from "../StateProvider";

const Product = ({ id, title, image, price, rating }) => {
    const [{ cart }, dispatch] = useStateValue();

    const addToCart = () => {
        dispatch({
            type: "ADD_TO_CART",
            payload: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };
    return (
        <div className="product" key={id}>
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
            <button onClick={addToCart}>Add to Basket</button>
        </div>
    );
};

export default Product;
