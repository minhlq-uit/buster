import React from "react";
import apiConfig from "../../api/apiConfig";
import StarSolid from "../Star/StarSolid";
import "./ResultsCards.scss";
export default function ResultsCards({ movie }) {
  const background = apiConfig.w500Image(
    movie.backdrop_path ? movie.backdrop_path : movie.poster_path
  );
  return (
    <div className="result-container">
      <img src={background} alt={`${movie.title} Poster`} />
      <div className="container">
        <span className="listTitle">{movie.title}</span>
        <div className="details">
          <div className="year">
            {movie.release_date
              ? movie.release_date.slice(0, 4)
              : movie.first_air_date
              ? movie.first_air_date.slice(0, 4)
              : ""}{" "}
            - {movie.vote_average} <StarSolid />
          </div>
        </div>
      </div>
    </div>
  );
}
