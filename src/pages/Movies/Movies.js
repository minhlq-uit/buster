import { category, movieType } from "../../api/tmdbApi";
import MovieList from "../../components/MovieList/MovieList";
import SlideList from "../../components/SlideList/SlideList";
import "./movies.scss";
import genre from "../../api/genre";
import Preloader from "../../components/Preloader/Preloader";
import { useState } from "react";

export default function Movies() {
  const [preloader, setPreloader] = useState(true);

  setTimeout(() => {
    setPreloader(false);
  }, 1000);

  return (
    <div className="movies">
      <div className="main-title">Movies For You</div>
      {preloader && <Preloader />}
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
