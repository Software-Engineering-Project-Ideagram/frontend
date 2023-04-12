import React from "react";
import classes from "./Idea.module.scss";
import IdeaIMG from "../../images/idea.jpg";
import {
  Bookmark,
  BookmarkBorder,
  ThumbUp,
  Message,
} from "@mui/icons-material";
import Eye from "../../images/Eye.png";
import { useState } from "react";

const Idea = () => {
  const [isSave, setIsSave] = useState(false);

  const manageSave = () => {
    setIsSave(!isSave);
  };

  return (
    <div className={classes.container}>
      <div className={classes.ideaInfo}>
        <div className={classes.ideaTitle}>
          <h1 className={classes.title}>Idea Title</h1>
          <button className={classes.saveIdea} onClick={manageSave}>
            {isSave ? <BookmarkBorder /> : <Bookmark />}
            Save
          </button>
        </div>
        <div className={classes.ideaGoal}>
          <p>Idea Goal</p>
        </div>
        <div>
          <p className={classes.ideaDesc}>
            ideaDesc_ideaDesc_ideaDesc_ideaDesc_ideaDesc_ideaDesc_ideaDesc_ideaDesc_ideaDesc_ideaDesc
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
