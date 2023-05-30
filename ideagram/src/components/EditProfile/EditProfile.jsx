import { React, useState, useContext, useEffect } from "react";
import classes from "./EditProfile.module.scss";
import UserProfile from "../../images/user (2).png";
import Apply from "../../images/apply.png";
import Next from "../../images/next.png";
import Previous from "../../images/prev.png";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { EditDeleteElement } from "../../components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AuthContext from "../../api/AuthContext";
import axios from "axios";

const steps = ["1.Personal Information", "2.Change Password", "3.Manage Links"];

const EditProfile = () => {
  const token = useContext(AuthContext).getAccessToken();
  console.log(token);

  const [selectedProfile, setUserSelectedProfile] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [userFirstName, setUserFirstName] = useState(null);
  const [userLastName, setUserLastName] = useState(null);
  const [userGender, setUserGender] = useState(null);
  const [userBirthDate, setUserBirthDate] = useState(null);
  const [userCountry, setUserCountry] = useState(null);
  const [userState, setUserState] = useState(null);
  const [userCity, setUserCity] = useState(null);
  const [userAddress, setUserAddress] = useState(null);
  const [userUserName, setUserUserName] = useState(null);

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  useEffect(() => {
    const getUserData = async () => {
      try {
        const res = await axios.get(
          "http://api.iwantnet.space:8001/api/user/profile/",
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        console.log(res);
        setUserProfile(res.data.profile_image);
        setUserFirstName(res.data.first_name);
        setUserLastName(res.data.last_name);
        setUserGender(res.data.gender);
        setUserBirthDate(res.data.birth_date);
        setUserCountry(res.data.address.country);
        setUserState(res.data.address.state);
        setUserCity(res.data.address.city);
        setUserAddress(res.data.address.address);
        setUserUserName(res.data.username);
      } catch (err) {
        console.log(err);
      }
    };
    getUserData();
  }, []);

  const changeUserInfo = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("username", userUserName);
    formData.append("first_name", userLastName);
    formData.append("last_name", userLastName);
    formData.append("birth_date", userBirthDate);
    formData.append("gender", userGender);
    // formData.append("bio", userBio);
    // formData.append("address", showLikes);
    if (selectedProfile !== null) {
      formData.append("profile_image", selectedProfile);
    }
    // formData.append("show_comments", showComments);

    for (const value of formData.values()) {
      console.log(value);
    }

    await uploadNewUserData(formData);
  };

  const uploadNewUserData = async (formData) => {
    try {
      const res = await axios.put(
        "http://api.iwantnet.space:8001/api/user/profile/",
        formData,
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUploadedImage = (e) => {
    console.log(e.target.files[0]);
    setUserSelectedProfile(e.target.files[0]);
    setUserProfile(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className={classes.container}>
      <div className={classes.body}>
        <h2>Edit Profile</h2>
        <div className={classes.steps}>
          <Stepper className={classes.stepper} activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </div>

        <div className={classes.profileInfo}>
          {activeStep === 0 && (
            <div className={classes.userInfo}>
              <div className={classes.info}>
                <div className={classes.profileImage}>
                  <input
                    id="selectProfileImage"
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      handleUploadedImage(e);
                    }}
                  />
                  <label for="selectProfileImage">
                    <img
                      src={userProfile == null ? UserProfile : userProfile}
                      alt="User_Profile"
                    />
                  </label>
                </div>
                <div className={classes.userPersonalInfo}>
                  <div className={classes.enterInfo}>
                    <label>First Name</label>
                    <input
                      type="text"
                      value={userFirstName}
                      onChange={(e) => {
                        setUserFirstName(e.target.value);
                      }}
                    />
                  </div>
                  <div className={classes.enterInfo}>
                    <label>Last Name</label>
                    <input
                      type="text"
                      value={userLastName}
                      onChange={(e) => {
                        setUserLastName(e.target.value);
                      }}
                    />
                  </div>
                  <div className={classes.sideBySide}>
                    <div className={classes.enterGender}>
                      <label>Gender</label>
                      <select name="gender">
                        {userGender === "male" && (
                          <>
                            <option value="male" selected>
                              Male
                            </option>
                            <option value="female">Female</option>
                          </>
                        )}
                        {userGender === "female" && (
                          <>
                            <option value="male">Male</option>
                            <option value="female" selected>
                              Female
                            </option>
                          </>
                        )}
                      </select>
                    </div>
                    <div className={classes.enterBirthDate}>
                      <label>Birth Date</label>
                      <DatePicker
                        selected={new Date(userBirthDate)}
                        onChange={(date) => setUserBirthDate(date)}
                        minDate={new Date("1923-01-01")}
                        maxDate={new Date()}
                        dateFormat="yyyy-MM-dd"
                      />
                    </div>
                  </div>
                  <div className={classes.enterAddress}>
                    <div>
                      <label>Country</label>
                      <input
                        type="text"
                        value={userCountry}
                        onChange={(e) => {
                          setUserCountry(e.target.value);
                        }}
                      />
                    </div>
                    <div>
                      <label>State</label>
                      <input
                        type="text"
                        value={userState}
                        onChange={(e) => {
                          setUserState(e.target.value);
                        }}
                      />
                    </div>
                    <div>
                      <label>City</label>
                      <input
                        type="text"
                        value={userCity}
                        onChange={(e) => {
                          setUserCity(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className={classes.enterInfo}>
                    <label>Address</label>
                    <input
                      type="text"
                      value={userAddress}
                      onChange={(e) => {
                        userAddress(e.target.value);
                      }}
                    />
                  </div>
                  <div className={classes.enterInfo}>
                    <label>Username</label>
                    <input
                      type="text"
                      value={userUserName}
                      onChange={(e) => {
                        userUserName(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className={classes.options}>
                <button onChange={changeUserInfo}>
                  <img src={Apply} alt="apply" />
                  Apply
                </button>
                <button onClick={handleNext}>
                  <img src={Next} alt="next" />
                  Next
                </button>
              </div>
            </div>
          )}

          {activeStep === 1 && (
            <div className={classes.userPasswordInfo}>
              <div className={classes.userPassword}>
                <div className={classes.enterInfo}>
                  <label>Current Password</label>
                  <input type="password" />
                </div>
                <div className={classes.enterInfo}>
                  <label>New Password</label>
                  <input type="password" />
                </div>
                <div className={classes.enterInfo}>
                  <label>Repeat New Password</label>
                  <input type="password" />
                </div>
              </div>

              <div className={classes.options}>
                <button onClick={handleBack}>
                  <img src={Previous} alt="previous" />
                  Previous
                </button>
                <button>
                  <img src={Apply} alt="apply" />
                  Apply
                </button>
                <button onClick={handleNext}>
                  <img src={Next} alt="next" />
                  Next
                </button>
              </div>
            </div>
          )}

          {activeStep === 2 && (
            <div className={classes.userLinksInfo}>
              <div className={classes.addLinks}>
                <h3>Add Link</h3>
                <div className={classes.enterInfo}>
                  <div className={classes.enterSite}>
                    <label>Site</label>
                    <select>
                      <option value="one">One</option>
                      <option value="two">Two</option>
                    </select>
                  </div>
                  <div className={classes.enterLink}>
                    <label>Link</label>
                    <input type="text" />
                  </div>
                  <div className={classes.options}>
                    <button>Add</button>
                  </div>
                </div>
              </div>
              <div className={classes.linksContainer}>
                <h3>Links</h3>
                <div className={classes.links}>
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
              <p className={classes.noLink}>No Report Here</p>
            )} */}
                  <EditDeleteElement key={1} id={1} amount={1} title="one" />
                  <EditDeleteElement
                    key={2}
                    id={2}
                    amount={2}
                    title="twwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwo"
                  />
                  <EditDeleteElement key={3} id={3} amount={3} title="three" />
                  <EditDeleteElement key={4} id={4} amount={4} title="one" />
                  <EditDeleteElement
                    key={2}
                    id={2}
                    amount={2}
                    title="twwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwo"
                  />
                  <EditDeleteElement key={5} id={5} amount={5} title="three" />
                  <EditDeleteElement key={6} id={6} amount={6} title="one" />
                  <EditDeleteElement
                    key={7}
                    id={7}
                    amount={7}
                    title="twwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwo"
                  />
                  <EditDeleteElement key={8} id={8} amount={8} title="three" />
                  <EditDeleteElement key={9} id={9} amount={9} title="one" />
                  <EditDeleteElement
                    key={10}
                    id={10}
                    amount={10}
                    title="twwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwo"
                  />
                  <EditDeleteElement
                    key={11}
                    id={11}
                    amount={11}
                    title="three"
                  />
                </div>
              </div>
              <div className={classes.options}>
                <button onClick={handleBack}>
                  <img src={Previous} alt="previous" />
                  Previous
                </button>
                <button>
                  <img src={Apply} alt="apply" />
                  Apply
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
