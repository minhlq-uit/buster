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
        <div className="logo">BUSTER</div>
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
      <Link to="/series">
        <div
          className={
            location.pathname === "/series" ? "nav-item--activated" : "nav-item"
          }
        >
          <SeriesIcon className="icon" />
          Series
        </div>
      </Link>
      <Link to="/movies">
        <div
          className={
            location.pathname === "/movies" ? "nav-item--activated" : "nav-item"
          }
        >
          <MoviesIcon className="icon" />
          Movies
        </div>
      </Link>
      <Link to="/my_list">
        <div
          className={
            location.pathname === "/my_list" ? "nav-item--activated" : "nav-item"
          }
        >
          <MyListIcon className="icon" />
          MyList
        </div>
      </Link>
      <Link to="/downloads">
        <div
          className={
            location.pathname === "/downloads"
              ? "nav-item--activated"
              : "nav-item"
          }
        >
          <DownloadsIcon className="icon" />
          Downloads
        </div>
      </Link>
      <Link to="/news">
        <div
          className={
            location.pathname === "/news" ? "nav-item--activated" : "nav-item"
          }
        >

          <NewsIcon className="icon" />
          News
        </div>
      </Link>
      <Link to="/settings">
        <div
          className={
            location.pathname === "/settings"
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
