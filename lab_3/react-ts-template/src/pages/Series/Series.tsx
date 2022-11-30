import React from 'react';
import store from 'stores/index';
import PageBase from 'pages/PageBase';

const Series: React.FC = () => {
  return <PageBase store={store.SeriesStore} />;
};
export default Series;
