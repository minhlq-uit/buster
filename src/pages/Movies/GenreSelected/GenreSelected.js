import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import MovieListItem from "../../../components/MovieList/MovieListItem/MovieListItem";
import CustomPagination from "../../../components/Pagination/CustomPagination";
import tmdbApi from "../../../api/tmdbApi";
import { category } from "../../../api/tmdbApi";
import Preloader from "../../../components/Preloader/Preloader";
export default function GenreSelected() {
  const location = useLocation();
  const { id } = location;

  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  //preload
  const [preloader, setPreloader] = useState(true);
  const tempLocation = location.pathname;

  useEffect(() => {
    const fectch = async () => {
      const params = {
        with_genres: id,
        page: page,
      };
      const data = await tmdbApi.discover(category.movie, { params });
      setContent(data.results);
      setNumOfPages(data.total_pages);
    };
    fectch();
  }, [id, page]);
  useEffect(() => {
    setPreloader(true);
  }, [tempLocation, page]);
  setTimeout(() => {
    setPreloader(false);
  }, 1000);
  return (
    <div className="filter-list">
      {preloader && <Preloader />}
      <span className="listTitle">{location.pathname.slice(23)}</span>
      <div className="movie-wrapper">
        <div className="container">
          {content.map((item, i) => (
            <div className="item">
              <MovieListItem key={i} item={item} category="movie" />
            </div>
          ))}
        </div>
      </div>
      {numOfPages > 1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
      )}
    </div>
  );
}
