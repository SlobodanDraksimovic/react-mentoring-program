const getGenres = () => [
  'Action', 'Adventure', 'Animation', 'Comedy', 'Documentary', 'Drama', 'Family',
  'Fantasy', 'Horror', 'Mystery', 'Romance', 'Science Fiction', 'Thriller', 'War'
].map((genre) => ({ label: genre, value: genre }));

export default getGenres;
