import { useEffect, useState, useRef } from 'react'
import { PokemonItem } from '../PokemonItem/index'

import { api } from '../../services/api'

import './styles.scss'

interface IPokemon {
  name: string,
  url: string
}

export function PokemonList() {
  const [pokemons, setPokemons] = useState<IPokemon[]>([])
  const [filteredPokemons, setFilteredPokemons] = useState<IPokemon[]>([])
  const [count, setCount] = useState(20)

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(()=>{
    api.get(`pokemon?limit=1200`)
    .then(response => {
      setPokemons(response.data.results)
      setFilteredPokemons(response.data.results)
    })
  }, [])

  function handleSearch(){
    if(inputRef.current?.value !== undefined){
      const pokemonName = inputRef.current.value
      const newPokemons = pokemons.filter(pokemon => pokemon.name.includes(pokemonName))
      newPokemons.length > 0 ? setFilteredPokemons(newPokemons) : setFilteredPokemons([])
      setCount(20)
    } else {
      setFilteredPokemons(pokemons)
    }
  }

  function handleClearSearch(){
    setCount(20)
    setFilteredPokemons(pokemons)
    if(inputRef.current?.value !== undefined){
      inputRef.current.value = ''
    }
  }

  return (
    <>
    <div className="search-area">
      <input ref={inputRef} type="search" placeholder="Informe o nome do pokemon"/>
      <div>
        <button onClick={handleSearch}>Buscar</button>
        <button onClick={handleClearSearch}>Limpar filtro</button>
      </div>
    </div>
    <div className="pokemon-list">
      {filteredPokemons.map((pokemon,index) => {
        if(index < count){
          return <PokemonItem key={pokemon.name} url={pokemon.url}/>
        }
          return null
      })}
    </div>
    {
      filteredPokemons.length > 20 && <button className="center-button" onClick={() => setCount(count => count + 20)}>Carregar mais...</button>
    }
    </>
  )
}