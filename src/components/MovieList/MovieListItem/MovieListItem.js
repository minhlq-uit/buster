import apiConfig from "../../../api/apiConfig";
import { Link } from "react-router-dom";
import StarSolid from "../../Star/StarSolid";
import "./movieListItem.scss";

const MovieListItem = (props) => {
  // const { item } = props;
  const { item, category } = props;
  const background = apiConfig.w500Image(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  );
  let path = "";
  // const path = category === "tv" ? `/views/tv/${item.id}/play` : `views/movie/${item.id}/play`;
  if (category === "tv") {
    path = `/views/tv/${item.id}/play`;
  } else {
    path = `/views/movie/${item.id}/play`;
  }
  // const pathInfo =
  //   category === "movie" ? `/movie/${item.id}` : `/tv/${item.id}`;

  return (
    <div className="MovieListItem">
      <div className="wrap-img">
        <img src={background} alt="movie-img" />
        <Link to={path}>
          <div className="play-btn-outer">
            <div className="play-btn"></div>
          </div>
        </Link>
      </div>
      <div className="item-info"></div>
      <div className="title">{item.title || item.name}</div>
      <div className="details">
        <div className="year">
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
};

export default MovieListItem;
