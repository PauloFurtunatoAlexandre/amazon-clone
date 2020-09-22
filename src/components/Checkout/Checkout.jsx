import React from "react";
import "./Checkout.scss";
import { useStateValue } from "../StateProvider";

import CheckoutProduct from "../CheckoutProduct/CheckoutProduct.jsx";

const Checkout = () => {
    const [{ cart }] = useStateValue();

    return (
        <div className="checkout">
            <img
                className="checkout_ad"
                src="https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/JJ/1500x300_EN.jpg"
                alt=""
            />
            {cart?.length === 0 ? (
                <div>
                    <h2 className="checkout__title">
                        <p className="checkout__text">
                            Your Shopping Cart is empty.
                        </p>
                    </h2>
                </div>
            ) : (
                <div>
                    <h2 className="checkout__title">Your Shopping Cart</h2>
                    <p className="checkout__text">
                        For an item sold by Amazon.com: When you click the
                        "Place your order" button, we'll send you an email
                        message acknowledging receipt of your order. Your
                        contract to purchase an item will not be complete until
                        we send you an email notifying you that the item has
                        been shipped.
                    </p>
                </div>
            )}
            {cart?.map((item) => {
                return (
                    <CheckoutProduct
                        // key={item.id}
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />
                );
            })}
        </div>
    );
};

export default Checkout;
