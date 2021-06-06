/* eslint-disable jsx-a11y/alt-text */
import GlobalStyle from './globalstyle/global'
import { Container } from './globalstyle/button';
import Header from './components/Header/header'
import { Content } from './components/Pokemon/List/List';
import "materialize-css/dist/css/materialize.min.css";
// import { Details } from './components/Pokemon/Details/Details';
import { getAllPokemon, getPokemon, searchPokemon } from './services/pokemon'
import React, { useState, useEffect } from 'react';

function App() {

  const [pokemonData, setPokemonData] = useState([]);
  const [pokemon, setPokemon] = useState('');
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const initialURL = "https://pokeapi.co/api/v2/pokemon";

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialURL);
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      await loadPokemon(response.results);
      setLoading(false);
    }
    fetchData();
  }, []);

  const next = async () => {
    setLoading(true);
    let data = await getAllPokemon(nextUrl);
    await loadPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  };

  const prev = async () => {
    if (!prevUrl) return;
    setLoading(true);
    let data = await getAllPokemon(prevUrl);
    await loadPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  };

  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map(async (pokemon) => {
        let pokemonRecord = await getPokemon(pokemon);
        return pokemonRecord;
      })
    );
    setPokemonData(_pokemonData);
  };

  const searchforPokemon = async (query) => {
    setLoading(true)
    const response = await searchPokemon(query);
    const results = await response.json();
    setPokemon(results);
    setLoading(false)
  }

  return (
    <div className="App">
      <Header searchforPokemon={searchforPokemon} />
      {!loading && pokemon ? (
        <div>
          <Content name={pokemon.name}/>
        </div>//
      ): null}
      <h1 className="center-align">Desafio Front-End</h1>
      {loading ? (
        <h1 style={{ textAlign: "center" }}>Carregando...</h1>
      ) : (
        <>
          <Container>
            <button onClick={prev}>Prev</button>
            <button onClick={next}>Next</button>
          </Container>
          <div>
            {pokemonData.map((pokemon, i) => {
              return <Content key={i} pokemon={pokemon} />;
            })}
          </div>
          
          <Container>
            <button onClick={prev}>Prev</button>
            <button onClick={next}>Next</button>
          </Container>
        </>
      )}
      <GlobalStyle />
    </div>
  );
}

export default App;
