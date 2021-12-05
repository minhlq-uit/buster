import {useState, useContext} from 'react'
import { NavContext } from './NavContext';
import "./settings.scss";

export default function Settings() {
  const context = useContext(NavContext);
  return (
    <div className="settings">
      <div className="settings-container">
        <div className="main-title">Settings</div>
        <div className="settings-title">Notification</div>
        <section className="sub-container">
          <div>Your Movie</div>
          <section className="settings-items">
            <div className="settings-item">
              <div>
                <span>Recommended Movie</span>
                <p>Movie we find that you'll like</p>
              </div>
              <label className="check-button">
                <input type="checkbox" />
                <span className="check-slider"></span>
              </label>
            </div>
            <div className="settings-item">
              <div>
                <span>New Movie</span>
                <p>New movies from genres you like</p>
              </div>
              <label className="check-button">
                <input type="checkbox" />
                <span className="check-slider"></span>
              </label>
            </div>
            <div className="settings-item">
              <div>
                <span>News Update</span>
                <p>Get the hottest news everyday</p>
              </div>
              <label className="check-button">
                <input type="checkbox" />
                <span className="check-slider"></span>
              </label>
            </div>
          </section>
          <div className="sub-title">Buster Update</div>
          <section className="settings-items">
            <div className="settings-item">
              <div>
                <span>Product News</span>
                <p>New features and latest product update on Buster</p>
              </div>
              <label className="check-button">
                <input type="checkbox" />
                <span className="check-slider"></span>
              </label>
            </div>
            <div className="settings-item">
              <div>
                <span>Deal and Offers</span>
                <p>Promos and events for you</p>
              </div>
              <label className="check-button">
                <input type="checkbox" />
                <span className="check-slider"></span>
              </label>
            </div>
          </section>
        </section>
        <div className="settings-title">Display Options</div>
        <section className="sub-container">
          <section className="settings-items">
            <div className="settings-item">
              <div>
                <span>Language</span>
              </div>
              <label className="check-button">
                <input type="checkbox" />
                <span className="check-slider"></span>
              </label>
            </div>
            <div className="settings-item">
              <div>
                <span>Font Size</span>
              </div>
              <label className="check-button">
                <input type="checkbox" />
                <span className="check-slider"></span>
              </label>
            </div>
            <div className="settings-item">
              <div>
                <span>Toggle navigation</span>
                <p>Navigation will auto hide after 10s</p>
              </div>
              <label className="check-button">
                <input 
                  type="checkbox" 
                  checked={context.toggleNav}
                  onChange={context.handleToggleNav}
                />
                <span className="check-slider useable"></span>
              </label>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
}