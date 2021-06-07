import "./Pokedex.css";
import { useState, useEffect } from "react";
import React from "react";
import Modal from "./components/Modal/modal";
import Loading from "./components/Loading/loading";

function Pokedex() {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [searchTextInput, setSearchTextInput] = useState();
  const [selectedPokemon, setSelectedPokemon] = useState();

  useEffect(() => {
    const getPokemon = (id) => fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemonIds = Array.from({ length: 250 }, (empty, index) => index + 1);
    const allPromises = pokemonIds.map((number) => {
      return getPokemon(number).then((response) => response.json());
    });

    setLoading(true);
    Promise.all(allPromises).then((pokemons) => {
      setLoading(false);
      setPokemons(pokemons);
    });
  }, []);

  if (loading) {
    return <Loading />;
  }

  function buscaPoke() {
    const filteredPokemons = pokemons.filter((pokemon) => {
      return pokemon.name.includes(searchTextInput.toLowerCase());
    });
    setFilteredPokemons(filteredPokemons);
  }

  const pokemonsToRender =
    filteredPokemons.length > 0 ? filteredPokemons : pokemons;

  return (
    <div className="App">
      {selectedPokemon && (
        <Modal
          pokemon={selectedPokemon}
          onClose={() => setSelectedPokemon(null)}
        />
      )}

      <header className="App-header">
        <img
          src="/images/pokeball.png"
          className="img-Pokeball"
          alt="Pokebola"
        />
        <div className="logo-Container">
          <img
            src="/images/pokedex-3d-logo.png"
            className="img-Pokedex"
            alt="Logo Pokedex"
          />
        </div>

        <div className="search-container">
          <input
            onChange={(event) => {
              const value = event.target.value;
              setSearchTextInput(value);
            }}
            type="text"
            placeholder="Buscar..."
          />
          <button onClick={buscaPoke}>🔍</button>
        </div>
      </header>
      <div className="App-body">
        <div className="cards-container">
          {pokemonsToRender.map((pokemon) => {
            return (
              <div key={pokemon.id} className="card">
                <h2 className="card-title">{pokemon.name}</h2>

                <div
                  className="card-img-container"
                  onClick={() => setSelectedPokemon(pokemon)}
                >
                  <img
                    loading="lazy"
                    src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
                    className="card-img"
                    alt={pokemon.name}
                  />
                </div>

                <div className="card-type-container">
                  {pokemon.types.map((pokeType) => {
                    return (
                      <div key={pokeType.type.name} className="card-type">
                        <h4> {pokeType.type.name} </h4>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Pokedex;
