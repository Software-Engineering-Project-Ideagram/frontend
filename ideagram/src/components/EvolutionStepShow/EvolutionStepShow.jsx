import { React, useEffect } from "react";
import classes from "./EvolutionStepShow.module.scss";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { useState } from "react";
import { StepInfo } from "..";
import axios from "axios";

const EvolutionStepShow = ({ uuid, token }) => {
  const [steps, setSteps] = useState([]);
  const [stepsInfo, setStepsInfo] = useState([]);
  const [activeStep, setActiveStep] = useState(null);
  const [stepInfo, setStepInfo] = useState({
    title: "",
    finish_date: "",
    description: "",
  });

  const manageStepsInfo = (index) => {
    setStepInfo(stepsInfo[index]);
    setActiveStep(index);
  };

  useEffect(() => {
    const getIdeaData = async () => {
      try {
        const res = await axios.get(
          `http://api.iwantnet.space:8001/api/idea/evolution/${uuid}`,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        console.log(res);
        const stepsList = res.data;
        console.log(stepsList);
        stepsList.sort((a, b) =>
          a.priority > b.priority ? 1 : b.priority > a.priority ? -1 : 0
        );
        console.log(stepsList);
        const stepsNames = [];
        for (const item of stepsList) {
          stepsNames.push(item.title);
        }
        setSteps(stepsNames);
        setStepsInfo(stepsList);
        // setStepInfo(stepsInfo[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getIdeaData();
  }, []);

  return (
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
            firstTitle="Step"
            secTitle="Finish Data"
            thirdTitle="Description"
            stepName={stepInfo.title}
            finishDate={stepInfo.finish_date}
            description={stepInfo.description}
          />
        </div>
      </div>
    </div>
  );
};

export default EvolutionStepShow;
