import React from "react";
import SideMenu from "../../components/SideMenu/SideMenu";
import Slider from "../../components/Slider/Slider";

import style from "./hero.module.css";

const Hero = () => {
  return (
    <div className={style.heroSection}>
      <SideMenu />
      <Slider />
      <div className={style.newDeals}>
        <img src="image/m1.jpg" alt="m1" />
        <img src="image/m2.jpg" alt="m2" />
      </div>
    </div>
  );
};

export default Hero;
