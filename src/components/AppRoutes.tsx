import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './Home/Home';
import NoMatch from './NoMatch/NoMatch';

const AppRoutes = () => (
  <Routes>
    <Route path="/search/:searchQuery" element={<Home />} />
    <Route path="/search" element={<Home />} />
    <Route path="/" element={<Navigate replace to="/search" />} />
    <Route path="*" element={<NoMatch />} />
  </Routes>
);

export default AppRoutes;
