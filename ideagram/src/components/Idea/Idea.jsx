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
import { Link, useNavigate } from "react-router-dom";

const Idea = ({ type, uuid, title, goal, details, likes, views, comments }) => {
  const [isSave, setIsSave] = useState(false);
  const navigate = useNavigate();

  const manageSave = () => {
    setIsSave(!isSave);
  };

  const goToEditIdea = () => {
    navigate("/ideaStructure/editIdea", { state: { uuid: uuid } });
  };

  return (
    <div className={classes.container}>
      <div className={classes.ideaInfo}>
        <div className={classes.ideaTitle}>
          <h1 className={classes.title}>{title}</h1>
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
            <button className={classes.editIdea} onClick={goToEditIdea}>
              <img src={Edit} alt="Edit_Idea" />
              Edit
            </button>
          )}
        </div>
        <div className={classes.ideaGoal}>
          <p>{goal}</p>
          {type === "MyIdeas" && (
            <button className={classes.deleteIdea}>
              <img src={Delete} alt="Delete_Idea" />
              Delete
            </button>
          )}
        </div>
        <div>
          <p className={classes.ideaDesc}>{details}</p>
        </div>
        <div className={classes.feedback}>
          <div>
            <ThumbUp className={classes.icon} />
            {likes}
          </div>
          <div>
            <img className={classes.icon} src={Eye} alt="Views" />
            {views}
          </div>
          <div>
            <Message className={classes.icon} />
            {comments}
          </div>
        </div>
      </div>
      <img className={classes.ideaImage} src={IdeaIMG} alt="Idea_Image" />
    </div>
  );
};

export default Idea;
