import { React, useState, useContext } from "react";
import classes from "./CollaborationRequest.module.scss";
import Add from "../../images/add.png";
import CollaborationRequestElement from "../Elements/CollaborationRequestElement/CollaborationRequestElement";
import { useDispatch, useSelector } from "react-redux";
import { collaborationRequestsActions } from "../../store/collaborationRequest";
import axios from "axios";
import AuthContext from "../../api/AuthContext";

const CollaborationRequest = () => {
  const token = useContext(AuthContext).getAccessToken();
  console.log(token);

  const dispatch = useDispatch();
  const requests = useSelector((state) => state.report.reports);
  const requestsNum = useSelector((state) => state.report.reportsNum);

  const [jobTitle, setJobTitle] = useState("");
  const [skills, setSkills] = useState("");
  const [education, setEducation] = useState("");
  const [age, setAge] = useState("");
  const [salary, setSalary] = useState("");
  const [status, setStatus] = useState("");
  const [description, setDescription] = useState("");

  const addRequest = async () => {
    if (
      jobTitle !== "" &&
      skills !== "" &&
      education !== "" &&
      age !== "" &&
      age !== "" &&
      salary !== "" &&
      status !== "" &&
      description !== ""
    ) {
      try {
        // const res = await axios.post(
        //   "http://api.iwantnet.space:8001/api/user/social-media/",
        //   {
        //     type: userMediaLinkTitle,
        //     link: userMediaLinkDetails,
        //   },
        //   {
        //     headers: {
        //       Authorization: "Bearer " + token,
        //       "Content-Type": "multipart/form-data",
        //     },
        //   }
        // );
        // console.log(res);
        // dispatch(
        //   userMediaLinksActions.addUserMediaLink({
        //     uuid: res.data.uuid,
        //     title: res.data.type,
        //     details: res.data.link,
        //   })
        // );
      } catch (err) {
        console.log(err);
      }
    }
  };

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
                <input
                  type="text"
                  value={jobTitle}
                  onChange={(e) => {
                    setJobTitle(e.target.value);
                  }}
                />
              </div>
              <div>
                <label>Skills</label>
                <input
                  type="text"
                  value={skills}
                  onChange={(e) => {
                    setSkills(e.target.value);
                  }}
                />
              </div>
              <div>
                <label>Education</label>
                <input
                  type="text"
                  value={education}
                  onChange={(e) => {
                    setEducation(e.target.value);
                  }}
                />
              </div>
              <div>
                <label>Age</label>
                <input
                  type="text"
                  className={classes.short}
                  value={age}
                  onChange={(e) => {
                    setAge(e.target.value);
                  }}
                />
              </div>
              <div>
                <label>Salary</label>
                <input
                  type="text"
                  className={classes.short}
                  value={salary}
                  onChange={(e) => {
                    setSalary(e.target.value);
                  }}
                />
              </div>
              <div>
                <label>Status</label>
                <input
                  type="text"
                  className={classes.short}
                  value={status}
                  onChange={(e) => {
                    setStatus(e.target.value);
                  }}
                />
              </div>
              <div>
                <label>Description</label>
                <textarea
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
              </div>
              <button className={classes.add} onClick={addRequest}>
                <img src={Add} alt="add" />
                Add
              </button>
            </div>
          </div>
          <div className={classes.collaborations}>
            <h3>Collaborators Table</h3>
            <div className={classes.collaborationData}>
              <div className={classes.collaborationsList}>
                {requests.map((item, index) => (
                  <CollaborationRequestElement
                    key={index}
                    uuid={item.uuid}
                    amount={1}
                    title={item.jobTitle}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollaborationRequest;
