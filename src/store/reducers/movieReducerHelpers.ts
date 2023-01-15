import { Movie } from '../../types/Movie';
import { MovieStore } from './movies';

export const setMovies = (state: MovieStore, payload: Movie[]) => ({
  ...state,
  movies: [...payload]
});

const getIndexById = (movies: Movie[], idToSearch: string) => movies
  .findIndex(({ id }) => id === idToSearch);

export const updateMovie = (state: MovieStore, payload: Movie): MovieStore => {
  const { id, ...updatedMovie } = payload;

  if (!id) return state;

  const index = getIndexById(state.movies, id);
  return {
    ...state,
    movies: [
      ...state.movies.slice(0, index),
      { id, ...updatedMovie },
      ...state.movies.slice(index + 1)
    ]
  };
};

export const deleteMovie = (state: MovieStore, id: string): MovieStore => {
  const index = getIndexById(state.movies, id);

  return {
    ...state,
    movies: [
      ...state.movies.slice(0, index),
      ...state.movies.slice(index + 1)
    ]
  };
};
