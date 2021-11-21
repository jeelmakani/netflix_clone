import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Banner.css";

const baseUrl = "https://image.tmdb.org/t/p/original";
function Banner({ fetchUrl }) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, [fetchUrl]);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  const gimmeStyles = (path) => `url(${baseUrl}${path})`;
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: gimmeStyles(movie.backdrop_path),
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My list</button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner--fadebottom" />
    </header>
  );
}
export default Banner;
