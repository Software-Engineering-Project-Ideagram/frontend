import React from "react";
import { Report, UserAccount } from "../../components";
import classes from "./AccountReport.module.scss";
import Add from "../../images/add.png";
import Apply from "../../images/apply.png";
import Cancel from "../../images/cross.png";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { reportActions } from "../../store/report.js";

const AccountReport = () => {
  const dispatch = useDispatch();
  const reports = useSelector((state) => state.report.reports);
  const reportsNum = useSelector((state) => state.report.reportsNum);

  const title = useRef();
  const details = useRef();

  const addReportHandler = () => {
    if (title.current.value !== "" && details.current.value !== "") {
      dispatch(
        reportActions.addReport({
          id: title.current.value.replaceAll(/\s/g, ""),
          title: title.current.value,
          details: details.current.value,
        })
      );
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
            {reportsNum !== 0 ? (
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
            )}
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
