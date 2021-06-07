import React, { useState } from "react";
import "materialize-css/dist/css/materialize.min.css";
// import { Link } from "react-router-dom";
// import { Container, Card, CardImg } from './styles';
import typeColors from '../../../helpers/typeColors';
import { Container, Span, List } from './styles';
import { Details } from '../../Details/Details';

export const Content = ({ pokemon }) => {

  const [isModalVisible, setIsModalVisibile] = useState(false);

  return (
    <Container>
      <List>
        <button
          className="btn-small grey darken-4 secondary-content"
          onClick={() => setIsModalVisibile(true)}
        >
          Details
        </button>
        {isModalVisible ? (
          <Details onClose={() => setIsModalVisibile(false)}>
            <h2 className="title center-align">Details of {pokemon.name}</h2>
            <img src={pokemon.sprites.front_default} alt=""/>
            <table className="centered">
              <thead>
                <tr>
                  <td className="title center-align">Weight</td>
                  <td className="title center-align">Height</td>
                  <td className="title center-align">Ability</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{pokemon.weight}</td>
                  <td>{pokemon.height}</td>
                  <td>{pokemon.abilities[0].ability.name}</td>
                </tr>
              </tbody>
            </table>
          </Details>
        ) : null}
        <ul class="collection">
          <li class="collection-item avatar black-text grey lighten-4">
            <img
              src={pokemon.sprites.front_default}
              alt=""
              class="circle"
            ></img>
            <span className="title">{pokemon.name}</span>
            <p>
              <br />
              {pokemon.types.map((type) => {
                return (
                  <Span>
                    <span
                      style={{ backgroundColor: typeColors[type.type.name] }}
                    >
                      {type.type.name}
                    </span>
                  </Span>
                );
              })}
            </p>
          </li>
        </ul>
      </List>
    </Container>
  );
};
