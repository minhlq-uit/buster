import MovieList from "../../components/MovieList/MovieList";
import Banner from "../../components/Banner/Banner";
import "./home.scss";
import { category, movieType, tvType } from "../../api/tmdbApi";
import { useState } from "react";
import Preloader from "../../components/Preloader/Preloader";
export default function Home() {
  document.title = "BUSTER";
  //preloader
  const [preloader, setPreloader] = useState(true);

  setTimeout(() => {
    setPreloader(false);
  }, 1000);
  return (
    <div className="home">
      {preloader && (
        <div className="preload">
          <Preloader />
        </div>
      )}
      <Banner />
      {/* <ContinueWatching /> */}
      <div className="movieListContainer">
        <MovieList
          category={category.movie}
          type={movieType.trending}
          title="Trending Movies"
        />

        <MovieList
          category={category.tv}
          type={tvType.trending}
          title="Trending TV"
        />

        <MovieList
          category={category.movie}
          type={movieType.top_rated}
          title="Top Rated Movies"
        />

        <MovieList
          category={category.tv}
          type={tvType.top_rated}
          title="Top Rated TV"
        />

        <MovieList
          category={category.movie}
          type={movieType.popular}
          title="Popular Movies"
        />
      </div>
    </div>
  );
}
