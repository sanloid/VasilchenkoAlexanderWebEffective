import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import Characters from './pages/Characters';
import Series from './pages/Series';
import Comics from './pages/Comics';
import Layout from './Layout';
import './index.css';

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Characters />} />
        <Route path="comics" element={<Comics />} />
        <Route path="series" element={<Series />} />
      </Route>
    </Routes>
  );
};

export default App;
