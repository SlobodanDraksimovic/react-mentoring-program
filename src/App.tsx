import React from 'react';
import { HashRouter } from 'react-router-dom';

import AppRoutes from './components/AppRoutes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App:React.FC = () => (
  <HashRouter>
    <Header />
    <AppRoutes />
    <Footer />
  </HashRouter>
);

export default App;
