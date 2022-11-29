import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import store from 'stores/index';
import { v4 } from 'uuid';
import Card from 'components/Card';
import LoadingSpinner from 'components/LoadingSpinner';
import SearchForm from 'components/SearchForm';
import Pagination from 'components/Pagination';
import { useParams, useSearchParams } from 'react-router-dom';

const Comics: React.FC = observer(() => {
  const { page } = useParams();
  const [search] = useSearchParams();
  const name = search.get('name');

  useEffect(() => {
    if (page) {
      if (name) {
        store.ComicsStore.searchByName(name, page);
      } else {
        store.ComicsStore.getList(page);
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
            {store.ComicsStore.loadingList ? (
              <LoadingSpinner />
            ) : (
              store.ComicsStore.Response?.data.results.map((e) => (
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
      <Pagination max={store.ComicsStore.pageLimit} />
    </>
  );
});

export default Comics;
