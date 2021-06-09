import React from 'react';
//import PokemonCard from 'components/Pokemon/Card';
import List from './pages/Pokemon/List/List';
import View from './pages/Pokemon/View/View';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import './styles/styles.scss';


export default function App() {
  return (
    <div className="App">
      <Router>
        <h1>
          <Link to="/pokemons/list"> Pokedex </Link>
        </h1>
        <Switch>
          <Route path="/pokemons/list" component={List} />
          <Route path="/pokemons/:name" component={View} />
          <Route path="/" exact>
              <Redirect to="/pokemons/list"></Redirect>
          </Route>

        </Switch>
      </Router>
    </div>
  );
};




















/* const App = () => {


  

  return ( 
    <div className="App">
      <PokemonCard pokemon={pokemon} />
    </div>
  );
}

export default App; */
