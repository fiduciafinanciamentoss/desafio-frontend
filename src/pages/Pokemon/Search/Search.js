import React, { useState, useEffect }  from 'react';
import PokemonCard from 'components/Pokemon/Card'
//import Modal from 'components/Modal'

import axios from 'axios';


const PagesPokemonSearch = () => {
const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/1')
            .then((response) => {
                setPokemons(response.data);
    });
}, []);

    
    

    return (
        <div>

        {pokemons.map((pokemon) => (
            <PokemonCard pokemon={pokemon} />
        )  )}
         
    </div>
    );

};

export default PagesPokemonSearch;


