import React from "react";
import style from "./Header.module.css";
import { BiHeart } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegUserCircle, FaPercentage } from "react-icons/fa";
import NavbarAboutUs from "../../components/Navbars/NavbarAboutUs";
import Search from "../../components/Search/Search";
import Deals from "../../components/Deals/Deals";

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.headerParent}>
        <NavbarAboutUs />
      </div>
      <div className={style.headerParent}>
        <h2>WALCART</h2>
        <Search />
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
          <Deals name={"Exclusive deals"} showIcon={true} />
          <Deals name={"Smart watches"} showIcon={true}/>
          <Deals name={"Cellphones"} showIcon={false}/>
          <Deals name={"Headphones"} showIcon={false} />
        </div>

        <div className={style.discount}>
          <FaPercentage
            className={style.faIconColor}
            fill="#ef262c"
            size={12}
          />
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
