import "./video.scss"
const Video = ({ src }) => {
    return (
        <div
            className="video"
            style={{ paddingBottom: '55%' }}
        >
            <iframe
                className="absolute top-0 left-0 w-full h-full z-10"
                src={src}
                frameBorder="0"
                allowFullScreen
            />
        </div>
    );
};

export default Video;