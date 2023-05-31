import React from "react";
import classes from "./StepsStructureSmallMenu.module.scss";

const StepsStructureSmallMenu = ({ showMenuHandler, isShowMenu }) => {
  return (
    <ul
      className={`${classes.menu} ${
        isShowMenu ? classes.visible : classes.invisible
      }`}
    >
      <li onClick={showMenuHandler}>
        <button>Idea</button>
      </li>
      <li onClick={showMenuHandler}>
        <button>Collaboration Request</button>
      </li>
      <li onClick={showMenuHandler}>
        <button>Evolution Step</button>
      </li>
      <li onClick={showMenuHandler}>
        <button>Financial Step</button>
      </li>
      <li onClick={showMenuHandler}>
        <button>Official Information</button>
      </li>
    </ul>
  );
};

export default StepsStructureSmallMenu;