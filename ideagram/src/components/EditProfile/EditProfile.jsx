import React from "react";
import classes from "./EditProfile.module.scss";
import UserProfile from "../../images/profile.jpg";
import Apply from "../../images/apply.png";
import Next from "../../images/next.png";
import Previous from "../../images/prev.png";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { useState } from "react";
import { EditDeleteElement } from "../../components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const steps = ["1.Personal Information", "2.Change Password", "3.Manage Links"];

const EditProfile = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [startDate, setStartDate] = useState(new Date());

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className={classes.container}>
      <div className={classes.body}>
        <h2>Edit Profile</h2>
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

        <div className={classes.profileInfo}>
          {activeStep === 0 && (
            <div className={classes.userInfo}>
              <div className={classes.info}>
                <img
                  src={UserProfile}
                  alt="User_Profile"
                  className={classes.profileImage}
                />
                <div className={classes.userPersonalInfo}>
                  <div className={classes.enterInfo}>
                    <label>First Name</label>
                    <input type="text" />
                  </div>
                  <div className={classes.enterInfo}>
                    <label>Last Name</label>
                    <input type="text" />
                  </div>
                  <div className={classes.sideBySide}>
                    <div className={classes.enterGender}>
                      <label>Gender</label>
                      <select name="gender">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                    <div className={classes.enterBirthDate}>
                      <label>Birth Date</label>
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        minDate={new Date("01-01-1923")}
                        maxDate={startDate}
                      />
                    </div>
                  </div>
                  <div className={classes.enterInfo}>
                    <label>Address</label>
                    <input type="text" />
                  </div>
                  <div className={classes.enterInfo}>
                    <label>Username</label>
                    <input type="text" />
                  </div>
                </div>
              </div>

              <div className={classes.options}>
                <button>
                  <img src={Apply} alt="apply" />
                  Apply
                </button>
                <button onClick={handleNext}>
                  <img src={Next} alt="next" />
                  Next
                </button>
              </div>
            </div>
          )}

          {activeStep === 1 && (
            <div className={classes.userPasswordInfo}>
              <div className={classes.userPassword}>
                <div className={classes.enterInfo}>
                  <label>Current Password</label>
                  <input type="password" />
                </div>
                <div className={classes.enterInfo}>
                  <label>New Password</label>
                  <input type="password" />
                </div>
                <div className={classes.enterInfo}>
                  <label>Repeat New Password</label>
                  <input type="password" />
                </div>
              </div>

              <div className={classes.options}>
                <button onClick={handleBack}>
                  <img src={Previous} alt="previous" />
                  Previous
                </button>
                <button>
                  <img src={Apply} alt="apply" />
                  Apply
                </button>
                <button onClick={handleNext}>
                  <img src={Next} alt="next" />
                  Next
                </button>
              </div>
            </div>
          )}

          {activeStep === 2 && (
            <div className={classes.userLinksInfo}>
              <div className={classes.addLinks}>
                <h3>Add Link</h3>
                <div className={classes.enterInfo}>
                  <div className={classes.enterSite}>
                    <label>Site</label>
                    <select>
                      <option value="one">One</option>
                      <option value="two">Two</option>
                    </select>
                  </div>
                  <div className={classes.enterLink}>
                    <label>Link</label>
                    <input type="text" />
                  </div>
                  <div className={classes.options}>
                    <button>Add</button>
                  </div>
                </div>
              </div>
              <div className={classes.linksContainer}>
                <h3>Links</h3>
                <div className={classes.links}>
                  {/* {reportsNum !== 0 ? (
              reports.map((item, index) => (
                <Report
                  key={item.id}
                  id={item.id}
                  reportNum={index + 1}
                  title={item.title}
                />
              ))
            ) : (
              <p className={classes.noLink}>No Report Here</p>
            )} */}
                  <EditDeleteElement key={1} id={1} amount={1} title="one" />
                  <EditDeleteElement key={2} id={2} amount={2} title="two" />
                  <EditDeleteElement key={3} id={3} amount={3} title="three" />
                </div>
              </div>
              <div className={classes.options}>
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
    </div>
  );
};

export default EditProfile;
