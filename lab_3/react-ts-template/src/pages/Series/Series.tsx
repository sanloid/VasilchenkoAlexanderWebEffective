import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { v4 } from 'uuid';
import LoadingSpinner from 'components/LoadingSpinner';
import store from 'stores/index';
import Card from 'components/Card';
import SearchForm from 'components/SearchForm';
import Pagination from 'components/Pagination';
import { useParams, useSearchParams } from 'react-router-dom';

const Series: React.FC = observer(() => {
  const { page } = useParams();
  const [search] = useSearchParams();
  const name = search.get('name');

  useEffect(() => {
    if (page) {
      if (name) {
        store.SeriesStore.searchByName(name, page);
      } else {
        store.SeriesStore.getList(page);
      }
    }
    window.scrollTo(0, 0);
  }, [page, name]);

  return (
    <>
      <SearchForm />
      <section className="min-h-screen">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            {store.SeriesStore.loadingList ? (
              <LoadingSpinner />
            ) : (
              store.SeriesStore.Response?.data.results.map((e) => (
                <Card
                  id={e.id}
                  description={e.description}
                  img={e.thumbnail}
                  name={e.title}
                  key={v4()}
                />
              ))
            )}
          </div>
        </div>
      </section>
      <Pagination max={store.SeriesStore.pageLimit} />
    </>
  );
});
export default Series;
