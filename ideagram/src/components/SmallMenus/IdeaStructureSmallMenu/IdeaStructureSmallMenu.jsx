import React from "react";
import classes from "./IdeaStructureSmallMenu.module.scss";
import Edit_Idea from "../../../images/edit_idea.png";
import Collaboration_Request from "../../../images/collaboration_request.png";
import Evolution_Step from "../../../images/evolution_step.png";
import Financial_Step from "../../../images/evolution_step.png";
import Official_Information from "../../../images/official_information.png";
import { Link } from "react-router-dom";

const IdeaStructureSmallMenu = ({ showMenuHandler, isShowMenu }) => {
  return (
    <ul
      className={`${classes.menu} ${
        isShowMenu ? classes.visible : classes.invisible
      }`}
    >
      <li onClick={showMenuHandler}>
        <Link className={classes.sidebarOptions} to="">
          <img src={Edit_Idea} alt="Edit_Idea" /> Edit Idea
        </Link>
      </li>
      <li onClick={showMenuHandler}>
        <Link
          className={classes.sidebarOptions}
          to="/ideaStructure/collaborationRequest"
        >
          <img src={Collaboration_Request} alt="Collaboration_Request" />{" "}
          Collaboration Request
        </Link>
      </li>
      <li onClick={showMenuHandler}>
        <Link className={classes.sidebarOptions} to="">
          <img src={Evolution_Step} alt="Evolution_Step" /> Evolution_Step
        </Link>
      </li>
      <li onClick={showMenuHandler}>
        <Link className={classes.sidebarOptions} to="">
          <img src={Financial_Step} alt="Financial_Step" /> Financial Step
        </Link>
      </li>
      <li onClick={showMenuHandler}>
        <Link
          className={classes.sidebarOptions}
          to="/ideaStructure/officialInformation"
        >
          <img src={Official_Information} alt="Official_Information" /> Official
          Information
        </Link>
      </li>
    </ul>
  );
};

export default IdeaStructureSmallMenu;
