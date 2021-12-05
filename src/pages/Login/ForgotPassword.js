import { useState } from "react";
import axios from "axios";
import "./forgotPassword.scss";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const forgotPasswordHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "/api/auth/forgotpassword",
        { email },
        config
      );

      setSuccess(data.data);
    } catch (error) {
      setError(error.response.data.error);
      setEmail("");
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className="forgotpassword-screen">
      <div className="mask"></div>
      <form
        onSubmit={forgotPasswordHandler}
        className="forgotpassword-screen__form"
      >
        <h2>BUSTER</h2>
        <h3 className="forgotpassword-screen__title">Forgot Password</h3>
        {error && <span className="error-message">{error}</span>}
        {success && <span className="success-message">{success}</span>}
        <div className="form-group">
          <p className="forgotpassword-screen__subtext">
            Please enter the email address you register your account with<br/>We
            will send you reset password confirmation to this email
          </p>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            required
            id="email"
            placeholder="john@smith.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Send Email
        </button>
        <div className="line1" />
        <div className="line2" />
        <p className="or">or</p>
        <div className="login_btn10">
          <Link to="/login">Sign in</Link>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
