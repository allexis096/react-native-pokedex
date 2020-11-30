import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';
import { getPokemon } from '../../utils/getPokemon';

import { PokemonProps } from '../Dashboard';
import ProgressBar from '../../components/ProgressBar';

import {
  Container,
  PokeProfile,
  PokeNumber,
  Pokemon,
  PokeStrong,
  PokeSize,
  Size,
  SizeNumber,
  SizeText,
  Stats,
} from './styles';
import Card from '../../components/Card';

interface RouteParams {
  route: {
    params: {
      name: string;
      image: string;
      number: number;
      height: number;
      weight: number;
      id: number;
    };
  };
}

interface StatsProps {
  base_stat: number;
  stat: {
    name: 'hp' | 'attack' | 'defense' | 'speed';
  };
}

interface StatsNumbersProps {
  name: string;
  base_stat: number;
}

interface FamilyProps {
  species: {
    name: string;
  };
  evolves_to: Array<{
    species: {
      name: string;
    };
  }>;
}

const PokemonStats: React.FC<RouteParams> = ({ route }) => {
  const { name, image, number, height, weight, id } = route.params;

  const navigation = useNavigation();

  const [statsNumbers, setStatsNumbers] = useState<StatsNumbersProps[]>([]);
  const [pokemons, setPokemons] = useState<PokemonProps[]>([]);
  const [loadingStats, setLoadingStats] = useState(false);
  const [loadingFamily, setLoadingFamily] = useState(false);

  useEffect(() => {
    setLoadingStats(true);
    (async () => {
      const statsNumber: StatsNumbersProps[] = [];
      const {
        data: { stats },
      } = await api.get(`pokemon/${name}`);

      await stats.find(
        (stat: StatsProps) =>
          stat.stat.name === 'hp' &&
          statsNumber.push({
            name: stat.stat.name.replace('hp', 'hp  '),
            base_stat: stat.base_stat,
          }),
      );
      await stats.find(
        (stat: StatsProps) =>
          stat.stat.name === 'attack' &&
          statsNumber.push({
            name: stat.stat.name.replace('attack', 'atk'),
            base_stat: stat.base_stat,
          }),
      );
      await stats.find(
        (stat: StatsProps) =>
          stat.stat.name === 'defense' &&
          statsNumber.push({
            name: stat.stat.name.replace('defense', 'def'),
            base_stat: stat.base_stat,
          }),
      );
      await stats.find(
        (stat: StatsProps) =>
          stat.stat.name === 'speed' &&
          statsNumber.push({
            name: stat.stat.name.replace('speed', 'spd'),
            base_stat: stat.base_stat,
          }),
      );

      setStatsNumbers(statsNumber);
      setLoadingStats(false);
    })();
  }, [name]);

  useEffect(() => {
    setLoadingFamily(true);
    (async () => {
      const pokemonsList = [];

      const {
        data: { chain },
      } = await api.get(`evolution-chain/${id}`);

      const family1 = chain.species.name;

      if (family1 !== name) {
        const pokeFamily1 = await getPokemon(family1);
        pokemonsList.push(pokeFamily1);
      }

      const family2 = chain.evolves_to.map(
        (res: FamilyProps) => res.species.name,
      );

      if (family2[0] !== name) {
        const pokeFamily2 = await getPokemon(family2[0]);
        pokemonsList.push(pokeFamily2);
      }

      const family3 = chain.evolves_to.map((res: FamilyProps) => {
        return res.evolves_to.map(res2 => res2.species.name)[0];
      });

      if (family3[0] !== name) {
        const pokeFamily3 = await getPokemon(family3[0]);
        pokemonsList.push(pokeFamily3);
      }

      setPokemons(pokemonsList);
      setLoadingFamily(false);
    })();
  }, [id, name]);

  return (
    <Container>
      <PokeProfile>
        <PokeNumber>{`# ${number}`}</PokeNumber>

        <Pokemon source={{ uri: image }} />

        <PokeStrong>{name}</PokeStrong>

        <PokeSize>
          <Size>
            <SizeNumber>{`${weight} KG`}</SizeNumber>
            <SizeText>Weight</SizeText>
          </Size>

          <Size>
            <SizeNumber>{`${height} M`}</SizeNumber>
            <SizeText>Height</SizeText>
          </Size>
        </PokeSize>

        <Stats>Stats</Stats>

        {loadingStats ? (
          <ActivityIndicator style={{ marginBottom: 10 }} color="#fff" />
        ) : (
          <FlatList
            data={statsNumbers}
            keyExtractor={stats => stats.name}
            renderItem={({ item: stats }) => (
              <ProgressBar title={stats.name} percentage={stats.base_stat} />
            )}
          />
        )}
      </PokeProfile>

      {loadingFamily ? (
        <ActivityIndicator
          size="large"
          style={{ marginTop: 20 }}
          color="#fff"
        />
      ) : (
        <FlatList
          data={pokemons}
          keyExtractor={pokemon => pokemon.name}
          numColumns={2}
          ListHeaderComponent={
            <Stats style={{ marginLeft: 8 }}>Family Tree</Stats>
          }
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
              poke_number={index + 2}
              poke_img={pokemon.image}
              poke_name={pokemon.name}
              poke_type={pokemon.typesPoke.map(type =>
                type.type.name.concat(', '),
              )}
            />
          )}
        />
      )}
    </Container>
  );
};

export default PokemonStats;
