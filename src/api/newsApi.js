import axios from "axios";
import queryString from "query-string";

const baseUrl = "https://api.nytimes.com/svc/";
const apiKey = "hAUveP9cnb13mM3VQMy7axoMDXcJCGTM";

const axiosClient2 = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
  paramsSerializer: (params) =>
    queryString.stringify({ ...params, "api-key": apiKey }),
});

axiosClient2.interceptors.request.use(async (config) => config);

axiosClient2.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  (error) => {
    throw error;
  }
);

const newsApi = {
  getMovieNews: () => {
    const url = `topstories/v2/movies.json`;
    return axiosClient2.get(url, { params: {} });
  },
  getReviews: (type) => {
    const url = `movies/v2/reviews/${type}.json`;
    return axiosClient2.get(url, { params: {} });
  },
};

export default newsApi;
