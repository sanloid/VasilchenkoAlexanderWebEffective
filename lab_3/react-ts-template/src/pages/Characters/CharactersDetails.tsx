import React from 'react';
import Detail from 'components/Detail';
import { useParams } from 'react-router-dom';
import { CharactersArr } from './Characters';

const CharactersDetails: React.FC = () => {
  const { id } = useParams();

  return <Detail {...CharactersArr.filter((e) => e.id === id)[0]} />;
};

export default CharactersDetails;
