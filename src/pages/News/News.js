import { useEffect, useState } from "react";
import newsApi from "../../api/newsApi";
import Preloader from "../../components/Preloader/Preloader";
import "./news.scss";
import NewsArticale from "./NewsArticle/NewsArticle";
import ReviewArticle from "./ReviewArticle/ReviewArticle";

export default function News() {
  const [News, setNews] = useState([]);
  const [Reviews, setReviews] = useState([]);
  //preloader
  const [preloader, setPreloader] = useState(true);

  setTimeout(() => {
    setPreloader(false);
  }, 1000);

  useEffect(() => {
    const getMovieNews = async () => {
      const response = await newsApi.getMovieNews();
      setNews(response.results);
    };
    getMovieNews();
  }, []);
  useEffect(() => {
    const getReviews = async () => {
      const response = await newsApi.getReviews("picks"); // picks or all
      setReviews(response.results);
    };
    getReviews();
  }, []);
  return (
    <div className="news">
      {preloader && <Preloader />}
      <div className="main-title">News</div>
      <div className="newsContainer">
        <div className="news-container">
          <div className="news-category"> Latest </div>
          {News && News.map((item, i) => <NewsArticale key={i} item={item} />)}
        </div>
        <div className="news-container">
          <div className="news-category">Reviews</div>
          {Reviews &&
            Reviews.map((item, i) => <ReviewArticle key={i} item={item} />)}
        </div>
      </div>
    </div>
  );
}
