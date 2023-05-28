import React from "react";
import classes from "./MyIdeas.module.scss";
import Add from "../../images/add.png";
import { Idea } from "../../components";
import IdeaFilter from "../../images/filter.png";
import { IdeaFilterSmallMenu } from "../SmallMenus";
import { useState } from "react";

const MyIdeas = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);

  const showMenuHandler = () => {
    setIsShowMenu(!isShowMenu);
  };

  return (
    <div className={classes.body}>
      <div className={classes.titleContainer}>
        <h2>Saved Ideas</h2>
        <div className={classes.smallIdeaFilterMenu}>
          <button
            className={classes.smallIdeaFilterMenuBTN}
            onClick={showMenuHandler}
          >
            <img src={IdeaFilter} alt="IdeaFilter" />
          </button>
          <IdeaFilterSmallMenu
            showMenuHandler={showMenuHandler}
            isShowMenu={isShowMenu}
          />
        </div>
      </div>
      <div className={classes.main}>
        <div className={classes.ideasContainer}>
          <button className={classes.addIdea}>
            <img src={Add} alt="add" />
            Add
          </button>
          <div className={classes.ideas}>
            <Idea type="MyIdeas" />
            <Idea type="MyIdeas" />
            <Idea type="MyIdeas" />
            <Idea type="MyIdeas" />
            <Idea type="MyIdeas" />
            <Idea type="MyIdeas" />
            <Idea type="MyIdeas" />
            <Idea type="MyIdeas" />
            <Idea type="MyIdeas" />
            <Idea type="MyIdeas" />
            <Idea type="MyIdeas" />
            <Idea type="MyIdeas" />
          </div>
        </div>
        <div className={classes.ideaFilter}>
          <h3>Filters</h3>

          <label for="Arts" className={classes.filter}>
            Arts
            <input type="checkbox" value="1" id="Arts" />
            <span className={classes.custom}></span>
          </label>

          <label for="DesignTech" className={classes.filter}>
            Design & Tech
            <input type="checkbox" value="1" id="DesignTech" />
            <span className={classes.custom}></span>
          </label>

          <label for="FoodCraft" className={classes.filter}>
            Food & Craft
            <input type="checkbox" value="1" id="FoodCraft" />
            <span className={classes.custom}></span>
          </label>

          <label for="Games" className={classes.filter}>
            Games
            <input type="checkbox" value="1" id="Games" />
            <span className={classes.custom}></span>
          </label>

          <label for="Films" className={classes.filter}>
            Films
            <input type="checkbox" value="1" id="Films" />
            <span className={classes.custom}></span>
          </label>

          <label for="Music" className={classes.filter}>
            Music
            <input type="checkbox" value="1" id="Music" />
            <span className={classes.custom}></span>
          </label>

          <label for="Publishing" className={classes.filter}>
            Publishing
            <input type="checkbox" value="1" id="Publishing" />
            <span className={classes.custom}></span>
          </label>

          <label for="Science" className={classes.filter}>
            Science
            <input type="checkbox" value="1" id="Science" />
            <span className={classes.custom}></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default MyIdeas;
