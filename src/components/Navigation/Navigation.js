import { Link, useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import SeriesIcon from "@mui/icons-material/Theaters";
import MoviesIcon from "@mui/icons-material/Movie";
import MyListIcon from "@mui/icons-material/PlaylistPlay";
import DownloadsIcon from "@mui/icons-material/Download";
import NewsIcon from "@mui/icons-material/Forum";
import SettingsIcon from "@mui/icons-material/Settings";
import "./navigation.scss";
export default function Navigation() {
  const location = useLocation();
  return (
    <div id="nav">
      <div className="nav-item">
        <div className="logo">REMO</div>
      </div>
      <Link to="/">
        <div
          className={
            location.pathname === "/" ? "nav-item--activated" : "nav-item"
          }
        >
          <HomeIcon className="icon" />
          Home
        </div>
      </Link>
      <Link to="/Series">
        <div
          className={
            location.pathname === "/Series" ? "nav-item--activated" : "nav-item"
          }
        >
          <SeriesIcon className="icon" />
          Series
        </div>
      </Link>
      <Link to="/Movies">
        <div
          className={
            location.pathname === "/Movies" ? "nav-item--activated" : "nav-item"
          }
        >
          <MoviesIcon className="icon" />
          Movies
        </div>
      </Link>
      <Link to="/MyList">
        <div
          className={
            location.pathname === "/MyList" ? "nav-item--activated" : "nav-item"
          }
        >
          <MyListIcon className="icon" />
          MyList
        </div>
      </Link>
      <Link to="/Downloads">
        <div
          className={
            location.pathname === "/Downloads"
              ? "nav-item--activated"
              : "nav-item"
          }
        >
          <DownloadsIcon className="icon" />
          Downloads
        </div>
      </Link>
      <Link to="/News">
        <div
          className={
            location.pathname === "/News" ? "nav-item--activated" : "nav-item"
          }
        >
          <NewsIcon className="icon" />
          News
        </div>
      </Link>
      <Link to="/Settings">
        <div
          className={
            location.pathname === "/Settings"
              ? "nav-item--activated"
              : "nav-item"
          }
        >
          <SettingsIcon className="icon" />
          Settings
        </div>
      </Link>
    </div>
  );
}
