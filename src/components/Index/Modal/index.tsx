import { Container, InfoDialog } from './styles'
import * as ReactRedux from 'react-redux';
import { desabilityModal } from '../../../redux/reducers/pokemon';
import { IReducers } from '../../../redux/createStore';
import { IPokemon } from '../../../redux/reducers/pokemon/helpers';


const Modal = () => {
  const dispatch = ReactRedux.useDispatch();

  const pokemon: {pokemonInfo: IPokemon} = ReactRedux.useSelector((reducers: IReducers) => reducers.pokemon);

  return (
    <>
      <Container onClick={() => dispatch(desabilityModal())} />
      <InfoDialog>
        <div>
          <img src={pokemon.pokemonInfo.sprites.front_default} alt="" />
        </div>
        <div>
          <span>{pokemon.pokemonInfo.name}</span>
          <span>Height ↦ {pokemon.pokemonInfo.height}</span>
          <span>Weight ↦ {pokemon.pokemonInfo.weight}</span>
        </div>
        <div>
          <img src={pokemon.pokemonInfo.sprites.back_default} alt="" />
          <img src={pokemon.pokemonInfo.sprites.front_shiny} alt="" />
          <img src={pokemon.pokemonInfo.sprites.back_shiny} alt="" />
        </div>
        <div onClick={() => dispatch(desabilityModal())} >✕</div>
      </InfoDialog>
    </>
    
  )
}

export default Modal