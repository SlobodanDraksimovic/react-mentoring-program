import React, { useState } from 'react';

import useRouting from '../../../../../../hooks/useRouting';

import './MovieSearchBar.css';
import '../../../../../../styles/Container.css';

const MovieSearchBar: React.FC = () => {
  const { navigate, queryString } = useRouting();
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="container-centered">
      <div className="search">
        <input
          type="text"
          className="input"
          placeholder="What do you want to watch?"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          type="button"
          className="btn search-btn"
          onClick={() => navigate(`/search/${searchQuery}${queryString}`)}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default MovieSearchBar;
