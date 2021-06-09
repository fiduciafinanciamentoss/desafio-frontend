import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
//import { useParams } from 'react-router-dom';
import './styles.scss';


const PokemonList =  () => {
    const [pokemons, setPokemons] = useState(null);
    //const { name } = useParams(); 

    useEffect(()  => {
        fetch(`https://pokeapi.co/api/v2/pokemon/`)
            .then((response) => response.json())
            .then((json)  => {
                setPokemons(json.results);
            });
    }, []);

    if (!pokemons) {
        return null;
    }

    return (
        <ul className="PokemonList">
            {pokemons.map(({ name }) => (
                <li key={name}>
                <img
                    
                />     
                <Link to={`/pokemons/${name}`}>
                 
                 {name}
            
                </Link>
                </li>
            ))}
        </ul>
    );
};

export default PokemonList;

