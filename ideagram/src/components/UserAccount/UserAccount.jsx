import React from "react";
import classes from "./UserAccount.module.scss";
import Delete from "../../images/delete.png";
import Profile from "../../images/user (2).png";
import Followers from "../../images/Multiple users silhouette.png";
import Followings from "../../images/Subscriber.png";
import Ideas from "../../images/IdeaIcon.png";
import { Link } from "react-router-dom";

const UserAccount = ({
  type = "",
  profileImage,
  name,
  followers = 0,
  followings = 0,
  ideas = 0,
}) => {
  return (
    <Link to={`/showProfile/${name}`} className={classes.link}>
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
          <img
            src={
              profileImage === null
                ? Profile
                : `http://api.iwantnet.space:8001${profileImage}`
            }
            alt="profile"
          />
          <p>{name}</p>
        </div>
        <div className={classes.userFeedback}>
          <div>
            <img className={classes.icon} src={Followers} alt="Followers" />
            {followers}
          </div>
          <div>
            <img className={classes.icon} src={Followings} alt="Followings" />
            {followings}
          </div>
          <div>
            <img className={classes.icon} src={Ideas} alt="Ideas" />
            {ideas}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default UserAccount;
