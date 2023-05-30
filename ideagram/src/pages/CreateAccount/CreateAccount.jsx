import { React, useContext, useState } from "react";
import classes from "./CreateAccount.module.scss";
import ForgotPasswordIMG from "../../images/advertisment.png";
import SignUp from "../../images/SignUp.png";
import AuthContext from "../../api/AuthContext";
import PasswordChecklist from "react-password-checklist";

const CreateAccount = () => {
  const { register } = useContext(AuthContext);

  const [userNameData, setUserNameData] = useState("");
  const [passwordData, setPasswordData] = useState("");
  const [emailData, setEmailData] = useState("");

  const manageRegister = async () => {
    if (password_validate(passwordData)) {
      await register({
        email: emailData,
        username: userNameData,
        password: passwordData,
      });
    }
  };

  const password_validate = (password) => {
    var re = {
      small: /(?=.*[a-z])/,
      length: /(?=.{8}$)/,
      specialChar: /[ -\/:-@\[-\`{-~]/,
      digit: /(?=.*[0-9])/,
    };
    return (
      re.small.test(password) &&
      re.length.test(password) &&
      re.specialChar.test(password) &&
      re.digit.test(password)
    );
  };

  return (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        <h1 className={classes.title}>Create Account</h1>
      </div>
      <div className={classes.changePassword}>
        <img src={ForgotPasswordIMG} alt="Forgot_Password_IMG" />
        <div className={classes.steps}>
          <div className={classes.step1}>
            <div>
              <label>Username</label>
              <input
                type="text"
                onChange={(value) => {
                  setUserNameData(value.target.value);
                }}
              />
            </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                onChange={(value) => {
                  setEmailData(value.target.value);
                }}
              />
            </div>
            <div>
              <label>Password</label>
              <input
                type="password"
                onChange={(value) => {
                  setPasswordData(value.target.value);
                }}
              />
            </div>
            <div>
              <PasswordChecklist
                rules={["minLength", "specialChar", "number"]}
                minLength={8}
                value={passwordData}
                onChange={(isValid) => {}}
                messages={{
                  minLength:
                    "The minimum length of the password must be eight.",
                  specialChar: "The password must have special characters.",
                  number: "The password must have a number.",
                }}
              />
            </div>
            <button className={classes.option} onClick={manageRegister}>
              <img src={SignUp} alt="sign_up" />
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
