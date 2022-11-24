import React from 'react';
import { useParams } from 'react-router-dom';
import Detail from 'components/Detail';
import { SeriesArr } from 'data/SeriesArray';

const SeriesDetails: React.FC = () => {
  const { id } = useParams();

  return <Detail {...SeriesArr.filter((e) => e.id === id)[0]} />;
};

export default SeriesDetails;
