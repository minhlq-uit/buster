import React from "react";
import { useState, useEffect } from "react";
import apiConfig from "../../../api/apiConfig";
import { Link } from "react-router-dom";
import tmdbApi from "../../../api/tmdbApi";
import "./ListCard.scss";
import axios from "axios";
import CloseIcon from "@mui/icons-material/Close";

export default function ListCard(props) {
  const [disabled, setDisabled] = useState(false);
  const [item, setItem] = useState({});
  const [error, setError] = useState("");
  useEffect(() => {
    const fectch = async () => {
      const params = {};
      const data = await tmdbApi.detail(props.category, props.id, { params });
      setItem(data);
    };
    fectch();
  }, [props.category, props.id]);

  const background = apiConfig.w500Image(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  );
  const deleteListMovieItem = async (id_) => {
    try {
      axios.delete("/api/myList/deleteListItem/movie", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
        data: {
          id: id_,
        },
      });
      axios.delete("/api/myList/deleteListItem/movie", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
        data: {
          id: `${item.id}`,
        },
      });
      setDisabled(true);
    } catch (err) {
      // localStorage.removeItem("authToken");
      setError("You are not authorized please login");
      console.log(error);
    }
  };
  const deleteListSeriesItem = async (id_) => {
    try {
      axios.delete("/api/myList/deleteListItem/series", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
        data: {
          id: `${item.id}`,
        },
      });
      axios.delete("/api/myList/deleteListItem/movie", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
        data: {
          id: id_,
        },
      });
      setDisabled(true);
    } catch (err) {
      // localStorage.removeItem("authToken");
      setError("You are not authorized please login");
      console.log(error);
    }
  };
  const deleteListItem = (id_) => {
    if (item.number_of_episodes) {
      deleteListSeriesItem(id_);
    } else {
      deleteListMovieItem(id_);
    }
  };
  let path = "";
  // const path = category === "tv" ? `/views/tv/${item.id}/play` : `views/movie/${item.id}/play`;
  if (item.number_of_episodes) {
    path = `/views/tv/${item.id}/play`;
  } else {
    path = `/views/movie/${item.id}/play`;
  }
  return (
    <div className={disabled ? "disabledListItem" : "listCard"}>
      <Link to={path}>
        <div className="listCard-info">
          <img src={background} alt="movie-img" />
          <div className="listCard-title">{item.title || item.name}</div>
        </div>
      </Link>
      <div className="listCard-info2">
        <div className="listCard-year"></div>
        {item.release_date
          ? item.release_date.slice(0, 4)
          : item.first_air_date
          ? item.first_air_date.slice(0, 4)
          : ""}{" "}
        {item.number_of_episodes && (
          <div className="listCard-minute">
            {item.number_of_episodes} episodes
          </div>
        )}
        {item.runtime && (
          <div className="listCard-minute">{item.runtime} min</div>
        )}
        <div className="listCard-icon" onClick={(e) => deleteListItem(item.id)}>
          <CloseIcon className="listCard-icon1" />
        </div>
      </div>
    </div>
  );
}
