import { createBrowserRouter } from 'react-router-dom';
import MovieList from './pages/MovieList';

import TVList from './pages/TVList';
import Detail from './pages/Detail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MovieList />,
  },
  {
    path: '/movie/:movieId',
    element: <Detail />,
  },
  {
    path: '/tvs',
    element: <TVList />,
  },
  {
    path: '/tv/:tvId',
    element: <Detail />,
  },
]);

export default router;
