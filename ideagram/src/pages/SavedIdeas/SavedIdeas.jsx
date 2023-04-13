import React from "react";
import classes from "./SavedIdeas.module.scss";
import MyProfile from "../../images/MyProfile.png";
import My_Idea from "../../images/MyIdea.png";
import Saved_Ideas from "../../images/SavedIdeas.png";
import Follower from "../../images/Follower.png";
import Following from "../../images/Following.png";
import Edit_Profile from "../../images/EditProfile.png";
import User_Guid from "../../images/UserGuid.png";
import { Idea } from "../../components";

const SavedIdeas = () => {
  return (
    <div className={classes.container}>
      <div className={classes.sidebar}>
        <button>
          <img src={MyProfile} alt="Profile" /> Profile
        </button>
        <button>
          <img src={My_Idea} alt="My_Idea" /> My Idea
        </button>
        <button>
          <img src={Saved_Ideas} alt="Saved_Ideas" /> Saved Ideas
        </button>
        <button>
          <img src={Follower} alt="Follower" /> Follower
        </button>
        <button>
          <img src={Following} alt="Following" /> Following
        </button>
        <button>
          <img src={Edit_Profile} alt="Edit_Profile" /> Edit Profile
        </button>
        <button>
          <img src={User_Guid} alt="User_Guid" /> User Guid
        </button>
      </div>

      <div className={classes.body}>
        <h2>Saved Ideas</h2>
        <div className={classes.main}>
          <div className={classes.ideasContainer}>
            <Idea type="SavedIdeas" />
            <Idea type="SavedIdeas" />
            <Idea type="SavedIdeas" />
            <Idea type="SavedIdeas" />
            <Idea type="SavedIdeas" />
            <Idea type="SavedIdeas" />
            <Idea type="SavedIdeas" />
            <Idea type="SavedIdeas" />
            <Idea type="SavedIdeas" />
            <Idea type="SavedIdeas" />
            <Idea type="SavedIdeas" />
            <Idea type="SavedIdeas" />
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
    </div>
  );
};

export default SavedIdeas;
