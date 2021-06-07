import React, { useEffect} from 'react'
import * as ReactRedux from 'react-redux';
import { IReducers } from '../../redux/createStore';
import { IPokemon } from '../../redux/reducers/pokemon/helpers';
import  { getAllPokemons } from '../../redux/reducers/pokemons';
import Modal from './Modal';
import PokemonCard from './PokemonCard'
import { Section } from './styles';

export function Index() {
  const dispatch = ReactRedux.useDispatch();

  const isModalOpen = ReactRedux.useSelector((reducers:IReducers) => reducers.pokemon.isModalOpen);
  useEffect(() => {
    dispatch(getAllPokemons())
  }, [dispatch])

  const pokemons = ReactRedux.useSelector(
    (reducers: IReducers) => reducers.pokemons
  )

  return (
   <>
     <Section style={{overflowY: isModalOpen ? 'hidden' : 'scroll'}}>
      {pokemons.results.map((pokemon:IPokemon) => 
        <PokemonCard 
          key={pokemon.id} 
          pokemonName={pokemon.name}
          img={pokemon.sprites.front_default}
          elements={pokemon.types}
        />
      )}
    </Section>
      {
        isModalOpen && 
        <Modal/>
      }
   </> 
  )
}

export default Index;
