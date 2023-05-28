import React from "react";
import classes from "./CreateIdea.module.scss";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import SelectImage from "../../images/selectImage.png";
import ArtLabel from "../../images/ArtLabel.png";
import GamesLabel from "../../images/GamesLabel.png";
import DesignTechLabel from "../../images/DesignTechLabel.png";
import FoodCraftLabel from "../../images/FoodCraftLabel.png";
import FilmsLabel from "../../images/FilmsLabel.png";
import MusicLabel from "../../images/MusicLabel.png";
import PublishingLabel from "../../images/PublishingLabel.png";
import ScienceLabel from "../../images/ScienceLabel.png";
import Next from "../../images/next.png";
import Apply from "../../images/apply.png";
import Previous from "../../images/prev.png";
import AttachFile from "../../images/attachFile.png";
import BlackPrev from "../../images/blackPrev.png";
import BlackNext from "../../images/blackNext.png";
import { UploadedFile } from "../../components";

const steps = ["1.primary Information", "2.Description", "3.Attached Files"];

const CreateIdea = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleUploadedFile = (e) => {
    console.log(e.target.files[0].type.split("/")[1]);
  };

  return (
    <div className={classes.container}>
      <div className={classes.body}>
        <h2>Create Idea</h2>
        <div className={classes.steps}>
          <Stepper className={classes.stepper} activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </div>

        {activeStep === 0 && (
          <div className={classes.newIdeaInfo}>
            <div className={classes.ideaDetails}>
              <div className={classes.selectIdeaImage}>
                <input id="selectIdeaImage" type="file" accept="image/*" />
                <label for="selectIdeaImage">
                  <img src={SelectImage} alt="Select_Image" />
                </label>
              </div>
              <div className={classes.enterIdeaDetails}>
                <div>
                  <label>Title</label>
                  <input type="text" />
                </div>
                <div>
                  <label>Goals</label>
                  <input type="text" />
                </div>
                <div>
                  <label>Abstract</label>
                  <textarea />
                </div>
              </div>
            </div>

            <div className={classes.newIdeaLabels}>
              <p>Labels</p>
              <div className={classes.labels}>
                <div>
                  <input id="artLabel" type="checkbox" />
                  <label for="artLabel">
                    <img src={ArtLabel} alt="Art" />
                    Arts
                  </label>
                </div>
                <div>
                  <input type="checkbox" id="gameLabel" />
                  <label for="gameLabel">
                    <img src={GamesLabel} alt="Games" />
                    Games
                  </label>
                </div>
                <div>
                  <input id="designTechLabel" type="checkbox" />
                  <label for="designTechLabel">
                    <img src={DesignTechLabel} alt="Design_Tech" />
                    Design & Tech
                  </label>
                </div>
                <div>
                  <input id="foodLabel" type="checkbox" />
                  <label for="foodLabel">
                    <img src={FoodCraftLabel} alt="Food_Craft" />
                    Food & Craft
                  </label>
                </div>
                <div>
                  <input id="filmLabel" type="checkbox" />
                  <label for="filmLabel">
                    <img src={FilmsLabel} alt="Films" />
                    Films
                  </label>
                </div>
                <div>
                  <input id="musicLabel" type="checkbox" />
                  <label for="musicLabel">
                    <img src={MusicLabel} alt="Music" />
                    Music
                  </label>
                </div>
                <div>
                  <input id="publishingLabel" type="checkbox" />
                  <label for="publishingLabel">
                    <img src={PublishingLabel} alt="Publishing" />
                    Publishing
                  </label>
                </div>
                <div>
                  <input id="scienceLabel" type="checkbox" />
                  <label for="scienceLabel">
                    <img src={ScienceLabel} alt="Science" />
                    Science
                  </label>
                </div>
              </div>
            </div>

            <div className={classes.newIdeaFeedback}>
              <p>
                Feedback <br /> Status
              </p>
              <div className={classes.feedbacks}>
                <div>
                  <p>Likes</p>

                  <label for="showLike" className={classes.filter}>
                    Show
                    <input type="radio" id="showLike" name="Likes" />
                    <span className={classes.custom}></span>
                  </label>

                  <label for="hiddenLike" className={classes.filter}>
                    Hidden
                    <input type="radio" id="hiddenLike" name="Likes" />
                    <span className={classes.custom}></span>
                  </label>
                </div>
                <div>
                  <p>Views</p>

                  <label for="showView" className={classes.filter}>
                    Show
                    <input type="radio" id="showView" name="Views" />
                    <span className={classes.custom}></span>
                  </label>

                  <label for="hiddenView" className={classes.filter}>
                    Hidden
                    <input type="radio" id="hiddenView" name="Views" />
                    <span className={classes.custom}></span>
                  </label>
                </div>
                <div>
                  <p>Comments</p>

                  <label for="showComments" className={classes.filter}>
                    Show
                    <input type="radio" id="showComments" name="Comments" />
                    <span className={classes.custom}></span>
                  </label>

                  <label for="hiddenComments" className={classes.filter}>
                    Hidden
                    <input type="radio" id="hiddenComments" name="Comments" />
                    <span className={classes.custom}></span>
                  </label>
                </div>
              </div>
            </div>

            <div className={classes.newIdeaOptions}>
              <button onClick={handleNext}>
                <img src={Next} alt="next" />
                Next
              </button>
            </div>
          </div>
        )}

        {activeStep === 1 && (
          <div className={classes.newIdeaDesc}>
            <div className={classes.ideaDesc}>
              <h3>Description</h3>
              <textarea />
            </div>

            <div className={classes.newIdeaOptions}>
              <button onClick={handleBack}>
                <img src={Previous} alt="previous" />
                Previous
              </button>
              <button onClick={handleNext}>
                <img src={Next} alt="next" />
                Next
              </button>
            </div>
          </div>
        )}

        {activeStep === 2 && (
          <div className={classes.uploadedFilesContainer}>
            <div className={classes.uploadedFiles}>
              <h3>Attach Files</h3>
              <div className={classes.manageUploadedFiles}>
                <div className={classes.attachFile}>
                  <button>
                    <img src={AttachFile} alt="attach_files" />
                    <label for="AttachFile">Attach</label>
                    <input
                      type="file"
                      id="AttachFile"
                      onChange={handleUploadedFile}
                    />
                  </button>
                </div>
                <div className={classes.uploadedFilesListContainer}>
                  {/* <button className={classes.attach}>
                    <img src={BlackPrev} alt="prev_uploaded_file" />
                  </button> */}
                  <div className={classes.uploadedFilesList}>
                    <UploadedFile
                      type="doc"
                      fileName="first"
                      downloadOrDelete="delete"
                    />
                    <UploadedFile
                      type="pdf"
                      fileName="sec"
                      downloadOrDelete="delete"
                    />
                    <UploadedFile
                      type="png"
                      fileName="third"
                      downloadOrDelete="delete"
                    />
                    <UploadedFile
                      type="jpg"
                      fileName="fourth"
                      downloadOrDelete="delete"
                    />
                    <UploadedFile
                      type="pptx"
                      fileName="fifth"
                      downloadOrDelete="delete"
                    />
                    <UploadedFile
                      type="pdf"
                      fileName="sixth"
                      downloadOrDelete="delete"
                    />
                    <UploadedFile
                      type="doc"
                      fileName="first"
                      downloadOrDelete="delete"
                    />
                    <UploadedFile
                      type="pdf"
                      fileName="sec"
                      downloadOrDelete="delete"
                    />
                    <UploadedFile
                      type="png"
                      fileName="third"
                      downloadOrDelete="delete"
                    />
                    <UploadedFile
                      type="jpg"
                      fileName="fourth"
                      downloadOrDelete="delete"
                    />
                    <UploadedFile
                      type="pptx"
                      fileName="fifth"
                      downloadOrDelete="delete"
                    />
                    <UploadedFile
                      type="pdf"
                      fileName="sixth"
                      downloadOrDelete="delete"
                    />
                  </div>
                  {/* <button onClick={showNextFiles}>
                    <img src={BlackNext} alt="next_uploaded_file" />
                  </button> */}
                </div>
              </div>
            </div>

            <div className={classes.uploadedFilesOptions}>
              <button onClick={handleBack}>
                <img src={Previous} alt="previous" />
                Previous
              </button>
              <button>
                <img src={Apply} alt="apply" />
                Apply
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateIdea;
