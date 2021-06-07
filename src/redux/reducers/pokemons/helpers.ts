import { IPokemon } from "../pokemon/helpers"


export const POKEMON_ACTION = {
  SUCCESS: "@pokemon/SUCCESS",
  LOADING: "@pokemon/LOADING",
  FAIL: "@pokemon/FAIL",
}

export interface IInitialState {
  results: IPokemon[];
  success: boolean;
  loading: boolean;
  fail: boolean;
}

export const INITIAL_STATE:IInitialState = {
  results: [],
  success: false,
  loading: false,
  fail: false,
}

