import React from "react";
import classes from "./IdeaStructure.module.scss";
import Edit_Idea from "../../images/edit_idea.png";
import Collaboration_Request from "../../images/collaboration_request.png";
import Evolution_Step from "../../images/evolution_step.png";
import Financial_Step from "../../images/evolution_step.png";
import Official_Information from "../../images/official_information.png";
import { Routes, Route } from "react-router-dom";
import {
  CreateIdea,
  CollaborationRequest,
  OfficialInformation,
} from "../../components";

const IdeaStructure = () => {
  return (
    <div className={classes.container}>
      <div className={classes.sidebar}>
        <button>
          <img src={Edit_Idea} alt="Edit_Idea" /> Edit Idea
        </button>
        <button>
          <img src={Collaboration_Request} alt="Collaboration_Request" />{" "}
          Collaboration Request
        </button>
        <button>
          <img src={Evolution_Step} alt="Evolution_Step" /> Evolution_Step
        </button>
        <button>
          <img src={Financial_Step} alt="Financial_Step" /> Financial Step
        </button>
        <button>
          <img src={Official_Information} alt="Official_Information" /> Official
          Information
        </button>
      </div>
      <div className={classes.main}>
        <Routes>
          <Route path="/createIdea" element={<CreateIdea />} />
          <Route
            path="/collaborationRequest"
            element={<CollaborationRequest />}
          />
          <Route
            path="/officialInformation"
            element={<OfficialInformation />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default IdeaStructure;
