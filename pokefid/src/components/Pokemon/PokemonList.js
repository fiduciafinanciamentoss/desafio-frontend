import React, { Component } from 'react';
import axios from 'axios';

import PokemonCard from './PokemonCard';


export default class PokemonList extends Component {

  state ={
    url: 'https://pokeapi.co/api/v2/pokemon?limit=250',
    pokemon: null
  };

  async componentDidMount(){
    const rest = await axios.get(this.state.url);
    this.setState({ pokemon: rest.data['results'] });
  }

  render() {
    return(
      <React.Fragment>
        { this.state.pokemon ? 
          (
          <div className="row mx-auto">
          {this.state.pokemon.map(pokemon =>( 
              <PokemonCard
                key={pokemon.name}
                name={pokemon.name}
                url={pokemon.url}
              />
          ))}
          </div> 
          ) :
          (<h1>Aguarde, carregando os pokemons</h1>)
        }
      </React.Fragment>
    );
  }
}