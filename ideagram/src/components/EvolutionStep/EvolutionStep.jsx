import { React, useState, useEffect } from "react";
import classes from "./EvolutionStep.module.scss";
import Add from "../../images/add.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { evolutionStepsActions } from "../../store/evolutionStep";
import axios from "axios";
import EvolutionStepElement from "../Elements/EvolutionStepElement/EvolutionStepElement";

const EvolutionStep = ({ uuid, token }) => {
  const dispatch = useDispatch();
  const evolutionSteps = useSelector(
    (state) => state.evolutionSteps.evolutionSteps
  );
  const evolutionStepsNum = useSelector(
    (state) => state.evolutionSteps.evolutionStepsNum
  );

  const [step, setStep] = useState("");
  const [finishDate, setFinishDate] = useState(
    `${new Date().getFullYear()}-${
      new Date().getMonth() + 1
    }-${new Date().getDate()}`
  );
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");

  useEffect(() => {
    const getUserData = async () => {
      try {
        const res = await axios.get(
          `http://api.iwantnet.space:8001/api/idea/evolution/${uuid}`,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        console.log(res);
        dispatch(evolutionStepsActions.deleteAll());
        for (const req of res.data) {
          dispatch(
            evolutionStepsActions.addEvolutionStep({
              uuid: req.uuid,
              step: req.title,
              finishDate: req.finish_date,
              priority: req.priority,
              description: req.description,
            })
          );
        }
      } catch (err) {
        console.log(err);
      }
    };
    getUserData();
  }, []);

  const addStep = async () => {
    if (step !== "" && description !== "") {
      try {
        const res = await axios.post(
          `http://api.iwantnet.space:8001/api/idea/evolution/${uuid}`,
          [
            {
              title: step,
              finish_date: finishDate,
              description: description,
              priority: priority,
            },
          ],
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        console.log(res);
        dispatch(
          evolutionStepsActions.addEvolutionStep({
            uuid: res.data[0].uuid,
            step: res.data[0].title,
            finishDate: res.data[0].finish_date,
            priority: res.data[0].priority,
            description: res.data[0].description,
          })
        );
        setStep("");
        setFinishDate(
          `${new Date().getFullYear()}-${
            new Date().getMonth() + 1
          }-${new Date().getDate()}`
        );
        setDescription("");
        setPriority(0);
      } catch (err) {
        console.log(err);
        alert("Please set distinct priorities");
      }
    } else {
      alert("Please fill the fields properly");
    }
  };

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
              <div className={classes.enterData}>
                <label>Step</label>
                <input
                  className={classes.step}
                  type="text"
                  value={step}
                  onChange={(e) => {
                    setStep(e.target.value);
                  }}
                />
              </div>
              <div className={classes.enterData}>
                <label>Finish Date</label>
                <DatePicker
                  selected={new Date(finishDate)}
                  className={classes.finishDate}
                  onChange={(date) =>
                    setFinishDate(
                      `${date.getFullYear()}-${
                        date.getMonth() + 1
                      }-${date.getDate()}`
                    )
                  }
                  minDate={new Date()}
                  dateFormat="yyyy-MM-dd"
                />
              </div>
              <div className={classes.enterData}>
                <label>Priority</label>
                <input
                  type="number"
                  min={1}
                  className={classes.priority}
                  value={priority}
                  onChange={(e) => {
                    setPriority(e.target.value);
                  }}
                />
              </div>
              <div className={classes.enterData}>
                <label>Description</label>
                <textarea
                  className={classes.desc}
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
              </div>
              <button className={classes.add} onClick={addStep}>
                <img src={Add} alt="add" />
                Add
              </button>
            </div>
          </div>
          {evolutionStepsNum !== 0 && (
            <div className={classes.collaborations}>
              <h3>Evolution Table</h3>
              <div className={classes.collaborationData}>
                <div className={classes.collaborationsList}>
                  {evolutionSteps.map((item, index) => (
                    <EvolutionStepElement
                      key={index}
                      uuid={item.uuid}
                      token={token}
                      step={item.step}
                      finishDate={item.finishDate}
                      description={item.description}
                      priority={item.priority}
                      setStep={setStep}
                      setFinishDate={setFinishDate}
                      setDescription={setDescription}
                      setPriority={setPriority}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EvolutionStep;
