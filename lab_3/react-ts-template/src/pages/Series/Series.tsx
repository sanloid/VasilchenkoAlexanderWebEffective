import React from 'react';
import { v4 } from 'uuid';
import Card from '../../components/Card';
import SearchForm from '../../components/SearchForm';

const Series: React.FC = () => {
  const seriesArr = [
    {
      name: 'New Mutants: Facsimile Edition (2022) #98',
      desc: 'In the The Guardians of the Galaxy Holiday Special, the Guardians, who are on a mission to make Christmas unforgettable for Quill, head to Earth in search of the perfect present. The Marvel Studios’ Special Presentation stars Chris Pratt, Dave Bautista, Karen Gillan, and Pom Klementieff, featuring Vin Diesel as Groot and Bradley Cooper as Rocket, Sean Gunn and The Old 97’s with Michael Rooker and Kevin Bacon.',
      img: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/theguardiansofthegalaxyholidayspecial_lob_crd_02.jpg',
      id: v4()
    },
    {
      name: 'New Mutants: Facsimile Edition (2022) #98',
      desc: 'In the The Guardians of the Galaxy Holiday Special, the Guardians, who are on a mission to make Christmas unforgettable for Quill, head to Earth in search of the perfect present. The Marvel Studios’ Special Presentation stars Chris Pratt, Dave Bautista, Karen Gillan, and Pom Klementieff, featuring Vin Diesel as Groot and Bradley Cooper as Rocket, Sean Gunn and The Old 97’s with Michael Rooker and Kevin Bacon.',
      img: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/theguardiansofthegalaxyholidayspecial_lob_crd_02.jpg',
      id: v4()
    },
    {
      name: 'New Mutants: Facsimile Edition (2022) #98',
      desc: 'In the The Guardians of the Galaxy Holiday Special, the Guardians, who are on a mission to make Christmas unforgettable for Quill, head to Earth in search of the perfect present. The Marvel Studios’ Special Presentation stars Chris Pratt, Dave Bautista, Karen Gillan, and Pom Klementieff, featuring Vin Diesel as Groot and Bradley Cooper as Rocket, Sean Gunn and The Old 97’s with Michael Rooker and Kevin Bacon.',
      img: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/theguardiansofthegalaxyholidayspecial_lob_crd_02.jpg',
      id: v4()
    },
    {
      name: 'New Mutants: Facsimile Edition (2022) #98',
      desc: 'In the The Guardians of the Galaxy Holiday Special, the Guardians, who are on a mission to make Christmas unforgettable for Quill, head to Earth in search of the perfect present. The Marvel Studios’ Special Presentation stars Chris Pratt, Dave Bautista, Karen Gillan, and Pom Klementieff, featuring Vin Diesel as Groot and Bradley Cooper as Rocket, Sean Gunn and The Old 97’s with Michael Rooker and Kevin Bacon.',
      img: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/theguardiansofthegalaxyholidayspecial_lob_crd_02.jpg',
      id: v4()
    },
    {
      name: 'New Mutants: Facsimile Edition (2022) #98',
      desc: 'In the The Guardians of the Galaxy Holiday Special, the Guardians, who are on a mission to make Christmas unforgettable for Quill, head to Earth in search of the perfect present. The Marvel Studios’ Special Presentation stars Chris Pratt, Dave Bautista, Karen Gillan, and Pom Klementieff, featuring Vin Diesel as Groot and Bradley Cooper as Rocket, Sean Gunn and The Old 97’s with Michael Rooker and Kevin Bacon.',
      img: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/theguardiansofthegalaxyholidayspecial_lob_crd_02.jpg',
      id: '5'
    },
    {
      name: 'New Mutants: Facsimile Edition (2022) #98',
      desc: 'In the The Guardians of the Galaxy Holiday Special, the Guardians, who are on a mission to make Christmas unforgettable for Quill, head to Earth in search of the perfect present. The Marvel Studios’ Special Presentation stars Chris Pratt, Dave Bautista, Karen Gillan, and Pom Klementieff, featuring Vin Diesel as Groot and Bradley Cooper as Rocket, Sean Gunn and The Old 97’s with Michael Rooker and Kevin Bacon.',
      img: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/theguardiansofthegalaxyholidayspecial_lob_crd_02.jpg',
      id: v4()
    }
  ];
  return (
    <>
      <SearchForm />
      <section className="min-h-screen">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            {seriesArr.map((e) => (
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
export default Series;
