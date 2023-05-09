import React from "react";
import classes from "./CreateAccount.module.scss";
import ForgotPasswordIMG from "../../images/advertisment.png";
import Next from "../../images/next.png";
import SignUp from "../../images/SignUp.png";

const CreateAccount = () => {
  return (
    <div className={classes.container}>
      <div className={classes.stepperContainer}>
        <h1 className={classes.title}>Create Account</h1>
      </div>
      <div className={classes.changePassword}>
        <img src={ForgotPasswordIMG} alt="Forgot_Password_IMG" />
        <div className={classes.steps}>
          <div className={classes.step1}>
            <div>
              <label>Username</label>
              <input type="text" />
            </div>
            <div>
              <label>Email</label>
              <input type="email" />
            </div>
            <div>
              <label>Password</label>
              <input type="password" />
            </div>
            <button className={classes.option}>
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
