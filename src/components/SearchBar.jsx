import React from 'react';

export default function SearchBar({searchTerm, onSearchChange}) {
    return(
    <div className='search-bar'>
        <label>Search Projects</label>
        <input id='search' className='search-input' type="text" placeholder="Search by title..." value={searchTerm} onChange={(event) => onSearchChange(event.target.value)}/>
    
    </div>
    );
}