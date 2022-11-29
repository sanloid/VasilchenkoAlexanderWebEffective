import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Detail from 'components/Detail';
import store from 'stores/index';
import { observer } from 'mobx-react-lite';
import LoadingSpinner from 'components/LoadingSpinner';

const CharactersDetails: React.FC = observer(() => {
  const { id } = useParams();
  useEffect(() => {
    if (id) store.CharStore.getOne(id);
    window.scrollTo(0, 0);
  }, []);

  return store.CharStore.loadingOne ? (
    <LoadingSpinner />
  ) : (
    <Detail
      name={store.CharStore.oneResponse.data.results[0].name}
      description={store.CharStore.oneResponse.data.results[0].description}
      img={store.CharStore.oneResponse.data.results[0].thumbnail}
      comics={store.CharStore.charComics}
      series={store.CharStore.charSeries}
    />
  );
});

export default CharactersDetails;
