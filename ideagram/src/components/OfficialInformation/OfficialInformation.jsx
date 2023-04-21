import React from "react";
import classes from "./OfficialInformation.module.scss";
import Add from "../../images/add.png";
import Apply from "../../images/apply.png";
import EditDeleteElement from "../EditDeleteElement/EditDeleteElement";

const OfficialInformation = () => {
  return (
    <div className={classes.container}>
      <div className={classes.body}>
        <h2>
          Official <br /> Information
        </h2>
        <div className={classes.officialInfo}>
          <div className={classes.officialDetails}>
            <h3>Official Information</h3>
            <div className={classes.details}>
              <div>
                <label>Organization</label>
                <input type="text" />
              </div>
              <div>
                <label>Register No.</label>
                <input type="text" />
              </div>
              <div>
                <label>Description</label>
                <textarea />
              </div>
              <button className={classes.add}>
                <img src={Add} alt="add" />
                Add
              </button>
            </div>
          </div>
          <div className={classes.officialTable}>
            <h3>Office Table</h3>
            <div className={classes.officialData}>
              <div className={classes.officialDataList}>
                <EditDeleteElement key={1} id={1} amount={1} title="one" />
                <EditDeleteElement key={2} id={2} amount={2} title="two" />
                <EditDeleteElement key={3} id={3} amount={3} title="three" />
              </div>
              <button className={classes.add}>
                <img src={Apply} alt="apply" />
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficialInformation;
