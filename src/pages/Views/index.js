import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import tmdbApi from '../../api/tmdbApi';
import { embedMovie, embedEpisode } from '../../api/embed';
import Iframe from '../../components/MovieDetails/Iframe';
import Video from '../../components/Video';
function Views() {
    const { category, id } = useParams();
    const [videos, setVideos] = useState([]);
    const [src, setSrc] = useState('');


    const handleUrl = () => {
        // setPreloader(true);
        if (category === 'movie') {
            setSrc(embedMovie(id));
        }
        //  else {
        //     setOverview(episode);
        //     if (episode.episode_number) {
        //         setSrc(embedEpisode(id, season, episode.episode_number));
        //     } else {
        //         setSrc(embedEpisode(id, season, 1));
        //     }
        // }
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
        fetchDetails();
        handleUrl();
    }, [id]);

    return (
        <>
            <h1>this is views</h1>
            <p>category: {category}</p>
            <p>id: {id}</p>
            {/* {videos && videos.map((item) => <Iframe key={item.id} item={item} />)} */}
            <Video src={src} />
        </>
    )
}

export default Views;