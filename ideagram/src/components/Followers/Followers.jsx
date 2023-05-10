import React from "react";
import classes from "./Followers.module.scss";
import { UserAccount } from "..";

const Followers = () => {
  return (
    <div className={classes.body}>
      <h2>Followers</h2>

      <div className={classes.followers}>
        <UserAccount type="Follower" />
        <UserAccount type="Follower" />
        <UserAccount type="Follower" />
        <UserAccount type="Follower" />
        <UserAccount type="Follower" />
        <UserAccount type="Follower" />
        <UserAccount type="Follower" />
        <UserAccount type="Follower" />
        <UserAccount type="Follower" />
        <UserAccount type="Follower" />
        <UserAccount type="Follower" />
        <UserAccount type="Follower" />
        <UserAccount type="Follower" />
      </div>
    </div>
  );
};

export default Followers;
