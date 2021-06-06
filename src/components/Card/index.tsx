import { useEffect, useState } from "react";
import { types } from "util";
import { api } from "../../services/api";
import { Modal } from "../Modal";
import styles from "./styles.module.scss";

interface CardProps {
  url: string;
}

interface PokemonProps {
  base_experience: number;
  abilities: [
    {
      ability: {
        name: string;
      };
    }
  ];
  moves: [
    {
      move: {
        name: string;
      };
    }
  ];
  name: string;
  sprites: {
    front_default: string;
    back_default: string;
    other: {
      dream_world: {
        front_default: string;
      };
      official_artork: {
        front_default: string;
      };
    };
  };
  stats: [
    {
      base_stat: number;
      stat: {
        name: string;
      };
    }
  ];
  types: [
    {
      type: {
        name: string;
      };
    }
  ];
  weight: number;
  height: number;
}

export function Card({ url }: CardProps) {
  const [pokemon, setPokemon] = useState<PokemonProps>({} as PokemonProps);
  const [showModal, setShowModal] = useState(false);

  const pokemonId = url.split("/")[6];

  useEffect(() => {
    api
      .get(`pokemon/${pokemonId}`)
      .then((response) => setPokemon(response.data));
  }, [pokemonId]);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div onClick={openModal}>
      {pokemon.name && (
        <div className={styles.card}>
          <div className={styles.left}>
            <h3>{pokemon.name}</h3>

            <div className={styles.pokeProps}>
              {pokemon.stats.map((item) => {
                return (
                  <>
                    {item.stat.name == "attack" && (
                      <div className={styles.attack}>
                        <div className={styles.circle}>
                          <p>{item.base_stat}</p>
                        </div>

                        <div>
                          <p>Attack</p>
                        </div>
                      </div>
                    )}

                    {item.stat.name == "defense" && (
                      <div className={styles.defense}>
                        <div className={styles.circle}>
                          <p>{item.base_stat}</p>
                        </div>

                        <div>
                          <p>Defense</p>
                        </div>
                      </div>
                    )}
                  </>
                );
              })}
            </div>

            <div className={styles.type}>
              {pokemon.types.map((type) => {
                return (
                  <>
                    {type.type.name == "water" && (
                      <div className={styles.water}>
                        <p>{type.type.name}</p>
                      </div>
                    )}

                    {type.type.name == "ice" && (
                      <div className={styles.ice}>
                        <p>{type.type.name}</p>
                      </div>
                    )}

                    {type.type.name == "fire" && (
                      <div className={styles.fire}>
                        <p>{type.type.name}</p>
                      </div>
                    )}

                    {type.type.name == "dragon" && (
                      <div className={styles.dragon}>
                        <p>{type.type.name}</p>
                      </div>
                    )}

                    {type.type.name == "fighting" && (
                      <div className={styles.dragon}>
                        <p>{type.type.name}</p>
                      </div>
                    )}

                    {type.type.name == "bug" && (
                      <div className={styles.bug}>
                        <p>{type.type.name}</p>
                      </div>
                    )}

                    {type.type.name == "grass" && (
                      <div className={styles.grass}>
                        <p>{type.type.name}</p>
                      </div>
                    )}

                    {type.type.name == "electric" && (
                      <div className={styles.electric}>
                        <p>{type.type.name}</p>
                      </div>
                    )}

                    {type.type.name == "ground" && (
                      <div className={styles.ground}>
                        <p>{type.type.name}</p>
                      </div>
                    )}

                    {type.type.name == "stile" && (
                      <div className={styles.stile}>
                        <p>{type.type.name}</p>
                      </div>
                    )}

                    {type.type.name == "dark" && (
                      <div className={styles.dark}>
                        <p>{type.type.name}</p>
                      </div>
                    )}

                    {type.type.name == "rock" && (
                      <div className={styles.rock}>
                        <p>{type.type.name}</p>
                      </div>
                    )}

                    {type.type.name == "normal" && (
                      <div className={styles.normal}>
                        <p>{type.type.name}</p>
                      </div>
                    )}

                    {type.type.name == "gosth" && (
                      <div className={styles.gosth}>
                        <p>{type.type.name}</p>
                      </div>
                    )}

                    {type.type.name == "poison" && (
                      <div className={styles.poison}>
                        <p>{type.type.name}</p>
                      </div>
                    )}

                    {type.type.name == "psychic" && (
                      <div className={styles.psychic}>
                        <p>{type.type.name}</p>
                      </div>
                    )}

                    {type.type.name == "fairy" && (
                      <div className={styles.fairy}>
                        <p>{type.type.name}</p>
                      </div>
                    )}

                    {type.type.name == "ghost" && (
                      <div className={styles.ghost}>
                        <p>{type.type.name}</p>
                      </div>
                    )}
                  </>
                );
              })}
            </div>
          </div>
          <div className={styles.right}>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`}
              alt=""
            />
          </div>
        </div>
      )}

      <Modal
        showModal={showModal}
        name={pokemon.name}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`}
        types={pokemon.types}
        stats={pokemon.stats}
        base_experience={pokemon.base_experience}
        id={pokemonId}
        abilities={pokemon.abilities}
      ></Modal>
    </div>
  );
}
