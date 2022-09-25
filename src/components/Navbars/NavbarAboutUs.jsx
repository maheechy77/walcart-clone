import React from "react";
import style from "./navbarAboutUs.module.css";

const NavbarAboutUs = () => {
  return (
    <>
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
    </>
  );
};

export default NavbarAboutUs;
