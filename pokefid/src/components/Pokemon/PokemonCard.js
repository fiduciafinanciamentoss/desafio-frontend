import React, { Component } from 'react';
import styled from 'styled-components';
import loading from '../Pokemon/loading.gif';
import {Link} from 'react-router-dom';

const Sprite = styled.img`
  width: 5em;
  height: 5em;
  display: nome;
  -moz-user-select: none;
  -website-user-select: none;
  user-select: none;
  -o-user-select: none;
`;

const Cards = styled.div`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  -moz-user-select: none;
  -website-user-select: none;
  user-select: none;
  -o-user-select: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active{
    text-decoration: none;
  }
`;

export default class PokemonCard extends Component {

  state = {
    name: '',
    imageurl: '',
    pokemonIndex: '',
    imageLoading: true,
    tooManyRequests: false
  };

  componentDidMount () {
    const { name, url } = this.props;
    const pokemonIndex = url.split('/')[url.split('/').length - 2];
    const imageurl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`

    this.setState({
      name,
      imageurl,
      pokemonIndex
    });
  }

  render() {
  

    return(
      <div className="col-md-3 col-sm-6 mb-5">
        <StyledLink to={`pokemon/${this.state.pokemonIndex}`}>
          <Cards className="card">
            <h5 className="card-header">{this.state.pokemonIndex}</h5>
            {this.state.imageLoading ? (
              <img 
                src={loading}
                style={{ width: "5em", height: "5em"}}
                alt="Carregando imagem"
                className="card-img-top rounded mx-auto d-block mt-2"
              />
            ) : null }
            <Sprite 
            className="card-image-top rouded mx-auto mt-2" 
            onLoad={() => this.setState({ imageLoading: false })}
            onError={() => this.setState({ tooManyRequests: true })}
            src={this.state.imageurl}
            style={
              this.state.tooManyRequests ? { display: 'none'} : 
              this.state.imageLoading ? null : { display: 'block'}
            }
            />
            {this.state.tooManyRequests ? (
              <h6 className="mx-auto">
                <span className="badge bg-danger mt-2">Falha no carregando da imagem. Atualize a pagina</span> 
              </h6>
            ) : null }
            <div className="card-body mx-auto">
              <h6 className="card-title">
                {this.state.name
                .toLowerCase()
                .split(' ')
                .map(letter => letter.charAt(0).toUpperCase() + letter.substring(1)
                )
                .join(' ')
                }
              </h6>
            </div>
          </Cards>
        </StyledLink>
      </div>
    );
  }
}