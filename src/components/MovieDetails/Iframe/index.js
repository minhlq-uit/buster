const Iframe = (props) => {
    const { item } = props;

    return (
        <div className="view-iframe">
            <iframe
                width="400px"
                src={`https://www.youtube.com/embed/${item.key}`}
                allow
                title="YouTube video player"
                frameborder="0"
                allowFullScreen="true"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                // className="rounded-md"
                style={{ height: `300px` }}
            >
            </iframe>
        </div>
    );
};

export default Iframe;