import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

function SearchBar() {
    return (


         <div className="py-8 items-center text-gray-600 ">
           <input className="bg-white text-teal-500 font-mono h-10 px-5  rounded-lg border-2 border-teal-500"
                type="search" name="search" placeholder="Search">

             </input>
             <button type="submit" className="right top-0 mt-4 mr-2 text-teal-500 inline-flex"><SearchIcon style={{ fontSize: '25px' }} ></SearchIcon>
             </button>
         </div>

    )
}

export default SearchBar;