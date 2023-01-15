export type MovieSortingOption = {
  value: string,
  label: string,
  queryString: string
} | null;

export type MovieGenre = {
  option: string,
  queryString: string
};

const SEARCH_PARAMS = {
  OLDEST_RELEASE: '?sortBy=release_date&sortOrder=asc',
  NEWEST_RELEASE: '?sortBy=release_date&sortOrder=desc',
  HIGHEST_RATING: '?sortBy=vote_average&sortOrder=desc',
  LOWEST_RATING: '?sortBy=vote_average&sortOrder=asc',
  DOCUMENTARY: '?searchBy=genres&filter=documentary',
  COMEDY: '?searchBy=genres&filter=comedy',
  HORROR: '?searchBy=genres&filter=horror',
  CRIME: '?searchBy=genres&filter=crime'
};

export const MAIN_GENRES: MovieGenre[] = [
  { option: 'all', queryString: '' },
  { option: 'documentary', queryString: SEARCH_PARAMS.DOCUMENTARY },
  { option: 'comedy', queryString: SEARCH_PARAMS.COMEDY },
  { option: 'horror', queryString: SEARCH_PARAMS.HORROR },
  { option: 'crime', queryString: SEARCH_PARAMS.CRIME }
];

export const MOVIE_SORTING_OPTIONS: MovieSortingOption[] = [
  { value: 'OLDEST RELEASE DATE', label: 'OLDEST RELEASE DATE', queryString: SEARCH_PARAMS.OLDEST_RELEASE },
  { value: 'NEWEST RELEASE DATE', label: 'NEWEST RELEASE DATE', queryString: SEARCH_PARAMS.NEWEST_RELEASE },
  { value: 'LOWEST RATING', label: 'LOWEST RATING', queryString: SEARCH_PARAMS.LOWEST_RATING },
  { value: 'HIGHEST RATING', label: 'HIGHEST RATING', queryString: SEARCH_PARAMS.HIGHEST_RATING }
];
