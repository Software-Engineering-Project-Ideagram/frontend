import React from "react";
import classes from "./OfficialInformationElement.module.scss";
import Delete from "../../../images/delete2.png";
import Edit from "../../../images/edit.png";
import { useDispatch } from "react-redux";
import { officialInformationActions } from "../../../store/officialInformation";
import axios from "axios";

const OfficialInformationElement = ({
  uuid,
  token,
  amount,
  organization,
  registerNumber,
  description,
  setOrganization,
  setRegisterNumber,
  setDescription,
}) => {
  const dispatch = useDispatch();

  const deleteOfficialInfoHandler = async () => {
    await axios.delete(
      `http://api.iwantnet.space:8001/api/idea/official-info/detail/${uuid}`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );

    dispatch(
      officialInformationActions.deleteOfficialInformation({
        uuid: uuid,
      })
    );
  };

  const manageEdit = async () => {
    await deleteOfficialInfoHandler();
    setOrganization(organization);
    setRegisterNumber(registerNumber);
    setDescription(description);
  };

  return (
    <div className={classes.container}>
      <p>{amount}</p>
      <h4>{registerNumber}</h4>
      <button onClick={manageEdit}>
        <img src={Edit} alt="Edit" />
      </button>
      <button onClick={deleteOfficialInfoHandler}>
        <img src={Delete} alt="Delete" />
      </button>
    </div>
  );
};

export default OfficialInformationElement;
