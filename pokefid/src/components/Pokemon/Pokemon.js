/* eslint-disable default-case */
import React, { Component } from 'react';
import axios from 'axios';

const TYPE_COLORS = {
  bug: 'B1C12E',
  dark: '4F3A2D',
  dragon: '755EDF',
  electric: 'FCBC17',
  fairy: 'F4B1F4',
  fighting: '823551D',
  fire: 'E73B0C',
  flying: 'A3B3F7',
  ghost: '6060B2',
  grass: '74C236',
  ground: 'D3B357',
  ice: 'A3E7FD',
  normal: 'C8C4BC',
  poison: '934594',
  psychic: 'ED4882',
  rock: 'B9A156',
  steel: 'B5B5C3',
  water: '3295F6'
};

export default class Pokemon extends Component {

  state = {
    name: '',
    imageurl: '',
    pokemonIndex: '',
    types: [],
    stats: {
      hp: '',
      specialAttack: '',
      attack: '',
      specialDefense: '',
      defense: '',
      speed: ''
    },
    height: '',
    weight: '',
    abilities: '',
    genderRatioMale: '',
    genderRatioFemale: '',
  };

  async componentDidMount(){
    const { pokemonIndex } = this.props.match.params;

    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}/`;
    const pokemonSpeciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemonIndex}/`;

    const pokemonRest = await axios.get(pokemonUrl);

    const name = pokemonRest.data.name;
    
    const imageurl = pokemonRest.data.sprites.front_default;

    let { hp, attack, specialAttack , speed, defense, specialDefense } = '';

    pokemonRest.data.stats.map(stat => {
      switch (stat.stat.name) {
        case 'hp':
          hp = stat['base_stat'];
          break;
        case 'attack':
          attack = stat['base_stat'];
          break;
        case 'defense':
          defense = stat['base_stat'];
          break;
        case 'speed':
          speed = stat['base_stat'];
          break;
        case 'special-attack':
          specialAttack = stat['base_stat'];
          break;
        case 'special-defense':
          specialDefense = stat['base_stat'];
          break;
        default:
          break;
      }
    })

    // convertendo de decimetro para centimetro
    const height = Math.round(pokemonRest.data.height * 10);

    // convertendo de hectograma para grama
    const weight = Math.round((pokemonRest.data.weight * 100) / 1000);
    


    const types = pokemonRest.data.types.map(type => type.type.name);

    const abilities = pokemonRest.data.abilities.map(ability => {
      return ability.ability.name
      .toLowerCase()
      .split('-')
      .map(s => s.charAt(0).toUpperCase() + s.substring(1))
      .join(' ');
    });

    await axios.get(pokemonSpeciesUrl).then(res =>{
      const femaleRate = res.data['gender_rate'];
      const genderRatioFemale = 12.5 * femaleRate;
      const genderRatioMale = 12.5 * (8 - femaleRate);

      const catchRate = Math.round((100 / 255) * res.data['capture_rate']);

     

      this.setState({
        genderRatioFemale,
        genderRatioMale,
        catchRate,
      });
    });

