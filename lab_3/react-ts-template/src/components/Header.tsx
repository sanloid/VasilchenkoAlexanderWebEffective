import React from 'react'
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
    const linksArr = [
        { name: "Characters", path: "/" },
        { name: "Comics", path: "comics" },
        { name: "Series", path: "series" }
    ];
    let active = "border-b-2";
    let linkStyles = "cursor-pointer text-white text-xl hover:rounded-xl hover:bg-red-100 p-5 mr-5 hover:text-gray-900"
    return (
        <header className="text-gray-600 font-marvel bg-red-acid">
            <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
                <a className="flex items-center h-10">
                    <img src="./marvel_logo.svg" className="w-full h-full" alt="" />
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    {linksArr.map((e, i) =>
                        <NavLink to={e.path}  className={linkStyles}>{e.name}</NavLink>
                    )}
                </nav>
            </div>
        </header>
    )
}

export default Header;
