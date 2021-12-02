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
  // const settings = {
  //   infinite: true,
  //   slidesToShow: 6,
  //   // slidesToScroll: 2,
  //   swipeToSlide: true,
  //   nextArrow: <RightArrow />,
  //   prevArrow: <LeftArrow />,
  //   responsive: [
  //     {
  //       breakpoint: 1700,
  //       settings: {
  //         slidesToShow: 4,
  //         slidesToScroll: 4,
  //       },
  //     },
  //     {
  //       breakpoint: 1280,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //       },
  //     },
  //     {
  //       breakpoint: 913,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 650,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };
  const settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  useEffect(() => {
    const getMovies = async () => {
      const params = { page: 1 };
      const response = await tmdbApi.getMoviesList(movieType.popular, {
        params,
      });
      setList(response.results.slice(0, 6));
      console.log(list);
    };
    getMovies();
  }, []);

  return (
    <div className="slide-list">
      <div className="slide-wrapper">
        <Slider {...settings1}>
        {list &&
          list.map((item) => (
            <div className="slide-item">
              <SlideItem  item={item} category={category.movie} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
