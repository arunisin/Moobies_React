import { useState, useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";
//1044cf91

const API_URL = "http://www.omdbapi.com?apikey=1044cf91";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const movie1 = {
    Title: "Whiplash",
    Year: "2014",
    imdbID: "tt2582802",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTA5NDZlZGUtMjAxOS00YTRkLTkwYmMtYWQ0NWEwZDZiNjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  };

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  return (
    <div className="app">
      <h1>Moobies</h1>

      <div className="search">
        <input placeholder="search here mofo" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <img src={SearchIcon} alt="search" onClick={() => searchMovies(searchTerm)} />
      </div>


      {movies?.length > 0 ?    
      (
      <div className="container">
        {movies.map((movie) => (
            <MovieCard movie={movie} />
            ))}
      </div>
      )
      :
      (
        <div className="empty">
          <h1>Tf are you searching?</h1>
        </div>
      )
      }   

    </div>
  );
};

export default App;
