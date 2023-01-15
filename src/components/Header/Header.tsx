import React from 'react';
import { useSearchParams } from 'react-router-dom';

import MainHeader from './components/MainHeader/MainHeader';
import MovieDetails from './components/MovieDetails/MovieDetails';

const Header: React.FC = () => {
  const movieId = useSearchParams()[0].get('movie');

  return movieId ? <MovieDetails movieId={movieId} /> : <MainHeader />;
};

export default Header;
