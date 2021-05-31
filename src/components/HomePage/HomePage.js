import Card from '../Card/Card';
import { GlobalStateContext } from '../../contexts/GlobalStateContext';
import Pagination from '../Paginas/index';
import Header from '../Header/Header';
import { Div, MainDiv } from './Styles';
import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../constants/constants';

const HomePage = () => {
  const history = useHistory();
  const [searchName, setSearchName] = useState('');
  const [pokemons, setPokemons] = useState([]);
  const [limitSearch, setLimitSearch] = useState('1118');
  const [currentPage, setCurrentPage] = useState(1);
  const pokesPerPage = '20';
  const { camelCase, pokedex, receivedData } = useContext(GlobalStateContext);

  useEffect(() => {
    let storedPokemons = JSON.parse(localStorage.getItem('pokemons'));
    if (storedPokemons && storedPokemons.length > 0) {
      setPokemons(storedPokemons);
    } else {
      getPokemons();
    }
  }, [pokedex]);

  useEffect(() => {
    if (limitSearch === '') {
      setLimitSearch('1118');
    }
  }, [limitSearch]);

  const getPokemons = async () => {
    try {
      const res = await axios.get(`${BASE_URL}?limit=${limitSearch}`);
      let newArr = res.data.results;
      newArr.forEach((pokemon) => {
        pokemon.name = camelCase(pokemon.name).replace('-', ' ');
        pokemon.id = Number(
          pokemon.url.split('/')[pokemon.url.split('/').length - 2]
        );
      });

      for (let idx = 0; idx < pokedex.length; idx++) {
        let index = newArr.findIndex(
          (pokemon) => pokemon.id == pokedex[idx].id
        );
        if (index >= 0) {
          newArr.splice(index, 1);
        }
      }
      localStorage.setItem('pokemons', JSON.stringify(newArr));
      setPokemons(newArr);
    } catch (err) {
      alert(err);
    }
  };

  const filterPokemons = () => {
    if (searchName.length === 0) {
      let filteredByName = currentPokes.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchName.toLowerCase())
      );
      return filteredByName;
    } else {
      currentPokes = pokemons.slice(0, limitSearch);
      let filteredByName = currentPokes.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchName.toLowerCase())
      );
      return filteredByName;
    }
  };

  const indexOfLastPoke = currentPage * pokesPerPage;
  const indexOfFirstPoke = indexOfLastPoke - pokesPerPage;
  let currentPokes = pokemons.slice(indexOfFirstPoke, indexOfLastPoke);
  const paginate = (pageNumber) => {
    if (
      pageNumber > 0 &&
      pageNumber <= Math.ceil(pokemons.length / pokesPerPage)
    ) {
      setCurrentPage(pageNumber);
      history.push(`/page/${pageNumber}`);
    } else {
      alert('Escolha um número válido.');
    }
  };

  const filteredPokemons = filterPokemons();
  return (
    <MainDiv>
      <Header />
      <Div id="main">
        <Pagination
          pokesPerPage={pokesPerPage}
          totalPokes={pokemons.length}
          paginate={paginate}
        />
        {pokemons.length > 0 &&
          filteredPokemons.map((pokemon) => {
            return (
              <Card
                key={pokemon.id}
                pokemonId={pokemon.id}
                name={pokemon.name}
                image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon.id}.gif`}
              />
            );
          })}
      </Div>
    </MainDiv>
  );
};

export default HomePage;
