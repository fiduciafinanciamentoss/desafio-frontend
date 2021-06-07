import axios from "axios";
import { Dispatch } from "redux";
import { api } from "../../../services/api";
import { IPokemon } from "../pokemon/helpers";
import { INITIAL_STATE, POKEMON_ACTION } from "./helpers";


const pokemonReducer = (state = INITIAL_STATE, action:any) => {
  switch(action.type){
    case POKEMON_ACTION.SUCCESS: 
      return {
        ...INITIAL_STATE,
        results: action.payload,
        success: true
      };
    
    case POKEMON_ACTION.LOADING: 
      return {
        ...INITIAL_STATE,
        loading: true
      };

    case POKEMON_ACTION.FAIL:
      return {
        ...INITIAL_STATE,
        fail: true
      };

    default: 
      return state;
  }
}

export const getAllPokemons = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: POKEMON_ACTION.LOADING });
    const requests:any = [];
    
    try{
      for(let i = 1; i <= 20; i++){
        requests.push(await api.get(`/pokemon/${i}`))
      }

      await axios.all(requests).then(axios.spread((...response) => {
        const results: IPokemon[] = response.map((request:any) => request.data)  
        dispatch({type: POKEMON_ACTION.SUCCESS, payload: results})    
      }))

    }catch(e){
      dispatch({type: POKEMON_ACTION.FAIL})
    }
  }
}

export default pokemonReducer;