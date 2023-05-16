import React from "react";
import classes from "./OfficialInformationShow.module.scss";
import { StepInfo, SelectableItemToShow } from "..";

const OfficialInformationShow = () => {
  return (
    <div className={classes.body}>
      <h2>Official Information</h2>
      <div className={classes.officialInformation}>
        <h4 className={classes.title}>Official Table</h4>
        <div className={classes.officialInformationList}>
          <SelectableItemToShow amount={1} title="Back-End Developer" />
          <SelectableItemToShow amount={2} title="Front-End Developer" />
          <SelectableItemToShow amount={3} title="UI/UX" />
        </div>
      </div>
      <div className={classes.stepsInfo}>
        <h4>
          Official
          <br />
          Information
        </h4>
        <div className={classes.stepInfo}>
          <StepInfo
            firstTitle="Organization"
            secTitle="Register No."
            thirdTitle="Description"
            stepName="Game Center"
            finishDate="GC-1253987462"
            description="This site has been officially registered in the game center. The game center contains 70% of the stock."
          />
        </div>
      </div>
    </div>
  );
};

export default OfficialInformationShow;
