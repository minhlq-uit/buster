import { useEffect, useState } from "react";
import tmdbApi, { category, movieType, tvType } from "../../api/tmdbApi";
import MovieList from "../../components/MovieList/MovieList";
import SlideList from "../../components/SlideList/SlideList";
import "./movies.scss";
import genre from "../../api/genre";

export default function Movies() {
  return (
    <div className="movies">
      <div className="main-title">Movies For You</div>
      <SlideList type={movieType.popular} />
      <div className="movieListContainer">
        <MovieList
          category={category.movie}
          genre_id={genre[0].id}
          title={genre[0].name}
        />
        <MovieList
          category={category.movie}
          genre_id={genre[3].id}
          title={genre[3].name}
        />
        <MovieList
          category={category.movie}
          genre_id={genre[6].id}
          title={genre[6].name}
        />
        <MovieList
          category={category.movie}
          genre_id={genre[2].id}
          title={genre[2].name}
        />
        <MovieList
          category={category.movie}
          genre_id={genre[8].id}
          title={genre[8].name}
        />
        <MovieList
          category={category.movie}
          genre_id={genre[10].id}
          title={genre[10].name}
        />
      </div>
    </div>
  );
}
