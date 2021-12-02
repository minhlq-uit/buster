import ListCard from "./ListCard/ListCard";
import "./myList.scss";
export default function News() {
  return (
    <div className="myList">
      <div className="main-title">My List</div>
      <ListCard id="576845" category="movie" />
      <ListCard id="576845" category="movie" />
    </div>
  );
}
