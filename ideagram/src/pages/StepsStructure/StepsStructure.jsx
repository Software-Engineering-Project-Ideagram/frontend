import React from "react";
import classes from "./StepsStructure.module.scss";
import {
  EvolutionStepShow,
  CollaborationRequestShow,
  FinancialStepShow,
  OfficialInformationShow,
  IdeaShow,
} from "../../components";
import { useLocation } from "react-router-dom";

const EvolutionStep = () => {
  const location = useLocation();
  console.log(location.pathname);
  const url =
    location.pathname.split("/")[location.pathname.split("/").length - 1];

  return (
    <div className={classes.container}>
      <div className={classes.toolbar}>
        <button>Idea</button>
        <button>Collaboration Request</button>
        <button>Evolution Step</button>
        <button>Financial Step</button>
        <button>Official Information</button>
      </div>

      {
        {
          ideaShow: <IdeaShow />,
          collaborationRequestShow: <CollaborationRequestShow />,
          evolutionStepShow: <EvolutionStepShow />,
          financialStepShow: <FinancialStepShow />,
          officialInformationShow: <OfficialInformationShow />,
        }[url]
      }
    </div>
  );
};

export default EvolutionStep;
