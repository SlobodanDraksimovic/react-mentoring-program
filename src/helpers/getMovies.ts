import { API_URL } from '../constants';
import { MovieDto } from '../types/Movie';

export const getMovie = async (signal: AbortSignal, id: string): Promise<MovieDto | null> => {
  try {
    const response = await fetch(`${API_URL}/movies/${id}`, { signal });
    return response.json();
  } catch (err) {
    return null;
  }
};

export const getMovies = async (signal: AbortSignal, search = ''): Promise<MovieDto[]> => {
  try {
    const response = await fetch(`${API_URL}/movies${search}`, { signal });
    const { data } = await response.json();

    return data;
  } catch (err) {
    return [];
  }
};
