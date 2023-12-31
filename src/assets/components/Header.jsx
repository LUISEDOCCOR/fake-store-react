import React from "react";

const Header = () =>{
    return (
        <header className="">
            <nav className="bg-purple-300  flex justify-between items-center px-72 h-16 text-lg">
                <a className="font-semibold p-2 rounded-md hover:bg-purple-500 transition-colors hover:text-white hover:shadow" href="">Fake Store</a>
                <div className="space-x-8">
                    <a className="p-2 rounded-md hover:bg-purple-500 transition-colors hover:text-white hover:shadow" href="">Home</a>
                    <a className="p-2 rounded-md hover:bg-purple-500 transition-colors hover:text-white hover:shadow" href="">About</a>
                    <a className="p-2 rounded-md hover:bg-purple-500 transition-colors hover:text-white hover:shadow" href="">Contact</a>
                </div>
                <div className="flex gap-4 items-center">
                    <a className="p-2 rounded-full hover:bg-purple-500  hover:text-white transition-colors" href="">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                    </a>
                    <a className="p-2 rounded-full hover:bg-purple-500 hover:text-white transition-colors" href="">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </a>
                </div>
            </nav>
            <div className="border-t bg-purple-200 flex justify-center items-center gap-56 overflow-hidden">
                <div className="space-y-8">
                    <div className="space-y-3">
                        <h2 className="text-xl font-semibold">Winter Fasion</h2>
                        <h1 className="text-6xl font-bold">Fashion <br /> Collection 2023</h1>
                    </div>
                    <button className="bg-purple-400 p-4 rounded-lg text-lg font-semibold shadow hover:bg-purple-700  hover:text-white transition-colors">
                        Shop now
                    </button>
                </div>
                <div>
                    <img className="hover:scale-110 transition-transform" src="/img/header.webp" alt="Collection 2023" />
                </div>
            </div>
        </header>
    )
}

export default Header