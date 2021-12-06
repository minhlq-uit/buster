import { useParams } from "react-router";
import { Star, StarHalf, StarSolid } from "../Star";
import { Link } from "react-router-dom";
import "./overview.scss";
const Overview = (props) => {
  const { title, overview, all } = props;
  const { category } = useParams();
  const handleRenderStar = (n) => {
    let i = 0;
    let stars = [];
    let surplus = n % 1;
    n = Math.floor(n / 1);
    while (i < n) {
      stars.push(<StarSolid />);
      i++;
    }
    if (surplus) {
      stars.push(<StarHalf />);
    }
    n = 10 - n;
    i = surplus ? 1 : 0;
    while (i < n) {
      i++;
      stars.push(<Star />);
    }
    return stars;
  };

  return (
    <div className="overview">
      <h1>{title}</h1>
      {category === "tv" && (
        <h2 className="episode-name">
          Episode name:&nbsp;{overview.name || overview.title}
        </h2>
      )}
      {all && (
        <div>
          Release Date:&nbsp;
          {overview.first_air_date ||
            overview.release_date ||
            overview.air_date}
        </div>
      )}
      {!all && <p>{overview.tagline}</p>}
      {all && <p>{overview.overview}</p>}

      {!all && (
        <div className="overview-genres">
          {overview.genres &&
            overview.genres.map((item) => {
              const path = `/movies/genre_selected/${item.name}`;
              const id = item.id;
              return (
                <Link
                  to={{
                    pathname: path,
                    id: id,
                  }}
                >
                  <span>{item.name}</span>
                </Link>
              );
            })}
        </div>
      )}
      {all && (
        <div className="rate">
          {handleRenderStar(overview.vote_average)}
          <span className="ml-2">({overview.vote_count}&nbsp;votes)</span>
        </div>
      )}
    </div>
  );
};

export default Overview;
