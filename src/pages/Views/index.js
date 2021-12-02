import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import apiConfig from '../../api/apiConfig';
import tmdbApi from '../../api/tmdbApi';
import { embedMovie, embedEpisode } from '../../api/embed';
import Iframe from '../../components/MovieDetails/Iframe';
import Video from '../../components/Video';
import Overview from '../../components/Overview';
import MovieList from "../../components/MovieList/MovieList";
import "./view.scss"

function Views() {
    const { category, id } = useParams();
    const [videos, setVideos] = useState([]);
    const [background, setBackground] = useState('');
    const [src, setSrc] = useState('');
    const [seasons, setSeasons] = useState([]);
    const [overview, setOverview] = useState({});
    const [title, setTitle] = useState([]);
    const [movieDetails, setMovieDetails] = useState({});

    const fetchMovie = async () => {
        const params = {};
        const response = await tmdbApi.detail(category, id, { params });
        if (category === 'tv') {
            setSeasons(response.seasons);
            setOverview(response);
        } else {
            setOverview(response);
            const responseList = await tmdbApi.getTrendingList(category, {
                params,
            });
            setSeasons(responseList.results);
        }
        const backgroundTemp = response.backdrop_path
            ? response.backdrop_path
            : response.poster_path;
        setBackground(backgroundTemp);

        const titleTemp = response.title ? response.title : response.name;
        document.title = `${titleTemp} - BUSTER`;
        setTitle(titleTemp);
    }

    const handleUrl = (season=1, episode=overview) => {
        // setPreloader(true);
        if (category === 'movie') {
            setSrc(embedMovie(id));
        }
         else {
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
        // const params = {};
        // const response = await tmdbApi.detail(category, id, { params });
        // setMovieDetails(response);

        const responseVideos = await tmdbApi.getVideos(category, id);
        setVideos(responseVideos.results);

        // const title = response.title ? response.title : response.name;
        // document.title = `${title} - Ax Nguyen`;
        // setPreloader(false);
    }

    useEffect(() => {
        fetchMovie();
        handleUrl();
        fetchDetails();
    }, [id]);

    return (
        <div 
            className="views"
            style={{
                backgroundImage: `url(${apiConfig.originalImage(background)})`,
            }}
        >
            <div className="views-top">
                <div className="views-top-left">
                    <Overview title={title} overview={overview}/>
                </div>
                <div className="views-top-right">
                    <Video src={src} />
                </div>
            </div>
            <div className="views-bot">
                <ul className="bot-more-title">
                    <h4 className="more-title-1 active">SIMILAR</h4>
                    {/* <h4 className="more-title-2">DETAILS</h4> */}
                </ul>
                <div className="bot-more-content">
                    <div className="more-content-1">
                        <MovieList
                            category={category}
                            type="similar"
                            // title="Similar"
                            id={id}
                        />
                    </div>
                    {/* <div className="more-content-2">
                        ...
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Views;