import React from 'react';

export interface CardPropType {
  name: string;
  desc: string;
  img: string;
}

const Card: React.FC<CardPropType> = ({ name, desc, img }) => {
  return (
    <>
      <div className="p-4 md:w-1/3 font-marvel sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <img
            alt="content"
            className="object-cover object-top w-full h-full"
            src={img}
          />
        </div>
        <h2 className="text-xl font-medium mt-5">{name}</h2>
        <p className="text-base leading-relaxed mt-2">{desc}</p>
        <div className="cursor-pointer text-red-600 dark:text-gray-600 border-2 p-2 rounded-xl border-red-600 dark:border-gray-600 hover:bg-red-600 dark:hover:bg-gray-600 hover:text-white dark:hover:text-white inline-flex items-center mt-3">
          See More
        </div>
      </div>
    </>
  );
};
export default Card;
