import React from 'react';

import AddMovie from './components/AddMovie/AddMovie';
import MovieSearchBar from './components/MovieSearchBar/MovieSearchBar';
import Title from '../Title/Title';
import HeaderBackground from '../../../../images/header.png';
import Image from '../../../Image/Image';

import './MainHeader.css';

const MainHeader: React.FC = () => (
  <>
    <Title />
    <Image alt="Background" className="header-background" src={HeaderBackground} />
    <AddMovie />
    <MovieSearchBar />
  </>
);

export default MainHeader;
