import { useParams } from 'react-router';
import "./overview.scss"
const Overview = (props) => {
    const { title, overview } = props;
    const { category } = useParams();

    return (
        <div className="overview">
            <h1>{title}</h1>
            {category === 'tv' && (
                <h2 className="episode-name">
                    Episode name:&nbsp;{overview.name || overview.title}
                </h2>
            )}
            <p>{overview.overview}</p>
            <div>
                Release Date:&nbsp;
                {overview.first_air_date ||
                    overview.release_date ||
                    overview.air_date}
            </div>
        </div>
    )
}

export default Overview;