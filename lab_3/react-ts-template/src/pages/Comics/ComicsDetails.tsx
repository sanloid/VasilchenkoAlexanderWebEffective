import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import Detail from 'components/Detail';
import { useParams } from 'react-router-dom';
import store from 'stores/index';
import LoadingSpinner from 'components/LoadingSpinner';

const ComicsDetails: React.FC = observer(() => {
  const { id } = useParams();
  useEffect(() => {
    if (id) store.ComicsStore.getComics(id);
  }, []);

  return store.ComicsStore.loadingOne ? (
    <LoadingSpinner />
  ) : (
    <Detail
      name={store.ComicsStore.oneComicsResponse.data.results[0].title}
      description={
        store.ComicsStore.oneComicsResponse.data.results[0].description
      }
      img={store.ComicsStore.oneComicsResponse.data.results[0].thumbnail}
    />
  );
});

export default ComicsDetails;
