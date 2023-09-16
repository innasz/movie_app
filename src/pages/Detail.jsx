import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

const Detail = () => {
  const params = useParams();

  const [item, setItem] = useState({});

  const getItem = async () => {
    try {
      const options = {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOWZhYTk0MmRkMGQzZTA0NTg4YjBkZGNjNzRjY2UyMSIsInN1YiI6IjYzYmMyZjA4Zjg1OTU4MDA4NzQ4MmMwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eXyrC0pHaFplxQNuN9BQ4YrFzPNpE4l2aolx80lC3dE',
        },
      };
      const result = await axios.get(
        `https://api.themoviedb.org/3/movie/${params.movieId}`,
        options
      );
      console.log('+++++++', result.data);
      setItem(result.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getItem();
  }, []);

  return (
    <div>
      <h1>{item.title}</h1>
    </div>
  );
};

export default Detail;
