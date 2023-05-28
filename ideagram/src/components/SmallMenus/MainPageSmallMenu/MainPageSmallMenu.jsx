import React from "react";
import classes from "./MainPageSmallMenu.module.scss";

const MainPageSmallMenu = ({ showMenuHandler, isShowMenu }) => {
  return (
    <ul
      className={`${classes.menu} ${
        isShowMenu ? classes.visible : classes.invisible
      }`}
    >
      <li onClick={showMenuHandler}>
        <button>Arts</button>
      </li>
      <li onClick={showMenuHandler}>
        <button>Design & Tech</button>
      </li>
      <li onClick={showMenuHandler}>
        <button>Food</button>
      </li>
      <li onClick={showMenuHandler}>
        <button>Games</button>
      </li>
      <li onClick={showMenuHandler}>
        <button>Films</button>
      </li>
      <li onClick={showMenuHandler}>
        <button>Music</button>
      </li>
      <li onClick={showMenuHandler}>
        <button>Publishing</button>
      </li>
      <li onClick={showMenuHandler}>
        <button>Science</button>
      </li>
    </ul>
  );
};

export default MainPageSmallMenu;
