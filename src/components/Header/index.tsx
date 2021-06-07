import React, { useCallback, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { toast } from "react-toastify";
import { PokemonProps } from "../../interfaces/Pokemon";
import api from "../../services/api";

import { Container, Title, ContainerBuscar } from "./styles";

interface ContainerProps {
  setPokemons: React.Dispatch<React.SetStateAction<PokemonProps[]>>;
  loadingPokemon(): void;
  setLoad: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header: React.FC<ContainerProps> = ({
  setPokemons,
  loadingPokemon,
  setLoad,
}) => {
  const [search, setSearch] = useState("");

  const searchPokemon = useCallback(async () => {
    try {
      if (search != "") {
        const resp = await api.get(`pokemon/${search}`);
        const habilidades = resp.data?.types?.map(
          (tipo: any) => tipo?.type?.name
        );

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

        setPokemons([newData]);
      } else {
        setPokemons([]);
        setLoad(true);
        loadingPokemon();
      }
    } catch (err) {
      toast.error("Não foi possível encontrar esse pokemon");
    }
  }, [search]);

  const handleSearch = useCallback(
    (e) => {
      setSearch(e?.target?.value);
    },
    [search]
  );

  return (
    <Container>
      <Title>Pokedex</Title>
      <ContainerBuscar>
        <input onChange={handleSearch} placeholder="Pesquise um pokemon" />
        <button onClick={searchPokemon}>
          {" "}
          <FaSearch size={25} />
        </button>
      </ContainerBuscar>
    </Container>
  );
};
