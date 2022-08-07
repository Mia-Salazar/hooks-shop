import React, { useState, useEffect } from 'react';

import "./styles.css";

const CharacterList = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then(data => setList(data.results))
    }, []);

    return (
        <section class="list">
            {list.map(character => (
                <article class="list-element">
                    <figure>
                        <img src={character.image} alt=""/>
                    </figure>
                    <h2>{character.name}</h2>
                    <p>Número de episodios: {character.episode.length}</p>
                    <p>Origen: {character.origin.name}</p>
                    <p>Especie: {character.species}</p>
                </article>
            ))}
        </section>
    )
};

export default CharacterList;