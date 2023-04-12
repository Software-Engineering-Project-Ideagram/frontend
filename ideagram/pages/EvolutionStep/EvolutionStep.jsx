import React from "react";
import classes from "./EvolutionStep.module.scss";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { useState } from "react";
import { StepInfo } from "../../components";

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
    desc: "By the date menteeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeioned, all endpoints of the site must be designed using the Django framework.",
  },
  {
    title: "3.Front-End Development",
    finishDate: "5-6-2025",
    desc: "By the date mentioned, all endpoints of the site must be yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyydesigned using the Django framework.",
  },
  {
    title: "4.Deploy",
    finishDate: "5-8-2023",
    desc: "By the date mentioned, all endpoints of the site mummmmmmmmmmmmmmmmmmmmmmmmst be designed using the Django framework.",
  },
];

const EvolutionStep = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [stepInfo, setStepInfo] = useState(stepsInfo[0]);

  const manageStepsInfo = (index) => {
    setStepInfo(stepsInfo[index]);
    setActiveStep(index);
  };

  return (
    <div className={classes.container}>
      <div className={classes.toolbar}>
        <button>Idea</button>
        <button>Collaboration Request</button>
        <button>Evolution Step</button>
        <button>Financial Step</button>
        <button>Official Information</button>
      </div>
      <div className={classes.body}>
        <h2>Evolution Step</h2>
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
              stepName={stepInfo.title}
              finishDate={stepInfo.finishDate}
              description={stepInfo.desc}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EvolutionStep;
