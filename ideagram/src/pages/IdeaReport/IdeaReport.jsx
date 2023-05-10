import React from "react";
import { EditDeleteElement, Idea } from "../../components";
import classes from "./IdeaReport.module.scss";
import Add from "../../images/add.png";
import Apply from "../../images/apply.png";
import Cancel from "../../images/cross.png";
import { useRef } from "react";

const IdeaReport = () => {
  const title = useRef();
  const details = useRef();

  const addReportHandler = () => {
    if (title.current.value !== "" && details.current.value !== "") {
    }
  };

  return (
    <div className={classes.container}>
      <h1>Idea Report</h1>
      <div className={classes.body}>
        <div className={classes.reportIdea}>
          <div className={classes.ideaInfo}>
            <h3>Idea Information</h3>
            <Idea type="IdeaReport" />
          </div>
          <div className={classes.report}>
            <div>
              <label>Reason</label>
              <input type="text" ref={title} />
            </div>
            <div>
              <label>Description</label>
              <textarea cols={4} rows={3} ref={details} />
            </div>
            <button className={classes.add} onClick={addReportHandler}>
              <img src={Add} alt="Add_Report" /> Add
            </button>
          </div>
        </div>
        <div className={classes.reportsContainer}>
          <h1>Report Table</h1>
          <div className={classes.reports}>
            <EditDeleteElement key={1} id={1} amount={1} title="Wrong information" />
            <EditDeleteElement key={2} id={2} amount={2} title="misuse of information" />
            <EditDeleteElement key={3} id={3} amount={3} title="financial transaction and donation" />
            <EditDeleteElement key={4} id={4} amount={4} title="other" />
          </div>
          <div className={classes.options}>
            <button className={classes.apply}>
              <img src={Apply} alt="apply" />
              Apply
            </button>
            <button className={classes.cancel}>
              <img src={Cancel} alt="cancel" />
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdeaReport;
