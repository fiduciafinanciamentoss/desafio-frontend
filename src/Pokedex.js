import "./Pokedex.css";
import { useState, useEffect } from "react";

function Pokedex() {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);

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
    return <h1 style={{ color: 'white', fontSize: '99px'}}>Carregando...</h1>
  }

  return (
    <div className="App">
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
          <input type="text" placeholder="Buscar..." />
          <button>🔍</button>
        </div>
      </header>
      <div className="App-body">
        <div className="cards-container">
          {pokemons.map((pokemon) => {
            return (
              <div key={pokemon.id} className="card">
                <h2 className="card-title">{pokemon.name}</h2>

                <div className="card-img-container">
                  <img
                    loading="lazy"
                    src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
                    className="card-img"
                    alt={pokemon.name}
                  />
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
