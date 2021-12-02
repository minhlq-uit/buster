import "./newsArticle.scss";

function NewsArticale(props) {
  const { item } = props;
  return (
    <a href={item.url} target="_blank" rel="noopener noreferrer">
      <div className="newsArticle">
        <img src={item.multimedia[0]["url"]} alt="multimedia"></img>
        <div className="news-detail">
          <div className="news-section-name"> {item.section}</div>
          <p className="news-title">{item.title}</p>
          <div className="news-abstract"> {item.abstract}</div>
          <div className="news-written">
            {item.byline && <div className="news-author"> {item.byline}</div>}
            <div className="news-date"> {item.created_date.slice(0, 10)}</div>
          </div>
        </div>
      </div>
    </a>
  );
}

export default NewsArticale;
