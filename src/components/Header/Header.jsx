import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useStateValue } from "../StateProvider";
import { auth } from "../../firebase.js";

const Header = () => {
    const [{ cart, user }, dispatch] = useStateValue();

    const handleAuthenticaton = () => {
        if (user) {
            auth.signOut();
        }
    };

    console.log("Current cart items: ", cart);
    return (
        <div className="header">
            <Link to="/">
                <img
                    className="header__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt=""
                />
            </Link>

            <div className="header__search">
                <input className="header__searchInput" type="search" />
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">
                <Link className="header__link" to={!user && "/login"}>
                    <div onClick={handleAuthenticaton} className="header__option">
                        <span className="header__optionLineOne">
                            Hello {!user ? 'Guest' : user.email}
                        </span>
                        <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
            </div>
            <div className="header__nav">
                <Link className="header__link" to="/">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Order</span>
                    </div>
                </Link>
            </div>
            <div className="header__nav">
                <Link className="header__link" to="/">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>
            </div>
            <div className="header__nav">
                <Link className="header__link" to="/checkout">
                    <div className="header__optionCart">
                        <ShoppingCartIcon />
                        <span className="header__optionLineTwo header__cartCount">
                            {cart?.length}
                        </span>
                        <span className="header__optionLineThree">Cart</span>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Header;
