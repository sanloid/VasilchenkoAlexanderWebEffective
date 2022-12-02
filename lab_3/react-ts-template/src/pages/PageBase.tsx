import Card from 'components/Card';
import Store from 'stores/Store';
import ErrorFallback from 'components/ErrorFallback';
import LoadingSpinner from 'components/LoadingSpinner';
import Pagination from 'components/Pagination';
import SearchForm from 'components/SearchForm';
import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { CharResponse } from 'types/api/Characters/CharResponse';
import { SeriesResponse } from 'types/api/Series/SeriesResponse';
import { v4 } from 'uuid';

export interface PageBasePropType {
  store: Store;
}

export type CharOneResp = CharResponse['data']['results']['0'];
export type SeriesOneResp = SeriesResponse['data']['results']['0'];

const PageBase: React.FC<PageBasePropType> = observer(({ store }) => {
  const { page } = useParams();
  const [search] = useSearchParams();
  const name = search.get('name');

  useEffect(() => {
    if (page) {
      if (name) {
        store.searchByName(name, page);
      } else {
        store.getList(page);
      }
    }
    window.scrollTo(0, 0);
  }, [page, name]);

  if (store.loadingList) return <LoadingSpinner />;

  if (store.Response) {
    if (store.Response.code !== 200) {
      return (
        <ErrorFallback
          code={store.Response.code}
          message={store.Response.status}
        />
      );
    }
  }

  return (
    <>
      <SearchForm />
      <section className="text-gray-600 body-font min-h-screen">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            {store.Response?.data.results.map((e) => (
              <Card
                name={
                  (e as SeriesOneResp).title
                    ? (e as SeriesOneResp).title
                    : (e as CharOneResp).name
                }
                description={e.description}
                id={e.id}
                img={e.thumbnail}
                key={v4()}
              />
            ))}
            {!store.Response?.data.count ? (
              <div className="mx-auto text-3xl text-gray-400">
                oops there is nothing...
              </div>
            ) : null}
          </div>
        </div>
      </section>
      <Pagination max={store.pageLimit} />
    </>
  );
});

export default PageBase;
