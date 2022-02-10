import React, { useState } from "react";

const SearchBar = ({ label, onClick}) => {

    const [address, setAddress] = useState("")

    const clickHandler = () => {
        if(!address) {
            alert("Enter a value first")
        }
        onClick(address)
    }

    return (
        <div className="w-1/2 flex gap-4">
                        <div className="w-3/4">
                            <label class="sr-only" for="email">{label}</label>
                            <input
                                class="w-full p-3 text-sm border border-black-200 rounded-lg"
                                placeholder={label}
                                type="text"
                                value={address}
                                onInput={e => setAddress(e.target.value)}
                            />
                        </div>
                        <a class="inline-block p-[2px] rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:text-white active:text-opacity-75 focus:outline-none focus:ring"
                            onClick={clickHandler}>
                            <span class="block px-8 py-3 text-sm font-medium bg-white rounded-full hover:bg-transparent">
                                Search
                            </span>
                        </a>
                    </div>
    );
}


export default SearchBar 