export type MovieDto = {
  id?: string,
  title: string,
  overview: string,
  genres: string[],
  runtime: number,
  poster_path: string,
  vote_average: number,
  release_date: string
}

export type MovieFields = {
  title: string;
  releaseDate: Date;
  posterPath: string;
  rating: number;
  runtime: number;
  genres: {
    value: string;
    label: string;
  }[] | null;
  overview: string;
}

export type Movie = {
  id?: string,
  title: string,
  overview: string,
  genres: string,
  runtime: number,
  posterPath: string,
  rating: number,
  releaseDate: string
};
