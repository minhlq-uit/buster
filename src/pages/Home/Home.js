import MovieList from "../../components/MovieList/MovieList";
import Slider from "../../components/Slider/Slider";
import "./home.scss";
import MovieListRequest from "../../components/MovieList/MovieListRequest";
export default function Home() {
  let random_numbers = [];
  let max_list_number = 10;
  max_list_number =
    max_list_number < Object.keys(MovieListRequest).length
      ? max_list_number
      : Object.keys(MovieListRequest).length;
  while (random_numbers.length < max_list_number) {
    let r = Math.floor(Math.random() * Object.keys(MovieListRequest).length);
    if (random_numbers.indexOf(r) === -1) random_numbers.push(r);
  }
  return (
    <div className="home">
      <Slider />
      {random_numbers.map((number) => (
        <MovieList index={number} />
      ))}
    </div>
  );
}
