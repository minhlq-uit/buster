import axios from "axios";
import { useEffect, useState } from "react";
import "./movieListItem.scss";

const MovieListItem = ({ movie }) => {
  const API_KEY = "85250e67dc2bb1a56f48a965b58ed848";
  const fetchGenresURL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`;
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(fetchGenresURL);
        setGenres(res.data.genres);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [fetchGenresURL]);
  const listGenresId = genres.map((genre) => genre.id);
  const listGenresName = genres.map((genre) => genre.name);
  const base_url = "https://image.tmdb.org/t/p/w500/";
  return (
    <div className="MovieListItem">
      <img src={`${base_url}${movie.backdrop_path}`} alt="movie-img" />
      <div className="item-info">
        <div className="title">{movie.title}</div>
        <div className="genre">
          {movie.genre_ids
            .map((id) => {
              let index = listGenresId.indexOf(id);
              return index === undefined ? null : listGenresName[index];
            })
            .filter(Boolean)
            .toString()
            .replace(/,/g, ", ")}
        </div>
      </div>
    </div>
  );
};

export default MovieListItem;
