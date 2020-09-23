import React from "react";
import "./CheckoutProduct.scss";

import { useStateValue } from "../StateProvider";

export default function CheckoutProduct({ id, title, image, price, rating }) {
    const [{ cart }, dispatch] = useStateValue();

    const removeFromCart = (id) => {
        dispatch({
            type: "REMOVE_TO_CART",
            id: id,
        });
    };

    return (
        <div className="checkoutProduct" key={id}>
            <img className="checkoutProduct__image" src={image} alt={title} />

            <div className="checkoutProduct__info">
                <h5 className="checkoutProduct__title">{title}</h5>
                <small>$ </small>
                <strong>{price}</strong>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                        .fill()
                        .map(() => (
                            <span role="img">⭐</span>
                        ))}
                </div>
                <button onClick={removeFromCart}>Remove from cart</button>
            </div>
        </div>
    );
}
