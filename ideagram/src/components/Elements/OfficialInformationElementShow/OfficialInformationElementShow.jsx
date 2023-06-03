import React from "react";
import classes from "./OfficialInformationElementShow.module.scss";

const OfficialInformationElementShow = ({
  amount,
  organization,
  registerNumber,
  description,
  setOrganization,
  setRegisterNumber,
  setDescription,
}) => {
  const display = async () => {
    setOrganization(organization);
    setRegisterNumber(registerNumber);
    setDescription(description);
  };

  return (
    <div className={classes.container} onClick={display}>
      <p>{amount}</p>
      <h4>{registerNumber}</h4>
    </div>
  );
};

export default OfficialInformationElementShow;
