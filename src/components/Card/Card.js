import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { BASE_URL } from '../../constants/constants';
import { GlobalStateContext } from '../../contexts/GlobalStateContext';
import {
  Image,
  Div,
  Name,
  TitleContainer,
  ButtonContainer,
  ButtonPrimary,
  ButtonSecondary
} from './CardStyles';
import { useHistory } from 'react-router-dom';
import { goToPage } from '../../router/Cordinator';

const Card = (props) => {
  const [pokeDetail, setPokeDetail] = useState({});
  const history = useHistory();

  const { pokedex, addToPokedex, removeFromPokedex, } = useContext(
    GlobalStateContext
  );

  useEffect(() => {
    getPokemonDetail(props.pokeName);
  }, [props.pokeName]);

  useEffect(() => {
    if (pokedex && pokedex.length > 0) {
      localStorage.setItem('pokedex', JSON.stringify(pokedex));
    }
  }, [pokedex]);

  const getPokemonDetail = () => {
    axios
      .get(`${BASE_URL}/${props.name}`)
      .then((response) => {
        setPokeDetail(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const currentPathname = window.location.pathname;

  return (
    <Div>
      <TitleContainer>
        <Name>{props.name}</Name>
      </TitleContainer>
        <Image
          src={
            props.image
          }
          alt={props.name}
        />
      <ButtonContainer>
        {currentPathname === '/pokedex' ? (
          <ButtonPrimary onClick={() => removeFromPokedex(props.pokemonId)}>
            Libertar
          </ButtonPrimary>
        ) : (
          <ButtonPrimary onClick={() => addToPokedex(props.pokemonId)}>
            Adicionar
          </ButtonPrimary>
        )}
        <ButtonSecondary
          onClick={() => goToPage(history, `/poke-detail/${props.pokemonId}`)}
        >
          Detalhes
        </ButtonSecondary>
      </ButtonContainer>
    </Div>
  );
};

export default Card;
