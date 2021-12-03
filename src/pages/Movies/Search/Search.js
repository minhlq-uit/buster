import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import apiConfig from "../../../api/apiConfig";
import tmdbApi from "../../../api/tmdbApi";
import MovieListItem from "../../../components/MovieList/MovieListItem/MovieListItem";
import { category, movieType, tvType } from "../../../api/tmdbApi";
import CustomPagination from "../../../components/Pagination/CustomPagination";
export default function Search() {
  const location = useLocation();
  const { query } = location;

  // const category = "movie";

  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();

  useEffect(() => {
    const fectch = async () => {
      const params = {
        query: query,
        page: page,
      };
      const data = await tmdbApi.search(category.movie, { params });
      setContent(data.results);
      setNumOfPages(data.total_pages);
      console.log(data);
    };
    fectch();
  }, [query, page]);

  return (
    <div className="filter-list">
      <span className="listTitle">{query}</span>
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
