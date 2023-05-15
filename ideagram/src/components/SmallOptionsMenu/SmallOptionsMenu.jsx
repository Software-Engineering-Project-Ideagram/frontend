import React from "react";
import classes from "./SmallOptionsMenu.module.scss";
import User from "../../images/user.png";
import Login from "../../images/login.png";
import Search from "../../images/search.png";
import Home from "../../images/home.png";

const SmallOptionsMenu = ({ showOptionsMenuHandler, isShowOptionsMenu }) => {
  return (
    <ul
      className={`${(showOptionsMenuHandler, classes.optionsMenu)} ${
        isShowOptionsMenu ? classes.visible : classes.invisible
      }`}
    >
      <li onClick={showOptionsMenuHandler} className={classes.userProfile}>
        <button>
          <img src={User} alt="user" /> <h4>Account</h4>
        </button>
      </li>
      <li onClick={showOptionsMenuHandler}>
        <button>
          <img src={Login} alt="login" />
        </button>
      </li>
      <li onClick={showOptionsMenuHandler}>
        <button>
          <img src={Home} alt="home" />
        </button>
      </li>
      <li className={classes.searchIdea}>
        <button onClick={showOptionsMenuHandler}>
          <img src={Search} alt="search" />
        </button>
        <input type="text" />
      </li>
    </ul>
  );
};

export default SmallOptionsMenu;
