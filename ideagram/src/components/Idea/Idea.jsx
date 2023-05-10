import React from "react";
import classes from "./Idea.module.scss";
import IdeaIMG from "../../images/idea.png";
import {
  Bookmark,
  BookmarkBorder,
  ThumbUp,
  Message,
} from "@mui/icons-material";
import Eye from "../../images/Eye.png";
import Delete from "../../images/delete.png";
import Edit from "../../images/edit2.png";
import { useState } from "react";

const Idea = ({ type }) => {
  const [isSave, setIsSave] = useState(false);

  const manageSave = () => {
    setIsSave(!isSave);
  };

  return (
    <div className={classes.container}>
      <div className={classes.ideaInfo}>
        <div className={classes.ideaTitle}>
          <h1 className={classes.title}>what doesn't kill you</h1>
          {(type === "ShowProfiles" ||
            type === "MainPage" ||
            type === "CategoriesPage") && (
            <button className={classes.saveIdea} onClick={manageSave}>
              {isSave ? (
                <BookmarkBorder className={classes.saveIdeaButton} />
              ) : (
                <Bookmark className={classes.saveIdeaButton} />
              )}
              Save
            </button>
          )}
          {type === "SavedIdeas" && (
            <button className={classes.deleteIdea}>
              <img src={Delete} alt="Delete_Idea" />
              Delete
            </button>
          )}
          {type === "MyIdeas" && (
            <button className={classes.editIdea}>
              <img src={Edit} alt="Edit_Idea" />
              Edit
            </button>
          )}
        </div>
        <div className={classes.ideaGoal}>
          <p>Release of music</p>
          {type === "MyIdeas" && (
            <button className={classes.deleteIdea}>
              <img src={Delete} alt="Delete_Idea" />
              Delete
            </button>
          )}
        </div>
        <div>
          <p className={classes.ideaDesc}>
            The piece of music composed and sung by Kelly Clarkson is ready to
            be recorded in the studio and released.
          </p>
        </div>
        <div className={classes.feedback}>
          <div>
            <ThumbUp className={classes.icon} />
            50
          </div>
          <div>
            <img className={classes.icon} src={Eye} alt="Views" />
            60
          </div>
          <div>
            <Message className={classes.icon} />
            70
          </div>
        </div>
      </div>
      <img className={classes.ideaImage} src={IdeaIMG} alt="Idea_Image" />
    </div>
  );
};

export default Idea;
