import React from 'react';
import { v4 } from 'uuid';
import Card from '../../components/Card';
import SearchForm from '../../components/SearchForm';

const Characters: React.FC = () => {
  const CharactersArr = [
    {
      name: 'DOCTOR STRANGE',
      desc: 'Possessing vast magical knowledge and skills to call upon, he now serves as Earth’s newest Master of the Mystic Arts.',
      img: 'https://i.annihil.us/u/prod/marvel/i/mg/9/f0/57fe4ef408a29/standard_incredible.jpg',
      id: v4()
    },
    {
      name: 'DOCTOR STRANGE',
      desc: 'Possessing vast magical knowledge and skills to call upon, he now serves as Earth’s newest Master of the Mystic Arts.',
      img: 'https://i.annihil.us/u/prod/marvel/i/mg/9/f0/57fe4ef408a29/standard_incredible.jpg',
      id: v4()
    },
    {
      name: 'DOCTOR STRANGE',
      desc: 'Possessing vast magical knowledge and skills to call upon, he now serves as Earth’s newest Master of the Mystic Arts.',
      img: 'https://i.annihil.us/u/prod/marvel/i/mg/9/f0/57fe4ef408a29/standard_incredible.jpg',
      id: v4()
    },
    {
      name: 'DOCTOR STRANGE',
      desc: 'Possessing vast magical knowledge and skills to call upon, he now serves as Earth’s newest Master of the Mystic Arts.',
      img: 'https://i.annihil.us/u/prod/marvel/i/mg/9/f0/57fe4ef408a29/standard_incredible.jpg',
      id: v4()
    },
    {
      name: 'DOCTOR STRANGE',
      desc: 'Possessing vast magical knowledge and skills to call upon, he now serves as Earth’s newest Master of the Mystic Arts.',
      img: 'https://i.annihil.us/u/prod/marvel/i/mg/9/f0/57fe4ef408a29/standard_incredible.jpg',
      id: v4()
    }
  ];
  return (
    <>
      <SearchForm />
      <section className="text-gray-600 body-font min-h-screen">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            {CharactersArr.map((e) => (
              <Card name={e.name} desc={e.desc} img={e.img} id={e.id} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default Characters;
