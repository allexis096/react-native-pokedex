import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';

import Card from '../../components/Card';
import { getPokemon } from '../../utils/getPokemon';

import { TextInput, Header, Icon, PokeList } from './styles';

export interface PokemonProps {
  typesPoke: Array<{
    type: {
      name: string;
    };
  }>;
  name: string;
  image: string;
  height: number;
  weight: number;
  id: number;
}

const Dashboard: React.FC = () => {
  const [pokemons, setPokemons] = useState<PokemonProps[]>([]);

  const [filteredPokemon, setFilteredPokemon] = useState<string>('');

  const navigation = useNavigation();

  useEffect(() => {
    (async function getPokemons(): Promise<void> {
      const pokemonsList = [];
      const { data } = await api.get('pokemon-species?limit=50');

      for await (const pokemon of data.results) {
        const poke = await getPokemon(pokemon.name);
        pokemonsList.push(poke);
      }

      setPokemons(pokemonsList);
    })();
  }, []);

  const filteredPokemons = pokemons.filter(pokemon => {
    return pokemon.name.includes(filteredPokemon);
  });

  return (
    <SafeAreaView>
      <Header>
        <Icon name="search" color="#666360" size={20} />
        <TextInput
          placeholderTextColor="#666360"
          placeholder="Type the Pokémon name"
          onChangeText={e => setFilteredPokemon(e)}
        />
      </Header>

      <PokeList
        data={filteredPokemons}
        keyExtractor={pokemon => pokemon.name}
        numColumns={2}
        renderItem={({ item: pokemon, index }) => (
          <Card
            poke_onPress={() =>
              navigation.navigate('Pokemon', {
                name: pokemon.name,
                image: pokemon.image,
                number: index + 1,
                height: pokemon.height,
                weight: pokemon.weight,
                id: pokemon.id,
              })
            }
            poke_number={index + 1}
            poke_img={pokemon.image}
            poke_name={pokemon.name}
            poke_type={pokemon.typesPoke.map(type =>
              type.type.name.concat(', '),
            )}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Dashboard;
