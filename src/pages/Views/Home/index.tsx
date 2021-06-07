import React, { useEffect, useCallback, useState } from "react";

import { CardModel } from "../../../components/CardModel";
import { Header } from "../../../components/Header";
import { Loading } from "../../../components/Loading";
import { UIInfiniteScroll } from "../../../components/UI/infinityScroll";
import { PokemonProps } from "../../../interfaces/Pokemon";
import api from "../../../services/api";
import animationData from "../../../assets/load/pikachu.json";

import { Container, Content } from "./styles";

export function Home() {
  const [pokemons, setPokemons] = useState<Array<PokemonProps>>([]);
  const [load, setLoad] = useState(true);

  const loadingPokemon = useCallback(async () => {
    try {
      //Retorna nome dos 20 primeiros pokemons
      const resp = await api.get(`pokemon?limit=12&offset=${pokemons.length}`);

      //Mapeamento para buscar imagem e outras informações do pokeomon
      resp.data.results.map(async (pokemon: PokemonProps) => {
        const resp = await api.get(`pokemon/${pokemon?.name}`);
        const habilidades = resp.data?.types?.map(
          (tipo: any) => tipo?.type?.name
        );
        //Criando novo objeto
        const newData: PokemonProps = {
          name: resp.data.name,
          image: resp.data.sprites?.front_default,
          height: resp.data.height,
          weight: resp.data.weight,
          order: resp.data.order,
          id: resp.data.id,
          baseExperience: resp.data.base_experience,
          habilidades,
        };
        //Logica adicionar novo e antigos pokemons
        setPokemons((prevState: PokemonProps[]) => [...prevState, newData]);
        return newData;
      });
    } catch (err) {
      console.log(err);
    }
  }, [pokemons]);

  useEffect(() => {
    loadingPokemon();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 2000);
  }, [load]);

  return (
    <>
      <Header
        setPokemons={setPokemons}
        loadingPokemon={loadingPokemon}
        setLoad={setLoad}
      />

      <Container>
        <Content>
          {!load &&
            pokemons?.map((pokemon: PokemonProps) => (
              <CardModel pokemon={pokemon} />
            ))}
        </Content>
        {load && <Loading animationData={animationData} />}
        {pokemons.length >= 12 && (
          <UIInfiniteScroll fetchMore={loadingPokemon} pokemons={pokemons} />
        )}
      </Container>
    </>
  );
}
