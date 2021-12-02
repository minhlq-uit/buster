import React, { useEffect, useState } from "react";
import tmdbApi from "../../api/tmdbApi";
import LeftArrow from "../MovieList/Arrow/LeftArrow";
import RightArrow from "../MovieList/Arrow/RightArrow";
import SlideItem from "./SlideItem/SlideItem";
import { category, movieType, tvType } from "../../api/tmdbApi";
import Slider from "react-slick";
import "./SlideList.scss";
export default function SlideList() {
  const [list, setList] = useState([]);
  const settings = {
    infinite: true,
    slidesToShow: 3,
    // slidesToScroll: 2,
    swipeToSlide: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  useEffect(() => {
    const getMovies = async () => {
      const params = { page: 1 };
      const response = await tmdbApi.getMoviesList(movieType.popular, {
        params,
      });
      setList(response.results.slice());
      console.log(list);
    };
    getMovies();
  }, []);

  return (
    <div className="slide-list">
      <div className="slide-wrapper">
        <Slider {...settings}>
        {list &&
          list.map((item) => (
              <SlideItem  item={item} category={category.movie} />

          ))}
        </Slider>
      </div>
    </div>
  );
}
