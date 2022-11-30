import React from 'react';
import Detail from 'pages/Detail';
import store from 'stores/index';

const ComicsDetails: React.FC = () => {
  return <Detail store={store.ComicsStore} />;
};

export default ComicsDetails;
