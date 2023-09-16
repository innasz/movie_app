import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';

const Detail = () => {
  const { movieId, tvId } = useParams();
  const { pathname } = useLocation();
  const id = pathname.includes('movie') ? movieId : tvId;
  const provider = pathname.includes('movie') ? 'movie' : 'tv';

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
        `https://api.themoviedb.org/3/${provider}/${id}`,
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
      <h1>{item.title ? item.title : item.name}</h1>
      <h3>{item.overview}</h3>
      <p>{item.last_air_date ? item.last_air_date : item.release_date}</p>
    </div>
  );
};

export default Detail;
