import React from "react";
import classes from "./Header.module.scss";
import Login from "../../images/login.png";
import Search from "../../images/search.png";
import Home from "../../images/home.png";
import User from "../../images/user.png";
import { useState } from "react";
import Skeleton from "../Skeleton/Skeleton";

const Header = () => {
  const [isLoading, setIsLoading] = useState(true);

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

      {isLoading ? (
        <Skeleton type="Toolbar" />
      ) : (
        <div className={classes.options}>
          <div className={classes.account}>
            <h4>Account</h4>
          </div>
          <div>
            <img src={User} alt="user" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
