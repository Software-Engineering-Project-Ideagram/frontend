import { React, useContext, useEffect, useState } from "react";
import classes from "./IdeaShow.module.scss";
import ArtLabel from "../../images/ArtLabel.png";
import GamesLabel from "../../images/GamesLabel.png";
import DesignTechLabel from "../../images/DesignTechLabel.png";
import FoodCraftLabel from "../../images/FoodCraftLabel.png";
import FilmsLabel from "../../images/FilmsLabel.png";
import MusicLabel from "../../images/MusicLabel.png";
import PublishingLabel from "../../images/PublishingLabel.png";
import ScienceLabel from "../../images/ScienceLabel.png";
import IdeaImage from "../../images/idea.png";
import {
  Bookmark,
  BookmarkBorder,
  ThumbUp,
  Message,
} from "@mui/icons-material";
import Eye from "../../images/Eye.png";
import ReportIcon from "../../images/Report.png";
import SaveIcon from "../../images/saveIcon.png";
import NextIcon from "../../images/next.png";
import { UserAccount, UploadedFile } from "../";
import Comment from "../Comment/Comment";
import Profile from "../../images/profile.jpg";
import Send from "../../images/send.png";
import AuthContext from "../../api/AuthContext";
import axios from "axios";

const IdeaShow = ({ uuid, token }) => {
  const [ideaImage, setIdeaImage] = useState(null);
  const [ideaTitle, setIdeaTitle] = useState("");
  const [ideaGoal, setIdeaGoal] = useState("");
  const [ideaAbstraction, setIdeaAbstraction] = useState("");
  const [isArts, setIsArts] = useState(false);
  const [isGames, setIsGames] = useState(false);
  const [isDesignTech, setIsDesignTech] = useState(false);
  const [isFoodCraft, setIsFoodCraft] = useState(false);
  const [isFilms, setIsFilms] = useState(false);
  const [isMusics, setIsMusics] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const [isScience, setIsScience] = useState(false);
  const [showLikes, setShowLikes] = useState(false);
  const [showViews, setShowViews] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [ideaDescription, setIdeaDescription] = useState("");

  const [userProfile, setUserProfile] = useState(null);
  const [userUsername, setUserUsername] = useState(null);

  useEffect(() => {
    const getIdeaData = async () => {
      try {
        const res = await axios.get(
          `http://api.iwantnet.space:8001/api/idea/detail/${uuid}`,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        console.log(res);
        res.data.image !== null &&
          setIdeaImage(`http://api.iwantnet.space:8001${res.data.image}`);
        setIdeaTitle(res.data.title);
        setIdeaGoal(res.data.goal);
        setIdeaAbstraction(res.data.abstract);
        setIsArts(res.data.classification.includes("art"));
        setIsGames(res.data.classification.includes("games"));
        setIsScience(res.data.classification.includes("science"));
        setIsPublishing(res.data.classification.includes("publishing"));
        setIsFilms(res.data.classification.includes("films"));
        setIsFoodCraft(res.data.classification.includes("food-craft"));
        setIsDesignTech(res.data.classification.includes("tech"));
        setIsMusics(res.data.classification.includes("music"));
        setShowLikes(res.data.show_likes);
        setShowViews(res.data.show_views);
        setShowComments(res.data.show_comments);
        setIdeaDescription(res.data.description);
      } catch (err) {
        console.log(err);
      }
    };
    getIdeaData();
  }, []);

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
        setUserProfile(res.data.profile_image);
        setUserUsername(res.data.username);
      } catch (err) {
        console.log(err);
      }
    };
    getUserData();
  }, []);

  return (
    <div className={classes.body}>
      <div className={classes.ideaData}>
        <div className={classes.ideaInfo}>
          <div className={classes.ideaDetails}>
            <div className={classes.details}>
              <img
                src={ideaImage === null ? IdeaImage : ideaImage}
                alt="Idea_Image"
              />
              <div>
                <h4>{ideaTitle}</h4>
                <h5>{ideaGoal}</h5>
                <p>{ideaAbstraction}</p>
              </div>
            </div>
            <div className={classes.options}>
              <button className={classes.reportUserOption}>
                <img src={SaveIcon} alt="save" />
                Save
              </button>
              <button className={classes.reportUserOption}>
                <img src={ReportIcon} alt="report" />
                Report
              </button>
            </div>
          </div>
          {(showLikes || showViews || showComments) && (
            <div className={classes.ideaFeedback}>
              {showLikes && (
                <div>
                  <ThumbUp className={classes.icon} />
                  50
                </div>
              )}
              {showViews && (
                <div>
                  <img className={classes.icon} src={Eye} alt="Views" />
                  60
                </div>
              )}
              {showComments && (
                <div>
                  <Message className={classes.icon} />
                  70
                </div>
              )}
            </div>
          )}
          {(isArts ||
            isGames ||
            isDesignTech ||
            isFoodCraft ||
            isFilms ||
            isMusics ||
            isPublishing ||
            isScience) && (
            <div className={classes.ideaLabels}>
              {isArts && (
                <div>
                  <img src={ArtLabel} alt="Art_Label" />
                  <p>Arts</p>
                </div>
              )}
              {isGames && (
                <div>
                  <img src={GamesLabel} alt="Games_Label" />
                  <p>Games</p>
                </div>
              )}
              {isDesignTech && (
                <div>
                  <img src={DesignTechLabel} alt="Tech_Label" />
                  <p>Tech</p>
                </div>
              )}
              {isFoodCraft && (
                <div>
                  <img src={FoodCraftLabel} alt="Food_Craft_Label" />
                  <p>Food & Craft</p>
                </div>
              )}
              {isFilms && (
                <div>
                  <img src={FilmsLabel} alt="Films_Label" />
                  <p>Films</p>
                </div>
              )}
              {isMusics && (
                <div>
                  <img src={MusicLabel} alt="Musics_Label" />
                  <p>Musics</p>
                </div>
              )}
              {isPublishing && (
                <div>
                  <img src={PublishingLabel} alt="Publishing_Label" />
                  <p>Publishing</p>
                </div>
              )}
              {isScience && (
                <div>
                  <img src={ScienceLabel} alt="Science_Label" />
                  <p>Science</p>
                </div>
              )}
            </div>
          )}
        </div>
        <div className={classes.userInfo}>
          <div className={classes.userDetails}>
            <h2>Creator</h2>
            <UserAccount
              type="AccountReport"
              profileImage={`http://api.iwantnet.space:8001${userProfile}`}
              name={userUsername}
            />
          </div>
          <div className={classes.supportIdea}>
            <h2>Support</h2>
            <p>
              Support the Idea for <b>NO reward</b>. Just because it speaks to
              you.
            </p>
            <div>
              <input type="text" />
              <button>
                <img src={NextIcon} alt="Next" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.ideDescription}>
        <div className={classes.ideaDesc}>
          <h2>Description</h2>
          <p className={classes.desc}>{ideaDescription}</p>
        </div>
        <div className={classes.uploadedFiles}>
          <h2>Attached Files</h2>
          <div className={classes.uploadedFilesList}>
            <UploadedFile
              type="doc"
              fileName="first"
              downloadOrDelete="download"
            />
            <UploadedFile
              type="pdf"
              fileName="sec"
              downloadOrDelete="download"
            />
            <UploadedFile
              type="png"
              fileName="third"
              downloadOrDelete="download"
            />
            <UploadedFile
              type="jpg"
              fileName="fourth"
              downloadOrDelete="download"
            />
            <UploadedFile
              type="pptx"
              fileName="fifth"
              downloadOrDelete="download"
            />
            <UploadedFile
              type="pdf"
              fileName="sixth"
              downloadOrDelete="download"
            />
            <UploadedFile
              type="doc"
              fileName="first"
              downloadOrDelete="download"
            />
            <UploadedFile
              type="pdf"
              fileName="sec"
              downloadOrDelete="download"
            />
            <UploadedFile
              type="png"
              fileName="third"
              downloadOrDelete="download"
            />
            <UploadedFile
              type="jpg"
              fileName="fourth"
              downloadOrDelete="download"
            />
            <UploadedFile
              type="pptx"
              fileName="fifth"
              downloadOrDelete="download"
            />
            <UploadedFile
              type="pdf"
              fileName="sixth"
              downloadOrDelete="download"
            />
          </div>
        </div>
      </div>
      <div>
        <div className={classes.comments}>
          <h2>Comments</h2>
          <div className={classes.commentsList}>
            <Comment
              profile={Profile}
              text="meow meow meow meow meow meow meow meow meow meow meow meow meow"
            />
            <Comment
              profile={Profile}
              text="meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow"
            />
            <Comment
              profile={Profile}
              text="meow meow meow meow meow meow meow meow meow meow meow meow meow"
            />
            <Comment
              profile={Profile}
              text="meow meow meow meow meow meow meow meow meow meow meow meow meow"
            />
            <Comment
              profile={Profile}
              text="meow meow meow meow meow meow meow meow meow meow meow meow meow"
            />
            <Comment
              profile={Profile}
              text="meow meow meow meow meow meow meow meow meow meow meow meow meow"
            />
            <Comment
              profile={Profile}
              text="meow meow meow meow meow meow meow meow meow meow meow meow meow"
            />
            <Comment
              profile={Profile}
              text="meow meow meow meow meow meow meow meow meow meow meow meow meow"
            />
            <Comment
              profile={Profile}
              text="meow meow meow meow meow meow meow meow meow meow meow meow meow"
            />
            <Comment
              profile={Profile}
              text="meow meow meow meow meow meow meow meow meow meow meow meow meow"
            />
            <Comment
              profile={Profile}
              text="meow meow meow meow meow meow meow meow meow meow meow meow meow"
            />
            <Comment
              profile={Profile}
              text="meow meow meow meow meow meow meow meow meow meow meow meow meow"
            />
            <Comment
              profile={Profile}
              text="meow meow meow meow meow meow meow meow meow meow meow meow meow"
            />
            <Comment
              profile={Profile}
              text="meow meow meow meow meow meow meow meow meow meow meow meow meow"
            />
          </div>
        </div>
        <div className={classes.ideaSupport}>
          <h2>Write Comment</h2>
          <div className={classes.support}>
            <input type="text" />
            <button>
              <img src={Send} alt="send" />
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdeaShow;
