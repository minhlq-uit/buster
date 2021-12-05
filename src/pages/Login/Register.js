import { useState } from "react";
import { Link } from "react-router-dom";
import ErrorIcon from "@mui/icons-material/Error";
import axios from "axios";
import EmailIcon from "@mui/icons-material/Email";
import PasswordIcon from "@mui/icons-material/Password";
import "./login.scss";
export default function Register({ history }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [confirmEmail, setConfirmEmail] = useState(false);
  const [checkUsername, setCheckUsername] = useState(false);
  const [checkPassword, setCheckPassword] = useState(false);
  const [checkConfirmPassword, setCheckConfirmPassword] = useState(false);

  const registerHandler = async () => {
    let check =
      !checkUsername &&
      !confirmEmail &&
      !checkPassword &&
      !checkConfirmPassword;
    if (check) {
      const config = {
        header: {
          "Content-Type": "application/json",
        },
      };

      if (password !== confirmpassword) {
        setPassword("");
        setConfirmPassword("");
        setTimeout(() => {
          setError("");
        }, 5000);
        return setError("Passwords do not match");
      }

      try {
        const { data } = await axios.post(
          "/api/auth/register",
          {
            username,
            email,
            password,
          },
          config
        );

        localStorage.setItem("authToken", data.token);

        history.push("/");
      } catch (error) {
        setError(error.response.data.error);
        setTimeout(() => {
          setError("");
        }, 5000);
      }
    }
  };
  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      registerHandler();
    }
  };
  const handleUsername = () => {
    const re = /^(?=.{1,20}$)(?![_.])[a-zA-Z0-9._]+(?<![_.])$/;
    const check = re.test(String(username).toLowerCase());
    if (!check) {
      setCheckUsername(true);
    } else {
      setCheckUsername(false);
    }
  };
  const handleEmail = (e) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const check = re.test(String(email).toLowerCase());
    if (!check) {
      setConfirmEmail(true);
    } else {
      setConfirmEmail(false);
    }
  };
  const handlePassword = () => {
    if (password.length < 6) {
      setCheckPassword(true);
    } else {
      setCheckPassword(false);
    }
  };
  const handleConfirmPassword = () => {
    if (confirmpassword !== password) {
      setCheckConfirmPassword(true);
    } else {
      setCheckConfirmPassword(false);
    }
  };

  return (
    <div id="login">
      <div className="mask"></div>
      <div className="container">
        <h1>BUSTER</h1>
        <h2>Sign up</h2>
        <div className="login-box">
          <label>User Name</label>
          <input
            type="text"
            placeholder="team12"
            onChange={(e) => setUsername(e.target.value)}
            onBlur={handleUsername}
          />
          <label>Email Address</label>
          <input
            type="text"
            placeholder="team12@uit.edu.vn"
            onChange={(e) => setEmail(e.target.value)}
            onBlur={handleEmail}
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
            onChange={(e) => setPassword(e.target.value)}
            onBlur={handlePassword}
          />

          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
            onBlur={handleConfirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button
          className="btn-signup"
          onClick={registerHandler}
          onKeyDown={handleEnter}
        >
          SIGN UP
        </button>
        <p>
          You have an account <Link to="/login"> Sign in </Link>
        </p>
      </div>

      <div className={`notice email ${confirmEmail ? "display" : "hidden"}`}>
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
      <div className={`notice account ${error ? "display" : "hidden"}`}>
        <ErrorIcon />
        <div className="incorrect-detail">
          <h3>Unsuccess</h3>
          <p>{error}</p>
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
