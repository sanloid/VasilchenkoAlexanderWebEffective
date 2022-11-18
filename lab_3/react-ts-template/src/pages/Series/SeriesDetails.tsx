import React from 'react';
import Detail from 'components/Detail';
import { useParams } from 'react-router-dom';
import { seriesArr } from './Series';

const SeriesDetails: React.FC = () => {
  const { id } = useParams();

  return <Detail {...seriesArr.filter((e) => e.id === id)[0]} />;
};

export default SeriesDetails;
