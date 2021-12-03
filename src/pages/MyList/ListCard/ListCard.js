import React from "react";
import { useState, useEffect } from "react";
import apiConfig from "../../../api/apiConfig";
import tmdbApi from "../../../api/tmdbApi";
import "./ListCard.scss";
export default function ListCard(props) {
  const [item, setItem] = useState({});
  useEffect(() => {
    const fectch = async () => {
      const params = {};
      const data = await tmdbApi.detail(props.category, props.id, { params });
      setItem(data);
      console.log(data);
    };
    fectch();
  }, []);
  const background = apiConfig.w500Image(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  );
  return (
    <div className="listCard">
      <div className="listCard-info">
        <img src={background} alt="movie-img" />
        <div className="listCard-title">{item.title || item.name}</div>
      </div>
      <div className="listCard-year"></div>
      {item.release_date
        ? item.release_date.slice(0, 4)
        : item.first_air_date
        ? item.first_air_date.slice(0, 4)
        : ""}{" "}
      <div className="listCard-minute">{item.runtime} phút</div>
      <div className="listCard-icon">X</div>
    </div>
  );
}
