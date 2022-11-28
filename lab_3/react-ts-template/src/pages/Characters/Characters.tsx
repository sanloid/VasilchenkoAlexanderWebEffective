import React, { useEffect } from 'react';
import { v4 } from 'uuid';
import { observer } from 'mobx-react-lite';
import store from 'stores/index';
import LoadingSpinner from 'components/LoadingSpinner';
import Card from 'components/Card';
import SearchForm from 'components/SearchForm';
import Pagination from 'components/Pagination';
import { useParams } from 'react-router-dom';

const Characters: React.FC = observer(() => {
  const { page } = useParams();

  useEffect(() => {
    if (page) store.CharStore.getCharList(page);
  }, [page]);

  return (
    <>
      <SearchForm />
      <section className="text-gray-600 body-font min-h-screen">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            {store.CharStore.loadingList ? (
              <LoadingSpinner />
            ) : (
              store.CharStore.charResponse?.data.results.map((e) => (
                <Card
                  name={e.name}
                  description={e.description}
                  id={e.id}
                  img={e.thumbnail}
                  key={v4()}
                />
              ))
            )}
          </div>
        </div>
      </section>
      <Pagination max={store.CharStore.pageLimit} />
    </>
  );
});
export default Characters;
