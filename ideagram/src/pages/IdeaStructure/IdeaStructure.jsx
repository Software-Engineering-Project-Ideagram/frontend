import { React, useContext } from "react";
import classes from "./IdeaStructure.module.scss";
import Edit_Idea from "../../images/edit_idea.png";
import Collaboration_Request from "../../images/collaboration_request.png";
import Evolution_Step from "../../images/evolution_step.png";
import Financial_Step from "../../images/evolution_step.png";
import Official_Information from "../../images/official_information.png";
import { useLocation, Link, useParams } from "react-router-dom";
import {
  CollaborationRequest,
  EvolutionStep,
  OfficialInformation,
  FinancialStep,
  EditIdea,
} from "../../components";
import AuthContext from "../../api/AuthContext";

const IdeaStructure = () => {
  const location = useLocation();
  // console.log(params);
  // console.log(location.pathname);
  const url = location.pathname.split("/")[2];
  const params = useParams();
  const uuid = params.ideaId;

  const token = useContext(AuthContext).getAccessToken();
  console.log(token);

  return (
    <div className={classes.container}>
      <div className={classes.sidebar}>
        <Link
          className={classes.sidebarOptions}
          to={`/ideaStructure/editIdea/${uuid}`}
        >
          <img src={Edit_Idea} alt="Edit_Idea" /> Edit Idea
        </Link>
        <Link
          className={classes.sidebarOptions}
          to={`/ideaStructure/collaborationRequest/${uuid}`}
        >
          <img src={Collaboration_Request} alt="Collaboration_Request" />
          Collaboration Request
        </Link>
        <Link
          className={classes.sidebarOptions}
          to={`/ideaStructure/evolutionStep/${uuid}`}
        >
          <img src={Evolution_Step} alt="Evolution_Step" /> Evolution_Step
        </Link>
        <Link
          className={classes.sidebarOptions}
          to={`/ideaStructure/financialStep/${uuid}`}
        >
          <img src={Financial_Step} alt="Financial_Step" /> Financial Step
        </Link>
        <Link
          className={classes.sidebarOptions}
          to={`/ideaStructure/officialInformation/${uuid}`}
        >
          <img src={Official_Information} alt="Official_Information" /> Official
          Information
        </Link>
      </div>
      <div className={classes.main}>
        {
          {
            editIdea: <EditIdea uuid={uuid} token={token} />,
            collaborationRequest: (
              <CollaborationRequest uuid={uuid} token={token} />
            ),
            evolutionStep: <EvolutionStep uuid={uuid} token={token} />,
            financialStep: <FinancialStep uuid={uuid} token={token} />,
            officialInformation: (
              <OfficialInformation uuid={uuid} token={token} />
            ),
          }[url]
        }
      </div>
    </div>
  );
};

export default IdeaStructure;
