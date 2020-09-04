import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

function SearchBar() {
    return (


         <div className="bg-white flex items-center rounded-lg shadow-xl text-gray-600">
           <input className="bg-white w-full text-teal-500 font-mono rounded-lg"
                type="search" name="search" placeholder=" Search">
             </input>
             <button type="submit" className="p-2 bg-teal-500 text-white rounded-lg flex items-center justify-center "><SearchIcon style={{ fontSize: '25px' }} ></SearchIcon>
             </button>
         </div>

    )
}

export default SearchBar;