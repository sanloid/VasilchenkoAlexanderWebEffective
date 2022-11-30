import React from 'react';
import store from 'stores/index';
import PageBase from 'pages/PageBase';

const Characters: React.FC = () => {
  return <PageBase store={store.CharStore} />;
};
export default Characters;
