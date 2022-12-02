import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { v4 } from 'uuid';
import RouteInfo from 'RouteInfo';
import PageBase from 'pages/PageBase';
import Detail from 'pages/Detail';
import Layout from './Layout';
import './index.css';

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {RouteInfo.map((e) => (
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
