// components/InputBox.js

import React from 'react';

export function InputBox() {
    return (
        <div className=" group relative inline-flex flex-row items-center bg-black py-4">
            <input
                type="text"
                id="label"
                className="ml-2 w-[426px] border border-gray-300 bg-black rounded-lg focus:border-blue-500 px-6 py-4 focus:outline-none"
            />
            <label
                htmlFor="label"
                className="absolute top-[2rem] bg-black m-0 text-gray-500 text-2xl  px-2 transition-all duration-300 group-hover:top-1 left-4 group-hover:text-lg group-active:text-blue-500 group-hover:text-blue-500">
                Label
            </label>

        </div>
    );
}


export function TweetBox(params) {
    return (
        <div className="inline-flex gap-x-[12px]">
            <img src="images/user-avatar.png" alt="" className='w-[36px] h-[36px]' />
            <input type="text" placeholder='Whats happening?!'
                className='w-[434px] bg-black text-white placeholder:text-lg '
            />
        </div>
    )
}


export function SearchBox(params) {
    return (
        <div className="inline-flex gap-x-[15px] py-[10px] px-[16px] group border-0 border-blue-500 focus-within:border-2 rounded-full">
            <img src="images/dark-theme-search-group.svg" alt="" className='w-[36px] h-[36px]  group-active:filter-blue-500' />
            <input type="text" xplaceholder='Search'
                className='w-[434px] outline-none bg-black text-white placeholder:text-lg  '
            />
        </div>
    )
}

