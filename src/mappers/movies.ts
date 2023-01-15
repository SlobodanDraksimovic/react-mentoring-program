import { convertToGenres } from '../helpers/convertMovieProperties';
import { MovieDto, Movie, MovieFields } from '../types/Movie';

export const mapMovieDtoToMovie = (movieDto: MovieDto): Movie => ({
  id: movieDto?.id,
  genres: convertToGenres(movieDto.genres),
  overview: movieDto.overview,
  posterPath: movieDto.poster_path,
  rating: movieDto.vote_average,
  releaseDate: movieDto.release_date,
  runtime: movieDto.runtime,
  title: movieDto.title
});

export const mapToMovieDto = (movie: MovieFields, id?: string): MovieDto => ({
  id,
  genres: movie?.genres?.map(({ value }) => (value)) || [],
  release_date: movie.releaseDate.toISOString(),
  poster_path: movie.posterPath,
  vote_average: movie.rating,
  overview: movie.overview,
  runtime: movie.runtime,
  title: movie.title
});

export default mapMovieDtoToMovie;
