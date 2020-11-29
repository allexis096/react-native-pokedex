import { PokemonProps } from '../pages/Dashboard';
import api from '../services/api';

export async function getPokemon(name: string): Promise<PokemonProps> {
  const { data } = await api.get(`pokemon/${name}`);
  const {
    data: {
      evolution_chain: { url },
    },
  } = await api.get(`pokemon-species/${name}`);
  const id = url.substring(url.length - 2).replace('/', '');

  const pokemon: PokemonProps = {
    typesPoke: data.types,
    name: data.name,
    image: data.sprites.front_default,
    height: data.height,
    weight: data.weight,
    id,
  };

  return pokemon;
}
