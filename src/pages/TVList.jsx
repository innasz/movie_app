import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const TVList = () => {
  const [tvs, setTvs] = useState([]);

  const getTvs = async () => {
    try {
      const options = {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOWZhYTk0MmRkMGQzZTA0NTg4YjBkZGNjNzRjY2UyMSIsInN1YiI6IjYzYmMyZjA4Zjg1OTU4MDA4NzQ4MmMwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eXyrC0pHaFplxQNuN9BQ4YrFzPNpE4l2aolx80lC3dE',
        },
      };

      const response = await axios.get(
        'https://api.themoviedb.org/3/tv/airing_today',
        options
      );
      console.log('+++++++++++++++++++++++++++++', response.data.results);
      setTvs(response.data.results);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getTvs();
  }, []);
  return (
    <div className='flex flex-row justify-center itmes-center'>
      <div className='grid grid-cols-4 p-5 gap-4 auto-cols-max'>
        {tvs?.map((tv, index) => (
          <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
            <img
              class='rounded-t-lg'
              src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`}
              alt={tv.name}
            />
            <div class='p-5'>
              <a href='#'>
                <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                  {tv.name}
                </h5>
              </a>
              <p class='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                {tv.overview}
              </p>
              <Link to={`/tv/${tv.id}`}>
                <button
                  type='button'
                  class='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                >
                  Read more
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TVList;
