import React from "react";
import "./modal.css";
import { useState, useEffect } from "react";

function Modal(props) {
  const pesoAjustado = props.pokemon.weight / 10;
  const altAjustado = (props.pokemon.height / 10).toFixed(2);
  const statValue = props.pokemon.stats.map((arr) => arr.base_stat);
  const totHP = statValue[0];
  const totATK = statValue[1];
  const totDEF = statValue[2];
  const totSPD = statValue[5];

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <button className="close-btn" onClick={props.onClose}>
          ✖
        </button>
        <div className="modal-informations">
          <h3 className="name-modal">{props.pokemon.name}</h3>
          <div className="picture-modal">
            <img
              src={props.pokemon.sprites.front_default}
              alt="Imagem do pokemon selecionado"
            ></img>
            <img
              src={props.pokemon.sprites.back_default}
              alt="Imagem do pokemon selecionado"
            ></img>
          </div>
          <div className="inf-modal">
            <div className="princ-stats">
              <div className="value-stats shadow p-3 mb-5 bg-white rounded">
                {" "}
                HP: {totHP} ATK: {totATK} DEF: {totDEF} SPEED: {totSPD}{" "}
              </div>
            </div>
            <div className="princ-habil">
              <div>
                Principais Habilidades:{" "}
                {props.pokemon.abilities
                  .map((arr) => arr.ability.name)
                  .join(" | ")}
              </div>
            </div>
            <div className="peso-alt">
              <div>Peso: {pesoAjustado} kgs</div>
              <div>Altura: {altAjustado} mts</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
