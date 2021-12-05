import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import apiConfig from "../../api/apiConfig";
import tmdbApi from "../../api/tmdbApi";
import { embedMovie, embedEpisode } from "../../api/embed";
import Video from "../../components/Video";
import Overview from "../../components/Overview";
import MovieList from "../../components/MovieList/MovieList";
import Cast from "../../components/Cast";
import "./view.scss";
import Preloader from "../../components/Preloader/Preloader";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";

function Views() {
  const { category, id } = useParams();
  const [videos, setVideos] = useState([]);
  const [background, setBackground] = useState("");
  const [src, setSrc] = useState("");
  const [seasons, setSeasons] = useState([]);
  const [overview, setOverview] = useState({});
  const [movieDetails, setMovieDetails] = useState({});
  const [title, setTitle] = useState([]);
  //preload
  const location = useLocation();
  const [preloader, setPreloader] = useState(true);
  const tempLocation = location.pathname;

  const [error, setError] = useState("");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const [titleIndex, setTitleIndex] = useState(0);
  const fetchMovie = async () => {
    const params = {};
    const response = await tmdbApi.detail(category, id, { params });
    if (category === "tv") {
      setSeasons(response.seasons);
      setOverview(response);
    } else {
      setOverview(response);
      // const responseList = await tmdbApi.getTrendingList(category, {
      //   params,
      // });
      // setSeasons(responseList.results);
    }
    const backgroundTemp = response.backdrop_path
      ? response.backdrop_path
      : response.poster_path;
    setBackground(backgroundTemp);

    const titleTemp = response.title ? response.title : response.name;
    document.title = `${titleTemp} - BUSTER`;
    setTitle(titleTemp);
  };

  const handleUrl = (season = 1, episode = overview) => {
    // setPreloader(true);
    if (category === "movie") {
      setSrc(embedMovie(id));
    } else {
      setOverview(episode);
      if (episode.episode_number) {
        setSrc(embedEpisode(id, season, episode.episode_number));
      } else {
        setSrc(embedEpisode(id, season, 1));
      }
    }
    // setPreloader(false);
    // handleScrollToTop();
  };
  const fetchDetails = async () => {
    const params = {};
    const response = await tmdbApi.detail(category, id, { params });
    setMovieDetails(response);

    // const responseVideos = await tmdbApi.getVideos(category, id);
    // setVideos(responseVideos.results);

    // const title = response.title ? response.title : response.name;
    // document.title = `${title} - Ax Nguyen`;
    // setPreloader(false);
  };

  useEffect(() => {
    fetchMovie();
    handleUrl();
    fetchDetails();
  }, [id]);

  useEffect(() => {
    setPreloader(true);
  }, [tempLocation]);
  setTimeout(() => {
    setPreloader(false);
  }, 1000);

  const titles = document.querySelectorAll(".more-title");
  titles.forEach((title, i) => {
    if (i !== titleIndex) {
      title.classList.remove("active");
    }
    title.onclick = () => {
      setTitleIndex(i);
      title.classList.add("active");
    };
  });
  const contents = document.querySelectorAll(".more-content");
  contents.forEach((content, i) => {
    if (i !== titleIndex) {
      content.classList.remove("active");
    }
    if (i === titleIndex) {
      content.classList.add("active");
    }
  });
  const addToMyList = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    };
    try {
      await axios.put("/api/myList/addListItem", { id }, config);
    } catch (error) {
      // localStorage.removeItem("authToken");
      setError("You are not authorized please login");
      console.log(error);
    }
  };
  return (
    <div
      className="views"
      style={{
        backgroundImage: `url(${apiConfig.originalImage(background)})`,
      }}
    >
      {preloader && <Preloader />}
      <div className="views-top">
        <div className="views-top-left">
          <Overview title={title} overview={overview} all={false} />
          <button className="addPlaylistBtn" onClick={(e) => addToMyList()}>
            <AddIcon />
            <span>My Playlist</span>
          </button>
        </div>
        <div className="views-top-right">
          <Video src={src} />
        </div>
      </div>
      <div className="views-bot">
        <ul className="bot-more-title">
          <h4 className="more-title active">SIMILAR</h4>
          <h4 className="more-title ">DETAILS</h4>
        </ul>
        <div className="bot-more-content">
          <div className="more-content active">
            <MovieList category={category} type="similar" title="" id={id} />
          </div>
          <ul className="more-content ">
            <Overview title="" overview={overview} all={true} />
            <Cast />
          </ul>
        </div>
        <div className="more-trending">
          {category === "movie" ? (
            <MovieList
              category={category}
              type={"trending"}
              title={"Trending Movies"}
              fire={true}
            />
          ) : (
            <MovieList
              category={category}
              type={"trending"}
              title={"Trending TV"}
              fire={true}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Views;
