import React from "react";
import apiConfig from "../../../api/apiConfig";
import StarSolid from "../../Star/StarSolid";
import "./SlideItem.scss";
export default function SlideItem(props) {
  const { item } = props;
  const background = apiConfig.w500Image(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  );
  return (
    <div className="slide-item">
      <img className="slide-img" src={background} alt={item.title} />
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
