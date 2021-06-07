import * as Redux from "redux";
import ReduxThunk from "redux-thunk";
import pokemonsReducer from "./reducers/pokemons";
import * as ReduxDevtools from 'redux-devtools-extension';
import { pokemonReducer } from "./reducers/pokemon";
const reducers = {
  pokemons: pokemonsReducer,
  pokemon: pokemonReducer
};

const rootReducer = Redux.combineReducers(reducers);
export type IReducers = ReturnType<typeof rootReducer>;

const store = Redux.createStore(
  rootReducer,
  ReduxDevtools.composeWithDevTools(Redux.applyMiddleware(ReduxThunk))
);

export default store;