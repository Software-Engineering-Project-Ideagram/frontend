import React from "react";
import classes from "./CollaborationRequestElement.module.scss";
import Delete from "../../../images/delete2.png";
import Edit from "../../../images/edit.png";
import { useDispatch } from "react-redux";
import { collaborationRequestsActions } from "../../../store/collaborationRequest";
import axios from "axios";

const CollaborationRequestElement = ({ uuid, amount, title, token }) => {
  const dispatch = useDispatch();

  const deleteRequestHandler = async () => {
    await axios.delete(
      `http://api.iwantnet.space:8001/api/idea/collaboration/detail/${uuid}`,

      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );

    dispatch(
      collaborationRequestsActions.deleteCollaborationRequest({
        uuid: uuid,
      })
    );
  };

  return (
    <div className={classes.container}>
      <p>{amount}</p>
      <h4>{title}</h4>
      <button>
        <img src={Edit} alt="Edit" />
      </button>
      <button onClick={deleteRequestHandler}>
        <img src={Delete} alt="Delete" />
      </button>
    </div>
  );
};

export default CollaborationRequestElement;
