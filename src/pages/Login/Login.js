import { useState } from "react";
import users from "../../config/configUser";
import ErrorIcon from "@mui/icons-material/Error";
import EmailIcon from "@mui/icons-material/Email";
import PasswordIcon from "@mui/icons-material/Password";
import "./login.scss";
export default function Login() {
  const [signUp, setSignUp] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmAccount, setConfirmAccount] = useState(false);
  const [confrimEmail, setConfrimEmail] = useState(false);
  const [checkPassword, setCheckPassword] = useState(false);
  const [checkConfirmPassword, setCheckConfirmPassword] = useState(false);
  const [passwordCurr, setPasswordCurr] = useState("");
  const [emailCurr, setEmailCurr] = useState("");
  // const [checkSingUp, setCheckSignUp] = useState(false)
  let listUser = users;

  const getUserName = (e) => {
    setUserName(e.target.value);
  };
  const getPassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSignIn = () => {
    let confirm = listUser.some(
      (user) => user.userName === userName && user.password === password
    );
    if (confirm) {
      window.location.href = "http://localhost:3000/";
    } else {
      setConfirmAccount(true);
      setTimeout(() => {
        setConfirmAccount(false);
      }, 2500);
    }
  };
  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      handleSignIn();
    }
  };
  const handleEmail = (e) => {
    const email = e.target.value;
    setEmailCurr(email);
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const check = re.test(String(email).toLowerCase());
    if (!check && signUp) {
      setConfrimEmail(true);
    } else {
      setConfrimEmail(false);
    }
  };
  const handlePassword = (e) => {
    const password = e.target.value;
    setPasswordCurr(password);
    if (password.length < 6 && signUp) {
      setCheckPassword(true);
    } else {
      setCheckPassword(false);
    }
  };
  const handleConfirmPassword = (e) => {
    const confirmPass = e.target.value;
    if (confirmPass !== passwordCurr) {
      setCheckConfirmPassword(true);
    } else {
      setCheckConfirmPassword(false);
    }
  };
  const handleSignUp = () => {
    const check = !confrimEmail && !checkPassword && !checkConfirmPassword;
    console.log(check);
    if (check) {
      console.log(listUser);
      listUser.push({
        userName: emailCurr,
        password: passwordCurr,
      });
      toggleSignUp();
    }
  };

  const toggleSignUp = () => {
    setSignUp(!signUp);
  };
  return (
    <div id="login">
      <div className="mask"></div>
      <div className="container">
        <h1>BUSTER</h1>
        <h2>Sign in</h2>
        <div className="login-social">
          <button className="login-gg">Continue with Google</button>
          <button className="login-fb"></button>
        </div>
        <p className="or">or</p>
        <div className="login-box">
          <label>Email address</label>
          <input
            type="text"
            // placeholder="User Name..."
            onChange={getUserName}
            onBlur={handleEmail}
          />
          <label>Password</label>
          <input
            type="password"
            onChange={getPassword}
            onKeyDown={handleEnter}
            onBlur={handlePassword}
          />
          {signUp && (
            <>
              <label>Confirm Password</label>
              <input type="password" onBlur={handleConfirmPassword} />
            </>
          )}
        </div>
        <p className="forgot">Forgot password?</p>
        {!signUp && (
          <button className="btn-signin" onClick={handleSignIn}>
            SIGN IN
          </button>
        )}
        {signUp && (
          <button className="btn-signup" onClick={handleSignUp}>
            SIGN UP
          </button>
        )}
        {!signUp && (
          <p>
            Don't have an account <span onClick={toggleSignUp}>Sign up</span>
          </p>
        )}
        {signUp && (
          <p>
            You have an account <span onClick={toggleSignUp}>Sign in</span>
          </p>
        )}
      </div>
      <div
        className={`notice account ${confirmAccount ? "display" : "hidden"}`}
      >
        <ErrorIcon />
        <div className="incorrect-detail">
          <h3>Unsuccess</h3>
          <p>User name or password is incorrect</p>
        </div>
      </div>
      <div className={`notice email ${confrimEmail ? "display" : "hidden"}`}>
        <EmailIcon />
        <div className="incorrect-detail">
          <h3>Warning</h3>
          <p>Emaild invalid</p>
        </div>
      </div>
      <div
        className={`notice password ${checkPassword ? "display" : "hidden"}`}
      >
        <PasswordIcon />
        <div className="incorrect-detail">
          <h3>Warning</h3>
          <p>Password must has at leat 6 characters</p>
        </div>
      </div>
      <div
        className={`notice confirm-password ${
          checkConfirmPassword ? "display" : "hidden"
        }`}
      >
        <PasswordIcon />
        <div className="incorrect-detail">
          <h3>Warning</h3>
          <p>Confirm password incorrect!!!</p>
        </div>
      </div>
    </div>
  );
}
