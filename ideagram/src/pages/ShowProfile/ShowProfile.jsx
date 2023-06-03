import { React, useEffect, useState, useContext } from "react";
import classes from "./ShowProfile.module.scss";
import ProfileIMG from "../../images/user (2).png";
import FollowersIcon from "../../images/Multiple users silhouette.png";
import FollowingsIcon from "../../images/Subscriber.png";
import IdeaIcon from "../../images/IdeaIcon.png";
import FollowIcon from "../../images/Follow.png";
import ReportIcon from "../../images/Report.png";
import FollowersWhiteIcon from "../../images/FollowersWhite.png";
import FollowingsWhiteIcon from "../../images/FollowingsWhite.png";
import IdeaWhiteIcon from "../../images/IdeaWhite.png";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import AuthContext from "../../api/AuthContext";
import { Idea, Skeleton } from "../../components";

const ShowProfile = () => {
  const token = useContext(AuthContext).getAccessToken();
  console.log(token);

  const params = useParams();
  const userId = params.userId;

  const [isLoading, setIsLoading] = useState(true);

  const [userProfileImage, setUserProfileImage] = useState(null);
  const [userUserName, setUserUsername] = useState("");
  const [userBio, setUserBio] = useState("");
  const [userFollowerCount, setUserFollowerCount] = useState(0);
  const [userFollowingCount, setUserFollowingCount] = useState(0);
  const [userIdeaCount, setUserIdeaCount] = useState(0);

  const [showFollowers, setShowFollowers] = useState(false);
  const [showFollowings, setShowFollowings] = useState(false);
  const [showIdeas, setShowIdeas] = useState(true);

  const [userIdeas, setUserIdeas] = useState([]);
  const [userFollowers, setUserFollowers] = useState([]);
  const [userFollowings, setUserFollowings] = useState([]);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const res = await axios.get(
          `http://api.iwantnet.space:8001/api/user/general/profile/${userId}`,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        console.log(res);
        setUserProfileImage(res.data.profile_image);
        setUserUsername(res.data.username);
        setUserBio(res.data.bio);
        setUserFollowerCount(res.data.follower_count);
        setUserFollowingCount(res.data.following_count);
        setUserIdeaCount(res.data.idea_count);

        console.log(res.data.username);

        const ideaRes = await axios.post(
          `http://api.iwantnet.space:8001/api/idea/filter/`,
          { usernames: [res.data.username] },
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        console.log(ideaRes.data);
        setUserIdeas(ideaRes.data);

        const followerRes = await axios.get(
          `http://api.iwantnet.space:8001/api/user/profile/followers/${res.data.username}`,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        console.log(followerRes.data);
        setUserFollowers(followerRes.data);

        const followingRes = await axios.get(
          `http://api.iwantnet.space:8001/api/user/profile/followings/${res.data.username}`,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        console.log(followingRes.data);
        setUserFollowings(followingRes.data);

        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    getUserData();
  }, []);

  const followUser = async () => {
    try {
      const res = await axios.post(
        `http://api.iwantnet.space:8001/api/user/follow-profile/${userUserName}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.profileInfo}>
        <div className={classes.userInfoContainer}>
          <div className={classes.userInfo}>
            <img
              className={classes.profileImg}
              src={
                userProfileImage !== null
                  ? `http://api.iwantnet.space:8001${userProfileImage}`
                  : ProfileIMG
              }
              alt="Profile_Image"
            />
            <div className={classes.desc}>
              <h1>{userUserName}</h1>
              <p>{userBio}</p>
            </div>
          </div>
          <div className={classes.userFeedback}>
            <div>
              <img src={FollowersIcon} alt="Followers" />
              <h5>Followers</h5>
              <p>{userFollowerCount}</p>
            </div>
            <div>
              <img src={FollowingsIcon} alt="Followings" />
              <h5>Followings</h5>
              <p>{userFollowingCount}</p>
            </div>
            <div>
              <img src={IdeaIcon} alt="Idea" />
              <h5>Idea</h5>
              <p>{userIdeaCount}</p>
            </div>
          </div>
        </div>
        <div className={classes.options}>
          <button className={classes.followUserOption} onClick={followUser}>
            <img src={FollowIcon} alt="follow" />
            Follow
          </button>
          <Link to={`/accountReport/${userUserName}`}>
            <button className={classes.reportUserOption}>
              <img src={ReportIcon} alt="report" />
              Report
            </button>
          </Link>
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
        {isLoading ? (
          <Skeleton type="Idea" />
        ) : (
          userIdeas.map((item, index) => (
            <Idea
              type="ShowProfile"
              key={index}
              uuid={item.uuid}
              token={token}
              title={item.title}
              goal={item.goal}
              details={item.details}
              likes={item.likes}
              views={item.views}
              comments={item.comments}
              isShowLikes={item.likes_count === null ? false : true}
              isComments={item.comments_count === null ? false : true}
              isShowViews={item.views_count === null ? false : true}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ShowProfile;
