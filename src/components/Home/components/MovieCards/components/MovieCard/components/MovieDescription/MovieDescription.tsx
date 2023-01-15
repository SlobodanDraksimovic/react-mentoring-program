import React from 'react';

import './MovieDescription.css';

type Props = {
  title: string,
  year: number,
  genres: string
}

const MovieDescription: React.FC<Props> = ({ title, year, genres }) => (
  <div className="movie-description">
    <span>
      <strong>{title}</strong>
    </span>
    <span className="genres">
      {genres}
    </span>
    <span className="year">
      {year}
    </span>
  </div>
);

export default MovieDescription;
