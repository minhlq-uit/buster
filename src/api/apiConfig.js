const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "85250e67dc2bb1a56f48a965b58ed848",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
  w200Image: (imgPath) => `https://image.tmdb.org/t/p/w200/${imgPath}`,
};
export default apiConfig;
