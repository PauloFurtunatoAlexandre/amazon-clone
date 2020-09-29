import React from "react";
import "./Subtotal.scss";
import CurrencyFormat from "react-currency-format";
import { CardTravel } from "@material-ui/icons";
import { useStateValue } from "../StateProvider";
import { getCartTotal } from "../../reducer";

const Subtotal = () => {
    const [{ cart }, dispatch] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat
            renderText={(value) => (
                <div>
                    <p className="subtotal__text">
                        <strong>Subtotal </strong>
                        ({cart.length} items): <strong>
                            {`${value}`}
                        </strong>
                    </p>
                    <small className="subtotal__gift">
                        <input type="checkbox"/> This order contains a gift.
                    </small>
                </div>
            )}
                decimalScale={2}
                value={getCartTotal(cart)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button>Proceed to checkout</button>
        </div>
    );
}

export default Subtotal;