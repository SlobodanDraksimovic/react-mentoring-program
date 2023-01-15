export const convertToYear = (releaseDate: string): number => parseInt(releaseDate.split('-')[0], 10);

export const convertToHoursAndMinutes = (minutes: number) => `${Math.floor(minutes / 60)}h ${minutes % 60}min`;

export const convertToGenres = (genres: string[]) => genres.join(', ');

export const convertToGenreOptions = (genres: string) => genres
  .split(',').map((genre) => ({ value: genre, label: genre }));
