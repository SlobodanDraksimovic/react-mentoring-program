import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare, faEye } from '@fortawesome/free-solid-svg-icons';

import './MovieActions.css';

type Props = {
  onEditClick: React.MouseEventHandler<HTMLButtonElement>;
  onDeleteClick: React.MouseEventHandler<HTMLButtonElement>;
  onViewClick: React.MouseEventHandler<HTMLButtonElement>;
}

const MovieActions:React.FC<Props> = ({ onEditClick, onDeleteClick, onViewClick }) => (
  <ul className="movie-actions">
    <li className="movie-action">
      <button type="button" className="btn movie-action" onClick={onViewClick}>
        <FontAwesomeIcon icon={faEye} />
        {' '}
        View
      </button>
    </li>
    <li className="movie-action">
      <button type="button" className="btn movie-action" onClick={onEditClick}>
        <FontAwesomeIcon icon={faPenToSquare} />
        {' '}
        Edit
      </button>
    </li>
    <li className="movie-action">
      <button type="button" className="btn movie-action" onClick={onDeleteClick}>
        <FontAwesomeIcon icon={faTrash} />
        {' '}
        Delete
      </button>
    </li>
  </ul>
);

export default MovieActions;
