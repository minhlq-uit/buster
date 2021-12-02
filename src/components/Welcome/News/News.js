import React from "react";
import { Link } from "react-router-dom";
import "./news.scss"

export default function News() {
    return (
        <div className="news">
            <h1>Latest News</h1>
            <p>Always updated with the latest news about Movies, <br/> TV shows every day.</p>
            <Link to="/Login">
                <button>Go to news</button>
            </Link>
        </div>
    );
}