import "./App.css";
import React from "react";
import Row from "./Row";
import requests from "./Requests";
import Banner from "./Banner";
import Nav from "./Nav";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//  const rows = [{title : "NETFLIX ORIGINALS" , fetchUrl: requests.fetchNetflixOriginals, isLargeRow:true}]

function App() {
  const notify = (s) => toast(s);

  return (
    <div className="app">
      {/* Navbar */}
      <Nav />

      {/* Banner */}
      <Banner title="banner" fetchUrl={requests.fetchNetflixOriginals} />

      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
        notify={notify}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <ToastContainer />
    </div>
  );
}

export default App;
