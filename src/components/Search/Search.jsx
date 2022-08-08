import React from 'react';

const Search = ({ search, searchInput, handleSearch }) => {
  return (
    <>
        <h2>Buscar personajes</h2>
        <label for="search">Nombre personaje</label>
        <input type="text" value={search} id="search" ref={searchInput} name="search" onChange={handleSearch}/>
    </>

  );
}

export default Search;