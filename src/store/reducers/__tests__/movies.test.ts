import reducer, { MovieStore } from '../movies';
import { setMoviesAction } from '../../actions/movies';
import { Movie } from '../../../types/Movie';
import ACTION_TYPES from '../../actions/actionTypes';

const MOCK_ID = 'movie-id';
const MOCK_MOVIES: Movie[] = [{
  id: MOCK_ID,
  genres: 'Action',
  posterPath: 'https://i.pinimg.com/originals/74/82/3c/74823cb0e159d83203826be92d732398.jpg',
  overview: 'An action movie',
  rating: 8,
  releaseDate: '2022-10-11',
  runtime: 100,
  title: 'Just An Action Movie'
}];

describe('movie reducer', () => {
  describe('setMoviesAction', () => {
    it('should set movie when array is empty', () => {
      const MOCK_STATE: MovieStore = { movies: [] };

      expect(reducer(MOCK_STATE, setMoviesAction(MOCK_MOVIES)))
        .toEqual({ movies: MOCK_MOVIES });
    });

    it('should set movie when array is NOT empty', () => {
      const MOCK_STATE: MovieStore = {
        movies: [
          {
            id: 'another-movie-id',
            genres: 'Horror',
            posterPath: 'https://i.pinimg.com/originals/74/82/3c/74823cb0e159d83203826be92d732398.jpg',
            overview: 'A horror movie',
            rating: 5.5,
            releaseDate: '2022-1-1',
            runtime: 87,
            title: 'Just A Horror Movie'
          }
        ]
      };

      expect(reducer(MOCK_STATE, setMoviesAction(MOCK_MOVIES))).toEqual({ movies: MOCK_MOVIES });
    });
  });

  describe('deleteMovieAction', () => {
    it('should delete movie', async () => {
      const MOCK_STATE: MovieStore = { movies: MOCK_MOVIES };
      const deleteAction = {
        type: ACTION_TYPES.DELETE_MOVIE,
        payload: MOCK_ID
      };

      expect(reducer(MOCK_STATE, deleteAction)).toEqual({ movies: [] });
    });
  });

  describe('updateMovieAction', () => {
    it('should update movie', () => {
      const MOCK_STATE: MovieStore = { movies: MOCK_MOVIES };
      const MOCK_UPDATED_MOVIE: Movie = {
        id: MOCK_ID,
        genres: 'Horror',
        posterPath: 'https://i.pinimg.com/originals/74/82/3c/74823cb0e159d83203826be92d732398.jpg',
        overview: 'A horror movie',
        rating: 5.5,
        releaseDate: '2022-1-1',
        runtime: 87,
        title: 'Just A Horror Movie'
      };
      const updateAction = {
        type: ACTION_TYPES.UPDATE_MOVIE,
        payload: MOCK_UPDATED_MOVIE
      };

      expect(reducer(MOCK_STATE, updateAction))
        .toEqual({
          movies: [{ ...MOCK_UPDATED_MOVIE }]
        });
    });
  });
});
