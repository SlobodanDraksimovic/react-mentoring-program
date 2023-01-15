import React from 'react';

import MovieCard from './components/MovieCard/MovieCard';
import CountMovies from '../CountMovies/CountMovies';

import useEffectWithSignal from '../../../../hooks/useEffectWithSignal';
import useRouting from '../../../../hooks/useRouting';
import { useAppDispatch, useAppSelector } from '../../../../hooks/reduxHooks';
import { addSearchQueryToQueryString } from './helpers';
import { searchMoviesAction } from '../../../../store/actions/movies';
import { MovieStore } from '../../../../store/reducers/movies';
import { Movie } from '../../../../types/Movie';

import './MovieCards.css';

const MovieCards: React.FC = () => {
  const dispatch = useAppDispatch();
  const movies = useAppSelector((state: MovieStore) => state.movies);
  const { searchQuery, queryString } = useRouting();

  useEffectWithSignal(async (signal: AbortSignal) => dispatch(
    searchMoviesAction(signal, addSearchQueryToQueryString(queryString, searchQuery))
  ), [searchQuery, queryString]);

  return (
    <>
      <CountMovies count={movies.length} />
      <div className="movie-cards">
        {movies.map((movie: Movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </>
  );
};

export default MovieCards;
