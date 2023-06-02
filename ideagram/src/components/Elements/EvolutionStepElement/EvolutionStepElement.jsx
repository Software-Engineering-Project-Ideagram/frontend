import React from "react";
import classes from "./EvolutionStepElement.module.scss";
import Edit from "../../../images/edit.png";
import Delete from "../../../images/delete2.png";
import { useDispatch } from "react-redux";
import axios from "axios";
import { evolutionStepsActions } from "../../../store/evolutionStep";

const EvolutionStepElement = ({
  uuid,
  token,
  step,
  finishDate,
  priority,
  description,
  setStep,
  setFinishDate,
  setDescription,
  setPriority,
}) => {
  const dispatch = useDispatch();

  const deleteStepHandler = async () => {
    await axios.delete(
      `http://api.iwantnet.space:8001/api/idea/evolution/detail/${uuid}`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );

    dispatch(
      evolutionStepsActions.deleteEvolutionStep({
        uuid: uuid,
      })
    );
  };

  const manageEdit = async () => {
    await deleteStepHandler();
    setStep(step);
    setFinishDate(finishDate);
    setDescription(description);
    setPriority(priority);
  };

  return (
    <div className={classes.container}>
      <p>{priority}</p>
      <h4>{step}</h4>
      <button onClick={manageEdit}>
        <img src={Edit} alt="Edit" />
      </button>
      <button onClick={deleteStepHandler}>
        <img src={Delete} alt="Delete" />
      </button>
    </div>
  );
};

export default EvolutionStepElement;
