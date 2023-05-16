import React from "react";
import classes from "./EvolutionStep.module.scss";
import Add from "../../images/add.png";
import Apply from "../../images/apply.png";
import EditDeleteElement from "../EditDeleteElement/EditDeleteElement";

const EvolutionStep = () => {
  return (
    <div className={classes.container}>
      <div className={classes.body}>
        <h2>
          Evolution
          <br />
          Step
        </h2>
        <div className={classes.collaborationInfo}>
          <div className={classes.collaborationDetails}>
            <h3>Evolution Information</h3>
            <div className={classes.details}>
              <div>
                <label>Step</label>
                <input type="text" />
              </div>
              <div>
                <label>Finish Date</label>
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
          <div className={classes.collaborations}>
            <h3>Evolution Table</h3>
            <div className={classes.collaborationData}>
              <div className={classes.collaborationsList}>
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

export default EvolutionStep;
