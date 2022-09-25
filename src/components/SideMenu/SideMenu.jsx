import React, { useState } from "react";
import SingleMenuBar from "../SingleMenuBar/SingleMenuBar";
import style from "./sideMenu.module.css";
import { data } from "./menu.js";

const SideMenu = () => {
  const [hover, setHover] = useState(false);
  const [hoverItemId, setHoverItemId] = useState(0);

  return (
    <div className={style.sidemenu}>
      {data.map((item) => (
        <div className={style.sidemenuParent} key={item.id}>
          <SingleMenuBar
            name={item.name}
            onHoverFunc={setHover}
            setHoverItemId={setHoverItemId}
            parentId={item.id}
            hasChild={item.hasChild}
          />
          {hover && (
            <div className={style.sidemenuChild}>
              {!!item.hasChild &&
                item.id === hoverItemId &&
                item.childs.map((childitem) => (
                  <SingleMenuBar name={childitem.name} />
                ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SideMenu;
