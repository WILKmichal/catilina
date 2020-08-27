import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

function SearchBar() {
    return (


        <div className="relative mx-full text-gray-600 ">
            <input className="bg-white text-teal-500 font-mono my-4 px-auto  border-2 border-teal-500 rounded"
                type="search" name="search" placeholder="Search">

            </input>
            <button type="submit" className="absolute right-0 top-0 mt-4 mr-2 text-teal-500"><SearchIcon style={{ fontSize: '25px' }} ></SearchIcon>
            </button>
        </div>

    )
}

export default SearchBar;