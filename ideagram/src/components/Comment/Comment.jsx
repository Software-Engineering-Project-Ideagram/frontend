import React from "react";
import classes from "./Comment.module.scss";

const Comment = ({ profile, text }) => {
  return (
    <div className={classes.body}>
      <img src={profile} alt="profile" />
      <p>{text}</p>
    </div>
  );
};

export default Comment;
