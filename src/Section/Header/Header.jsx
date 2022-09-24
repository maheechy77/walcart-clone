import React from "react";
import style from "./Header.module.css";
import { BiHeart, BiSearchAlt2 } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegUserCircle,FaPercentage } from "react-icons/fa";

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.headerParent}>
        <div className={style.headerLeftChild}>
          <p>About US</p>
          <p>|</p>
          <p>My Account</p>
          <p>|</p>
          <p>Featured Products</p>
          <p>|</p>
          <p>Contact</p>
        </div>
        <div className={style.headerRightChild}>
          <p>Order Tracking</p>
          <p className={style.headerRightChildSelection}>
            English{" "}
            <img
              className={style.downArrow}
              alt="down"
              src="svg/down-arrow.svg"
            />
          </p>
          <p className={style.headerRightChildSelection}>
            USD English{" "}
            <img
              className={style.downArrow}
              alt="down"
              src="svg/down-arrow.svg"
            />
          </p>
        </div>
      </div>
      <div className={style.headerParent}>
        <h2>WALCART</h2>
        <div className={style.search}>
          <input type={"text"} placeholder="What do you want to order ?" />
          <BiSearchAlt2 className={style.searchIcon} fill="gray" size={24} />
          <button>Search</button>
        </div>
        <div className={style.headerChildIcon}>
          <p className={style.login}>
            <FaRegUserCircle size={28} />
            <div className={style.loginText}>
              <p className={style.signIn}>Sign In</p>
              <p className={style.account}>Account</p>
            </div>
          </p>

          <p className={style.fav}>
            <BiHeart size={28} />
            <p className={style.favNumber}>1</p>
          </p>
          <p className={style.cart}>
            <AiOutlineShoppingCart size={28} />
            <p className={style.cartNumber}>1</p>
          </p>
        </div>
      </div>
      <div className={style.headerParent}>
        <div className={style.topCategories}>
          <GiHamburgerMenu size={24} />
          <p>Top Categories</p>
          <img
            className={style.downArrowMedium}
            alt="down"
            src="svg/down-arrow.svg"
          />
        </div>
        <div className={style.deals}>
          <div className={style.flex}>
            <p>Exclusive deals</p>
            <img
              className={style.downArrowMedium}
              alt="down"
              src="svg/down-arrow.svg"
            />
          </div>
          <div className={style.flex}>
            <p>Smart watches</p>
            <img
              className={style.downArrowMedium}
              alt="down"
              src="svg/down-arrow.svg"
            />
          </div>
          <p>Cellphones</p>
          <p>Headphones</p>
        </div>
        <div className={style.discount}>
          <FaPercentage className={style.faIconColor} fill="#ef262c" size={12} />
          <div className={style.discountInfo}>
            <div className={style.discountText}>
              <p>On This Weekend</p>
              <p>Super Discount</p>
            </div>
            <img
              className={style.downArrowMedium}
              alt="down"
              src="svg/down-arrow.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
