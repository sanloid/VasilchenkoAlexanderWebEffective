import React from 'react';
import { NavLink } from 'react-router-dom';
import { CharSeriesResponse } from 'types/api/Characters/CharSeriesResponse';
import { ContentType } from 'types/api/ContentType';
import { SeriesCharacterResponse } from 'types/api/Series/SeriesCharacterResponse';
import { v4 } from 'uuid';

export interface MoreDetailPropType {
  title: string;
  path: string;
  content: ContentType;
}

export type SeriesCharOneResp = SeriesCharacterResponse['data']['results']['0'];
export type CharSeriesOneResp = CharSeriesResponse['data']['results']['0'];

const MoreDetail: React.FC<MoreDetailPropType> = ({ title, path, content }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              {title}
            </h1>
            <div className="h-1 w-20 bg-red-500 dark:bg-gray-600 rounded" />
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          {content ? (
            content.data.results.map((e) => (
              <div key={e.id} className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src={`${e.thumbnail.path}.${e.thumbnail.extension}`}
                    alt="content"
                  />
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    {(e as SeriesCharOneResp).name
                      ? (e as SeriesCharOneResp).name
                      : (e as CharSeriesOneResp).title}
                  </h2>
                  <p className="leading-relaxed text-base">{e.description}</p>
                  <NavLink
                    to={`${path}${e.id}`}
                    className="cursor-pointer text-red-600 dark:text-gray-600 border-2 p-2 rounded-xl border-red-600 dark:border-gray-600 hover:bg-red-600 dark:hover:bg-gray-600 hover:text-white dark:hover:text-white inline-flex items-center mt-3"
                  >
                    See More
                  </NavLink>
                </div>
              </div>
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
    </section>
  );
};

export default MoreDetail;
