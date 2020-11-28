import React from 'react';

import { Text } from 'react-native';

import { Container } from './styles';

interface RouteParams {
  route: {
    params: {
      name: string;
    };
  };
}

const PokemonStats: React.FC<RouteParams> = ({ route }) => {
  const { name } = route.params;

  return (
    <Container style={{ flex: 1 }}>
      <Text>{name}</Text>
    </Container>
  );
};

export default PokemonStats;
