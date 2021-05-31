import React, { useContext, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import GlobalStateContext from '../../contexts/GlobalStateContext';
import { goToPage } from '../../router/Cordinator';
import Header from '../Header/Header';
import {
  ContainerPokemonDetails,
  ContainerContentPokemon,
  ProgressBar,
  Background,
  Progress,
  MainDiv
} from './styles';
import bug from '../../IMG/bug.png';
import dark from '../../IMG/dark.png';
import dragon from '../../IMG/dragon.png';
import electric from '../../IMG/eletric.png';
import fairy from '../../IMG/fairy.png';
import fighting from '../../IMG/fighting.png';
import fire from '../../IMG/fire.png';
import flying from '../../IMG/flying.png';
import ghost from '../../IMG/ghost.png';
import grass from '../../IMG/grass.png';
import ground from '../../IMG/ground.png';
import ice from '../../IMG/ice.png';
import normal from '../../IMG/normal.png';
import poison from '../../IMG/poison.png';
import psychic from '../../IMG/psychic.png';
import rock from '../../IMG/rock.png';
import steel from '../../IMG/steel.png';
import water from '../../IMG/water.png';

const PokemonDetailsPage = () => {
  const history = useHistory();
  const { pokemonId } = useParams();

  const {
    pokedex,
    getPokemonDetails,
    pokemonDetails,
    addToPokedex,
    removeFromPokedex,
    camelCase
  } = useContext(GlobalStateContext);

  let img = '';
  const types =
    pokemonDetails.types &&
    pokemonDetails.types.map((type) => {
      switch (type.type.name) {
        case 'bug':
          img = <img className="type-img" src={bug} />;
          break;
        case 'dark':
          img = <img className="type-img" src={dark} />;
          break;
        case 'dragon':
          img = <img className="type-img" src={dragon} />;
          break;
        case 'electric':
          img = <img className="type-img" src={electric} />;
          break;
        case 'fairy':
          img = <img className="type-img" src={fairy} />;
          break;
        case 'fighting':
          img = <img className="type-img" src={fighting} />;
          break;
        case 'fire':
          img = <img className="type-img" src={fire} />;
          break;
        case 'flying':
          img = <img className="type-img" src={flying} />;
          break;
        case 'ghost':
          img = <img className="type-img" src={ghost} />;
          break;
        case 'grass':
          img = <img className="type-img" src={grass} />;
          break;
        case 'ground':
          img = <img className="type-img" src={ground} />;
          break;
        case 'ice':
          img = <img className="type-img" src={ice} />;
          break;
        case 'normal':
          img = <img className="type-img" src={normal} />;
          break;
        case 'poison':
          img = <img className="type-img" src={poison} />;
          break;
        case 'psychic':
          img = <img className="type-img" src={psychic} />;
          break;
        case 'rock':
          img = <img className="type-img" src={rock} />;
          break;
        case 'steel':
          img = <img className="type-img" src={steel} />;
          break;
        case 'water':
          img = <img className="type-img" src={water} />;
          break;
        default:
          img = '';
      }
      return <div key={type.type.name}>{img}</div>;
    });

  const pokeIndex = pokedex.findIndex((pokemon) => pokemon.id == pokemonId);

  useEffect(() => {
    getPokemonDetails(pokemonId);
    if (pokedex.length > 0) {
      localStorage.setItem('pokedex', JSON.stringify(pokedex));
    }
  }, [pokedex]);

  const stats =
    pokemonDetails.stats &&
    pokemonDetails.stats.map((stat) => {
      return (
        <>
          <ProgressBar key={stat.stat.name}>
            <Background />
            <p className="label">
              <strong>{camelCase(stat.stat.name).replace('-', ' ')}:</strong>{' '}
              {stat.base_stat}
            </p>
            <Progress percent={stat.base_stat} />
          </ProgressBar>
        </>
      );
    });

  const moves =
    pokemonDetails.moves &&
    pokemonDetails.moves.map((move) => {
      return (
        <p key={move.move.name}>
          {camelCase(move.move.name).replace('-', ' ')}
        </p>
      );
    });

  return (
    <MainDiv>
      <Header />
      <ContainerPokemonDetails>
        <div className="back-btn">
          <button
            class="nes-btn is-warning"
            onClick={() => goToPage(history, '/')}
          >
            Voltar
          </button>
        </div>
        {pokeIndex !== -1 ? (
          <div className="catch-btn">
            <button
              class="nes-btn is-warning"
              onClick={() => removeFromPokedex(pokemonId)}
            >
              Libertar
            </button>
          </div>
        ) : (
          <div className="catch-btn">
            <button
              class="nes-btn is-warning"
              onClick={() => addToPokedex(pokemonId)}
            >
              Adicionar
            </button>
          </div>
        )}
        {pokemonDetails && (
          <>
            <h2 className="name-title">{pokemonDetails.name}</h2>
            <ContainerContentPokemon>
              <div className="imgs-Pokemon">
                <img
                  src={
                    pokemonDetails.sprites &&
                    pokemonDetails.sprites.versions['generation-v'][
                      'black-white'
                    ].animated.front_default
                  }
                />
                <img
                  src={
                    pokemonDetails.sprites &&
                    pokemonDetails.sprites.versions['generation-v'][
                      'black-white'
                    ].animated.back_default
                  }
                />
              </div>
              <div className="stats">
                <h4>Estatísticas</h4>
                {pokemonDetails.stats && stats}
              </div>
              <div className="types-And-Moves">
                <div className="types">{types}</div>
                <div className="moves">
                  <h2>Ataques</h2>
                  <div>{moves}</div>
                </div>
              </div>
            </ContainerContentPokemon>
          </>
        )}
      </ContainerPokemonDetails>
    </MainDiv>
  );
};

export default PokemonDetailsPage;
