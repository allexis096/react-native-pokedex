import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import ProgressBar from '../../components/ProgressBar';
import api from '../../services/api';

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

interface RouteParams {
  route: {
    params: {
      name: string;
      image: string;
      number: number;
      height: number;
      weight: number;
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

const PokemonStats: React.FC<RouteParams> = ({ route }) => {
  const { name, image, number, height, weight } = route.params;
  const [statsNumbers, setStatsNumbers] = useState<StatsNumbersProps[]>([]);

  useEffect(() => {
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
    })();
  }, [name]);

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

        <FlatList
          data={statsNumbers}
          keyExtractor={stats => stats.name}
          renderItem={({ item: stats }) => (
            <ProgressBar title={stats.name} percentage={stats.base_stat} />
          )}
        />
      </PokeProfile>
    </Container>
  );
};

export default PokemonStats;
