import { convertToGenreOptions } from '../../helpers/convertMovieProperties';
import { Movie, MovieFields } from '../../types/Movie';
import { MOVIE_DEFAULTS } from './constants';

export const generateInitialValues = (movie?: Movie | null): MovieFields => ({
  title: movie?.title ?? MOVIE_DEFAULTS.TITLE,
  releaseDate: movie?.releaseDate ? new Date(movie.releaseDate) : MOVIE_DEFAULTS.RELEASE_DATE,
  posterPath: movie?.posterPath ?? MOVIE_DEFAULTS.POSTER_PATH,
  rating: movie?.rating ?? MOVIE_DEFAULTS.RATING,
  runtime: movie?.runtime ?? MOVIE_DEFAULTS.RUNTIME,
  genres: movie?.genres ? convertToGenreOptions(movie.genres) : null,
  overview: movie?.overview ?? MOVIE_DEFAULTS.OVERVIEW
});

export default generateInitialValues;
