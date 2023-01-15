import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

import MovieDescription from './components/MovieDescription/MovieDescription';
import EditMovie from '../EditMovie/EditMovie';
import DeleteMovie from '../DeleteMovie/DeleteMovie';
import MovieActions from './components/MovieActions/MovieActions';
import Image from '../../../../../Image/Image';

import useToggle from '../../../../../../hooks/useToggle';
import useRouting from '../../../../../../hooks/useRouting';
import { addToQueryString } from '../../../../../../helpers/navigationUtils';
import { convertToYear } from '../../../../../../helpers/convertMovieProperties';
import { Modal } from '../../../../../../types/Modal';
import { Movie } from '../../../../../../types/Movie';
import { MODAL_KIND } from '../../../../../../constants';

import './MovieCard.css';

type Props = {
  movie: Movie;
};

const MovieCard: React.FC<Props> = ({ movie }) => {
  const [isIconShown, setIsIconShown] = useState<boolean>(false);
  const [isActionsShown, setIsActionsShown] = useToggle();
  const [openedModal, setOpenedModal] = useState<Modal>(MODAL_KIND.EMPTY);

  const { navigate, queryString } = useRouting();
  const handleOnMouseEnter = ():void => setIsIconShown(true);
  const handleOnMouseLeave = ():void => {
    setIsIconShown(false);
    if (isActionsShown) {
      setIsActionsShown();
    }
  };
  const handleCloseModal = ():void => {
    setOpenedModal(MODAL_KIND.EMPTY);
    handleOnMouseLeave();
  };

  const isEditMovieOpened = openedModal === MODAL_KIND.EDIT;
  const isDeleteMovieOpened = openedModal === MODAL_KIND.DELETE;

  return (
    <div
      className="movie-card"
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >
      {isIconShown && (
        <FontAwesomeIcon
          icon={faEllipsisVertical}
          size="lg"
          className="icon-vertical-ellipsis"
          onClick={setIsActionsShown}
        />
      )}

      {isActionsShown && (
        <MovieActions
          onDeleteClick={() => setOpenedModal(MODAL_KIND.DELETE)}
          onEditClick={() => setOpenedModal(MODAL_KIND.EDIT)}
          onViewClick={() => navigate(addToQueryString(queryString, { name: 'movie', value: movie.id }))}
        />
      )}

      {isEditMovieOpened && (
        <EditMovie onClose={handleCloseModal} movie={movie} />
      )}

      {isDeleteMovieOpened && (
        <DeleteMovie onClose={handleCloseModal} movieId={movie.id!} />
      )}

      <Image
        src={movie.posterPath}
        alt={movie.title}
        className="movie-image"
      />
      <MovieDescription
        title={movie.title}
        year={convertToYear(movie.releaseDate)}
        genres={movie.genres}
      />
    </div>
  );
};

export default MovieCard;