    this.setState({
      imageurl,
      pokemonIndex,
      name,
      types,
      stats: {
        hp,
        specialAttack,
        specialDefense,
        speed,
        attack,
        defense
      },
      height,
      weight,
      abilities,
    });
  }

  render(){
    return(
      <div className="col">
      <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="col-10">
              <h5>{this.state.pokemonIndex}</h5>
            </div>
            <div className="col-2">
              <div className="float-right">
                {this.state.types.map(type => (
                  <span
                    key={type}
                    className="badge badge-pill mr-1"
                    style={{
                      backgroundColor: `#${TYPE_COLORS[type]}`,
                      color: 'white'
                    }}
                  >
                    {type
                      .toLowerCase()
                      .split(' ')
                      .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                      .join(' ')}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="card-body bg-light">
          <div className="row align-items-center">
            <div className=" col-md-3 ">
              <img
                src={this.state.imageurl}
                alt="imagem do pokemon"
                className="card-img-top rounded mx-auto mt-2"
              />
            </div>
            <div className="col-md-9">
              <h4 className="mx-auto">
                {this.state.name
                  .toLowerCase()
                  .split(' ')
                  .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                  .join(' ')}
              </h4>
              <div className="row align-items-center">
                <div className={`col-12 col-md-${this.state.statTitleWidth}`}>
                  Vida
                </div>
                <div className={`col-12 col-md-${this.state.statBarWidth}`}>
                  <div className="progress">
                    <div
                      className="progress-bar "
                      role="progressbar"
                      style={{
                        width: `${this.state.stats.hp}%`,
                        backgroundColor: `#${this.state.themeColor}`
                      }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <small>{this.state.stats.hp}</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row align-items-center">
                <div className={`col-12 col-md-${this.state.statTitleWidth}`}>
                Especial Defesa
                </div>
                <div className={`col-12 col-md-${this.state.statBarWidth}`}>
                  <div className="progress">
                    <div
                      className="progress-bar "
                      role="progressbar"
                      style={{
                        width: `${this.state.stats.specialDefense}%`,
                        backgroundColor: `#${this.state.themeColor}`
                      }}
                      aria-valuenow={this.state.stats.specialDefense}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <small>{this.state.stats.specialDefense}</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row align-items-center">
                <div className={`col-12 col-md-${this.state.statTitleWidth}`}>
                  Ataque
                </div>
                <div className={`col-12 col-md-${this.state.statBarWidth}`}>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{
                        width: `${this.state.stats.attack}%`,
                        backgroundColor: `#${this.state.themeColor}`
                      }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <small>{this.state.stats.attack}</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row align-items-center">
                <div className={`col-12 col-md-${this.state.statTitleWidth}`}>
                  Defesa
                </div>
                <div className={`col-12 col-md-${this.state.statBarWidth}`}>
                  <div className="progress">
                    <div
                      className="progress-bar "
                      role="progressbar"
                      style={{
                        width: `${this.state.stats.defense}%`,
                        backgroundColor: `#${this.state.themeColor}`
                      }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <small>{this.state.stats.defense}</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row align-items-center">
                <div className={`col-12 col-md-${this.state.statTitleWidth}`}>
                  Velocidade
                </div>
                <div className={`col-12 col-md-${this.state.statBarWidth}`}>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{
                        width: `${this.state.stats.speed}%`,
                        backgroundColor: `#${this.state.themeColor}`
                      }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <small>{this.state.stats.speed}</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row align-items-center">
                <div className={`col-12 col-md-${this.state.statTitleWidth}`}>
                Especial Ataque
                </div>
                <div className={`col-12 col-md-${this.state.statBarWidth}`}>
                  <div className="progress">
                    <div
                      className="progress-bar "
                      role="progressbar"
                      style={{
                        width: `${this.state.stats.specialAttack}%`,
                        backgroundColor: `#${this.state.themeColor}`
                      }}
                      aria-valuenow={this.state.stats.specialAttack}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <small>{this.state.stats.specialAttack}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card-body bg-light border-top border-dark">
          <h5 class="card-title text-center">Profile</h5>
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="col-6">
                  <h6 className="float-right">Height:</h6>
                </div>
                <div className="col-6">
                  <h6 className="float-left">{this.state.height} cm.</h6>
                </div>
                <div className="col-6">
                  <h6 className="float-right">Weight:</h6>
                </div>
                <div className="col-6">
                  <h6 className="float-left">{this.state.weight} Kg.</h6>
                </div>
                <div className="col-6">
                  <h6 className="float-right">Chance de captura:</h6>
                </div>
                <div className="col-6">
                  <h6 className="float-left">{this.state.catchRate}%</h6>
                </div>
                <div className="col-6">
                  <h6 className="float-right">Habilidades:</h6>
                </div>
                <div className="col-6">
                  <h6 className="float-left">{this.state.abilities}</h6>
                </div>
                <div className="col-6">
                  <h6 className="float-right">Proporção de genero:</h6>
                </div>
                <div className="col-6">
                  <div class="progress">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style={{
                        width: `${this.state.genderRatioFemale}%`,
                        backgroundColor: '#c2185b'
                      }}
                      aria-valuenow="15"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <small>{this.state.genderRatioFemale}</small>
                    </div>
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style={{
                        width: `${this.state.genderRatioMale}%`,
                        backgroundColor: '#1976d2'
                      }}
                      aria-valuenow="30"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <small>{this.state.genderRatioMale}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    ) 
  }

}