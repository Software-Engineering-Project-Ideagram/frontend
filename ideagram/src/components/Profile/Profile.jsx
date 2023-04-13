import React from "react";
import classes from "./Profile.module.scss";
import UserProfile from "../../images/profile.jpg";
import Next from "../../images/next.png";
import Telegram from "../../images/Telegram.png";
import Linkedin from "../../images/Linkedin.png";
import Github from "../../images/Github.png";
import Instagram from "../../images/Instagram.png";
import Link from "../../images/Link.png";
import Previous from "../../images/prev.png";
import { useState } from "react";

const Profile = () => {
  const [nextPage, setNextPage] = useState("first");

  const handleNext = () => {
    setNextPage("sec");
  };

  const handlePrev = () => {
    setNextPage("first");
  };

  return (
    <div className={classes.body}>
      <h2>Profile</h2>
      <div className={classes.profileInfo}>
        {nextPage === "first" ? (
          <div className={classes.firstPageInfo}>
            <div className={classes.info}>
              <img
                src={UserProfile}
                alt="User_Profile"
                className={classes.profileImage}
              />
              <div className={classes.userPersonalInfo}>
                <div className={classes.enterInfo}>
                  <label>First Name</label>
                  <p>First Name</p>
                </div>
                <div className={classes.enterInfo}>
                  <label>Last Name</label>
                  <p>Last Name</p>
                </div>
                <div className={classes.sideBySide}>
                  <div className={classes.enterGender}>
                    <label>Gender</label>
                    <p>Gender</p>
                  </div>
                  <div className={classes.enterBirthDate}>
                    <label>Birth Date</label>
                    <p>Birth Date</p>
                  </div>
                </div>
                <div className={classes.enterInfo}>
                  <label>Address</label>
                  <p>Address</p>
                </div>
                <div className={classes.enterInfo}>
                  <label>Username</label>
                  <p>Username</p>
                </div>
              </div>
            </div>

            <div className={classes.options}>
              <button onClick={handleNext}>
                <img src={Next} alt="next" />
                Next
              </button>
            </div>
          </div>
        ) : (
          <div className={classes.secPageInfo}>
            <div className={classes.bio}>
              <label>Bio</label>
              <p></p>
            </div>
            <div className={classes.info}>
              <div>
                <label>Profile Status</label>
                <p></p>
              </div>
              <div>
                <label>Activation Status</label>
                <p></p>
              </div>
              <div>
                <label>Ban Status</label>
                <p></p>
              </div>
            </div>
            <div className={classes.linksContainer}>
              <label>Links</label>
              <div className={classes.links}>
                <img src={Telegram} alt="telegram" />
                <img src={Github} alt="github" />
                <img src={Instagram} alt="instagram" />
                <img src={Linkedin} alt="linkedin" />
                <img src={Link} alt="link" />
              </div>
            </div>
            <div className={classes.options}>
              <button onClick={handlePrev}>
                <img src={Previous} alt="previous" />
                Previous
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
