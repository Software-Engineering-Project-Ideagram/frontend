import React from "react";
import classes from "./IdeaStructure.module.scss";
import Edit_Idea from "../../images/edit_idea.png";
import Collaboration_Request from "../../images/collaboration_request.png";
import Evolution_Step from "../../images/evolution_step.png";
import Financial_Step from "../../images/evolution_step.png";
import Official_Information from "../../images/official_information.png";
import { useLocation, Link } from "react-router-dom";
import {
  CollaborationRequest,
  EvolutionStep,
  OfficialInformation,
  FinancialStep,
  EditIdea,
} from "../../components";

const IdeaStructure = () => {
  const location = useLocation();
  // console.log(location.pathname);
  const url =
    location.pathname.split("/")[location.pathname.split("/").length - 1];

  return (
    <div className={classes.container}>
      <div className={classes.sidebar}>
        <Link className={classes.sidebarOptions} to="/ideaStructure/editIdea">
          <img src={Edit_Idea} alt="Edit_Idea" /> Edit Idea
        </Link>
        <Link
          className={classes.sidebarOptions}
          to="/ideaStructure/collaborationRequest"
        >
          <img src={Collaboration_Request} alt="Collaboration_Request" />{" "}
          Collaboration Request
        </Link>
        <Link
          className={classes.sidebarOptions}
          to="/ideaStructure/evolutionStep"
        >
          <img src={Evolution_Step} alt="Evolution_Step" /> Evolution_Step
        </Link>
        <Link
          className={classes.sidebarOptions}
          to="/ideaStructure/financialStep"
        >
          <img src={Financial_Step} alt="Financial_Step" /> Financial Step
        </Link>
        <Link
          className={classes.sidebarOptions}
          to="/ideaStructure/officialInformation"
        >
          <img src={Official_Information} alt="Official_Information" /> Official
          Information
        </Link>
      </div>
      <div className={classes.main}>
        {
          {
            editIdea: <EditIdea />,
            collaborationRequest: <CollaborationRequest />,
            evolutionStep: <EvolutionStep />,
            financialStep: <FinancialStep />,
            officialInformation: <OfficialInformation />,
          }[url]
        }
      </div>
    </div>
  );
};

export default IdeaStructure;
