import { removeFromQueryString } from '../../../../helpers/navigationUtils';

export const getUrlWithoutMovieId = (queryString: string) => (queryString
  ? `/search${removeFromQueryString(queryString, 'movie')}`
  : '/search');

export default getUrlWithoutMovieId;
