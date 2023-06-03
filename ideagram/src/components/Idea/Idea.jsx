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
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { ideasActions } from "../../store/idea";

const Idea = ({
  type,
  uuid,
  token,
  title,
  goal,
  details,
  likes,
  views,
  comments,
  isShowLikes = true,
  isShowComments = true,
  isShowViews = true,
}) => {
  const [isSave, setIsSave] = useState(false);
  const dispatch = useDispatch();

  const manageSave = async (e) => {
    e.preventDefault();
    setIsSave(!isSave);
    try {
      await axios.post(
        `http://api.iwantnet.space:8001/api/idea/save-idea/${uuid}`,
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  const manageDelete = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `http://api.iwantnet.space:8001/api/idea/evolution/detail/${uuid}`,
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );

      dispatch(
        ideasActions.deleteIdea({
          uuid: uuid,
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Link className={classes.container} to={`/stepsStructure/ideaShow/${uuid}`}>
      <div className={classes.ideaInfo}>
        <div className={classes.ideaTitle}>
          <h1 className={classes.title}>{title}</h1>
          {(type === "ShowProfiles" ||
            type === "MainPage" ||
            type === "CategoriesPage") && (
            <button
              className={`${classes.options} ${classes.saveIdea}`}
              onClick={(e) => {
                manageSave(e);
              }}
            >
              {isSave ? (
                <Bookmark className={classes.saveIdeaButton} />
              ) : (
                <BookmarkBorder className={classes.saveIdeaButton} />
              )}
              Save
            </button>
          )}
          {type === "SavedIdeas" && (
            <button className={`${classes.options} ${classes.deleteIdea}`}>
              <img src={Delete} alt="Delete_Idea" />
              Delete
            </button>
          )}
          {type === "MyIdeas" && (
            <Link
              className={`${classes.options} ${classes.editIdea}`}
              to={`/ideaStructure/editIdea/${uuid}`}
            >
              <img src={Edit} alt="Edit_Idea" />
              Edit
            </Link>
          )}
        </div>
        <div className={classes.ideaGoal}>
          <p>{goal}</p>
          {type === "MyIdeas" && (
            <button
              className={classes.deleteIdea}
              onClick={(e) => {
                manageDelete(e);
              }}
            >
              <img src={Delete} alt="Delete_Idea" />
              Delete
            </button>
          )}
        </div>
        <div>
          <p className={classes.ideaDesc}>{details}</p>
        </div>
        <div className={classes.feedback}>
          {isShowLikes && (
            <div>
              <ThumbUp className={classes.icon} />
              {likes}
            </div>
          )}
          {isShowViews && (
            <div>
              <img className={classes.icon} src={Eye} alt="Views" />
              {views}
            </div>
          )}
          {isShowComments && (
            <div>
              <Message className={classes.icon} />
              {comments}
            </div>
          )}
        </div>
      </div>
      <img className={classes.ideaImage} src={IdeaIMG} alt="Idea_Image" />
    </Link>
  );
};

export default Idea;
