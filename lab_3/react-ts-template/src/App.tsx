import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import store from 'stores/index';
import { v4 } from 'uuid';
import PageBase from 'pages/PageBase';
import Detail from 'pages/Detail';
import Layout from './Layout';
import './index.css';

const App: FC = () => {
  const route = [
    { path: 'characters', store: store.CharStore },
    { path: 'comics', store: store.ComicsStore },
    { path: 'series', store: store.SeriesStore }
  ];
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {route.map((e) => (
          <>
            <Route
              path={`${e.path}/page/:page`}
              element={<PageBase store={e.store} />}
            />
            <Route
              path={`${e.path}/:id`}
              element={<Detail store={e.store} />}
            />
          </>
        ))}
      </Route>
    </Routes>
  );
};

export default App;
