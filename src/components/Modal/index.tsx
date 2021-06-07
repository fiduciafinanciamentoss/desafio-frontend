import React, { useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Container, Image, Content } from "./styles";
import { PokemonProps } from "../../interfaces/Pokemon";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: "absolute",
      width: 500,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  })
);

interface ContainerProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  pokemon: PokemonProps;
}

export const SimpleModal: React.FC<ContainerProps> = ({
  show,
  setShow,
  pokemon,
}) => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <div>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={show}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <Container>
            <Image src={pokemon.image} />
            <Content>
              <p>
                <b>ID:</b>
                {"  "} {pokemon.id}
              </p>
              <p>
                <b>Nome:</b>
                {"  "}
                {pokemon.name}
              </p>
              <p>
                <b>Ordem:</b>
                {"  "}
                {pokemon.order}
              </p>
              <p>
                <b>Experiência base:</b>
                {"  "}
                {pokemon.baseExperience}
              </p>
              <p>
                <b>Peso:</b>
                {"  "}
                {pokemon.weight}
              </p>
              <p>
                <b>Altura:</b>
                {"  "}
                {pokemon.height}
              </p>
              <div>
                {pokemon.habilidades.map((skill: string) => (
                  <button>{skill}</button>
                ))}
              </div>
            </Content>
          </Container>
        </div>
      </Modal>
    </div>
  );
};
