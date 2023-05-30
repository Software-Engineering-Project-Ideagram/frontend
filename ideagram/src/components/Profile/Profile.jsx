import { React, useContext, useEffect } from "react";
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
import AuthContext from "../../api/AuthContext";
import axios from "axios";

const Profile = () => {
  const token = useContext(AuthContext).getAccessToken();
  console.log(token);
  const [nextPage, setNextPage] = useState("first");
  const [userData, setUserData] = useState({});

  const handleNext = () => {
    setNextPage("sec");
  };

  const handlePrev = () => {
    setNextPage("first");
  };

  useEffect(() => {
    const getUserData = async () => {
      try {
        const res = await axios.get(
          "http://api.iwantnet.space:8001/api/user/profile/",
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        console.log(res);
        setUserData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUserData();
  }, []);

  return (
    <div className={classes.body}>
      <h2>Profile</h2>
      <div className={classes.profileInfo}>
        {nextPage === "first" ? (
          <div className={classes.firstPageInfo}>
            <div className={classes.info}>
              <img
                src={
                  userData.profile_image == null
                    ? UserProfile
                    : userData.profile_image
                }
                alt="User_Profile"
                className={classes.profileImage}
              />
              <div className={classes.userPersonalInfo}>
                <div className={classes.enterInfo}>
                  <label>First Name</label>
                  <p>{userData.first_name}</p>
                </div>
                <div className={classes.enterInfo}>
                  <label>Last Name</label>
                  <p>{userData.last_name}</p>
                </div>
                <div className={classes.sideBySide}>
                  <div className={classes.enterGender}>
                    <label>Gender</label>
                    <p>{userData.gender}</p>
                  </div>
                  <div className={classes.enterBirthDate}>
                    <label>Birth Date</label>
                    <p>{userData.birth_date}</p>
                  </div>
                </div>
                <div className={classes.enterInfo}>
                  <label>Address</label>
                  <p>{userData.address}</p>
                </div>
                <div className={classes.enterInfo}>
                  <label>Username</label>
                  <p>{userData.userName}</p>
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
              <p>{userData.bio}</p>
            </div>
            <div className={classes.info}>
              <div>
                <label>Profile Status</label>
                <p>{userData.is_public ? "Public" : "Private"}</p>
              </div>
              <div>
                <label>Activation Status</label>
                <p>{userData.is_active ? "Active" : "Inactive"}</p>
              </div>
              <div>
                <label>Ban Status</label>
                <p>{userData.is_banned ? "Banned" : "Not Banned"}</p>
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
