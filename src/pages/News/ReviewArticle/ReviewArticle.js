import "./reviewArticle.scss";

function ReviewArticle(props) {
  const { item } = props;
  console.log(item);
  return (
    <a href={item.link["url"]} target="_blank" rel="noopener noreferrer">
      <div className="reviewArticle">
        <img src={item.multimedia["src"]} alt="multimedia"></img>
        <div className="review-detail">
          <div className="review-section-name"> {item.section}</div>
          <p className="review-title">{item.display_title}</p>
          <div className="review-author"> {item.byline}</div>
        </div>
      </div>
    </a>
  );
}

export default ReviewArticle;
