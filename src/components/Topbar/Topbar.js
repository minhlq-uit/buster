import "./topbar.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { category, movieType, tvType } from "../../api/tmdbApi";
import tmdbApi from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";
import axios from "axios";
// minh
import { Link } from "react-router-dom";
import ResultsCards from "../ResultsCards/ResultsCards";

export default function Topbar() {
  const profile_pic =
    "https://i.pinimg.com/originals/2b/90/0d/2b900d5612554cd0b5edf7d8e848c3ea.png";

  const [profileSelected, setProfileSelected] = useState(false);
  const [genreSelected, setGenreSelected] = useState(false);
  const [yearSelected, setYearSelected] = useState(false);

  const API_KEY = "85250e67dc2bb1a56f48a965b58ed848";
  const fetchURL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`;
  const [genres, setGenres] = useState([]);
  //search
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  //genre
  const [currGenres, setCurrGenres] = useState("All genres");
  //year
  const history = useHistory();
  const [year, setYear] = useState("All time");

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
  useEffect(() => {
    fetch(
      `
      https://api.themoviedb.org/3/search/movie?api_key=${apiConfig.apiKey}&language=en-US&query=${query}&page=1&include_adult=false`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
        console.log(results);
      });
  }, [query]);

  // useEffect(() => {
  //   const fectch = async () => {
  //     const params = {
  //       query: query,
  //     };
  //     const data = await tmdbApi.search(category.movie, { params });
  //     if (!data.errors) {
  //       setResults(data.results);
  //     } else {
  //       setResults([]);
  //     }

  //     console.log(data);
  //   };
  //   fectch();
  // }, [query]);

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
            <span> {currGenres}</span>
            <KeyboardArrowDownIcon />
          </div>
          {genreSelected && (
            <div className="genreSelect">
              {Object.values(genres).map((genre) => (
                <Link
                  to={{
                    pathname: `/Movies/GenreSelected/${genre.name}`,
                    id: `${genre.id}`,
                  }}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <span
                    className="genre"
                    name={genre.id}
                    onClick={() => {
                      setCurrGenres(genre.name);
                      setGenreSelected(false);
                    }}
                  >
                    {genre.name}
                  </span>
                </Link>
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
            <span>{year}</span>
            <KeyboardArrowDownIcon />
          </div>
          {yearSelected && (
            <div className="yearSelect">
              <span>All time</span>
              <input
                type="number"
                min="1990"
                value={year}
                onKeyUp={(e) => {
                  if (e.keyCode === 13) {
                    history.push(`/Movies/YearSelected/${year}`);
                    setYearSelected(false);
                  }
                }}
                onChange={(e) => setYear(e.target.value)}
              />
            </div>
          )}
        </div>
      </div>
      <div className="middle">
        <form>
          <input
            type="text"
            placeholder="Search Movies, TV series,..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="searchIcon">
            <Link
              to={{
                pathname: `/Movies/Search/${query}`,
                query: `${query}`,
              }}
            >
              <SearchIcon className="icon" onClick={() => setQuery("")} />
            </Link>
          </div>
        </form>
        {results && (
          <ul className="results">
            {results.map((movie) => (
              <li key={movie.id}>
                <ResultsCards movie={movie} />
              </li>
            ))}
          </ul>
        )}
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
                {/* <span onClick={routeChange}>Log Out</span> */}
                <Link to="/Login">
                  <span>Log Out</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
