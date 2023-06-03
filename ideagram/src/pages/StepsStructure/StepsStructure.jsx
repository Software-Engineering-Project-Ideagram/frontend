import { React } from "react";
import classes from "./StepsStructure.module.scss";
import {
  EvolutionStepShow,
  CollaborationRequestShow,
  FinancialStepShow,
  OfficialInformationShow,
  IdeaShow,
} from "../../components";
import { Link, useLocation, useParams } from "react-router-dom";

const EvolutionStep = ({ token }) => {
  const location = useLocation();
  console.log(location.pathname);
  const url = location.pathname.split("/")[2];
  const uuid = useParams().ideaId;

  return (
    <div className={classes.container}>
      <div className={classes.toolbar}>
        <Link
          className={classes.sidebarOptions}
          to={`/stepsStructure/ideaShow/${uuid}`}
        >
          Idea
        </Link>
        <Link
          className={classes.sidebarOptions}
          to={`/stepsStructure/collaborationRequestShow/${uuid}`}
        >
          Collaboration Request
        </Link>
        <Link
          className={classes.sidebarOptions}
          to={`/stepsStructure/evolutionStepShow/${uuid}`}
        >
          Evolution Step
        </Link>
        <Link
          className={classes.sidebarOptions}
          to={`/stepsStructure/financialStepShow/${uuid}`}
        >
          Financial Step
        </Link>
        <Link
          className={classes.sidebarOptions}
          to={`/stepsStructure/officialInformationShow/${uuid}`}
        >
          Official Information
        </Link>
      </div>

      {
        {
          ideaShow: <IdeaShow uuid={uuid} token={token} />,
          collaborationRequestShow: (
            <CollaborationRequestShow uuid={uuid} token={token} />
          ),
          evolutionStepShow: <EvolutionStepShow uuid={uuid} token={token} />,
          financialStepShow: <FinancialStepShow uuid={uuid} token={token} />,
          officialInformationShow: (
            <OfficialInformationShow uuid={uuid} token={token} />
          ),
        }[url]
      }
    </div>
  );
};

export default EvolutionStep;
