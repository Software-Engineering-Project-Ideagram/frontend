import { React, useState, useEffect } from "react";
import classes from "./OfficialInformation.module.scss";
import Add from "../../images/add.png";
import OfficialInformationElement from "../Elements/OfficialInformationElement/OfficialInformationElement";
import { useDispatch, useSelector } from "react-redux";
import { officialInformationActions } from "../../store/officialInformation";
import axios from "axios";

const OfficialInformation = ({ uuid, token }) => {
  const dispatch = useDispatch();
  const officialInformation = useSelector(
    (state) => state.officialInformation.officialInformation
  );
  const officialInformationNum = useSelector(
    (state) => state.officialInformation.officialInformationNum
  );

  const [organization, setOrganization] = useState("");
  const [registerNumber, setRegisterNumber] = useState("");
  const [description, setDescription] = useState("");
  const [organizationsList, setOrganizationsList] = useState([]);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const res = await axios.get(
          `http://api.iwantnet.space:8001/api/idea/organization`
        );
        console.log(res);
        setOrganizationsList(res.data);
        setOrganization([res.data[0].uuid]);
      } catch (err) {
        console.log(err);
      }
    };
    getUserData();
  }, []);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const res = await axios.get(
          `http://api.iwantnet.space:8001/api/idea/official-info/${uuid}`,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        console.log(res);
        dispatch(officialInformationActions.deleteAll());
        for (const req of res.data) {
          dispatch(
            officialInformationActions.addOfficialInformation({
              uuid: req.uuid,
              organization: req.organization,
              registerNumber: req.register_number,
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

  const addNewOfficialInformation = async () => {
    console.log(organization);
    console.log(registerNumber);
    console.log(description);
    if (organization !== "" && registerNumber !== "" && description !== "") {
      try {
        const res = await axios.post(
          `http://api.iwantnet.space:8001/api/idea/official-info/${uuid}`,
          [
            {
              organization: organization[0],
              register_number: registerNumber,
              description: description,
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
          officialInformationActions.addOfficialInformation({
            uuid: res.data[0].uuid,
            organization: res.data[0].organization,
            registerNumber: res.data[0].register_number,
            description: res.data[0].description,
          })
        );
        setOrganization([organizationsList[0].uuid]);
        setRegisterNumber("");
        setDescription("");
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("Please fill the fields properly");
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.body}>
        <h2>
          Official <br /> Information
        </h2>
        <div className={classes.officialInfo}>
          <div className={classes.officialDetails}>
            <h3>Official Information</h3>
            <div className={classes.details}>
              <div>
                <label>Organization</label>
                <select
                  value={organization}
                  onChange={(e) => {
                    setOrganization(e.target.value);
                  }}
                >
                  {organizationsList.map((item) => (
                    <option value={`${item.uuid}`}>{item.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label>Register No.</label>
                <input
                  type="text"
                  value={registerNumber}
                  onChange={(e) => {
                    setRegisterNumber(e.target.value);
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
              <button
                className={classes.add}
                onClick={addNewOfficialInformation}
              >
                <img src={Add} alt="add" />
                Add
              </button>
            </div>
          </div>
          {officialInformationNum !== 0 && (
            <div className={classes.officialTable}>
              <h3>Office Table</h3>
              <div className={classes.officialData}>
                <div className={classes.officialDataList}>
                  {officialInformation.map((item, index) => (
                    <OfficialInformationElement
                      key={index}
                      uuid={item.uuid}
                      amount={index + 1}
                      token={token}
                      organization={item.organization}
                      registerNumber={item.registerNumber}
                      description={item.description}
                      setOrganization={setOrganization}
                      setRegisterNumber={setRegisterNumber}
                      setDescription={setDescription}
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

export default OfficialInformation;
