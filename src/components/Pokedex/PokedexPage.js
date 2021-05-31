import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import GlobalStateContext from '../../contexts/GlobalStateContext';
import { Nav, Div, MainDiv } from './styled';
import Card from '../Card/Card';
import { goToPage } from '../../router/Cordinator';
import Header from '../Header/Header';

const PokedexPage = () => {
  const history = useHistory();
  const { pokedex, setPokedex } = useContext(GlobalStateContext);

  useEffect(() => {
    const storedPokedex = JSON.parse(localStorage.getItem('pokedex'));
    if (storedPokedex) {
      setPokedex(storedPokedex);
    }
  }, []);
  return (
    <MainDiv>
      <Header />
      <Nav>
        <button
          class="nes-btn is-warning"
          onClick={() => goToPage(history, '/')}
        >
          Voltar
        </button>
      </Nav>
      <Div>
        {pokedex.map((pokemon) => {
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

export default PokedexPage;
