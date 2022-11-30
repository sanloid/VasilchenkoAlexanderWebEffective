import React from 'react';
import Detail from 'pages/Detail';
import store from 'stores/index';

const SeriesDetails: React.FC = () => {
  return <Detail store={store.SeriesStore} />;
};

export default SeriesDetails;
