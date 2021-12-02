import MovieList from "../../components/MovieList/MovieList";
import Banner from "../../components/Banner/Banner";
import ContinueWatching from "../../components/ContinueWatching/ContinueWatching";
import "./home.scss";
import { category, movieType, tvType } from "../../api/tmdbApi";
export default function Home() {
  return (
    <div className="home">
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
