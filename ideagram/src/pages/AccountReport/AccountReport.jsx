import React from "react";
import { EditDeleteElement, UserAccount } from "../../components";
import classes from "./AccountReport.module.scss";
import Add from "../../images/add.png";
import Apply from "../../images/apply.png";
import Cancel from "../../images/cross.png";
import { useRef } from "react";

const AccountReport = () => {
  const title = useRef();
  const details = useRef();

  const addReportHandler = () => {
    if (title.current.value !== "" && details.current.value !== "") {
    }
  };

  return (
    <div className={classes.container}>
      <h1>Account Report</h1>
      <div className={classes.body}>
        <div className={classes.reportAccount}>
          <div className={classes.accountInfo}>
            <h3>Account Information</h3>
            <UserAccount type="AccountReport" />
          </div>
          <div className={classes.report}>
            <div>
              <label>Finish Data</label>
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
            {/* {reportsNum !== 0 ? (
              reports.map((item, index) => (
                <Report
                  key={item.id}
                  id={item.id}
                  reportNum={index + 1}
                  title={item.title}
                />
              ))
            ) : (
              <p className={classes.noReport}>No Report Here</p>
            )} */}
            <EditDeleteElement
              key={1}
              id={1}
              amount={1}
              title="Wrong Information "
            />
            <EditDeleteElement
              key={2}
              id={2}
              amount={2}
              title="Misuse of information"
            />
            <EditDeleteElement
              key={3}
              id={3}
              amount={3}
              title="Insulting comments"
            />
            <EditDeleteElement
              key={4}
              id={4}
              amount={4}
              title="Financial transaction and donation "
            />
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

export default AccountReport;
