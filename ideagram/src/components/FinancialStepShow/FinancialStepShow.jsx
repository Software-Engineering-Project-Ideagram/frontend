import React from "react";
import classes from "./FinancialStepShow.module.scss";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { useState } from "react";
import { StepInfo } from "..";

const steps = [
  "1.Back-End Development",
  "2.UI/UX",
  "3.Front-End Development",
  "4.Deploy",
];

const stepsInfo = [
  {
    title: "1.Back-End Development",
    finishDate: "5-6-2023",
    desc: "By the date mentioned, all endpoints of the site must be designed using the Django framework.",
  },
  {
    title: "2.UI/UX",
    finishDate: "8-6-2023",
    desc: "User experience design is the process of defining the experience a user would go through when interacting with a company, its services, and its products.",
  },
  {
    title: "3.Front-End Development",
    finishDate: "5-6-2025",
    desc: "Front-end web development is the development of the graphical user interface of a website, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that website.",
  },
  {
    title: "4.Deploy",
    finishDate: "5-8-2023",
    desc: "Software deployment is all of the activities that make a software system available for use.",
  },
];

const FinancialStepShow = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [stepInfo, setStepInfo] = useState(stepsInfo[0]);

  const manageStepsInfo = (index) => {
    setStepInfo(stepsInfo[index]);
    setActiveStep(index);
  };

  return (
    <div className={classes.body}>
      <h2>Financial Step</h2>
      <div className={classes.steps}>
        <h4>Steps</h4>
        <Stepper className={classes.stepper} activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel
                  {...labelProps}
                  onClick={() => manageStepsInfo(index)}
                >
                  {label}
                </StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </div>
      <div className={classes.stepsInfo}>
        <h4>
          Step
          <br />
          Information
        </h4>
        <div className={classes.stepInfo}>
          <StepInfo
            firstTitle="Step"
            secTitle="Cost"
            thirdTitle="Description"
            stepName={stepInfo.title}
            finishDate={stepInfo.finishDate}
            description={stepInfo.desc}
          />
        </div>
      </div>
    </div>
  );
};

export default FinancialStepShow;
