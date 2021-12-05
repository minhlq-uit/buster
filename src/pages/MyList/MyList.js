import ListCard from "./ListCard/ListCard";
import "./myList.scss";
import { useState, useEffect } from "react";
import axios from "axios";
export default function News() {
  const [myList, setMyList] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMyList = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const { data } = await axios.get("/api/myList/getList", config);
        setMyList(data.data);
      } catch (err) {
        // localStorage.removeItem("authToken");
        setError("You are not authorized please login");
        console.log(error);
      }
    };
    fetchMyList();
  }, []);

  return (
    <div className="myList">
      <div className="main-title">My List</div>
      {myList && myList.map((id) => <ListCard id={id} category="movie" />)}
    </div>
  );
}
