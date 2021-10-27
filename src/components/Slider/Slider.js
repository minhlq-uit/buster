import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import { useEffect, useState } from "react";
import "./slider.scss";
import SliderRequest from "./SliderRequest";
import axios from "axios";

import React from "react";

export default function Slider() {
  const [sliderList, setSliderList] = useState([]);
  const max_movie_slider_item = 6; // be hon 20
  const fetchTrendingURL = SliderRequest.fetchTrending;
  const fetchGenresURL = SliderRequest.fetchGenres;
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(fetchGenresURL);
        setGenres(res.data.genres);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [fetchGenresURL]);
  const listGenresId = genres.map((genre) => genre.id);
  const listGenresName = genres.map((genre) => genre.name);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(fetchTrendingURL);
        setSliderList(res.data.results.slice(0, max_movie_slider_item));
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [fetchTrendingURL]);

  const base_url = "https://image.tmdb.org/t/p/original/";
  const [slideIndex, setSlideIndex] = useState(0);

  const moveDot = (index) => {
    setSlideIndex(index);
  };
  return (
    <div id="slider">
      {sliderList.map((slide, index) => {
        return (
          <div className="slide-content">
            {index === slideIndex && (
              <>
                <img
                  className="img"
                  src={`${base_url}${slide.backdrop_path}`}
                  alt=""
                />
                <div className="filter"></div>
                <div className="slide-info">
                  <div className="tag">
                    <span>Popular Movies &amp; Series</span>
                  </div>
                  <div className="title">
                    {slide.name ? slide.name : slide.original_title}
                  </div>
                  <div className="yearGenre">
                    <span name="year">
                      {slide.first_air_date
                        ? slide.first_air_date.slice(0, 4)
                        : slide.release_date.slice(0, 4)}
                    </span>
                    <span className="separator">|</span>
                    <span name="duration">
                      {slide.media_type === "tv" ? "Series" : "Movie"}
                    </span>
                    <span className="separator">|</span>
                    <span name="genre">
                      {/* {console.log(slide.genre_ids)} */}
                      {slide.genre_ids
                        .map((id) => {
                          let index = listGenresId.indexOf(id);
                          return index === undefined
                            ? null
                            : listGenresName[index];
                        })
                        .filter(Boolean)
                        .toString()
                        .replace(/,/g, ", ")}
                    </span>
                  </div>
                  <div className="desc">
                    <span>
                      {slide.overview.length < 200
                        ? slide.overview
                        : slide.overview.split(".")[0] + "..."}
                    </span>
                  </div>
                  {/* <div className="stars">
                    <span>
                      <b>Stars: </b>
                    </span>
                    <span>{slide.stars}</span>
                    <span className="moreStars">More</span>
                  </div> */}
                  <div className="buttons">
                    <button className="watchBtn">
                      <PlayArrowIcon className="playIcon" />
                      <span>Watch</span>
                    </button>
                    <button className="addPlaylistBtn">
                      <AddIcon />
                      <span>My Playlist</span>
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        );
      })}
      <div className="dots">
        {Array.from({ length: sliderList.length }).map((item, index) => (
          <div
            className={index === slideIndex ? "activate" : "dot"}
            onClick={() => moveDot(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}
