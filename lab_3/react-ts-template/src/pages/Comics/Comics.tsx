import React from 'react';
import store from 'stores/index';
import PageBase from 'pages/PageBase';

const Comics: React.FC = () => {
  return <PageBase store={store.ComicsStore} />;
};
export default Comics;
