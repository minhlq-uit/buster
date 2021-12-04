import "./topbar.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import apiConfig from "../../api/apiConfig";
import axios from "axios";
import { useDetectClickOutside } from "react-detect-click-outside";
// minh
import { Link } from "react-router-dom";
import ResultsCards from "../ResultsCards/ResultsCards";

export default function Topbar() {
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
  //onClickOutSide
  const closeDropDownGenre = () => {
    setGenreSelected(false);
  };
  const closeDropDownProfileSelected = () => {
    setProfileSelected(false);
  };
  const closeDropDownSearch = () => {
    setResults(false);
  };
  const closeDropDownYear = () => {
    setYearSelected(false);
  };
  const refGenre = useDetectClickOutside({ onTriggered: closeDropDownGenre });
  const refSearch = useDetectClickOutside({ onTriggered: closeDropDownSearch });
  const refYear = useDetectClickOutside({ onTriggered: closeDropDownYear });
  const refProfileSelected = useDetectClickOutside({
    onTriggered: closeDropDownProfileSelected,
  });

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

  const logoutHandler = () => {
    localStorage.removeItem("authToken");
    history.push("/login");
  };
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
              setResults(false);
            }}
            ref={refGenre}
          >
            <span> {currGenres}</span>
            <KeyboardArrowDownIcon />
          </div>
          {genreSelected && (
            <div className="genreSelect">
              {Object.values(genres).map((genre) => (
                <Link
                  to={{
                    pathname: `/movies/genreSelected/${genre.name}`,
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
        <div className="boxContainer" ref={refYear}>
          <div
            className="yearBox"
            onClick={() => {
              setYearSelected(!yearSelected);
              setGenreSelected(false);
              setProfileSelected(false);
              setResults(false);
            }}
            // ref={refYear}
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
                    history.push(`/movies/yearSelected/${year}`);
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
        <form ref={refSearch}>
          <input
            type="text"
            placeholder="Search Movies, TV series,..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="searchIcon">
            <Link
              to={{
                pathname: `/movies/search/${query}`,
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
        <div className="profile" ref={refProfileSelected}>
          <div
            className="main-profile"
            onClick={() => {
              setProfileSelected(!profileSelected);
              setGenreSelected(false);
              setYearSelected(false);
              setResults(false);
            }}
          >
            <img src={profile_pic1} alt="profile_pic" />
            <span className="username">Le Quang Minh</span>
            <KeyboardArrowDownIcon className="icon" />
          </div>
          {profileSelected && (
            <div className="options">
              <div className="otherUsers">
                <div className="user">
                  <img src={profile_pic2} alt="profile_pic" />
                  <span className="username">Nguyen Duc Phuong Nguyen</span>
                </div>
                <div className="user">
                  <img src={profile_pic3} alt="profile_pic" />
                  <span className="username">Nguyen Ngoc Thai Nguyen</span>
                </div>
                <div className="user">
                  <img src={profile_pic4} alt="profile_pic" />
                  <span className="username">Nguyen Ngoc Minh Chau</span>
                </div>
                <div className="user">
                  <img src={profile_pic5} alt="profile_pic" />
                  <span className="username">Nguyen Van An</span>
                </div>
              </div>
              <div className="menu">
                <span>Account</span>
                <span>Help Center</span>
                {/* <span onClick={routeChange}>Log Out</span> */}
                <div onClick={logoutHandler}>
                  <span>Log Out</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
