import React from 'react';
import { useParams } from 'react-router-dom';
import Detail from 'components/Detail';
import { CharactersArr } from 'data/CharactersArray';

const CharactersDetails: React.FC = () => {
  const { id } = useParams();

  return <Detail {...CharactersArr.filter((e) => e.id === id)[0]} />;
};

export default CharactersDetails;
