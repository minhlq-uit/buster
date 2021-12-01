import "./continueWatching.scss";
import ContinueWatchingItem from "./ContinueWatchingItem/ContinueWatchingItem";

const ContinueWatching = () => {
  return (
    <div className="continue-watching">
      <div className="title">Continue Watching</div>
      <div className="continue-watching-container">
        <ContinueWatchingItem />
        <ContinueWatchingItem />
        <ContinueWatchingItem />
        <ContinueWatchingItem />
      </div>
    </div>
  );
};

export default ContinueWatching;
