import React from 'react'
import {Container} from'./styles';
import * as ReactRedux from 'react-redux';
import { getOnePokemon } from '../../../redux/reducers/pokemon';

interface IPokemonCard {
  pokemonName: string;
  img: string;
  elements: Object[];
}

const PokemonCard = (props: IPokemonCard) => {
  const { pokemonName, img } = props;

  const dispatch = ReactRedux.useDispatch();

  const send = () => {
    dispatch(getOnePokemon(pokemonName))
  }

  return (
    <Container onClick={send}>
      <span>{pokemonName}</span>
      <img src={img} alt="" />
      <div>
        {
          props.elements.map((element: any, index) => <span key={index}>{element.type.name}</span>)
        }
      </div>
    </Container>
  )
}

export default PokemonCard;
