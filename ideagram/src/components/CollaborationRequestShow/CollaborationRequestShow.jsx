import React from "react";
import { SelectableItemToShow, LargeStepInfo } from "../";
import classes from "./CollaborationRequestShow.module.scss";

const CollaborationRequestShow = () => {
  return (
    <div className={classes.body}>
      <h2>Collaboration Request</h2>
      <div className={classes.collaborationRequests}>
        <h4 className={classes.title}>
          Collaboration
          <br /> Table
        </h4>
        <div className={classes.collaborationRequestsList}>
          <SelectableItemToShow amount={1} title="Back-End Developer" />
          <SelectableItemToShow amount={2} title="Front-End Developer" />
          <SelectableItemToShow amount={3} title="UI/UX" />
        </div>
      </div>
      <div className={classes.collaborationsInfoContainer}>
        <h4 className={classes.title}>
          Collaboration
          <br />
          Information
        </h4>

        <div className={classes.collaborationsInfo}>
          <LargeStepInfo
            jobTitle="Back-end Developer"
            skills="Python - Django"
            education="Computer Engineering"
            age="23-30"
            salary="500 $"
            status="Full Time"
            description="We need a senior designer with at least 3 years of work experience and a degree from a reputable university. "
          />
        </div>
      </div>
    </div>
  );
};

export default CollaborationRequestShow;
