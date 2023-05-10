import React from "react";
import classes from "./ShowProfile.module.scss";
import ProfileIMG from "../../images/profile.jpg";
import FollowersIcon from "../../images/Multiple users silhouette.png";
import FollowingsIcon from "../../images/Subscriber.png";
import IdeaIcon from "../../images/IdeaIcon.png";
import FollowIcon from "../../images/Follow.png";
import ReportIcon from "../../images/Report.png";
import FollowersWhiteIcon from "../../images/FollowersWhite.png";
import FollowingsWhiteIcon from "../../images/FollowingsWhite.png";
import IdeaWhiteIcon from "../../images/IdeaWhite.png";
import { Idea } from "../../components";

const ShowProfile = () => {
  return (
    <div className={classes.container}>
      <div className={classes.profileInfo}>
        <div className={classes.userInfoContainer}>
          <div className={classes.userInfo}>
            <img
              className={classes.profileImg}
              src={ProfileIMG}
              alt="Profile_Image"
            />
            <div className={classes.desc}>
              <h1>Username</h1>
              <p>
                Description Description Description Description Description
                Description Description Description Description
              </p>
            </div>
          </div>
          <div className={classes.userFeedback}>
            <div>
              <img src={FollowersIcon} alt="Followers" />
              <h5>Followers</h5>
              <p>10</p>
            </div>
            <div>
              <img src={FollowingsIcon} alt="Followings" />
              <h5>Followings</h5>
              <p>10</p>
            </div>
            <div>
              <img src={IdeaIcon} alt="Idea" />
              <h5>Idea</h5>
              <p>10</p>
            </div>
          </div>
        </div>
        <div className={classes.options}>
          <button className={classes.followUserOption}>
            <img src={FollowIcon} alt="follow" />
            Follow
          </button>
          <button className={classes.reportUserOption}>
            <img src={ReportIcon} alt="report" />
            Report
          </button>
        </div>
      </div>
      <div className={classes.userFeedbackOptions}>
        <button>
          <img src={IdeaWhiteIcon} alt="Ideas" />
          Ideas
        </button>
        <button>
          <img src={FollowersWhiteIcon} alt="Followers" />
          Followers
        </button>
        <button>
          <img src={FollowingsWhiteIcon} alt="Followings" />
          Followings
        </button>
      </div>
      <div className={classes.userIdeas}>
        <Idea type="ShowProfile" />
        <Idea type="ShowProfile" />
        <Idea type="ShowProfile" />
        <Idea type="ShowProfile" />
        <Idea type="ShowProfile" />
        <Idea type="ShowProfile" />
        <Idea type="ShowProfile" />
        <Idea type="ShowProfile" />
      </div>
    </div>
  );
};

export default ShowProfile;
