import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';
import Detail from 'components/Detail';
import store from 'stores/index';
import LoadingSpinner from 'components/LoadingSpinner';

const SeriesDetails: React.FC = observer(() => {
  const { id } = useParams();
  useEffect(() => {
    if (id) store.SeriesStore.getOne(id);
    window.scrollTo(0, 0);
  }, []);

  return store.SeriesStore.loadingOne ? (
    <LoadingSpinner />
  ) : (
    <Detail
      name={store.SeriesStore.oneResponse.data.results[0].title}
      description={store.SeriesStore.oneResponse.data.results[0].description}
      img={store.SeriesStore.oneResponse.data.results[0].thumbnail}
      comics={store.SeriesStore.seriesComics}
      characters={store.SeriesStore.seriesChar}
    />
  );
});

export default SeriesDetails;
