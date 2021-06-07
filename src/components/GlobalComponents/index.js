import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import axios from 'axios';

export function GlobalComponents() {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonChosen, setPokemonChosen] = useState(false);
  const [pokemon, setPokemon] = useState({
    name: '',
    hp: '',
    tDEFENSEpe: '',
    image: '',
    atack: '',
    defense: '',
  });
  const searchPokemon = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((response) => {
      setPokemon({
        name: pokemonName,
        hp: response.data.base_experience,
        type: response.data.types[0].type.name,
        image: response.data.sprites.other.dream_world.front_default,
        atack: response.data.stats[1].base_stat,
        defense: response.data.stats[2].base_stat,
      });

      setPokemonChosen(true);
    });
  };

  return (
    <>
      <div className="logo">
        <div className="logo-text">
          <h1>Pokemon</h1>
        </div>
      </div>
      <div className="container-search">
        <div className="search-box">
          <InputGroup className="input mb-3">
            <FormControl
              onChange={(event) => {
                setPokemonName(event.target.value.toLowerCase());
              }}
              placeholder="Enter Pokemon Name"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <Button type="submit" onClick={searchPokemon} variant="outline-secondary">
                SEARCH POKEMON
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </div>
      </div>
      <div className="display-card">
        {!pokemonChosen ? (
          <h1 id="namePok">Please choose a Pokemon</h1>
        ) : (
          <div id="pok" className="card-pokemon">
            <h1>{pokemon.name}</h1>
            <div className="image-pokemon">
              <img src={pokemon.image} />
            </div>

            <div id="pok-about" className="about-pokemon">
              <div id="stats">
                <h1>TYPE:</h1>
                <h1>HP:</h1>
                <h1>ATACK:</h1>
                <h1>DEFENSE:</h1>
              </div>
              <div>
                <h1>{pokemon.type}</h1>
                <h1>{pokemon.hp}</h1>
                <h1>{pokemon.atack}</h1>
                <h1>{pokemon.defense}</h1>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default GlobalComponents;
