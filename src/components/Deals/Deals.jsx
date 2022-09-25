import React from "react";
import style from "./deals.module.css";

const Deals = ({ name, showIcon = false }) => {
  return (
    <>
      <div className={style.flex}>
        <p>{name}</p>
        {showIcon && (
          <img
            className={style.downArrowMedium}
            alt="down"
            src="svg/down-arrow.svg"
          />
        )}
      </div>
    </>
  );
};

export default Deals;
