import React from 'react';
import Detail from 'components/Detail';
import { useParams } from 'react-router-dom';
import { comicsArr } from './Comics';

const ComicsDetails: React.FC = () => {
  const { id } = useParams();

  return <Detail {...comicsArr.filter((e) => e.id === id)[0]} />;
};

export default ComicsDetails;
