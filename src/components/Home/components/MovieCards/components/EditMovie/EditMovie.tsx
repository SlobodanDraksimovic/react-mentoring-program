import React from 'react';

import Modal from '../../../../../Modal/Modal';
import MovieForm from '../../../../../MovieForm/MovieForm';

import { useAppDispatch } from '../../../../../../hooks/reduxHooks';
import { mapToMovieDto } from '../../../../../../mappers/movies';
import { updateMovieAction } from '../../../../../../store/actions/movies';
import { Movie, MovieFields } from '../../../../../../types/Movie';

type Props = {
  movie: Movie;
  onClose: () => void;
}

const EditMovie: React.FC<Props> = ({ onClose, movie }) => {
  const dispatch = useAppDispatch();

  const handleSubmit = async (updatedMovie: MovieFields) => {
    await dispatch(updateMovieAction(mapToMovieDto(updatedMovie, movie?.id)));
    onClose();
  };

  return (
    <Modal
      title="EDIT MOVIE"
      onClose={onClose}
    >
      <MovieForm
        onSubmit={handleSubmit}
        movie={movie}
      />
    </Modal>
  );
};

export default EditMovie;
