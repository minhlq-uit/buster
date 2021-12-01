import { useEffect, useState } from "react";
import "./banner.scss";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BannerItem from "./BannerItem/BannerItem";
import tmdbApi, { category } from "../../api/tmdbApi";

export default function Banner() {
  const [bannerList, setBannerList] = useState([]);
  const max_banner_item = 6; // be hon 20

  const settings = {
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: 0,
    swipeToSlide: true,
    dots: true,
    customPaging: () => <div className="dots"></div>,
  };
  useEffect(() => {
    const getMovies = async () => {
      const params = { page: 1 };
      const response = await tmdbApi.getTrendingList(category.all, {
        params,
      });
      setBannerList(response.results.slice(0, max_banner_item));
    };
    getMovies();
  }, []);

  return (
    <div className="banner">
      <Slider {...settings}>
        {bannerList.map((item) => {
          return <BannerItem item={item} />;
        })}
      </Slider>
    </div>
  );
}
