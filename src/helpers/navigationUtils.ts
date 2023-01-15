export const addToQueryString = (queryString: string, { name, value }:
  { name: string; value: string | undefined; }) => {
  if (!value) {
    return queryString;
  }

  const searchParams = new URLSearchParams(queryString);
  searchParams.set(name, value);

  return `?${searchParams.toString()}`;
};

export const removeFromQueryString = (queryString: string, name: string) => {
  const searchParams = new URLSearchParams(queryString);
  searchParams.delete(name);

  return `?${searchParams.toString()}`;
};
