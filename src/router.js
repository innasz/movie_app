import { createBrowserRouter } from 'react-router-dom';
import MovieList from './pages/MovieList';

import TVList from './pages/TVList';
import Detail from './pages/MovieDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MovieList />,
  },
  {
    path: '/movie/:id',
    element: <Detail />,
  },
  {
    path: '/tvs',
    element: <TVList />,
  },
  {
    path: '/tv/:id',
    element: <Detail />,
  },
]);

export default router;
