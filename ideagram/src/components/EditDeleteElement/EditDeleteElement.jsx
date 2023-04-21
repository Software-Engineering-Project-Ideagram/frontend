import React from "react";
import classes from "./EditDeleteElement.module.scss";
import Edit from "../../images/edit.png";
import Delete from "../../images/delete2.png";

const EditDeleteElement = ({ amount, title }) => {
  return (
    <div className={classes.container}>
      <p>{amount}</p>
      <h4>{title}</h4>
      <button>
        <img src={Edit} alt="Edit" />
      </button>
      <button>
        <img src={Delete} alt="Delete" />
      </button>
    </div>
  );
};

export default EditDeleteElement;
