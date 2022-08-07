import React, { useState, useEffect, useReducer } from 'react';

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
    const [favorites, dispatch] = useReducer(favoriteReducer, initialState);


    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then(data => setList(data.results))
    }, []);

    const handleClick = favorite => {
        dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite })
    }

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

            <h2>Personajes de la serie</h2>
            <div className="list-characters">
                {list.map(character => (
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