import React from 'react';
import { toJS } from 'mobx';
import { SeriesCharacterResponse } from 'types/api/Series/SeriesCharacterResponse';
import { ComicsCharacterResponse } from 'types/api/Comics/ComicsCharacterResponse';
import { SeriesComicsResponse } from 'types/api/Series/SeriesComicsResponse';
import { CharComicsResponse } from 'types/api/Characters/CharComicsResponse';
import { CharSeriesResponse } from 'types/api/Characters/CharSeriesResponse';
import MoreDetail from './MoreDetail';

export interface DetailPropType {
  name: string;
  description: string;
  img: {
    path: string;
    extension: string;
  };
  characters?: SeriesCharacterResponse | ComicsCharacterResponse;
  comics?: SeriesComicsResponse | CharComicsResponse;
  series?: CharSeriesResponse;
}

const Detail: React.FC<DetailPropType> = ({
  name,
  description,
  img,
  comics,
  series,
  characters
}) => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg h-full overflow-hidden">
              <img
                alt="content"
                className="object-cover object-top h-full w-full"
                src={img.path.concat('.').concat(img.extension)}
              />
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <img
                  alt="content"
                  className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400"
                  src={img.path.concat('.').concat(img.extension)}
                />
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                    {name}
                  </h2>
                  <div className="w-12 h-1 bg-red-acid dark:bg-gray-600 rounded mt-2 mb-4" />
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {characters ? (
        <MoreDetail
          content={characters}
          title="Characters"
          path="/characters/"
        />
      ) : null}
      {comics ? (
        <MoreDetail content={comics} title="Comics" path="/comics/" />
      ) : null}
      {series ? (
        <MoreDetail title="Series" path="/series/" content={series} />
      ) : null}
    </>
  );
};

export default Detail;
