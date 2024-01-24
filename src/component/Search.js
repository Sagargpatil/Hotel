import React, { useState } from 'react'
import StarterData from './StarterData';

const Search=()=> {

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
    };
   

  return (
    <div>
       <div>
    <input
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={handleSearchChange}
    />

    {/* <StarterData searchTerm={searchTerm} /> */}
    {/* <ChildComponent2 searchTerm={searchTerm} /> */}
  </div>
    </div>
  )
}

export default Search;
