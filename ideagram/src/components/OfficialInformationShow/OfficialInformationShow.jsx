import { React, useState, useEffect } from "react";
import classes from "./OfficialInformationShow.module.scss";
import { StepInfo, SelectableItemToShow } from "..";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { officialInformationActions } from "../../store/officialInformation";
import OfficialInformationElementShow from "../Elements/OfficialInformationElementShow/OfficialInformationElementShow";

const OfficialInformationShow = ({ uuid, token }) => {
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

  useEffect(() => {
    const getIdeaData = async () => {
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
        for (const item of res.data) {
          dispatch(
            officialInformationActions.addOfficialInformation({
              uuid: item.uuid,
              organization: item.organization,
              registerNumber: item.register_number,
              description: item.description,
            })
          );
        }

        if (officialInformationNum !== 0) {
          setOrganization(res.data[0].organization);
          setRegisterNumber(res.data[0].register_number);
          setDescription(res.data[0].description);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getIdeaData();
  }, []);

  return (
    <div className={classes.body}>
      <h2>Official Information</h2>
      <div className={classes.officialInformation}>
        <h4 className={classes.title}>Official Table</h4>
        {officialInformationNum !== 0 && (
          <div className={classes.officialInformationList}>
            {officialInformation.map((item, index) => (
              <OfficialInformationElementShow
                key={index}
                uuid={item.uuid}
                amount={index + 1}
                organization={organization}
                registerNumber={registerNumber}
                description={description}
                setOrganization={setOrganization}
                setRegisterNumber={setRegisterNumber}
                setDescription={setDescription}
              />
            ))}
          </div>
        )}
      </div>
      <div className={classes.stepsInfo}>
        <h4>
          Official
          <br />
          Information
        </h4>
        <div className={classes.stepInfo}>
          <StepInfo
            firstTitle="Organization"
            secTitle="Register No."
            thirdTitle="Description"
            stepName={organization}
            finishDate={registerNumber}
            description={description}
          />
        </div>
      </div>
    </div>
  );
};

export default OfficialInformationShow;
