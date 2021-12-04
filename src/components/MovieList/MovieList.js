import MovieListItem from "./MovieListItem/MovieListItem";
import "./movieList.scss";
import LeftArrow from "./Arrow/LeftArrow";
import RightArrow from "./Arrow/RightArrow";
import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import tmdbApi, { category, movieType, tvType } from "../../api/tmdbApi";
import IconFire from '@mui/icons-material/LocalFireDepartment';

export default function MovieList(props) {
  const [list, setList] = useState([]);
  // const genre = Object.keys(MovieListRequest)[];
  const settings = {
    infinite: true,
    slidesToShow: 6,
    // slidesToScroll: 2,
    swipeToSlide: true,
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 913,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  useEffect(() => {
    const fetchData = async () => {
      let response = null;
      let params = {};

      if (props.type !== "similar") {
        switch (props.category) {
          case category.movie:
            if (props.type) {
              if (props.type === movieType.trending) {
                response = await tmdbApi.getTrendingList(props.category, {
                  params,
                });
              } else {
                response = await tmdbApi.getMoviesList(props.type, { params });
              }
            } else {
              params = {
                with_genres: props.genre_id,
              };
              response = await tmdbApi.discover(category.movie, { params });
            }
            break;
          default:
            if (props.type === tvType.trending) {
              response = await tmdbApi.getTrendingList(props.category, {
                params,
              });
            } else {
              response = await tmdbApi.getTvList(props.type, { params });
            }
            break;
        }
      } else {
        response = await tmdbApi.similar(props.category, props.id);
      }
      setList(response.results);
    };
    fetchData();
  }, [props.id, props.category, props.type]);

  return (
    <div className="list">
      <span className="listTitle">{props.title}{props.fire && <IconFire/>}</span>
      <div className="wrapper">
        <Slider {...settings}>
          {list &&
            list.map((item, i) => (
              <MovieListItem key={i} item={item} category={props.category} />
            ))}
        </Slider>
      </div>
    </div>
  );
}
