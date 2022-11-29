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
    window.scrollTo(0, 0);
  }, []);

  return store.ComicsStore.loadingOne ? (
    <LoadingSpinner />
  ) : (
    <Detail
      name={store.ComicsStore.oneResponse.data.results[0].title}
      description={store.ComicsStore.oneResponse.data.results[0].description}
      img={store.ComicsStore.oneResponse.data.results[0].thumbnail}
      characters={store.ComicsStore.comicsChar}
    />
  );
});

export default ComicsDetails;
