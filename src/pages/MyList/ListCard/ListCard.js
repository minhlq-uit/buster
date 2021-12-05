import React from "react";
import { useState, useEffect } from "react";
import apiConfig from "../../../api/apiConfig";
import tmdbApi from "../../../api/tmdbApi";
import "./ListCard.scss";
import axios from "axios";

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
  }, []);

  const background = apiConfig.w500Image(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  );
  const deleteListItem = async (id_) => {
    try {
      axios.delete("/api/myList/deleteListItem", {
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
  return (
    <div className={disabled ? "disabledListItem" : "listCard"}>
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
      <div className="listCard-icon" onClick={(e) => deleteListItem(item.id)}>
        X
      </div>
    </div>
  );
}
