import React, { useState } from "react";
import "materialize-css/dist/css/materialize.min.css";
// import { Link } from "react-router-dom";
// import { Container, Card, CardImg } from './styles';
import typeColors from '../../../helpers/typeColors';
import { Span } from './styles';

export const Content = ({ pokemon }) => {

  return (
    <div>
      <ul class="collection">
        <li class="collection-item avatar black-text">
          <img src={pokemon.sprites.front_default} alt="" class="circle"></img>
          <span className="title">{pokemon.name}</span>
          <p><br/>
            {pokemon.types.map((type) => {
              return (
                <Span>
                  <span style={{ backgroundColor: typeColors[type.type.name] }}>
                    {type.type.name}
                  </span>
                </Span>
              );
            })}
          </p>
          <button className="secondary-content btn-small">Details</button>
        </li>
      </ul>
    </div>
  );
};
