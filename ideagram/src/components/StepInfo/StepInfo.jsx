import React from "react";
import classes from "./StepInfo.module.scss";

const StepInfo = ({ stepName, finishDate, description }) => {
  return (
    <div className={classes.container}>
      <div>
        <label>Step</label>
        <p className={classes.shortText}>{stepName}</p>
      </div>
      <div>
        <label>Finish Data</label>
        <p className={classes.shortText}>{finishDate}</p>
      </div>
      <div>
        <label>Description</label>
        <p className={classes.longText}>{description}</p>
      </div>
    </div>
  );
};

export default StepInfo;
