import './styles.scss'

import { ModalDetails } from '../PokemonModalDetails/'

import { api } from '../../services/api'
import { useEffect, useState } from 'react'

interface IPokemon {
  url: string
}

interface IPokemonInfo {
  abilities: [
    {
      ability:
      {
        name: string
      }
    }
  ],
  moves: [
    {
      move: {
        name: string
      }
    }
  ],
  name: string,
  sprites: {
    front_default: string,
    back_default: string,
    other: {
      dream_world: {
        front_default: string
      }
    }
  },
  stats: [
    {
      base_stat: number,
      stat: {
        name: string
      }
    }
  ],
  types: [
    {
      type: {
        name: string
      }
    }
  ],
  weight: number
  height: number
}

export function PokemonItem({ url }: IPokemon) {
  const [pokemon, setPokemon] = useState<IPokemonInfo>({} as IPokemonInfo)
  const [isOpen, setIsOpen] = useState(false)

  const idPokemon = url.split('/')[6]
  
  useEffect(() => {
    api.get(`pokemon/${idPokemon}`,)
    .then(response => setPokemon(response.data)
     
    )
  }, [idPokemon])
    
  function handleOpenModal() {
    setIsOpen(true)
  }

  function handleCloseModal() {
    setIsOpen(false)
  }

    return (
      <>
      {pokemon.name && 
        <button onClick={handleOpenModal}className="pokemon-item">
          <p>{pokemon.name.toUpperCase()}</p>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <ul>
            {pokemon.types.map(type => {
              return <li className={type.type.name + '-class'} key={type.type.name}>{type.type.name.toUpperCase()}</li>
            })}
          </ul>
        </button>
       }
       <ModalDetails pokemon={pokemon} isOpen={isOpen} onRequestClose={handleCloseModal}/>
    </>
    )

}