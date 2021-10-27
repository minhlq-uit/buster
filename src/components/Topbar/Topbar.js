import "./topbar.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import { useState, useEffect } from "react";
import axios from "axios";
export default function Topbar() {
  const profile_pic =
    "https://i.pinimg.com/originals/2b/90/0d/2b900d5612554cd0b5edf7d8e848c3ea.png";

  const [profileSelected, setProfileSelected] = useState(false);
  const [genreSelected, setGenreSelected] = useState(false);
  const [yearSelected, setYearSelected] = useState(false);

  const API_KEY = "85250e67dc2bb1a56f48a965b58ed848";
  const fetchURL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`;
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(fetchURL);
        setGenres(res.data.genres);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [fetchURL]);
  return (
    <div id="top-bar">
      <div className="left">
        <div className="boxContainer">
          <div
            className="genreBox"
            onClick={() => {
              setGenreSelected(!genreSelected);
              setYearSelected(false);
              setProfileSelected(false);
            }}
          >
            <span> All Genres</span>
            <KeyboardArrowDownIcon />
          </div>
          {genreSelected && (
            <div className="genreSelect">
              {Object.values(genres).map((genre) => (
                <span className="genre" name={genre.id}>
                  {genre.name}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="boxContainer">
          <div
            className="yearBox"
            onClick={() => {
              setYearSelected(!yearSelected);
              setGenreSelected(false);
              setProfileSelected(false);
            }}
          >
            <span>All Time</span>
            <KeyboardArrowDownIcon />
          </div>
          {yearSelected && (
            <div className="yearSelect">
              <span>All time</span>
              <form>
                <input type="number" />
              </form>
            </div>
          )}
        </div>
      </div>
      <div className="middle">
        <form>
          <input type="text" placeholder="Search Movies, TV series,..." />
          <div className="searchIcon">
            <SearchIcon className="icon" />
          </div>
        </form>
      </div>
      <div className="right">
        <NotificationsIcon className="icon" />
        <div className="profile">
          <div
            className="main-profile"
            onClick={() => {
              setProfileSelected(!profileSelected);
              setGenreSelected(false);
              setYearSelected(false);
            }}
          >
            <img src={profile_pic} alt="profile_pic" />
            <span className="username">Ngyn Ngyn</span>
            <KeyboardArrowDownIcon className="icon" />
          </div>
          {profileSelected && (
            <div className="options">
              <div className="otherUsers">
                <div className="user">
                  <img src={profile_pic} alt="profile_pic" />
                  <span className="username">Ngyn Ngyn</span>
                </div>
                <div className="user">
                  <img src={profile_pic} alt="profile_pic" />
                  <span className="username">Ngyn Ngyn</span>
                </div>
                <div className="user">
                  <img src={profile_pic} alt="profile_pic" />
                  <span className="username">Ngyn Ngyn</span>
                </div>
              </div>
              <div className="menu">
                <span>Account</span>
                <span>Help Center</span>
                <span>Log Out</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
