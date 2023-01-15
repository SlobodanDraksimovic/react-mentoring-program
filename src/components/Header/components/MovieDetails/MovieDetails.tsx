import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import Title from '../Title/Title';
import MovieDetailsContent from './components/MovieDetailsContent';

import useEffectWithSignal from '../../../../hooks/useEffectWithSignal';
import useRouting from '../../../../hooks/useRouting';
import mapMovieDtoToMovie from '../../../../mappers/movies';
import getUrlWithoutMovieId from './helpers';
import { getMovie } from '../../../../helpers/getMovies';
import { Movie } from '../../../../types/Movie';

import './MovieDetails.css';

type Props = {
  movieId: string;
}

const MovieDetails: React.FC<Props> = ({ movieId }) => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const { navigate, queryString } = useRouting();

  useEffectWithSignal(async (signal: AbortSignal) => {
    const movieDto = await getMovie(signal, movieId);
    if (movieDto) {
      setMovie(mapMovieDtoToMovie(movieDto));
    }
  }, [movieId]);

  return (
    <div className="movie-details-container">
      <Title />
      <FontAwesomeIcon
        icon={faSearch}
        size="lg"
        className="icon-search"
        onClick={() => navigate(getUrlWithoutMovieId(queryString))}
      />
      {movie && <MovieDetailsContent movie={movie} />}
    </div>
  );
};

export default MovieDetails;
