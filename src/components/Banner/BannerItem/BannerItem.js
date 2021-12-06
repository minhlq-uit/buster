import { useEffect, useState } from "react";
import "./bannerItem.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import tmdbApi from "../../../api/tmdbApi";
import apiConfig from "../../../api/apiConfig";
import { Link } from "react-router-dom";
import axios from "axios";

const BannerItem = ({ item }) => {
  const [error, setError] = useState("");
  const addToMyList = async (id) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    };
    try {
      if (item.name) {
        await axios.put("/api/myList/addListItem/series", { id }, config);
      } else {
        await axios.put("/api/myList/addListItem/movie", { id }, config);
      }
    } catch (err) {
      // localStorage.removeItem("authToken");
      setError("You are not authorized please login");
      console.log(error);
    }
  };

  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const getGenres = async () => {
      const response = await tmdbApi.getGenres();
      setGenres(Object.values(response)["0"]);
    };
    getGenres();
  }, [item]);
  const listGenresId = genres.map((genre) => genre.id);
  const listGenresName = genres.map((genre) => genre.name);

  const background = apiConfig.originalImage(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  );
  const path = `/views/movie/${item.id}/play`;

  return (
    <div className="bannerContent">
      <>
        <img className="img" src={background} alt="" />
        <div className="filter"></div>
        <div className="slide-info">
          <div className="tag">
            <span>Popular Movies &amp; Series</span>
          </div>
          <div className="title">
            {item.name ? item.name : item.original_title}
          </div>
          <div className="yearGenre">
            <span name="year">
              {item.first_air_date
                ? item.first_air_date.slice(0, 4)
                : item.release_date.slice(0, 4)}
            </span>
            <span className="separator">|</span>
            <span name="duration">
              {item.media_type === "tv" ? "Series" : "Movie"}
            </span>
            <span className="separator">|</span>
            <span name="genre">
              {item.genre_ids
                .map((id) => {
                  let index = listGenresId.indexOf(id);
                  return index === undefined ? null : listGenresName[index];
                })
                .filter(Boolean)
                .toString()
                .replace(/,/g, ", ")}
            </span>
          </div>
          <div className="desc">
            <span>
              {item.overview.length < 200
                ? item.overview
                : item.overview.split(".")[0] + "..."}
            </span>
          </div>
          <div className="buttons">
            <Link to={path}>
              <button className="watchBtn">
                <PlayArrowIcon className="playIcon" />
                <span>Watch</span>
              </button>
            </Link>

            <button
              className="addPlaylistBtn"
              onClick={(e) => addToMyList(item.id)}
            >
              <AddIcon />
              <span>My Playlist</span>
            </button>
          </div>
        </div>
      </>
    </div>
  );
};

export default BannerItem;
