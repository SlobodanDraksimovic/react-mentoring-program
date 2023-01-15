import { setMovies, deleteMovie, updateMovie } from '../movieReducerHelpers';
import { MovieStore } from '../movies';
import { Movie } from '../../../types/Movie';

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

describe('movieReducerHelpers', () => {
  describe('setMovies', () => {
    it('should set movie when array is empty', () => {
      const MOCK_STATE: MovieStore = { movies: [] };

      expect(setMovies(MOCK_STATE, MOCK_MOVIES)).toEqual({ movies: MOCK_MOVIES });
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

      expect(setMovies(MOCK_STATE, MOCK_MOVIES)).toEqual({ movies: MOCK_MOVIES });
    });
  });

  describe('deleteMovie', () => {
    it('should delete movie', () => {
      const MOCK_STATE: MovieStore = { movies: MOCK_MOVIES };
      expect(deleteMovie(MOCK_STATE, MOCK_ID)).toEqual({ movies: [] });
    });
  });

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

    expect(updateMovie(MOCK_STATE, MOCK_UPDATED_MOVIE))
      .toEqual({
        movies: [{ ...MOCK_UPDATED_MOVIE }]
      });
  });
});
