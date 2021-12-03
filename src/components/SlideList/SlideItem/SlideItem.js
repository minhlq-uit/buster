import React from "react";
import apiConfig from "../../../api/apiConfig";
import StarSolid from "../../Star/StarSolid";
import { Link } from 'react-router-dom';
import "./SlideItem.scss";
export default function SlideItem(props) {
  const { item } = props;
  const background = apiConfig.w500Image(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  );
  const path = `/views/movie/${item.id}/play`;
  return (
    <div className="slide-item">
      
      <div className="wrap-img">
        <img className="slide-img" src={background} alt={item.title} />
        <Link to={path}>
        <div className="play-btn-outer">
            <div className="play-btn">
            </div>
        </div>
        </Link>
      </div>
      <div className="slide-info">
        <div className="slide-title">{item.title || item.title}</div>
        <div className="slide-year">
          {item.release_date
            ? item.release_date.slice(0, 4)
            : item.first_air_date
            ? item.first_air_date.slice(0, 4)
            : ""}{" "}
          - {item.vote_average} <StarSolid />
        </div>
      </div>
    </div>
  );
}
