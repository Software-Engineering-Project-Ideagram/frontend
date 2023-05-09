import React from "react";
import classes from "./Login.module.scss";
import ForgotPasswordIMG from "../../images/advertisment.png";
import Next from "../../images/next.png";

const Login = () => {
  return (
    <div className={classes.container}>
      <div className={classes.stepperContainer}>
        <h1 className={classes.title}>Login</h1>
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
              <label>Password</label>
              <input type="password" />
            </div>
            <label for="RememberMe" className={classes.filter}>
              Remember Me
              <input type="checkbox" value="1" id="RememberMe" />
              <span className={classes.custom}></span>
            </label>
            <button className={classes.option}>
              <img src={Next} alt="login" />
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
