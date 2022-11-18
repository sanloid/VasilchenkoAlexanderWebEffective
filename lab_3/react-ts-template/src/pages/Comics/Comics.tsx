import React from 'react';
import { DetailPropType } from 'types/Detail';
import { v4 } from 'uuid';
import Card from '../../components/Card';
import SearchForm from '../../components/SearchForm';

export const comicsArr: DetailPropType[] = [
  {
    name: 'New Mutants: Facsimile Edition (2022) #98',
    desc: "The dynamic debut of Deadpool! It's the beginning of the end for the New Mutants as Cable continues his reinvention of the squad into his own paramilitary force!",
    img: 'https://i.annihil.us/u/prod/marvel/i/mg/9/50/632cd36b4da77/portrait_uncanny.jpg',
    id: '1',
    characters: ['1', '2', '3']
  },
  {
    name: 'Spider Man',
    desc: "The dynamic debut of Deadpool! It's the beginning of the end for the New Mutants as Cable continues his reinvention of the squad into his own paramilitary force!",
    img: 'https://i.annihil.us/u/prod/marvel/i/mg/d/60/63658cf8efef2/portrait_uncanny.jpg',
    id: '2',
    characters: ['3', '1', '5']
  },
  {
    name: 'Thor',
    desc: "The dynamic debut of Deadpool! It's the beginning of the end for the New Mutants as Cable continues his reinvention of the squad into his own paramilitary force!",
    img: 'https://i.annihil.us/u/prod/marvel/i/mg/9/50/632cd36b4da77/portrait_uncanny.jpg',
    id: '3',
    characters: ['2', '3', '4']
  },
  {
    name: 'Iron Man #1',
    desc: "The dynamic debut of Deadpool! It's the beginning of the end for the New Mutants as Cable continues his reinvention of the squad into his own paramilitary force!",
    img: 'https://i.annihil.us/u/prod/marvel/i/mg/d/60/63658cf8efef2/portrait_uncanny.jpg',
    id: '4',
    characters: ['1', '2', '3']
  },
  {
    name: 'Iron Man #15',
    desc: "The dynamic debut of Deadpool! It's the beginning of the end for the New Mutants as Cable continues his reinvention of the squad into his own paramilitary force!",
    img: 'https://i.annihil.us/u/prod/marvel/i/mg/9/50/632cd36b4da77/portrait_uncanny.jpg',
    id: '5',
    characters: ['2', '5', '2']
  },
  {
    name: 'Clay Man #994',
    desc: "The dynamic debut of Deadpool! It's the beginning of the end for the New Mutants as Cable continues his reinvention of the squad into his own paramilitary force!",
    img: 'https://i.annihil.us/u/prod/marvel/i/mg/d/60/63658cf8efef2/portrait_uncanny.jpg',
    id: '6',
    characters: ['1', '3', '5']
  }
];

const Comics: React.FC = () => {
  return (
    <>
      <SearchForm />
      <section className="min-h-screen">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            {comicsArr.map((e) => (
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

export default Comics;
