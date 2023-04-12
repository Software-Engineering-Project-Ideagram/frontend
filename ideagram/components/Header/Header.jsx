import React from "react";
import classes from "./Header.module.scss";
import Login from "../../images/login.png";
import Search from "../../images/search.png";
import Home from "../../images/home.png";
import User from "../../images/user.png";

const Header = () => {
  return (
    <div className={classes.container}>
      <div className={classes.options}>
        <div>
          <img src={Login} alt="login" />
        </div>
        <div>
          <img src={Search} alt="search" />
        </div>
        <div>
          <img src={Home} alt="home" />
        </div>
      </div>

      <div className={classes.title}>
        <h1>Ideagram</h1>
      </div>

      <div className={classes.options}>
        <div className={classes.account}>
          <h4>Account</h4>
        </div>
        <div>
          <img src={User} alt="user" />
        </div>
      </div>
    </div>
  );
};

export default Header;
