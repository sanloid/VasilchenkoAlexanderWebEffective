import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import CharactersDetails from 'pages/Characters/CharactersDetails';
import SeriesDetails from 'pages/Series/SeriesDetails';
import ComicsDetails from 'pages/Comics/ComicsDetails';
import Characters from './pages/Characters/Characters';
import Series from './pages/Series/Series';
import Comics from './pages/Comics/Comics';
import Layout from './Layout';
import './index.css';

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="characters" element={<Characters />} />
        <Route path="comics" element={<Comics />} />
        <Route path="series" element={<Series />} />
        <Route path="characters/:id" element={<CharactersDetails />} />
        <Route path="comics/:id" element={<ComicsDetails />} />
        <Route path="series/:id" element={<SeriesDetails />} />
      </Route>
    </Routes>
  );
};

export default App;
