import React, { useEffect, useState } from "react";
import tmdbApi from "../../api/tmdbApi";
import SlideItem from "./SlideItem/SlideItem";
import { category } from "../../api/tmdbApi";
import Slider from "react-slick";
import "./SlideList.scss";
export default function SlideList(props) {
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
      const response = await tmdbApi.getMoviesList(props.type, {
        params,
      });
      setList(response.results.slice());
    };
    getMovies();
  }, [props.type]);

  return (
    <div className="slide-list">
      <div className="slide-wrapper">
        <Slider {...settings}>
          {list &&
            list.map((item, i) => (
              <SlideItem key={i} item={item} category={category.movie} />
            ))}
        </Slider>
      </div>
    </div>
  );
}
