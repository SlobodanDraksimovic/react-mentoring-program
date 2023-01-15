import React, { useState } from 'react';

import Modal from '../../../../../Modal/Modal';
import MovieForm from '../../../../../MovieForm/MovieForm';

import { mapToMovieDto } from '../../../../../../mappers/movies';
import { createMovie } from '../../../../../../helpers/saveMovie';
import { MovieFields } from '../../../../../../types/Movie';

import '../../../../../../styles/Button.css';
import './AddMovie.css';

const AddMovie: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const handleSubmit = async (newMovie: MovieFields) => {
    await createMovie(mapToMovieDto(newMovie));
    handleCloseModal();
  };

  return (
    <>
      {isModalOpen && (
      <Modal
        title="ADD MOVIE"
        onClose={handleCloseModal}
      >
        <MovieForm
          onSubmit={handleSubmit}
        />
      </Modal>
      )}

      <button
        type="button"
        className="btn add-movie"
        onClick={handleOpenModal}
      >
        + Add movie
      </button>
    </>
  );
};

export default AddMovie;
