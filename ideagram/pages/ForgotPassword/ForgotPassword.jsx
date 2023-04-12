import React from "react";
import classes from "./ForgotPassword.module.scss";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import ForgotPasswordIMG from "../../images/advertisment.png";
import Next from "../../images/next.png";
import Previous from "../../images/prev.png";
import Apply from "../../images/apply.png";
import Again from "../../images/again.png";
import { useState } from "react";

const steps = ["1.Get Information", "2.Receive Code", "3.Change Password"];

const ForgotPassword = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [verificationCode, setVerificationCode] = useState(["", "", "", ""]);

  const handleInput = (index, e) => {
    const value = e.target.value;
    setVerificationCode((prevState) => {
      const newState = [...prevState];
      newState[index] = value;
      return newState;
    });
    if (value && index < verificationCode.length - 1) {
      document.querySelectorAll("input")[index + 1].focus();
    }
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className={classes.container}>
      <div className={classes.stepperContainer}>
        <h1 className={classes.title}>Forgot Password</h1>
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
      <div className={classes.changePassword}>
        <img src={ForgotPasswordIMG} alt="Forgot_Password_IMG" />
        <div className={classes.steps}>
          {activeStep === 0 && (
            <div className={classes.step1}>
              <div>
                <label>Username</label>
                <input type="text" />
              </div>
              <div>
                <label>Email</label>
                <input type="email" />
              </div>
              <button className={classes.option} onClick={handleNext}>
                <img src={Next} alt="next" />
                Next
              </button>
            </div>
          )}

          {activeStep === 1 && (
            <div className={classes.step2}>
              <div className={classes.verificationCode}>
                <h3>Code :</h3>
                <div className={classes.verificationCodeInputs}>
                  {verificationCode.map((digit, index) => (
                    <input
                      className={classes.code}
                      key={index}
                      type="text"
                      value={digit}
                      onChange={(e) => handleInput(index, e)}
                    />
                  ))}
                </div>
              </div>

              <div className={classes.timer}>00:00</div>

              <div className={classes.options}>
                <button className={classes.option} onClick={handleBack}>
                  <img src={Previous} alt="previous" />
                  Previous
                </button>
                <button className={classes.option}>
                  <img src={Again} alt="again" />
                  Again
                </button>
                <button className={classes.option} onClick={handleNext}>
                  <img src={Next} alt="next" />
                  Next
                </button>
              </div>
            </div>
          )}

          {activeStep === 2 && (
            <div className={classes.step3}>
              <div>
                <label>New Password</label>
                <input type="password" />
              </div>
              <div>
                <label>Repeat New Password</label>
                <input type="password" />
              </div>
              <button className={classes.option} onClick={handleNext}>
                <img src={Apply} alt="apply" />
                Apply
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
