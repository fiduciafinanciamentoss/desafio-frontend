import store from '../../createStore';
import { INITIAL_STATE, IPokemon, POKEMON_ACTION } from './helpers';




export const pokemonReducer = (state = INITIAL_STATE, action:any)=> {
  switch(action.type){
    case POKEMON_ACTION.SUCCESS: 
      return {
        ...INITIAL_STATE, 
        isModalOpen: true,
        pokemonInfo: action.payload
      }
    
    case POKEMON_ACTION.DESABILTY_MODAL:
      return {
        ...INITIAL_STATE
      }
    default:
      return state;
  }
}

export const getOnePokemon = (name: string) => {
     const pokemon: IPokemon[] = store.getState().pokemons.results.filter((pokemon: IPokemon) => pokemon.name === name);
     return {
       type: POKEMON_ACTION.SUCCESS,
       payload: pokemon[0]
     }
}

export const desabilityModal = () => {
  return {
   type: POKEMON_ACTION.DESABILTY_MODAL
  }
}
