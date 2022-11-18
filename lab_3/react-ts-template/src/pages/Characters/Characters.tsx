import React from 'react';
import { DetailPropType } from 'types/Detail';
import { v4 } from 'uuid';
import Card from '../../components/Card';
import SearchForm from '../../components/SearchForm';

export const CharactersArr: DetailPropType[] = [
  {
    name: 'DOCTOR STRANGE',
    desc: 'Possessing vast magical knowledge and skills to call upon, he now serves as Earth’s newest Master of the Mystic Arts.',
    img: 'https://i.annihil.us/u/prod/marvel/i/mg/9/f0/57fe4ef408a29/standard_incredible.jpg',
    id: '1',
    comics: ['1', '2'],
    series: ['1', '2']
  },
  {
    name: 'Thor',
    desc: 'Possessing vast magical knowledge and skills to call upon, he now serves as Earth’s newest Master of the Mystic Arts.',
    img: 'https://i.annihil.us/u/prod/marvel/i/mg/9/f0/57fe4ef408a29/standard_incredible.jpg',
    id: '2',
    comics: ['2', '5'],
    series: ['1', '3']
  },
  {
    name: 'Iron Man',
    desc: 'Possessing vast magical knowledge and skills to call upon, he now serves as Earth’s newest Master of the Mystic Arts.',
    img: 'https://i.annihil.us/u/prod/marvel/i/mg/9/f0/57fe4ef408a29/standard_incredible.jpg',
    id: '3',
    comics: ['3', '4'],
    series: ['3', '5']
  },
  {
    name: 'Spider man',
    desc: 'Possessing vast magical knowledge and skills to call upon, he now serves as Earth’s newest Master of the Mystic Arts.',
    img: 'https://i.annihil.us/u/prod/marvel/i/mg/9/f0/57fe4ef408a29/standard_incredible.jpg',
    id: '4',
    comics: ['5', '6'],
    series: ['5', '6']
  },
  {
    name: 'DOCTOR',
    desc: 'Possessing vast magical knowledge and skills to call upon, he now serves as Earth’s newest Master of the Mystic Arts.',
    img: 'https://i.annihil.us/u/prod/marvel/i/mg/9/f0/57fe4ef408a29/standard_incredible.jpg',
    id: '5',
    comics: ['3', '4'],
    series: ['3', '4']
  }
];

const Characters: React.FC = () => {
  return (
    <>
      <SearchForm />
      <section className="text-gray-600 body-font min-h-screen">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            {CharactersArr.map((e) => (
              <Card
                name={e.name}
                desc={e.desc}
                img={e.img}
                id={e.id}
                key={v4()}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default Characters;
