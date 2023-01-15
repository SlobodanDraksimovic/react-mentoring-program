import { useMemo } from 'react';
import {
  useParams, useSearchParams, useLocation, useNavigate
} from 'react-router-dom';

const useRouting = () => {
  const navigate = useNavigate();
  const activeGenre = useSearchParams()[0].get('filter');
  const { pathname, search } = useLocation();
  const { searchQuery } = useParams();

  return useMemo(
    () => ({
      activeGenre, pathname, searchQuery, navigate, queryString: search
    }),
    [activeGenre, navigate, searchQuery, pathname, search]
  );
};

export default useRouting;
