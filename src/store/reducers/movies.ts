import { AnyAction } from 'redux';

import { Movie } from '../../types/Movie';
import { ACTION_TYPES } from '../actions/actionTypes';
import { deleteMovie, setMovies, updateMovie } from './movieReducerHelpers';

export type MovieStore = {
  movies: Movie[];
};

const initialState: MovieStore = {
  movies: []
};

const reducer = (state = initialState, action: AnyAction): MovieStore => {
  switch (action.type) {
    case ACTION_TYPES.SET_MOVIES:
      return setMovies(state, action.payload);

    case ACTION_TYPES.UPDATE_MOVIE:
      return updateMovie(state, action.payload);

    case ACTION_TYPES.DELETE_MOVIE:
      return deleteMovie(state, action.payload);

    default: return state;
  }
};

export default reducer;
