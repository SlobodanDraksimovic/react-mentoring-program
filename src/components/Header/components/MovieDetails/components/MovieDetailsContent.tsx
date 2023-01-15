import React from 'react';

import Image from '../../../../Image/Image';

import { convertToHoursAndMinutes, convertToYear } from '../../../../../helpers/convertMovieProperties';
import { Movie } from '../../../../../types/Movie';

import './MovieDetailsContent.css';

type Props = {
  movie: Movie
}

const MovieDetailsContent:React.FC<Props> = ({ movie }) => (
  <div className="movie-details-content-container">
    <Image
      src={movie.posterPath}
      alt={movie.title}
      className="poster"
    />
    <div className="movie-details-text-content">
      <h1 className="movie-title">{movie.title}</h1>
      <span className="rating">{movie.rating}</span>
      <p className="genre">{movie.genres}</p>
      <span className="red-content">{convertToYear(movie.releaseDate)}</span>
      <span className="red-content">{convertToHoursAndMinutes(movie.runtime)}</span>
      <p>{movie.overview}</p>
    </div>
  </div>
);

export default MovieDetailsContent;
