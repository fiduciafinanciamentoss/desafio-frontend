import React from 'react';



const PokemonCard = ({ pokemon}) => (
    <div className="pokemon-card">
    <img  
        src={pokemon.imageURL}
        alt={pokemon.name} 
        className="pokemon-card__image"/>
        <div className="pokemon-card__info" >
            <h1 className="pokemon-card__name">{pokemon.name}</h1>
            <span className="pokemon-card__type">{pokemon.type}</span>
            
        </div>
    </div>

)

export default PokemonCard;

