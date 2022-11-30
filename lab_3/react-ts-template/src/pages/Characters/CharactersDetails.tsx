import React from 'react';
import Detail from 'pages/Detail';
import store from 'stores/index';

const CharactersDetails: React.FC = () => {
  return <Detail store={store.CharStore} />;
};

export default CharactersDetails;
