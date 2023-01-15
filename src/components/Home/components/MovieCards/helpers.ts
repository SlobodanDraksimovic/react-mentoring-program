import { addToQueryString } from '../../../../helpers/navigationUtils';

export const addSearchQueryToQueryString = (
  queryString: string,
  searchQuery: string | undefined
) => {
  if (!searchQuery) {
    return queryString;
  }

  const newQueryString = addToQueryString(queryString, { name: 'search', value: searchQuery });
  return addToQueryString(newQueryString, { name: 'searchBy', value: 'title' });
};

export default addSearchQueryToQueryString;
