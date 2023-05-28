import React from "react";
import classes from "./UserAccount.module.scss";
import Delete from "../../images/delete.png";
import Profile from "../../images/profile.jpg";
import Followers from "../../images/Multiple users silhouette.png";
import Followings from "../../images/Subscriber.png";
import Ideas from "../../images/IdeaIcon.png";

const UserAccount = ({ type = "" }) => {
  return (
    <div className={classes.container}>
      {type !== "AccountReport" && (
        <div className={classes.delete}>
          <button>
            <img src={Delete} alt="delete" />
            Delete
          </button>
        </div>
      )}
      <div className={classes.userInfo}>
        <img src={Profile} alt="profile" />

        <p>Robert Forster</p>
      </div>
      <div className={classes.userFeedback}>
        <div>
          <img className={classes.icon} src={Followers} alt="Followers" />
          50
        </div>
        <div>
          <img className={classes.icon} src={Followings} alt="Followings" />
          60
        </div>
        <div>
          <img className={classes.icon} src={Ideas} alt="Ideas" />
          70
        </div>
      </div>
    </div>
  );
};

export default UserAccount;
