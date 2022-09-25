import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import style from "./slider.module.css";

const Slider = () => {
  return (
    <div className={style.dealSwiper}>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        slidesPerView={1}
        className={style.swiperContainer}
      >
        <SwiperSlide>
          <img className={style.image} src="image/1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="image/2.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="image/3.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
