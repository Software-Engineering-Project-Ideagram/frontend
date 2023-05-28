import { React, useRef, useContext } from "react";
import classes from "./CreateAccount.module.scss";
import ForgotPasswordIMG from "../../images/advertisment.png";
import SignUp from "../../images/SignUp.png";
import AuthContext from "../../api/AuthContext";

const CreateAccount = () => {
  const { register } = useContext(AuthContext);

  const userNameData = useRef("");
  const passwordData = useRef("");
  const emailData = useRef("");

  const manageRegister = async () => {
    const email = emailData.current.value;
    const username = userNameData.current.value;
    const password = passwordData.current.value;

    const payload = {
      email: email,
      username: username,
      password: password,
    };

    console.log(payload);
    await register(payload);
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
              <input type="text" ref={userNameData} />
            </div>
            <div>
              <label>Email</label>
              <input type="email" ref={emailData} />
            </div>
            <div>
              <label>Password</label>
              <input type="password" ref={passwordData} />
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
