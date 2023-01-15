import React from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';

import useNavigationBar from './hooks/useNavigationBar';
import useRouting from '../../hooks/useRouting';
import { MOVIE_SORTING_OPTIONS, MAIN_GENRES } from './constants';

import selectStyles from './styles/Select';
import './styles/NavigationBar.css';
import '../../styles/Button.css';

const NavigationBar: React.FC = () => {
  const { setSelectedGenre, setSelectedSortingOption } = useNavigationBar();
  const { activeGenre, pathname } = useRouting();

  return (
    <nav className="navbar">
      <ul className="navbar-items">
        {MAIN_GENRES.map((genre) => (
          <li className="navbar-item" key={genre.option}>
            <Link
              to={`${pathname}?filter=${genre.option}`}
              className={`btn ${activeGenre === genre.option ? 'active' : ''}`}
              onClick={() => setSelectedGenre(genre)}
            >
              {genre.option}
            </Link>
          </li>
        ))}
      </ul>
      <ul className="navbar-items">
        <li className="navbar-item select-movie-label">Sort by</li>
        <li className="navbar-item">
          <Select
            styles={selectStyles}
            onChange={setSelectedSortingOption}
            options={MOVIE_SORTING_OPTIONS}
          />
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
