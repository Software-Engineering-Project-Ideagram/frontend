import React from "react";
import classes from "./ProfileStructure.module.scss";
import MyProfile from "../../images/MyProfile.png";
import My_Idea from "../../images/MyIdea.png";
import Saved_Ideas from "../../images/SavedIdeas.png";
import Follower from "../../images/Follower.png";
import Following from "../../images/Following.png";
import Edit_Profile from "../../images/EditProfile.png";
import User_Guid from "../../images/UserGuid.png";
import { Routes, Route } from "react-router-dom";
import {
  EditProfile,
  Followings,
  MyIdeas,
  Profile,
  SavedIdeas,
} from "../../components";

const ProfileStructure = () => {
  return (
    <div className={classes.container}>
      <div className={classes.sidebar}>
        <button>
          <img src={MyProfile} alt="Profile" /> Profile
        </button>
        <button>
          <img src={My_Idea} alt="My_Idea" /> My Idea
        </button>
        <button>
          <img src={Saved_Ideas} alt="Saved_Ideas" /> Saved Ideas
        </button>
        <button>
          <img src={Follower} alt="Follower" /> Follower
        </button>
        <button>
          <img src={Following} alt="Following" /> Following
        </button>
        <button>
          <img src={Edit_Profile} alt="Edit_Profile" /> Edit Profile
        </button>
        <button>
          <img src={User_Guid} alt="User_Guid" /> User Guid
        </button>
      </div>
      <div className={classes.main}>
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/myIdeas" element={<MyIdeas />} />
          <Route path="/savedIdeas" element={<SavedIdeas />} />
          <Route path="/followings" element={<Followings />} />
          <Route path="/editProfile" element={<EditProfile />} />
        </Routes>
      </div>
    </div>
  );
};

export default ProfileStructure;
