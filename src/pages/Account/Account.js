import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./account.scss";
export default function Account() {
  const percentage = 66;
  const profile_pic1 =
    "https://i.pinimg.com/564x/a7/76/7b/a7767ba20aee0ac50cfa3046dc913946.jpg";
  const profile_pic2 =
    "https://i.pinimg.com/564x/e6/4b/ec/e64beca1b9921925b59671bbf74b9837.jpg";
  const profile_pic3 =
    "https://i.pinimg.com/564x/5b/72/68/5b7268fe3d492efa1b4368cff3da5a5d.jpg";
  const profile_pic4 =
    "https://i.pinimg.com/564x/e8/a5/3e/e8a53e33f9654e25179c1fb9d53fb873.jpg";
  const profile_pic5 =
    "https://i.pinimg.com/564x/a0/1e/5f/a01e5f8fc2f8c77cb82611fbb4f4e38c.jpg";

  return (
    <div className="account">
      <div className="main-title">Account</div>
      <div className="notice">
        <div className="content">
          <div className="icon">
            <InfoIcon />
          </div>
          <div className="notice-title">
            The membership will be canceled at the current billing period
          </div>
        </div>
      </div>
      <div className="member-billing">
        <div className="member-billing-title">MEMBERSHIP & BILLING</div>
        <div className="content">
          <CircularProgressbar
            value={percentage}
            text="95 DAYS"
            className="processBar"
          />
          <div className="info">
            <div className="email">
              <p className="info-email">team12@gmail.com</p>
              <p className="change-email">Change email</p>
            </div>
            <div className="password">
              <p className="info-password">PassWord: *********</p>
              <p className="change-password">Change PassWord</p>
            </div>
            <div className="phone">
              <p className="info-phone">093 999 0999</p>
              <p className="change-phone">Change phone number</p>
            </div>
            <div className="date">
              <p className="info-text">
                Your next billing date is{" "}
                <span className="info-date">December 31,2021</span>
              </p>
              <p className="payment">Manage payment</p>
            </div>
            <div className="bank">
              <p className="info-bank">Vietcombank: **** **** **** 9999</p>
              <p className="detail">Billing detail</p>
            </div>
          </div>
        </div>
      </div>
      <div className="plane-detail">
        <div className="plane-detail-title">PLANE DETAIL</div>
        <div className="abs">Premium FULL HD</div>
      </div>
      <div className="user">
        <div className="user-title">USER</div>
        <div className="user-img">
          <img src={profile_pic1} alt="user_img" />
          <img src={profile_pic2} alt="user_img" />
          <img src={profile_pic3} alt="user_img" />
          <img src={profile_pic4} alt="user_img" />
          <img src={profile_pic5} alt="user_img" />
        </div>
      </div>
    </div>
  );
}
