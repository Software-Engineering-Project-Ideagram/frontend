import { React, useState, useContext, useEffect } from "react";
import classes from "./Followings.module.scss";
import { UserAccount } from "..";
import AuthContext from "../../api/AuthContext";
import axios from "axios";

const Followings = ({ token }) => {
  const [userUserName, setUserUserName] = useState("");
  const [userFollowers, setUserFollowers] = useState([]);

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
        setUserUserName(res.data.username);
        getAllFollowers();
      } catch (err) {
        console.log(err);
      }
    };
    getUserData();
  }, []);

  const getAllFollowers = async () => {
    try {
      const res = await axios.get(
        `http://api.iwantnet.space:8001/api/user/profile/followings/${userUserName}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      console.log(res);
      setUserFollowers(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={classes.body}>
      <h2>Followings</h2>

      <div className={classes.followings}>
        {userFollowers.map((item) => (
          <UserAccount
            type="Follower"
            profileImage={item.profile_image}
            name={`${item.first_name} ${item.last_name}`}
            followers={item.follower_count}
            followings={item.following_count}
          />
        ))}
      </div>
    </div>
  );
};

export default Followings;
