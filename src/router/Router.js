import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PokedexPage from '../components/Pokedex/PokedexPage';
import Home from '../components/HomePage/HomePage';
import PokemonDetailsPage from '../components/Detalhes/details';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/'}>
          <Home />
        </Route>

        <Route exact path="/page/:listpage?">
          <Home />
        </Route>

        <Route exact path="/poke-detail/:pokemonId">
          <PokemonDetailsPage />
        </Route>

        <Route exact path="/pokedex" component={PokedexPage} />

        <Route>
          <p>Erro 404: página não encontrada</p>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
