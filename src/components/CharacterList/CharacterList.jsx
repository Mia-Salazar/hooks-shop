import React, { useState, useEffect, useReducer, useMemo, useRef, useCallback } from 'react';
import Search from '../Search/Search';

import "./styles.css";

const initialState = {
    favorites: []
}
  
const favoriteReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TO_FAVORITE':
        return {
          ...state,
          favorites: [...state.favorites, action.payload]
        };
      default:
        return state;
    }
}

const CharacterList = () => {
    const [list, setList] = useState([]);
    const [search, setSearch] = useState("");
    const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
    const searchInput = useRef(null);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then(data => setList(data.results))
    }, []);

    const handleClick = favorite => {
        dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite })
    }

    // Without useMemo is not as efficient
    // const filteredUsers = characters.filter((user) => {
    //   return user.name.toLowerCase().includes(search.toLowerCase());
    // })
    // With useMemo
    const filteredUsers = useMemo(() =>
        list.filter((user) => {
          return user.name.toLowerCase().includes(search.toLowerCase());
        }),
        [list, search]
    )

    //Without useRef
    // const searchSomething = (event) => {
    //     setSearch(event.target.value)
    // }
    //With useRef
    //const searchSomething = (event) => {
    //    setSearch(searchInput.current.value)
    //}
    //With useCallback
    const searchSomething = useCallback(() => {
        setSearch(searchInput.current.value);
    }, [])

    return (
        <section class="container">
            <h2>Personajes favoritos</h2>
            <ul className="list-favourites">
                {favorites.favorites.map(favorite => (
                    <li key={favorite.id}>
                    {favorite.name}
                    </li>
                ))}
            </ul>
            {favorites.favorites.length === 0 &&  <h4>No hay favoritos</h4>}
            <Search search={search} searchInput={searchInput}  handleSearch={searchSomething}/>
            
            <h2>Personajes de la serie</h2>
            <div className="list-characters">
                {filteredUsers.map(character => (
                    <article class="list-element" key={character.id}>
                        <figure>
                            <img src={character.image} alt=""/>
                        </figure>
                        <h3>{character.name}</h3>
                        <p>Número de episodios: {character.episode.length}</p>
                        <p>Origen: {character.origin.name}</p>
                        <p>Especie: {character.species}</p>
                        <button type="button" onClick={() => handleClick(character)}>Agregar a Favoritos</button>
                    </article>
                ))}
            </div>

        </section>
    )
};

export default CharacterList;