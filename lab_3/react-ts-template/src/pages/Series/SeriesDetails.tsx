import React from 'react';
import Detail from 'components/Detail';
import { useParams } from 'react-router-dom';
import { SeriesArr } from 'data/SeriesArray';

const SeriesDetails: React.FC = () => {
  const { id } = useParams();

  return <Detail {...SeriesArr.filter((e) => e.id === id)[0]} />;
};

export default SeriesDetails;
