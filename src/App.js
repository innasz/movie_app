import React from 'react';
import MovieList from './pages/MovieList';
import { RouterProvider } from 'react-router-dom';
import router from './router';

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
