import { useState, useEffect } from 'react';

import { MovieSortingOption, MovieGenre } from '../constants';
import useRouting from '../../../hooks/useRouting';

const useNavigationBar = () => {
  const { navigate, pathname } = useRouting();
  const [selectedSortingOption, setSelectedSortingOption] = useState<MovieSortingOption>(null);
  const [selectedGenre, setSelectedGenre] = useState<MovieGenre | null>(null);

  useEffect(() => {
    if (selectedSortingOption) {
      setSelectedGenre(null);
      navigate(`${pathname}${selectedSortingOption.queryString}`);
    }
  }, [selectedSortingOption, navigate, pathname]);

  useEffect(() => {
    if (selectedGenre) {
      setSelectedSortingOption(null);
      navigate(`${pathname}${selectedGenre.queryString}`);
    }
  }, [selectedGenre, navigate, pathname]);

  return { setSelectedGenre, setSelectedSortingOption };
};

export default useNavigationBar;
