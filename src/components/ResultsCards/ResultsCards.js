import React from "react";
import apiConfig from "../../api/apiConfig";
import StarSolid from "../Star/StarSolid";
import { Link } from "react-router-dom";
import "./ResultsCards.scss";
export default function ResultsCards({ movie }) {
  const background = apiConfig.w500Image(
    movie.backdrop_path ? movie.backdrop_path : movie.poster_path
  );
  const path = `/views/movie/${movie.id}/play`;
  return (
    (movie.backdrop_path || movie.poster_path) && (
      <div className="result-container">
        <div className="wrap-img">
          <img src={background} alt={`${movie.title} Poster`} />
          <Link to={path}>
            <div className="play-btn-outer">
              <div className="play-btn"></div>
            </div>
          </Link>
        </div>
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
    )
  );
}
