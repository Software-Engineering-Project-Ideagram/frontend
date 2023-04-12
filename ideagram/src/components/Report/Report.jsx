import React from "react";
import classes from "./Report.module.scss";
import Edit from "../../images/edit.png";
import Delete from "../../images/delete2.png";
import { useDispatch } from "react-redux";
import { reportActions } from "../../store/report.js";

const Report = ({ reportNum, title }) => {
  const dispatch = useDispatch();

  const deleteReportHandler = () => {
    dispatch(
      reportActions.deleteReport({
        title: title,
      })
    );
  };

  return (
    <div className={classes.container}>
      <p className={classes.reportNum}>{reportNum}</p>
      <h4 className={classes.reportTitle}>{title}</h4>
      <button className={classes.editReport}>
        <img src={Edit} alt="Edit_Report" />
      </button>
      <button className={classes.deleteReport} onClick={deleteReportHandler}>
        <img src={Delete} alt="Delete_Report" />
      </button>
    </div>
  );
};

export default Report;
