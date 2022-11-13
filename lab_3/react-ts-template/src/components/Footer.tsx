import React from 'react'

export default function Footer() {

    return (
        <footer className="text-white body-font bg-red-acid">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col justify-between">
                <a className="flex items-center md:justify-start justify-center h-10">
                    <img src="./marvel_logo.svg" className="w-full h-full" alt="" />
                </a>
                <p className="text-sm sm:ml-4 sm:pl-4 sm:border-white sm:py-2 sm:mt-0 mt-4">Data provided by Marvel. © {new Date().getFullYear()} MARVEL
                </p>
                <a href="https://developer.marvel.com" className="ml-1" rel="noopener noreferrer" target="_blank">developer.marvel.com</a>
            </div>
        </footer>
    )
}
