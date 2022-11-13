import React from 'react'

export interface CardPropType {
    name: string,
    desc: string,
    img: string,
}

const Card: React.FC<CardPropType> = ({ name, desc, img }) => {
    return (
        <>
            <div className="p-4 md:w-1/3 font-marvel sm:mb-0 mb-6">
                <div className="rounded-lg w-64">
                    <img alt="content" className="object-cover object-center w-full h-full" src={img} />
                </div>
                <h2 className="text-xl font-medium mt-5">{name}</h2>
                <p className="text-base leading-relaxed mt-2">{desc}</p>
                <a className="cursor-pointer text-red-600 border-2 p-2 rounded-xl border-red-600 hover:bg-red-600 hover:text-white inline-flex items-center mt-3">
                    See More
                </a>
            </div>
        </>
    )
}
export default Card;