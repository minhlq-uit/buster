import React, { useEffect, useState } from "react";
import MovieListItem from "../../../components/MovieList/MovieListItem/MovieListItem";
import CustomPagination from "../../../components/Pagination/CustomPagination";
import tmdbApi from "../../../api/tmdbApi";
import { category, movieType, tvType } from "../../../api/tmdbApi";
import { useLocation } from "react-router";
export default function YearSelected() {
  const location = useLocation();

  // const [year, setYear] = useState(location.pathname.slice(21));
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const year = location.pathname.slice(21);
  useEffect(() => {
    // setYear(location.pathname.slice(21));
    const fectch = async () => {
      const params = {
        year: year,
        page: page,
      };
      const data = await tmdbApi.discover(category.movie, { params });
      setContent(data.results);
      setNumOfPages(data.total_pages);
      console.log(data);
    };
    fectch();
  }, [year, page]);
  return (
    <div className="filter-list">
      <span className="listTitle">{year}</span>
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
