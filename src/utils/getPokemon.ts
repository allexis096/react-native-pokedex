import { PokemonProps } from '../pages/Dashboard';

export async function getPokemon(url: string): Promise<PokemonProps> {
  const response = await fetch(url).then(res => res.json());

  const pokemon: PokemonProps = {
    typesPoke: response.types,
    name: response.name,
    image: response.sprites.front_default,
  };

  return pokemon;
}
