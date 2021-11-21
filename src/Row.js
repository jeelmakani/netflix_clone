import React, { useState, useEffect } from "react";
import instance from "./axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import requests from "./Requests";

const baseUrl = "https://image.tmdb.org/t/p/original";
const rows = [
  {
    title: "NETFLIX ORIGINALS",
    fetchUrl: requests.fetchNetflixOriginals,
    isLargeRow: true,
  },
  {
    title: "TRENDING NOW",
    fetchUrl: requests.fetchTrending,
    isLargeRow: false,
  },
  { title: "TOP RATED", fetchUrl: requests.fetchTopRated, isLargeRow: false },
  {
    title: "ACTION MOVIES",
    fetchUrl: requests.fetchActionMovies,
    isLargeRow: false,
  },
  {
    title: "COMEDY MOVIES",
    fetchUrl: requests.fetchComedyMovies,
    isLargeRow: false,
  },
  {
    title: "HORROR MOVIES",
    fetchUrl: requests.fetchHorrorMovies,
    isLargeRow: false,
  },
  {
    title: "ROMANCE MOVIES",
    fetchUrl: requests.fetchRomanceMovies,
    isLargeRow: false,
  },
  {
    title: "DOCUMENTARIES",
    fetchUrl: requests.fetchDocumentaries,
    isLargeRow: false,
  },
];

function Row({ title, fetchUrl, isLargeRow, notify }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    debugger;
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          if (!url) {
            notify("Trailer not Found");
          }
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="row">
      {/* {title}  */}
      <h2>{title}</h2>
      {/* container -> poster */}
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${baseUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
