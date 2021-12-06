import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';
import Google from '../../../assets/images/welcome/get-on-chplay.png';
import IOS from '../../../assets/images/welcome/get-on-appstores.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <div className="footer-container">
      {/* <div className="footer-links">
        <div className="heading">
          <div className="logo">BUSTER</div>
          <div className="social-networks">
            <FacebookIcon
              style={{ fontSize: 50, marginRight: 20 }}
              className="icon"
            />
            <InstagramIcon
              style={{ fontSize: 50, marginRight: 20 }}
              className="icon"
            />
            <TwitterIcon
              style={{ fontSize: 50, marginRight: 20 }}
              className="icon"
            />
            <LinkedInIcon
              style={{ fontSize: 50, marginRight: 20 }}
              className="icon"
            />
          </div>
        </div>

        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>COMPANY</h2>
            <Link to="/">About Us</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Contact</Link>
          </div>
          <div className="footer-link-items">
            <h2>HELP</h2>
            <Link to="/">Account & Billing</Link>
            <Link to="/">Plans & Pricing</Link>
            <Link to="/">Help Center</Link>
            <Link to="/">Contact Support</Link>
            <Link to="/">Supported Devices</Link>
          </div>
          <div className="footer-link-items">
            <h2>PRESS</h2>
            <Link to="/">Press Release</Link>
            <Link to="/">BUSTER in the News</Link>
          </div>
          <div className="footer-link-items">
            <h2>LEGAL</h2>
            <Link to="/">Privacy Policy (Updated)</Link>
            <Link to="/">Terms of Use (Updated)</Link>
            <Link to="/">Do Not Sell Information</Link>
          </div>
        </div>
      </div>

        <section className="download">
        <small className="platforms">
          <img src={Google} alt="google" />
          <img src={IOS} alt="IOS" />
        </small>
      </section> */}
      <p>COPYRIGHT BY</p>
      <p>19251836 - 19521913 - 19521917 - 19520023 - 19521185</p>
    </div>
  );
}

export default Footer;
