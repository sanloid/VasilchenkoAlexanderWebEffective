import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Detail from 'components/Detail';
import store from 'stores/index';
import { observer } from 'mobx-react-lite';
import LoadingSpinner from 'components/LoadingSpinner';

const CharactersDetails: React.FC = observer(() => {
  const { id } = useParams();
  useEffect(() => {
    if (id) store.CharStore.getChar(id);
  }, []);

  return store.CharStore.loadingOne ? (
    <LoadingSpinner />
  ) : (
    <Detail
      name={store.CharStore.oneCharResponse.data.results[0].name}
      description={store.CharStore.oneCharResponse.data.results[0].description}
      img={store.CharStore.oneCharResponse.data.results[0].thumbnail}
    />
  );
});

export default CharactersDetails;
