import { AnyAction } from 'redux';

import mapMovieDtoToMovie from '../../mappers/movies';
import { getMovies } from '../../helpers/getMovies';
import { ACTION_TYPES } from './actionTypes';
import { Movie, MovieDto } from '../../types/Movie';
import { updateMovie } from '../../helpers/saveMovie';
import deleteMovie from '../../helpers/deleteMovie';

export const setMoviesAction = (movies: Movie[]): AnyAction => ({
  type: ACTION_TYPES.SET_MOVIES,
  payload: movies
});

export const searchMoviesAction = (signal: AbortSignal, queryString = '') => (dispatch: Function) => {
  getMovies(signal, queryString).then((moviesDto: MovieDto[]) => dispatch(
    setMoviesAction(moviesDto.map((movieDto) => mapMovieDtoToMovie(movieDto)))
  ));
};

export const updateMovieAction = (movieDto: MovieDto) => (dispatch: Function) => (
  updateMovie(movieDto).then(() => dispatch({
    type: ACTION_TYPES.UPDATE_MOVIE,
    payload: mapMovieDtoToMovie(movieDto)
  }))
);

export const deleteMovieAction = (id: string) => (dispatch: Function) => (
  deleteMovie(id).then(() => dispatch({
    type: ACTION_TYPES.DELETE_MOVIE,
    payload: id
  }))
);
