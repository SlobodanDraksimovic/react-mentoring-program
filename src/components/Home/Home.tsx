import React from 'react';

import MovieCards from './components/MovieCards/MovieCards';
import NavigationBar from '../NavigationBar/NavigationBar';

import './Home.css';

const Home: React.FC = () => (
  <div className="home">
    <NavigationBar />
    <MovieCards />
  </div>
);

export default Home;
