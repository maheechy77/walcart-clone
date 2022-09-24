import React from "react";
import style from "./populerProducts.module.css";
import { data } from "./category";

const PopulerProduct = () => {
  
  return (
    <div className={style.populerCategory}>
      <h4 className={style.headerTag}>Populer Product Category</h4>
      <div className={style.products}>
        {data.map(({ id, name, svg }) => (
          <div key={id} className={style.product}>
            <img
              alt={name}
              className={style.productImage}
              src={svg}
              title={name}
            />
            <p>{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopulerProduct;
