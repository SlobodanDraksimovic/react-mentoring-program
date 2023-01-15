import { API_URL } from '../constants';

const deleteMovie = async (id: string) => {
  try {
    return await fetch(`${API_URL}/movies/${id}`, { method: 'DELETE' });
  } catch (err) {
    return 'Error deleting movie';
  }
};

export default deleteMovie;
