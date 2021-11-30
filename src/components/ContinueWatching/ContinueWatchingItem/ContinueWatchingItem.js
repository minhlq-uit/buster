import "./continueWatchingItem.scss";
import movieThumb from "../assets/jurassicworld3.png";

const ContinueWatchingItem = () => {
  const progress = 60;
  const duration = 100;
  return (
    <div className="continue-item">
      <img src={movieThumb} alt="movie-thumb" />
      <div className="movie-info">
        <div className="movie-title">Jusasic World</div>
        <div className="progress-container">
          <div className="progress-text">{progress}m</div>
          <div className="duration">
            <div
              className="progress"
              style={{ width: (progress / duration) * 100 + "%" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContinueWatchingItem;
