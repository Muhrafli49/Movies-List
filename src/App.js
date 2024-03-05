import { useEffect } from 'react';
import React, { useState } from 'react';
import './App.css';
import { getMovieList, searchMovie } from "./api";

const App = () => {

const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result)
    })
  }, []);

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div className='Movie-wrapper' key={i}>
          <div className='Movie-title'>{movie.title}</div>
          <img className='Movie-image' src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`} alt={movie.title} />
          <div className='Movie-date'>Release: {movie.release_date}</div>
          <div className='Movie-rate'>{movie.vote_average}</div>
        </div>
      );
    });
  };
  const search = async (q) => {
    if (q.length > 3) {
      try {
        const query = await searchMovie(q);
        setPopularMovies(query.results)
      } catch (error) {
        console.error('Error fetching movie list:', error.message);
      }
    }
  };  


  return (
    <div className="App">
      <header className="App-header">
        <h1>MOVIES LIST</h1>
        <input 
        placeholder="Cari Film yang diinginkan..." 
        className="Movie-search"
        onChange= {({ target }) => search(target.value)}
        />
        <div className='Movie-container'>
          <PopularMovieList/>
        </div>
      </header>
    </div>
  );
}

export default App;
