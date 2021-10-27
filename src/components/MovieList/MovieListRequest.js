const API_KEY = "85250e67dc2bb1a56f48a965b58ed848";
const MovieListRequest = {
  Action: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28&language=en-US`,
  Family: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10751&language=en-US`,
  Crime: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=80&language=en-US`,
  Horror: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27&language=en-US`,
  Drama: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=18&language=en-US`,
  Animation: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=16&language=en-US`,
  Fantasy: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=14&language=en-US`,
  History: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=36&language=en-US`,
  Music: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10402&language=en-US`,
  Comedy: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35&language=en-US`,
  Mystery: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=9648&language=en-US`,
  Romance: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749&language=en-US`,
  "Sci-fi": `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=878&language=en-US`,
  Thriller: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=53&language=en-US`,
  War: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10752&language=en-US`,
  Adventure: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=12&language=en-US`,
  // TV: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10770&language=en-US`,
  // "Documentaries": `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99&language=en-US`,
};
export default MovieListRequest;
