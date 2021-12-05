import SlideList from "../../components/SlideList/SlideList";
import { category, movieType, tvType } from "../../api/tmdbApi";
import MovieList from "../../components/MovieList/MovieList";
import "./series.scss";
import { useState } from "react";
import Preloader from "../../components/Preloader/Preloader";

export default function Series() {
  //preloader
  const [preloader, setPreloader] = useState(true);

  setTimeout(() => {
    setPreloader(false);
  }, 1000);

  return (
    <div className="series">
      {preloader && <Preloader />}
      <div className="main-title">Series For you</div>
      <SlideList type={movieType.top_rated} />
      <div className="movieListContainer">
        <MovieList
          category={category.tv}
          type={tvType.top_rated}
          title="Top Rated TV"
        />
        <MovieList
          category={category.movie}
          type={movieType.top_rated}
          title="Top Rated Movies"
        />
        <MovieList
          category={category.movie}
          type={movieType.popular}
          title="Popular Movies"
        />
        <MovieList
          category={category.tv}
          type={tvType.popular}
          title="Popular TV"
        />
      </div>
    </div>
  );
}
