import React from "react";
import { Link } from "react-router-dom";

import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

import "./Header.css";

import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }] = useStateValue();
  console.log(basket);
  return (
    <nav className="header">
      {/* logo */}
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      {/* seaarchbox */}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* 3 Links */}
      <div className="header__nav">
        {/* 1st link */}
        <Link className="header__link" to="/login">
          <div className="header__option">
            <span className="header__optionLineOne">Hello Rubesh</span>
            <span className="header__optionLinetwo">Sign In</span>
          </div>
        </Link>

        {/* 2nd link */}
        <Link className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLinetwo">& Orders</span>
          </div>
        </Link>

        {/* 3rd link */}
        <Link className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLinetwo">Prime</span>
          </div>
        </Link>

        {/* 4th link */}
        <Link className="header__link" to="/checkout">
          <div className="header__optionBasket">
            {/* shopping basket icon */}
            <ShoppingBasketIcon />

            {/* shopping basket number */}
            <span className="header__optionLineTwo header__optionBasketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
