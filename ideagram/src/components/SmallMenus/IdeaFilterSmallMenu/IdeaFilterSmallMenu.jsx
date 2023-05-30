import React from "react";
import classes from "./IdeaFilterSmallMenu.module.scss";

const IdeaFilterSmallMenu = ({ isShowMenu }) => {
  return (
    <div
      className={`${classes.ideaFilter} ${
        isShowMenu ? classes.visible : classes.invisible
      }`}
    >
      <h3>Filters</h3>

      <label for="Arts" className={classes.filter}>
        Arts
        <input type="checkbox" value="1" id="Arts" />
        <span className={classes.custom}></span>
      </label>

      <label for="DesignTech" className={classes.filter}>
        Tech
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
  );
};

export default IdeaFilterSmallMenu;
