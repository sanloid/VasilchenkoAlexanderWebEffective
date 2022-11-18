import React from 'react';
import Detail from 'components/Detail';
import { useParams } from 'react-router-dom';
import { ComicsArr } from 'data/ComicsArray';

const ComicsDetails: React.FC = () => {
  const { id } = useParams();

  return <Detail {...ComicsArr.filter((e) => e.id === id)[0]} />;
};

export default ComicsDetails;
