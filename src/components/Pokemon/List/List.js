import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import { Link } from "react-router-dom";
import { Container, Card, CardImg } from './styles';
import typeColors from '../../../helpers/typeColors'
import {Details} from '../Details/Details'

export const Content = ({ pokemon }) => {
  return (
    <Container className="Row">
        <Card className="card col s1">
          <CardImg className="card-image">
            <img src={pokemon.sprites.front_default} alt=""/>
          </CardImg>
          <div className="card_title black-text center-align">{pokemon.name}</div>
          <div className="Card__types">
            {pokemon.types.map((type) => {
              return (
                <div
                  className="Card__type center-align"
                  style={{ backgroundColor: typeColors[type.type.name] }}
                >
                  {type.type.name}
                </div>
              );
            })}
          </div>
        </Card>
    </Container>
  );
};
