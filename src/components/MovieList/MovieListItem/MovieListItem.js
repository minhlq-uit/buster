import apiConfig from "../../../api/apiConfig";
import "./movieListItem.scss";
import StarSolid from "../../Star/StarSolid";

const MovieListItem = (props) => {
  const { item } = props;
  const background = apiConfig.w500Image(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  );
  // const { item, category } = props;
  // const path =
  //   category === "movie" ? `/movie/${item.id}/play` : `/tv/${item.id}/play`;

  // const pathInfo =
  //   category === "movie" ? `/movie/${item.id}` : `/tv/${item.id}`;

  return (
    <div className="MovieListItem">
      <img src={background} alt="movie-img" />
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
