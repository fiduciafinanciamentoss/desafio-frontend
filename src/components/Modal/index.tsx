import styles from "./styles.module.scss";

interface ModalProps {
  showModal?: boolean;

  src: string;
  base_experience: number;
  abilities: [
    {
      ability: {
        name: string;
      };
    }
  ];
  moves?: [
    {
      move: {
        name: string;
      };
    }
  ];
  name: string;
  sprites?: {
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
  weight?: number;
  height?: number;
  id: string;
}

export const Modal = ({
  showModal,
  name,
  src,
  base_experience,
  abilities,
  stats,
  types,
  id,
}: ModalProps) => {
  function closeModal() {
    showModal = false;
  }

  return (
    <>
      {showModal ? (
        <div className={styles.overlay}>
          <div className={styles.container}>
            <div className={styles.left}>
              <img src={src} alt="" />
              <div className={styles.type}>
                {types.map((type) => {
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
              <button type="button" onClick={closeModal}>
                X
              </button>
              <div className={styles.head}>
                <h3>{name.toUpperCase()}</h3>
                <div>
                  <h5>Pokemon ID</h5>
                  <div>
                    <p>{id}</p>
                  </div>
                </div>
              </div>
              <div className={styles.body}>
                <div className={styles.abilities}>
                  <p>Abilities</p>
                  <div>
                    {abilities.map((ability) => {
                      return <p>{ability.ability.name}</p>;
                    })}
                  </div>
                </div>
                <div className={styles.stats}>
                  {stats.map((stats) => {
                    return (
                      <>
                        {stats.stat.name == "hp" && (
                          <div>
                            <p>Healthy Points</p>
                            <p className={styles.number}>{stats.base_stat}</p>
                            <span className={styles.healthyBar}></span>
                          </div>
                        )}
                      </>
                    );
                  })}
                  <div>
                    <p>Experience</p>
                    <p className={styles.number}>{base_experience}</p>
                    <span className={styles.experienceBar}></span>
                  </div>
                </div>
              </div>
              <div className={styles.footer}>
                {stats.map((stats) => {
                  return (
                    <>
                      {stats.stat.name == "attack" && (
                        <div className={styles.habilities}>
                          <div className={styles.circle}>
                            <p>{stats.base_stat}</p>
                          </div>
                          <div>
                            <p>{stats.stat.name}</p>
                          </div>
                        </div>
                      )}
                      {stats.stat.name == "defense" && (
                        <div className={styles.habilities}>
                          <div className={styles.circle}>
                            <p>{stats.base_stat}</p>
                          </div>
                          <div>
                            <p>{stats.stat.name}</p>
                          </div>
                        </div>
                      )}
                      {stats.stat.name == "special-attack" && (
                        <div className={styles.habilities}>
                          <div className={styles.circle}>
                            <p>{stats.base_stat}</p>
                          </div>
                          <div>
                            <p>Sp Attack</p>
                          </div>
                        </div>
                      )}
                      {stats.stat.name == "special-defense" && (
                        <div className={styles.habilities}>
                          <div className={styles.circle}>
                            <p>{stats.base_stat}</p>
                          </div>
                          <div>
                            <p>Sp Defense</p>
                          </div>
                        </div>
                      )}
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
