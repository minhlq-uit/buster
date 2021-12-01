const API_KEY = "85250e67dc2bb1a56f48a965b58ed848";
const SliderRequest = {
  fetchTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchGenres: `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`,
};
export default SliderRequest;
