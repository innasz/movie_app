import axios from 'axios';
import React, { useEffect, useState } from 'react';

const App = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try {
      const options = {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOWZhYTk0MmRkMGQzZTA0NTg4YjBkZGNjNzRjY2UyMSIsInN1YiI6IjYzYmMyZjA4Zjg1OTU4MDA4NzQ4MmMwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eXyrC0pHaFplxQNuN9BQ4YrFzPNpE4l2aolx80lC3dE',
        },
      };
      const response = await axios.get(
        'https://api.themoviedb.org/3/movie/now_playing',
        options
      );
      console.log('+++++++++++++++++++++++==', response.data.results);
      setMovies(response.data.results);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {movies?.map((movie, index) => (
        <div key={index}>
          <h1>{movie.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default App;
