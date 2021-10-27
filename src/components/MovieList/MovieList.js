import MovieListItem from "./MovieListItem/MovieListItem";
import "./movieList.scss";
import MovieListRequest from "./MovieListRequest";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

export default function MovieList({ index }) {
  const [list, setList] = useState([]);
  const genre = Object.keys(MovieListRequest)[index];
  const ListTitle = `Popular ${genre} Movie`;
  const fetchURL = MovieListRequest[Object.keys(MovieListRequest)[index]];

  const max_movie_list = 19; // be hon 20
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(fetchURL);
        setList(res.data.results.slice(0, max_movie_list));
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [fetchURL]);
  const [slideNumber, setSlideNumber] = useState(0);
  const listRef = useRef();
  const handleClick = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x;
    if (direction === "left" && slideNumber > 1) {
      setSlideNumber(slideNumber - 3);
      listRef.current.style.transform = `translate(${distance + 129 + 279}px)`;
    }
    if (direction === "right" && slideNumber < list.length - 5) {
      setSlideNumber(slideNumber + 3);
      listRef.current.style.transform = `translate(${distance - 429 - 279}px)`;
    }
  };
  return (
    <div className="list">
      <span className="listTitle">{ListTitle}</span>
      <div className="iconContainer">
        <div className="icon">
          <ChevronLeftIcon
            className="sliderArrow left"
            onClick={() => handleClick("left")}
          />
        </div>
        <div className="icon">
          <ChevronRightIcon
            className="sliderArrow right"
            onClick={() => handleClick("right")}
          />
        </div>
      </div>
      <div className="wrapper">
        <div className="container" ref={listRef}>
          {list.map((movie) => (
            <MovieListItem movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}
