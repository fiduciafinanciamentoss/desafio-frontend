export interface IInitialState {
  isModalOpen: boolean;
  pokemonInfo: IPokemon
}

export const INITIAL_STATE:IInitialState = {
  isModalOpen: false,
  pokemonInfo: {} as IPokemon
}

export const POKEMON_ACTION = {
  SUCCESS: "@onePokemon/SUCCESS",
  LOADING: "@onePokemon/LOADING",
  FAIL: "@onePokemon/FAIL",
  DESABILTY_MODAL: "@onePokemon/DESABILITY"
}

export interface IPokemon {
  name: string;
  id: number;
  types: [
    {
      type: {
        name: string;
      }
    }
  ];
  height: number;
  weight: number;
  base_experience: number;
  sprites: {
    front_default: string;
    back_default: string;
    back_shiny: string;
    front_shiny: string;
  }
}