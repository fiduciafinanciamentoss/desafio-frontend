import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { SimpleModal } from "../Modal";
import { PokemonProps } from "../../interfaces/Pokemon";

const useStyles = makeStyles({
  root: {
    maxWidth: 390,
    maxHeight: 290,
  },
  media: {
    height: 150,
    backgroundSize: "contain",
  },
});

interface ContainerProps {
  pokemon: PokemonProps;
}

export const CardModel: React.FC<ContainerProps> = ({ pokemon }) => {
  const [show, setShow] = useState(false);
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        <SimpleModal show={show} setShow={setShow} pokemon={pokemon} />
        <CardActionArea onClick={() => setShow(true)}>
          <CardMedia
            className={classes.media}
            image={pokemon?.image}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              style={{ textTransform: "capitalize" }}
            >
              {pokemon?.name}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {pokemon?.habilidades?.map((item: string, index: number) => (
            <Button key={index.toString()} size="small" color="primary">
              {item}
            </Button>
          ))}
        </CardActions>
      </Card>
    </>
  );
};
