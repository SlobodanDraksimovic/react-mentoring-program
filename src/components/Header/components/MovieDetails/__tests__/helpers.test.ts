import { getUrlWithoutMovieId } from '../helpers';

describe('getUrlWithoutMovieId', () => {
  const cases = [
    ['/search?filter=genre', '?filter=genre&movie=123456'],
    ['/search?filter=genre', '?filter=genre'],
    ['/search?filter=genre', '?movie=123456&filter=genre'],
    ['/search', '']
  ];

  test.each(cases)('should return %s for %s', (expected: string, queryString: string) => {
    expect(getUrlWithoutMovieId(queryString)).toBe(expected);
  });
});
