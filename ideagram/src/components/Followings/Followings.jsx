import React from "react";
import classes from "./Followings.module.scss";
import { UserAccount } from "../../components";

const Followings = () => {
  return (
    <div className={classes.body}>
      <h2>Followings</h2>

      <div className={classes.followings}>
        <UserAccount type="Followings" />
        <UserAccount type="Followings" />
        <UserAccount type="Followings" />
        <UserAccount type="Followings" />
        <UserAccount type="Followings" />
        <UserAccount type="Followings" />
        <UserAccount type="Followings" />
        <UserAccount type="Followings" />
        <UserAccount type="Followings" />
        <UserAccount type="Followings" />
        <UserAccount type="Followings" />
        <UserAccount type="Followings" />
        <UserAccount type="Followings" />
      </div>
    </div>
  );
};

export default Followings;
