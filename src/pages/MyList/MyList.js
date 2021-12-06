import ListCard from "./ListCard/ListCard";
import "./myList.scss";
import { useState, useEffect } from "react";
import axios from "axios";
export default function News() {
  const [myListMovie, setMyListMovie] = useState([]);
  const [myListSeries, setMyListSeries] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMyListMovie = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const { data } = await axios.get("/api/myList/getList/movie", config);
        setMyListMovie(data.data);
      } catch (error) {
        // localStorage.removeItem("authToken");
        setError("You are not authorized please login");
        console.log(error);
      }
    };
    fetchMyListMovie();
  }, []);
  useEffect(() => {
    const fetchMyListSeries = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const { data } = await axios.get("/api/myList/getList/series", config);
        setMyListSeries(data.data);
      } catch (error) {
        // localStorage.removeItem("authToken");
        setError("You are not authorized please login");
        console.log(error);
      }
    };
    fetchMyListSeries();
  }, []);

  return (
    <div className="myList">
      <div className="main-title">My List</div>
      {myListMovie &&
        myListMovie.map((id) => <ListCard id={id} category="movie" />)}
      {myListSeries &&
        myListSeries.map((id) => <ListCard id={id} category="tv" />)}
    </div>
  );
}
