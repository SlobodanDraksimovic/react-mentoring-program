import { API_URL } from '../constants';
import { MovieDto } from '../types/Movie';

const saveMovie = async (movieDto: MovieDto, method: string) => {
  try {
    return await fetch(`${API_URL}/movies`, {
      method,
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify(movieDto)
    });
  } catch (err) {
    return 'Error saving movie';
  }
};

export const createMovie = (movieDto: MovieDto) => saveMovie(movieDto, 'POST');
export const updateMovie = (movieDto: MovieDto) => saveMovie(movieDto, 'PUT');
