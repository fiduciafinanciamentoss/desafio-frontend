import "./Pokedex.css";
import { useState, useEffect } from "react";

function Pokedex() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(()=>{
    const fetchPokemon = () => {
      fetch("https://pokeapi.co/api/v2/pokemon?limit=200&offset=0")
        .then((response) => {
          return response.json();
        })
        .then((resultJSON) => {
          console.dir(resultJSON);
          setPokemons(resultJSON.results);
        });
    };
    fetchPokemon();
  }, []);
 
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
      </header>
      <div className="App-body"></div>
    </div>
  );
}

export default Pokedex;
