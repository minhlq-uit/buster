import "./video.scss"
const Video = ({ src }) => {
    return (
        <div
            className="video"
            style={{ paddingBottom: '55%' }}
        >
            <iframe
                src={src}
                frameBorder="0"
                allowFullScreen
            />
        </div>
    );
};

export default Video;