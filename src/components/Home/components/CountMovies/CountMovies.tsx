import React from 'react';

import './CountMovies.css';

type Props = {
  count: number
};

const CountMovies: React.FC<Props> = ({ count }) => (
  <section className="container-count-movies">
    <strong>{count}</strong>
    {' '}
    <span>movies found</span>
  </section>
);

export default CountMovies;
