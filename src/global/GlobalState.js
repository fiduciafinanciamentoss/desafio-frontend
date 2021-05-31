import React, { useState } from 'react';
import axios from 'axios';
import GlobalStateContext from '../contexts/GlobalStateContext';
import { BASE_URL } from '../constants/constants';

const GlobalState = (props) => {
  const [pokemons, setPokemons] = useState([]);
  const [pokedex, setPokedex] = useState([]);
  const [pokemonDetails, setPokemonDetails] = useState({});

  const getPokemonDetails = async (pokemonId) => {
    try {
      const res = await axios.get(`${BASE_URL}/${pokemonId}`);
      const newPokemon = {
        id: res.data.id,
        name: camelCase(res.data.name).replace('-', ' '),
        moves: res.data.moves,
        stats: res.data.stats,
        types: res.data.types,
        sprites: res.data.sprites
      };
      setPokemonDetails(newPokemon);
    } catch (err) {
      alert(err);
    }
  };

  const camelCase = (text) => {
    return text
      .toLowerCase()
      .split(' ')
      .map((letter) => letter.charAt(0).toUpperCase() + letter.substring(1))
      .join(' ');
  };

  const addToPokedex = async (pokemonId) => {
    try {
      const res = await axios.get(`${BASE_URL}/${pokemonId}`);
      const pokemonIndex = pokedex.findIndex(
        (pokemon) => pokemon.id == pokemonId
      );
      if (pokemonIndex < 0) {
        const newPokemon = {
          id: res.data.id,
          name: camelCase(res.data.name).replace('-', ' '),
          moves: res.data.moves,
          stats: res.data.stats,
          types: res.data.types,
          sprites: res.data.sprites
        };
        setPokedex([...pokedex, newPokemon]);
        localStorage.setItem('pokedex', JSON.stringify(pokedex));

        let storedPokemons = JSON.parse(localStorage.getItem('pokemons'));
        const index = storedPokemons.findIndex(
          (pokemon) => pokemon.id == res.data.id
        );
        storedPokemons.splice(index, 1);
        localStorage.setItem('pokemons', JSON.stringify(storedPokemons));

        alert('O Pokémon foi adicionado à Pokédex.');
      } else {
        alert('O Pokémon já encontra-se na Pokédex.');
      }
    } catch (err) {
      alert(err.message);
    }
  };

  const removeFromPokedex = (pokemonId) => {
    const pokemonIndex = pokedex.findIndex(
      (pokemon) => pokemon.id == pokemonId
    );
    let newPokedex = [...pokedex];
    let newPokemon = {
      name: camelCase(newPokedex[pokemonIndex].name).replace('-', ' '),
      url: `${BASE_URL}/${newPokedex[pokemonIndex].id}`,
      id: newPokedex[pokemonIndex].id,
      imgUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${newPokedex[pokemonIndex].id}.gif`
    };
    let storedPokemons = JSON.parse(localStorage.getItem('pokemons'));
    const idx = storedPokemons.findIndex(
      (pokemon) => pokemon.id == newPokedex[pokemonIndex].id
    );
    if (idx < 0) {
      storedPokemons.push(newPokemon);
      storedPokemons.sort((a, b) => {
        return a.id - b.id;
      });
      localStorage.setItem('pokemons', JSON.stringify(storedPokemons));
    }
    newPokedex.splice(pokemonIndex, 1);
    setPokedex(newPokedex);

    if (pokedex.length === 1) {
      localStorage.removeItem('pokedex');
    }
    alert('O Pokémon foi libertado!');
  };

  const data = {
    pokedex,
    setPokedex,
    pokemonDetails,
    setPokemonDetails,
    getPokemonDetails,
    addToPokedex,
    removeFromPokedex,
    pokemons,
    setPokemons,
    camelCase
  };

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
