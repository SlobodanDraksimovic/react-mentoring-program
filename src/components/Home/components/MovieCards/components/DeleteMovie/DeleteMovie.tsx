import React from 'react';

import Modal from '../../../../../Modal/Modal';

import { useAppDispatch } from '../../../../../../hooks/reduxHooks';
import { deleteMovieAction } from '../../../../../../store/actions/movies';

import './DeleteMovie.css';

type Props = {
  movieId: string;
  onClose: React.MouseEventHandler<HTMLButtonElement>;
}

const DeleteMovie: React.FC<Props> = ({ movieId, onClose }) => {
  const dispatch = useAppDispatch();

  return (
    <Modal title="DELETE MOVIE" onClose={onClose}>
      <div className="delete-movie-container">
        <p className="helper-text">Are you sure you want to delete this Movie?</p>
        <button
          type="button"
          onClick={() => dispatch(deleteMovieAction(movieId))}
          className="btn confirm"
        >
          Confirm
        </button>
      </div>
    </Modal>
  );
};

export default DeleteMovie;
