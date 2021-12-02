import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import MovieListItem from "../../../components/MovieList/MovieListItem/MovieListItem";
import CustomPagination from "../../../components/Pagination/CustomPagination";
import tmdbApi from "../../../api/tmdbApi";
import { category } from "../../../api/tmdbApi";
export default function GenreSelected() {
  const location = useLocation();
  const { id } = location;

  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();

  useEffect(() => {
    const fectch = async () => {
      const params = {
        with_genres: id,
        page: page,
      };
      const data = await tmdbApi.discover(category.movie, { params });
      setContent(data.results);
      setNumOfPages(data.total_pages);
      console.log(data);
    };
    fectch();
  }, [id, page]);
  return (
    <div className="filter-list">
      <span className="listTitle">{location.pathname.slice(22)}</span>
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
