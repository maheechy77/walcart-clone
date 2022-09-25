import React from "react";
import style from "./singleMenuBar.module.css";
import { AiOutlineRight } from "react-icons/ai";
import { FaProductHunt } from "react-icons/fa";

const SingleMenuBar = ({
  name = "SingleMenuBar",
  hasChild = false,
  onHoverFunc = () => {},
  parentId = 0,
  setHoverItemId = () => {},
}) => {
  const changeHoverState = (bool, id) => {
    onHoverFunc(bool);
    setHoverItemId(id);
  };
  return (
    <div
      onMouseOver={() => changeHoverState(true, parentId)}
      onMouseLeave={() => changeHoverState(false, parentId)}
      className={style.singleSidebar}
    >
      <div className={style.productInfo}>
        <FaProductHunt />
        {name}
      </div>
      {hasChild && <AiOutlineRight size={16} />}
    </div>
  );
};

export default SingleMenuBar;
