import React from 'react';
import { CharactersArr } from 'data/CharactersArray';
import { ComicsArr } from 'data/ComicsArray';
import { SeriesArr } from 'data/SeriesArray';
import { DetailPropType } from 'types/Detail';
import MoreDetail from './MoreDetail';

const Detail: React.FC<DetailPropType> = ({
  name,
  desc,
  img,
  comics,
  series,
  characters
}) => {
  const getComicsById = (id: string[]) => {
    return ComicsArr.filter((e) => id.includes(e.id));
  };
  const getSeriesById = (id: string[]) => {
    return SeriesArr.filter((e) => id.includes(e.id));
  };
  const getCharactersById = (id: string[]) => {
    return CharactersArr.filter((e) => id.includes(e.id));
  };
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-top h-full w-full"
                src={img}
              />
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <img
                  alt="content"
                  className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400"
                  src={img}
                />
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                    {name}
                  </h2>
                  <div className="w-12 h-1 bg-red-acid dark:bg-gray-600 rounded mt-2 mb-4" />
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4">{desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {comics ? (
        <MoreDetail
          title="In comics"
          content={getComicsById(comics)}
          path="/comics/"
        />
      ) : (
        <></>
      )}
      {series ? (
        <MoreDetail
          title="In series"
          content={getSeriesById(series)}
          path="/series/"
        />
      ) : (
        <></>
      )}
      {characters ? (
        <MoreDetail
          title="Characters"
          content={getCharactersById(characters)}
          path="/characters/"
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default Detail;
