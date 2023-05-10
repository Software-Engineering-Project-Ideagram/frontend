import React from "react";
import classes from "./ProfileStructure.module.scss";
import MyProfile from "../../images/MyProfile.png";
import My_Idea from "../../images/MyIdea.png";
import Saved_Ideas from "../../images/SavedIdeas.png";
import Follower from "../../images/Follower.png";
import Following from "../../images/Following.png";
import Edit_Profile from "../../images/EditProfile.png";
import User_Guid from "../../images/UserGuid.png";
import { useLocation, Link } from "react-router-dom";
import {
  EditProfile,
  Followings,
  MyIdeas,
  Profile,
  SavedIdeas,
} from "../../components";

const ProfileStructure = () => {
  const location = useLocation();
  console.log(location.pathname);
  const url =
    location.pathname.split("/")[location.pathname.split("/").length - 1];

  return (
    <div className={classes.container}>
      <div className={classes.sidebar}>
        <Link className={classes.sidebarOptions} to="/profileStructure/profile">
          <img src={MyProfile} alt="Profile" /> Profile
        </Link>
        <Link className={classes.sidebarOptions} to="/profileStructure/myIdeas">
          <img src={My_Idea} alt="My_Idea" /> My Idea
        </Link>
        <Link
          className={classes.sidebarOptions}
          to="/profileStructure/savedIdeas"
        >
          <img src={Saved_Ideas} alt="Saved_Ideas" /> Saved Ideas
        </Link>
        <Link
          className={classes.sidebarOptions}
          to="/profileStructure/followers"
        >
          <img src={Follower} alt="Follower" /> Follower
        </Link>
        <Link
          className={classes.sidebarOptions}
          to="/profileStructure/followings"
        >
          <img src={Following} alt="Following" /> Following
        </Link>
        <Link
          className={classes.sidebarOptions}
          to="/profileStructure/editProfile"
        >
          <img src={Edit_Profile} alt="Edit_Profile" /> Edit Profile
        </Link>
        <Link className={classes.sidebarOptions}>
          <img src={User_Guid} alt="User_Guid" /> User Guid
        </Link>
      </div>
      <div className={classes.main}>
        {
          {
            profile: <Profile />,
            myIdeas: <MyIdeas />,
            savedIdeas: <SavedIdeas />,
            followings: <Followings />,
            editProfile: <EditProfile />,
          }[url]
        }
      </div>
    </div>
  );
};

export default ProfileStructure;
