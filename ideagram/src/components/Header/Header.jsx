import React from "react";
import classes from "./Header.module.scss";
import Login from "../../images/login.png";
import Search from "../../images/search.png";
import Home from "../../images/home.png";
import User from "../../images/user.png";
import OptionsMenu from "../../images/userIcon.png";
import Menu from "../../images/burger-menu.png";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Skeleton } from "../";
import {
  MainPageSmallMenu,
  SmallOptionsMenu,
  IdeaDevelopmentMenu,
  UserFeedbackSmallMenu,
  ProfileStructureSmallMenu,
  IdeaStructureSmallMenu,
  StepsStructureSmallMenu,
} from "../SmallMenus";

const Header = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [isShowOptionsMenu, setIsShowOptionsMenu] = useState(false);

  const location = useLocation();
  const url = location.pathname.split("/")[1];

  const showMenuHandler = () => {
    setIsShowOptionsMenu(false);
    setIsShowMenu(!isShowMenu);
  };

  const showOptionsMenuHandler = () => {
    setIsShowMenu(false);
    setIsShowOptionsMenu(!isShowOptionsMenu);
  };

  return (
    <div className={classes.container}>
      <div className={classes.options}>
        <div className={classes.smallOptionsMenu}>
          <button
            className={classes.showOptionsMenuBTN}
            onClick={showOptionsMenuHandler}
          >
            <img src={OptionsMenu} alt="options_menu" />
          </button>
          <SmallOptionsMenu
            showOptionsMenuHandler={showOptionsMenuHandler}
            isShowOptionsMenu={isShowOptionsMenu}
          />
        </div>
        <div>
          <button>
            <img src={Login} alt="login" />
          </button>
        </div>
        <div>
          <button>
            <img src={Search} alt="search" />
          </button>
        </div>
        <div>
          <button>
            <img src={Home} alt="home" />
          </button>
        </div>
      </div>

      <div className={classes.title}>
        <h1>Ideagram</h1>
      </div>

      {isLoading ? (
        <Skeleton type="Toolbar" />
      ) : (
        <div className={classes.userInfo}>
          <div className={classes.account}>
            <h4>Account</h4>
          </div>
          <div className={classes.profile}>
            <img src={User} alt="user" />
          </div>
          <div className={classes.smallMenu}>
            <button className={classes.showMenuBTN} onClick={showMenuHandler}>
              <img src={Menu} alt="menu" />
            </button>
            {url === "mainPage" && (
              <MainPageSmallMenu
                showMenuHandler={showMenuHandler}
                isShowMenu={isShowMenu}
              />
            )}

            {url === "evolutionStep" && (
              <IdeaDevelopmentMenu
                showMenuHandler={showMenuHandler}
                isShowMenu={isShowMenu}
              />
            )}

            {url === "showProfile" && (
              <UserFeedbackSmallMenu
                showMenuHandler={showMenuHandler}
                isShowMenu={isShowMenu}
              />
            )}

            {url === "profileStructure" && (
              <ProfileStructureSmallMenu
                showMenuHandler={showMenuHandler}
                isShowMenu={isShowMenu}
              />
            )}

            {url === "ideaStructure" && (
              <IdeaStructureSmallMenu
                showMenuHandler={showMenuHandler}
                isShowMenu={isShowMenu}
              />
            )}

            {url === "stepsStructure" && (
              <StepsStructureSmallMenu
                showMenuHandler={showMenuHandler}
                isShowMenu={isShowMenu}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
