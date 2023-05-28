import { React, useRef, useContext } from "react";
import classes from "./Login.module.scss";
import ForgotPasswordIMG from "../../images/advertisment.png";
import Next from "../../images/next.png";
import AuthContext from "../../api/AuthContext";

const Login = () => {
  const { login } = useContext(AuthContext);

  const userNameData = useRef("");
  const passwordData = useRef("");

  // const manageLogin = async () => {
  //   try {
  //     const username = userNameData.current.value;
  //     const password = passwordData.current.value;
  //     console.log(username);
  //     console.log(password);
  //     const res = await axios.post(
  //       "http://api.iwantnet.space:8001/api/auth/jwt/login/",
  //       {
  //         username,
  //         password,
  //       }
  //     );

  //     console.log(res);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const manageLogin = async () => {
    const username = userNameData.current.value;
    const password = passwordData.current.value;

    console.log(username, password);
    await login({
      username,
      password,
    });
  };

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
              <input type="text" ref={userNameData} />
            </div>
            <div>
              <label>Password</label>
              <input type="password" ref={passwordData} />
            </div>
            <label for="RememberMe" className={classes.filter}>
              Remember Me
              <input type="checkbox" value="1" id="RememberMe" />
              <span className={classes.custom}></span>
            </label>
            <button className={classes.option} onClick={manageLogin}>
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
