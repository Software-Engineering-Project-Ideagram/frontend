import React from "react";
import classes from "./CollaborationRequest.module.scss";
import Add from "../../images/add.png";
import EditDeleteElement from "../EditDeleteElement/EditDeleteElement";

const CollaborationRequest = () => {
  return (
    <div className={classes.container}>
      <div className={classes.body}>
        <h2>
          Collaboration <br /> Request
        </h2>
        <div className={classes.collaborationInfo}>
          <div className={classes.collaborationDetails}>
            <h3>Collaborator Information</h3>
            <div className={classes.details}>
              <div>
                <label>Job Title</label>
                <input type="text" />
              </div>
              <div>
                <label>Skills</label>
                <input type="text" />
              </div>
              <div>
                <label>Education</label>
                <input type="text" />
              </div>
              <div>
                <label>Age</label>
                <input type="text" className={classes.short} />
              </div>
              <div>
                <label>Salary</label>
                <input type="text" className={classes.short} />
              </div>
              <div>
                <label>Status</label>
                <input type="text" className={classes.short} />
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
            <h3>Collaborators Table</h3>
            <div className={classes.collaborationData}>
              <div className={classes.collaborationsList}>
                <EditDeleteElement key={1} id={1} amount={1} title="one" />
                <EditDeleteElement key={2} id={2} amount={2} title="two" />
                <EditDeleteElement key={3} id={3} amount={3} title="three" />
              </div>
              <button className={classes.add}>
                <img src={Add} alt="add" />
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollaborationRequest;
