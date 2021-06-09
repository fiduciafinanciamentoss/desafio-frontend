import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PokemonsSearch = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        axios.get('link da pokeapi')
            .then((response) => {
                setPokemons(response.data);
        });
    }, []);

    return (
        <div>
            {pokemons.map((pokemon) => (
                <PokemonsCard pokemon={pokemons} />
            ))}
        </div>
    )
};

export default PokemonsSearch;