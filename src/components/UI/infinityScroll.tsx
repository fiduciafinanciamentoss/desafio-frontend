import React, { useEffect, useRef } from "react";
import { PokemonProps } from "../../interfaces/Pokemon";

interface ContainerProps {
  fetchMore(): void;
  pokemons: PokemonProps[];
}

export const UIInfiniteScroll: React.FC<ContainerProps> = ({
  fetchMore,
  pokemons,
}) => {
  const containerRef: any = useRef();

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        observer.disconnect();
        fetchMore();
      }
    }, options);
    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [pokemons]);

  return <div ref={containerRef} />;
};
