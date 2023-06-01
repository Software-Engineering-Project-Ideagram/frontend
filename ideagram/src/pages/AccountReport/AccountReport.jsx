import React from "react";
import { UserAccount } from "../../components";
import { ReportElement } from "../../components/Elements";
import classes from "./AccountReport.module.scss";
import Add from "../../images/add.png";
import Apply from "../../images/apply.png";
import Cancel from "../../images/cross.png";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reportsActions } from "../../store/report";

const AccountReport = () => {
  const dispatch = useDispatch();
  const reports = useSelector((state) => state.report.reports);
  const reportsNum = useSelector((state) => state.report.reportsNum);

  const [titleData, setTitleData] = useState("");
  const [detailsData, setDetailsData] = useState("");

  const addReportHandler = () => {
    if (titleData !== "" && detailsData !== "") {
      dispatch(
        reportsActions.addReport({
          id: titleData.replaceAll(/\s/g, ""),
          title: titleData,
          details: detailsData,
        })
      );

      setTitleData("");
      setDetailsData("");
    }
  };

  const cancelAllReports = () => {
    dispatch(reportsActions.deleteAllReports());
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
              <input
                value={titleData}
                type="text"
                onChange={(e) => {
                  setTitleData(e.target.value);
                }}
              />
            </div>
            <div>
              <label>Description</label>
              <textarea
                value={detailsData}
                cols={4}
                rows={3}
                onChange={(e) => {
                  setDetailsData(e.target.value);
                }}
              />
            </div>
            <div className={classes.addContainer}>
              <button className={classes.add} onClick={addReportHandler}>
                <img src={Add} alt="Add_Report" /> Add
              </button>
            </div>
          </div>
        </div>
        <div className={classes.reportsContainer}>
          <h1>Report Table</h1>
          <div className={classes.reports}>
            {reportsNum !== 0 ? (
              reports.map((item, index) => (
                <ReportElement
                  onClick={(e) => {
                    console.log(e);
                  }}
                  key={item.id}
                  id={item.id}
                  amount={index + 1}
                  title={item.title}
                  details={item.details}
                  manageTitle={setTitleData}
                  manageDetails={setDetailsData}
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
            <button className={classes.cancel} onClick={cancelAllReports}>
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
