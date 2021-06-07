export function getPokemon({ url }) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        resolve(data);
      });
  });
}

export async function getAllPokemon(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        resolve(data);
      });
  });
}

const initialURL = 'http://pokeapi.co./api/v2';
const query = {
  pokemon: 'pokemon'
}

export async function searchPokemon(pokemon){
  console.log(`${initialURL}/${query.pokemon}/${pokemon}`);
  return fetch(`${initialURL}/${query.pokemon}/${pokemon}`)
}