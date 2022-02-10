import React from "react";


const Header = ({ setPlatform }) => {

    return (
        <nav className="relative w-full flex flex-wrap items-center gap-x-4  
                        px-10 py-3 shadow-md ">
                    <a className="text-xl text-black" href="#">isUnique</a>
                    <a className="cursor-pointer text-l text-pink-600 hover:text-indigo-900" onClick={() => {setPlatform(1)}}>Opensea</a>
                    <a className="cursor-pointer text-l text-pink-600 hover:text-indigo-900" onClick={() => {setPlatform(2)}}>Rarible</a>
        </nav>
    );

}

export default Header