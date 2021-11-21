import "./App.css";
import React from "react";
import Row from "./Row";
import Banner from "./Banner";
import requests from "./Requests";
import Nav from "./Nav";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

function App() {
  const notify = (s) => toast(s);

  return (
    <div className="app">
      <Nav />
      <Banner title="banner" fetchUrl={requests.fetchNetflixOriginals} />
      {rows.map((row) => {
        return (
          <Row
            title={row.title}
            fetchUrl={row.fetchUrl}
            isLargeRow={row.isLargeRow}
            notify={notify}
          />
        );
      })}
      <ToastContainer />
    </div>
  );
}

export default App;
