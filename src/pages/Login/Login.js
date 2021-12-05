import ErrorIcon from "@mui/icons-material/Error";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./login.scss";

export default function Login({ history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      loginHandler();
    }
  };
  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      history.push("/");
    }
  }, [history]);

  const loginHandler = async () => {
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "/api/auth/login",
        { email, password },
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
    console.log(error);
  };

  return (
    <div id="login">
      <div className="mask"></div>
      <div className="container">
        <h1>BUSTER</h1>
        <h2>Sign in</h2>
        <div className="login-box">
          <label>Email address</label>
          <input
            type="text"
            placeholder="team12@uit.edu.vn"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={handleEnter}
          />
        </div>
        <Link to="/forgotpassword" className="forgot">
          Forgot password?
        </Link>
        <button className="btn-signin" onClick={loginHandler}>
          SIGN IN
        </button>
        <p>
          Don't have an account <Link to="/register">Sign up</Link>
        </p>
      </div>
      <div className={`notice account ${error ? "display" : "hidden"}`}>
        <ErrorIcon />
        <div className="incorrect-detail">
          <h3>Unsuccess</h3>
          <p>{error}</p>
        </div>
      </div>
    </div>
  );
}
