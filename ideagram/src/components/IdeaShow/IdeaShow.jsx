import React from "react";
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

const IdeaShow = () => {
  return (
    <div className={classes.body}>
      <div className={classes.ideaData}>
        <div className={classes.ideaInfo}>
          <div className={classes.ideaDetails}>
            <div className={classes.details}>
              <img src={IdeaImage} alt="Idea_Image" />
              <div>
                <h4>what doesn't kill you</h4>
                <h5>Release of music</h5>
                <p>
                  The piece of music composed and sung by Kelly Clarkson is
                  ready to be recorded in the studio and released.
                </p>
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
          <div className={classes.ideaFeedback}>
            <div>
              <ThumbUp className={classes.icon} />
              50
            </div>
            <div>
              <img className={classes.icon} src={Eye} alt="Views" />
              60
            </div>
            <div>
              <Message className={classes.icon} />
              70
            </div>
          </div>
          <div className={classes.ideaLabels}>
            <div>
              <img src={ArtLabel} alt="Art_Label" />
              <p>Art</p>
            </div>
            <div>
              <img src={ArtLabel} alt="Art_Label" />
              <p>Art</p>
            </div>
            <div>
              <img src={ArtLabel} alt="Art_Label" />
              <p>Art</p>
            </div>
            <div>
              <img src={ArtLabel} alt="Art_Label" />
              <p>Art</p>
            </div>
            <div>
              <img src={ArtLabel} alt="Art_Label" />
              <p>Art</p>
            </div>
          </div>
        </div>
        <div className={classes.userInfo}>
          <div className={classes.userDetails}>
            <h2>Creator</h2>
            <UserAccount type="AccountReport" />
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
          <p className={classes.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
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
